import { NextResponse } from "next/server"
import { createHash } from "crypto"

const META_DATASET_ID = "1541113180463878"

interface ContactPayload {
  fullName?: string
  phoneNumber?: string
  email?: string
  requestType?: string
  eventId?: string
  fbp?: string
  fbc?: string
  creditScore?: string
  bedrooms?: string
  moveInTimeline?: string
  desiredArea?: string
  monthlyPayment?: string
  veteranStatus?: string
  additionalInfo?: string
}

// Fixed-window rate limit per IP. Module-level state is per serverless instance,
// which is enough to blunt a spam flood at this traffic level.
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000
const rateBuckets = new Map<string, { count: number; windowStart: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const bucket = rateBuckets.get(ip)
  if (!bucket || now - bucket.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateBuckets.set(ip, { count: 1, windowStart: now })
    return false
  }
  bucket.count++
  return bucket.count > RATE_LIMIT_MAX
}

// Collapse newlines/control chars and cap length so user text can't inject
// fake qualifier lines into the FUB note or notification email.
function clean(value: string | undefined, max = 1000): string | undefined {
  const cleaned = value?.replace(/[\r\n\t]+/g, " ").replace(/[\x00-\x1f\x7f]/g, "").trim().slice(0, max)
  return cleaned || undefined
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
  const clientIpForLimit = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown"
  if (isRateLimited(clientIpForLimit)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
  }

  let data: ContactPayload
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const fullName = clean(data.fullName, 200)
  const phoneNumber = clean(data.phoneNumber, 40)
  const email = clean(data.email, 200)
  const eventId = data.eventId
  const isGuideRequest = data.requestType === "guide"

  if (isGuideRequest) {
    if (!fullName || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 })
    }
  } else if (!fullName || !phoneNumber) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 })
  }

  const [firstName, ...rest] = fullName.split(/\s+/)
  const lastName = rest.join(" ")

  // Qualifying answers — rendered into the FUB lead note and the email copy so Rami
  // sees them the moment the lead lands.
  const qualifiers: [string, string | undefined][] = [
    ["Credit score", clean(data.creditScore, 10)],
    ["Bedrooms", clean(data.bedrooms, 30)],
    ["Move-in timeline", clean(data.moveInTimeline, 50)],
    ["Desired area", clean(data.desiredArea, 200)],
    ["Max monthly payment", clean(data.monthlyPayment, 30)],
    ["Veteran", clean(data.veteranStatus, 30)],
  ]
  const qualifierLines = qualifiers
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
  const qualifierSummary = qualifierLines.length ? "\n\nQualifying answers:\n" + qualifierLines.join("\n") : ""
  const note = clean(data.additionalInfo)
  const noteSummary = note ? `\n\nFrom them:\n${note}` : ""

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
        message: isGuideRequest
          ? `${fullName} downloaded the First-Time Home Buyer Handbook from the website.`
          : `New contact form submission from ${fullName}.${qualifierSummary}${noteSummary}`,
        person: {
          firstName: firstName || fullName,
          lastName,
          emails: email ? [{ value: email }] : [],
          phones: phoneNumber ? [{ value: phoneNumber }] : [],
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
      // Hashed keys (em/ph/fn/ln) and unhashed browser signals (fbp/fbc/IP/UA).
      // More keys + higher coverage = higher Event Match Quality.
      const userData: Record<string, string | string[]> = {}
      if (email) userData.em = [sha256(email.toLowerCase())]
      if (phoneNumber) userData.ph = [sha256(normalizePhone(phoneNumber))]
      if (firstName) userData.fn = [sha256(firstName.toLowerCase())]
      if (lastName) userData.ln = [sha256(lastName.toLowerCase())]
      if (data.fbp) userData.fbp = data.fbp
      if (data.fbc) userData.fbc = data.fbc
      const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0].trim()
      const clientUa = req.headers.get("user-agent")
      if (clientIp) userData.client_ip_address = clientIp
      if (clientUa) userData.client_user_agent = clientUa

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
          subject: isGuideRequest ? `New guide download: ${fullName}` : `New website lead: ${fullName}`,
          text: isGuideRequest
            ? `Name: ${fullName}\nEmail: ${email}\nDownloaded: First-Time Home Buyer Handbook\n\nSource: keyturnrealty.com free resources`
            : `Name: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email || "(not provided)"}${qualifierSummary}${noteSummary}\n\nSource: keyturnrealty.com contact form`,
        }),
      })
    } catch (err) {
      // Email is non-fatal — the lead is already in FUB.
      console.error("Email send failed (non-fatal)", err)
    }
  }

  return NextResponse.json({ ok: true })
}
