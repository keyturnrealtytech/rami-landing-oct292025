"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/contact-form-modal"

// Bexar-area rough estimates — clearly labeled as estimates in the UI.
const PROPERTY_TAX_RATE = 0.022 // annual, % of price
const INSURANCE_MONTHLY = 150
const TERM_YEARS = 30
const MARKET_RATE = 6.9
const BUYDOWN_RATE = 3.99 // conservative end of recent client buydowns (1.99%–3.99%)

function monthlyPayment(price: number, downPct: number, ratePct: number): number {
  const principal = price * (1 - downPct / 100)
  const r = ratePct / 100 / 12
  const n = TERM_YEARS * 12
  const pi = (principal * r) / (1 - Math.pow(1 + r, -n))
  return pi + (price * PROPERTY_TAX_RATE) / 12 + INSURANCE_MONTHLY
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

// Map the computed payment into the contact form's payment buckets.
function paymentBucket(monthly: number): string {
  if (monthly < 2300) return "$1,800-$2,300"
  if (monthly < 2500) return "$2,300-$2,500"
  if (monthly < 3000) return "$2,500-$3,000"
  return "$3,000+"
}

const SLIDER_CLASS =
  "w-full h-2 rounded-full appearance-none cursor-pointer bg-[#e6efee] accent-[#1f6b63]"

export function PaymentCalculator() {
  const [price, setPrice] = React.useState(330000)
  const [downPct, setDownPct] = React.useState(0)
  const [withBuydown, setWithBuydown] = React.useState(true)

  const market = monthlyPayment(price, downPct, MARKET_RATE)
  const buydown = monthlyPayment(price, downPct, BUYDOWN_RATE)
  const shown = withBuydown ? buydown : market
  const savings = market - buydown

  return (
    <div className="rounded-3xl border border-[#e8e4da] bg-white p-8 shadow-sm flex flex-col">
      <h3 className="text-2xl font-semibold tracking-tight text-[#15211f]">What would your payment be?</h3>
      <p className="mt-1 text-sm text-[#5d6f6c]">Drag the sliders — see it live.</p>

      <div className="mt-7 space-y-6 flex-1">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-[#15211f]">Home price</span>
            <span className="font-semibold text-[#1f6b63]">{fmt(price)}</span>
          </div>
          <input
            type="range" min={200000} max={600000} step={5000} value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className={SLIDER_CLASS} aria-label="Home price"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-[#15211f]">Down payment</span>
            <span className="font-semibold text-[#1f6b63]">
              {downPct}% · {fmt((price * downPct) / 100)}
            </span>
          </div>
          <input
            type="range" min={0} max={20} step={1} value={downPct}
            onChange={(e) => setDownPct(Number(e.target.value))}
            className={SLIDER_CLASS} aria-label="Down payment percent"
          />
          <button
            type="button"
            onClick={() => setDownPct(0)}
            className={`mt-2 text-xs font-semibold rounded-full px-3 py-1 border transition-colors ${
              downPct === 0
                ? "border-[#81D8D0] bg-[#81D8D0]/15 text-[#1f6b63]"
                : "border-[#e6efee] text-[#5d6f6c] hover:border-[#81D8D0]/60"
            }`}
          >
            $0 down (VA)
          </button>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-[#e6efee] px-4 py-3">
          <div>
            <div className="text-sm font-medium text-[#15211f]">Builder rate buydown</div>
            <div className="text-xs text-[#8aa09c]">recent clients locked 1.99%–3.99%</div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={withBuydown}
            onClick={() => setWithBuydown((v) => !v)}
            className={`relative h-7 w-12 rounded-full transition-colors ${withBuydown ? "bg-[#81D8D0]" : "bg-[#e6efee]"}`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${withBuydown ? "left-6" : "left-1"}`}
            />
          </button>
        </div>

        <div className="rounded-2xl bg-gradient-to-b from-[#eef7f5] to-[#faf8f4] border border-[#dbe7e3] p-6 text-center">
          <div className="text-xs uppercase tracking-[0.18em] text-[#8aa09c]">
            Estimated monthly · {withBuydown ? `${BUYDOWN_RATE}% buydown` : `${MARKET_RATE}% market rate`}
          </div>
          <div className="mt-2 text-5xl font-semibold tracking-tight bg-gradient-to-r from-[#1f6b63] to-[#15211f] bg-clip-text text-transparent">
            {fmt(shown)}
          </div>
          {withBuydown && (
            <div className="mt-2 text-sm font-semibold text-[#1f6b63]">{fmt(savings)}/mo less than market rate</div>
          )}
        </div>
      </div>

      <ContactFormModal prefill={{ monthlyPayment: paymentBucket(shown) }}>
        <Button className="mt-6 h-12 w-full rounded-full bg-[#15211f] text-white hover:bg-[#15211f]/90 text-base font-semibold shadow-[0_10px_28px_-10px_rgba(21,33,31,0.4)]">
          Get My Real Numbers
        </Button>
      </ContactFormModal>
      <p className="mt-3 text-[11px] leading-relaxed text-[#8aa09c] text-center">
        Estimates only (30-yr fixed, ~2.2% property tax, typical insurance) — not a loan offer or quote. Buydown
        availability varies by builder, lender &amp; qualification.
      </p>
    </div>
  )
}
