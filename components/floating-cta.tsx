"use client"

import { useEffect, useState } from "react"
import { CalendlyLink } from "@/components/calendly-link"
import { CalendarCheck } from "lucide-react"

/**
 * Desktop-only floating "book a call" pill. Slides in once the visitor has
 * scrolled past the hero, so the primary CTA is always one click away.
 * (Mobile already has <MobileCtaBar />, so this is hidden below lg.)
 */
export function FloatingCta() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className={`floating-cta hidden lg:block fixed bottom-6 right-6 z-40 ${shown ? "is-shown" : ""}`}>
      <CalendlyLink className="flex items-center gap-2 rounded-full bg-[#15211f] text-white pl-5 pr-6 py-3.5 text-sm font-semibold shadow-[0_18px_40px_-12px_rgba(21,33,31,0.6)] hover:bg-[#1f6b63] transition-colors">
        <CalendarCheck className="h-4 w-4 text-[#81D8D0]" />
        Book a free call with Rami
      </CalendlyLink>
    </div>
  )
}
