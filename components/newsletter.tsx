"use client"

import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/contact-form-modal"

export function Newsletter() {
  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
              Ready to make San Antonio <span className="font-semibold">home?</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Tell Rami what you're looking for — it takes about a minute.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <ContactFormModal>
              <Button
                size="lg"
                className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base font-semibold"
              >
                Start My Home Search
              </Button>
            </ContactFormModal>
          </div>

          <p className="text-xs text-muted-foreground">
            No spam, no pressure — Rami reaches out personally.
          </p>
        </div>
      </div>
    </section>
  )
}
