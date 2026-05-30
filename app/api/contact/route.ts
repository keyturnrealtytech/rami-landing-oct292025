import { NextResponse } from "next/server"

interface ContactPayload {
  fullName?: string
  phoneNumber?: string
  email?: string
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

  if (!fullName || !phoneNumber) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 })
  }

  const [firstName, ...rest] = fullName.split(/\s+/)
  const lastName = rest.join(" ")

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
        message: `New contact form submission from ${fullName}.`,
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

  // 2) Email a copy (best-effort; activates automatically once RESEND_API_KEY is set)
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
          text: `Name: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email || "(not provided)"}\n\nSource: keyturnrealty.com contact form`,
        }),
      })
    } catch (err) {
      // Email is non-fatal — the lead is already in FUB.
      console.error("Email send failed (non-fatal)", err)
    }
  }

  return NextResponse.json({ ok: true })
}
