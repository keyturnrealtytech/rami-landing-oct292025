import { NextResponse } from "next/server"
import { createHash } from "crypto"

const META_DATASET_ID = "1541113180463878"

interface ContactPayload {
  fullName?: string
  phoneNumber?: string
  email?: string
  eventId?: string
  workingWithAgent?: string
  bedrooms?: string
  moveInTimeline?: string
  desiredArea?: string
  monthlyPayment?: string
  veteranStatus?: string
  financingStatus?: string
}

// Meta requires user data hashed with SHA-256 (lowercased/normalized first).
function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex")
}

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "")
  return digits.length === 10 ? "1" + digits : digits
}

export async function POST(req: Request) {
  let data: ContactPayload
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const fullName = data.fullName?.trim()
  const phoneNumber = data.phoneNumber?.trim()
  const email = data.email?.trim()
  const eventId = data.eventId

  if (!fullName || !phoneNumber) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 })
  }

  const [firstName, ...rest] = fullName.split(/\s+/)
  const lastName = rest.join(" ")

  // Qualifying answers — rendered into the FUB lead note and the email copy so Rami
  // sees them the moment the lead lands.
  const qualifiers: [string, string | undefined][] = [
    ["Working with an agent", data.workingWithAgent],
    ["Bedrooms", data.bedrooms],
    ["Move-in timeline", data.moveInTimeline],
    ["Desired area", data.desiredArea?.trim()],
    ["Max monthly payment", data.monthlyPayment],
    ["Veteran", data.veteranStatus],
    ["Financing", data.financingStatus],
  ]
  const qualifierLines = qualifiers
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
  const qualifierSummary = qualifierLines.length ? "\n\nQualifying answers:\n" + qualifierLines.join("\n") : ""

  // 1) Create the lead in Follow Up Boss (required)
  try {
    const fubRes = await fetch("https://api.followupboss.com/v1/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-System": process.env.FUB_X_SYSTEM ?? "",
        "X-System-Key": process.env.FUB_X_SYSTEM_KEY ?? "",
        Authorization: "Basic " + Buffer.from((process.env.FUB_API_KEY ?? "") + ":").toString("base64"),
      },
      body: JSON.stringify({
        source: "Key Turn Realty Website",
        type: "General Inquiry",
        message: `New contact form submission from ${fullName}.${qualifierSummary}`,
        person: {
          firstName: firstName || fullName,
          lastName,
          emails: email ? [{ value: email }] : [],
          phones: [{ value: phoneNumber }],
        },
      }),
    })

    if (!fubRes.ok) {
      console.error("FUB error", fubRes.status, await fubRes.text())
      return NextResponse.json({ error: "Could not submit. Please try again." }, { status: 502 })
    }
  } catch (err) {
    console.error("FUB request failed", err)
    return NextResponse.json({ error: "Could not submit. Please try again." }, { status: 502 })
  }

  // 2) Send the Lead event to Meta via the Conversions API (server-side, best-effort).
  // Uses the same eventId as the browser pixel so Meta de-duplicates them into one conversion.
  const capiToken = process.env.FB_CAPI_TOKEN
  if (capiToken) {
    try {
      const userData: Record<string, string[]> = {}
      if (email) userData.em = [sha256(email.toLowerCase())]
      if (phoneNumber) userData.ph = [sha256(normalizePhone(phoneNumber))]

      await fetch(`https://graph.facebook.com/v21.0/${META_DATASET_ID}/events?access_token=${capiToken}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1000),
              event_id: eventId,
              action_source: "website",
              event_source_url: "https://keyturnrealty.com",
              user_data: userData,
            },
          ],
        }),
      })
    } catch (err) {
      // CAPI is non-fatal — the lead is already in FUB.
      console.error("Meta CAPI send failed (non-fatal)", err)
    }
  }

  // 3) Email a copy (best-effort; activates automatically once RESEND_API_KEY is set)
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "leads@keyturnrealty.com",
          to: process.env.CONTACT_TO_EMAIL ?? "admin@keyturnrealty.com",
          subject: `New website lead: ${fullName}`,
          text: `Name: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email || "(not provided)"}${qualifierSummary}\n\nSource: keyturnrealty.com contact form`,
        }),
      })
    } catch (err) {
      // Email is non-fatal — the lead is already in FUB.
      console.error("Email send failed (non-fatal)", err)
    }
  }

  return NextResponse.json({ ok: true })
}
