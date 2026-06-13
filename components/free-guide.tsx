"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const GUIDE_PATH = "/guides/first-time-home-buyer-handbook.pdf"

export function FreeGuide() {
  const [fullName, setFullName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [state, setState] = React.useState<"idle" | "submitting" | "done" | "error">("idle")

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setState("error")
      return
    }
    setState("submitting")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestType: "guide", fullName, email }),
      })
      if (!res.ok) throw new Error("request failed")
      setState("done")
      // Open the handbook immediately — the gate already did its job.
      window.open(GUIDE_PATH, "_blank")
    } catch {
      setState("error")
    }
  }

  return (
    <section id="resources" className="py-32 bg-gradient-to-b from-[#eef7f5] to-[#faf8f4]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cover */}
          <div className="flex justify-center">
            <div className="relative w-64 md:w-72 rotate-[-2deg] rounded-xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(21,33,31,0.35)] border border-[#e8e4da]">
              <Image
                src="/guides/handbook-cover.jpg"
                alt="First-Time Home Buyer Mistakes handbook by Rami Rafeh, Key Turn Realty Group"
                width={480}
                height={678}
                sizes="(min-width: 768px) 288px, 256px"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Pitch + gate */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#1f6b63] font-semibold mb-3">
              Free Download
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">
              The First-Time Home Buyer <span className="font-semibold">Handbook</span>
            </h2>
            <p className="mt-4 text-lg text-[#5d6f6c] leading-relaxed">
              The mistakes Rami sees buyers make every week — pre-approval blunders, lender traps, earnest-money
              bait-and-switch, lease buyouts — written by Rami from 200+ closings. Free, instant, no phone number
              required.
            </p>

            {state === "done" ? (
              <div className="mt-7 rounded-2xl border border-[#dbe7e3] bg-white p-6">
                <div className="text-lg font-semibold text-[#1f6b63]">📖 It's all yours!</div>
                <p className="mt-1 text-sm text-[#5d6f6c]">
                  The handbook just opened in a new tab.{" "}
                  <a href={GUIDE_PATH} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1f6b63] underline">
                    Open it again
                  </a>{" "}
                  if it didn't.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-7 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    placeholder="First name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    aria-label="First name"
                    className="h-12 rounded-2xl border-2 border-[#cdeae6] bg-white text-base shadow-sm focus-visible:border-[#81D8D0] focus-visible:ring-4 focus-visible:ring-[#81D8D0]/20"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email"
                    className="h-12 rounded-2xl border-2 border-[#cdeae6] bg-white text-base shadow-sm focus-visible:border-[#81D8D0] focus-visible:ring-4 focus-visible:ring-[#81D8D0]/20"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={state === "submitting"}
                  className="h-12 w-full sm:w-auto rounded-full bg-[#15211f] px-8 text-white hover:bg-[#15211f]/90 text-base font-semibold shadow-[0_10px_28px_-10px_rgba(21,33,31,0.4)]"
                >
                  {state === "submitting" ? "Sending…" : "Send Me the Handbook"}
                </Button>
                {state === "error" && (
                  <p className="text-sm text-red-600">Enter your first name and a valid email, then try again.</p>
                )}
                <p className="text-[11px] text-[#8aa09c]">No spam — Rami may follow up personally, once.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
