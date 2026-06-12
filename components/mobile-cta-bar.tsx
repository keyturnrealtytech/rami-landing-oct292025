"use client"

import { useState, useEffect } from "react"
import { Phone } from "lucide-react"
import { ContactFormModal } from "@/components/contact-form-modal"

// Slim bottom action bar for phones — appears once the visitor scrolls past the hero.
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex gap-3 border-t border-border bg-white/95 backdrop-blur-xl px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <a
        href="tel:+17134409407"
        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-[#81D8D0] text-base font-semibold text-foreground"
      >
        <Phone size={18} />
        Call Rami
      </a>
      <ContactFormModal>
        <button className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#81D8D0] text-base font-bold text-[#0b3b37]">
          Get Started
        </button>
      </ContactFormModal>
    </div>
  )
}
