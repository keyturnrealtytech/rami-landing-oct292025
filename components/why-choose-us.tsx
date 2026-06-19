import { ContactFormModal } from "@/components/contact-form-modal"
import { Button } from "@/components/ui/button"

const wins = [
  {
    value: "$0",
    title: "Down Payment",
    detail: "VA and first-time buyer programs that put veterans and new buyers in homes without draining savings.",
  },
  {
    value: "$0",
    title: "Closing Costs",
    detail: "Negotiated with builders deal after deal — money that stays in your pocket at the table.",
  },
  {
    value: "1.99%+",
    title: "Buydown Rates",
    detail: "Builder rate buydowns most buyers never hear about — recent clients locked 1.99%–3.99% fixed.",
  },
  {
    value: "FREE",
    title: "Appliances",
    detail: "Fridge, washer, and dryer thrown in — negotiated as part of the deal, not bought after.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#1f6b63] font-semibold mb-3">Why Rami</div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance text-[#15211f]">
            What clients <span className="font-semibold">actually got</span>
          </h2>
          <p className="text-lg text-[#5d6f6c] text-balance leading-relaxed">
            Not promises — terms from real closings. You saw the photo wall; these are the deals behind it.
          </p>
        </div>

        {/* Outcome cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wins.map((win) => (
            <div
              key={win.title}
              className="rounded-2xl border border-[#e8e4da] bg-white p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl font-semibold tracking-tight bg-gradient-to-r from-[#1f6b63] to-[#15211f] bg-clip-text text-transparent">
                {win.value}
              </div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#c9a227]">{win.title}</div>
              <div className="mt-4 h-px w-10 mx-auto bg-[#e8e4da]" />
              <p className="mt-4 text-sm text-[#5d6f6c] leading-relaxed">{win.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#5f736f]">
          Examples from actual 2025–2026 closings. Terms vary by builder, lender, and buyer qualification.
        </p>

        {/* CTA */}
        <div className="text-center mt-12">
          <ContactFormModal>
            <Button
              size="lg"
              className="w-full max-w-md h-12 bg-[#15211f] text-white hover:bg-[#15211f]/90 rounded-full text-base font-semibold shadow-[0_10px_28px_-10px_rgba(21,33,31,0.4)]"
            >
              See What I Qualify For
            </Button>
          </ContactFormModal>
        </div>
      </div>
    </section>
  )
}
