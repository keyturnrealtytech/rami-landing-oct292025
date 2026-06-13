"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/contact-form-modal"

type Answers = {
  served?: "yes" | "no"
  status?: "active" | "retired" | "separated" | "guard"
  rating?: "none" | "10-90" | "100"
  usedBefore?: "yes" | "no"
}

const QUESTIONS: {
  key: keyof Answers
  title: string
  options: { value: string; label: string }[]
}[] = [
  {
    key: "served",
    title: "Have you served in the U.S. military?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    key: "status",
    title: "What's your current status?",
    options: [
      { value: "active", label: "Active duty" },
      { value: "retired", label: "Retired" },
      { value: "separated", label: "Separated / veteran" },
      { value: "guard", label: "Guard / Reserve" },
    ],
  },
  {
    key: "rating",
    title: "VA disability rating?",
    options: [
      { value: "none", label: "None" },
      { value: "10-90", label: "10–90%" },
      { value: "100", label: "100%" },
    ],
  },
  {
    key: "usedBefore",
    title: "Used a VA loan before?",
    options: [
      { value: "no", label: "No — first time" },
      { value: "yes", label: "Yes" },
    ],
  },
]

function buildResult(a: Answers): { headline: string; points: string[]; veteranStatus: string } {
  const points = [
    "Likely eligible for $0 down — no down payment required on a VA loan",
    "No PMI — VA loans never charge private mortgage insurance",
  ]
  if (a.rating === "100" || a.rating === "10-90") {
    points.push("VA funding fee likely WAIVED with a service-connected disability rating — typically saves thousands")
  }
  if (a.usedBefore === "yes") {
    points.push("Used your VA loan before? Remaining entitlement may still support another purchase — even a second home before selling the first")
  } else {
    points.push("First use — full entitlement available, which maximizes your buying power in San Antonio")
  }
  if (a.status === "active") {
    points.push("PCSing to a San Antonio base? Rami is a Military Relocation Professional — this move is his specialty")
  }
  const veteranStatus = a.rating === "100" ? "Yes - 100% disabled" : "Yes"
  return { headline: "Good news — you likely qualify.", points, veteranStatus }
}

export function VaChecker() {
  const [answers, setAnswers] = React.useState<Answers>({})
  const [step, setStep] = React.useState(0)

  const served = answers.served
  const done = served === "no" || step >= QUESTIONS.length
  const q = QUESTIONS[step]

  const pick = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value as never }))
    setStep((s) => s + 1)
  }

  const restart = () => {
    setAnswers({})
    setStep(0)
  }

  const result = served === "yes" && done ? buildResult(answers) : null

  return (
    <div className="rounded-3xl border border-[#e8e4da] bg-white p-8 shadow-sm flex flex-col">
      <h3 className="text-2xl font-semibold tracking-tight text-[#15211f]">VA benefit check</h3>
      <p className="mt-1 text-sm text-[#5d6f6c]">Four taps — see what your service unlocks.</p>

      <div className="mt-7 flex-1">
        {!done && q && (
          <div>
            <div className="flex gap-1.5 mb-5">
              {QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-[#81D8D0]" : "bg-[#e6efee]"}`}
                />
              ))}
            </div>
            <div className="text-lg font-semibold text-[#15211f] mb-4">{q.title}</div>
            <div className="grid gap-3">
              {q.options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => pick(q.key, opt.value)}
                  className="rounded-2xl border-2 border-[#e6efee] px-5 py-3.5 text-left text-sm font-medium text-[#15211f] hover:border-[#81D8D0] hover:bg-[#81D8D0]/10 transition-all"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {served === "no" && (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">🏡</div>
            <div className="text-lg font-semibold text-[#15211f]">No VA loan — but you still have options.</div>
            <p className="mt-2 text-sm text-[#5d6f6c] leading-relaxed">
              First-time buyer programs, builder incentives, and rate buydowns work without military service. Rami's
              recent clients used them for $0-closing-cost deals.
            </p>
            <ContactFormModal>
              <Button className="mt-5 h-12 w-full rounded-full bg-[#15211f] text-white hover:bg-[#15211f]/90 text-base font-semibold">
                See What I Qualify For
              </Button>
            </ContactFormModal>
            <button type="button" onClick={restart} className="mt-3 text-xs text-[#8aa09c] underline">
              Start over
            </button>
          </div>
        )}

        {result && (
          <div>
            <div className="rounded-2xl bg-gradient-to-b from-[#eef7f5] to-[#faf8f4] border border-[#dbe7e3] p-5">
              <div className="text-lg font-semibold text-[#1f6b63]">{result.headline}</div>
              <ul className="mt-3 space-y-2.5">
                {result.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-[#3d4f4c] leading-snug">
                    <span className="text-[#1f6b63] font-bold">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <ContactFormModal prefill={{ veteranStatus: result.veteranStatus }}>
              <Button className="mt-5 h-12 w-full rounded-full bg-[#15211f] text-white hover:bg-[#15211f]/90 text-base font-semibold shadow-[0_10px_28px_-10px_rgba(21,33,31,0.4)]">
                Confirm My Eligibility With Rami
              </Button>
            </ContactFormModal>
            <button type="button" onClick={restart} className="mt-3 w-full text-center text-xs text-[#8aa09c] underline">
              Start over
            </button>
          </div>
        )}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-[#8aa09c] text-center">
        Educational estimate based on public VA guidelines — final eligibility is determined by your Certificate of
        Eligibility and lender.
      </p>
    </div>
  )
}
