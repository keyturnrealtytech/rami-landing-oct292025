import type React from "react"

const ITEMS = [
  "Top 1.5% of Realtors Nationwide",
  "Top 1% in Texas",
  "RealTrends Verified ✓",
  "Top 25 U.S. Small Team by Units · Q4 2024",
  "55+ Deals Closed Last Year",
  "$50M+ in Closed Deals",
  "5.0 ★ Google · Zillow · Realtor.com",
  "U.S. Air Force Veteran",
  "VA Loan Specialist",
]

// Thin dark marquee under the hero. Pure CSS animation (see globals.css);
// content is duplicated once so the -50% translate loops seamlessly.
export function AccomplishmentsStrip() {
  return (
    <div
      className="marquee overflow-hidden bg-[#0f1a18] border-y border-[#c9a227]/30"
      aria-label="Rami Rafeh's accomplishments"
    >
      <div className="marquee-track" style={{ "--marquee-duration": "45s" } as React.CSSProperties}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex" aria-hidden={dup === 1}>
            {ITEMS.map((item) => (
              <span
                key={item}
                className="flex items-center gap-5 px-6 py-4 text-[13px] font-medium tracking-[0.08em] uppercase whitespace-nowrap text-[#e8ece9]"
              >
                {item}
                <span className="text-[#c9a227] text-[9px]">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
