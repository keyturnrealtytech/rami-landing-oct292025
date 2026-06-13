"use client"

import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/contact-form-modal"

export function Newsletter() {
  return (
    <section className="py-32 bg-[#0f1a18]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#81D8D0] font-semibold">Let&apos;s Talk</div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#f2f4f3]">
              Ready to make San Antonio <span className="font-semibold text-[#81D8D0]">home?</span>
            </h2>
            <p className="text-lg text-[#9fb2af] text-balance">
              Tell Rami what you're looking for — it takes about a minute.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <ContactFormModal>
              <Button
                size="lg"
                className="w-full h-12 bg-[#81D8D0] text-[#0f1a18] hover:bg-[#74cdc5] rounded-full text-base font-semibold shadow-[0_12px_36px_-10px_rgba(129,216,208,0.4)]"
              >
                Start My Home Search
              </Button>
            </ContactFormModal>
          </div>

          <p className="text-xs text-[#67807c]">No spam, no pressure — Rami reaches out personally.</p>
        </div>
      </div>
    </section>
  )
}
