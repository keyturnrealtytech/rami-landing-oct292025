import type React from "react"

const GOLD_STARS = "★★★★★"

// Stat: big gold numeral + small label. Mark: logo-style wordmark chip.
const ITEMS: (
  | { kind: "stat"; value: string; label: string }
  | { kind: "mark"; name: string; sub: string }
)[] = [
  { kind: "stat", value: "TOP 1.5%", label: "of Realtors Nationwide" },
  { kind: "mark", name: "REALTRENDS", sub: "VERIFIED ✓" },
  { kind: "stat", value: "TOP 1%", label: "in Texas" },
  { kind: "mark", name: "Google", sub: `${GOLD_STARS} 5.0` },
  { kind: "stat", value: "TOP 25", label: "U.S. Small Team by Units · Q4 2024" },
  { kind: "mark", name: "Zillow", sub: `${GOLD_STARS} 5.0` },
  { kind: "stat", value: "55+", label: "Deals Closed Last Year" },
  { kind: "mark", name: "realtor.com", sub: `${GOLD_STARS} 5.0` },
  { kind: "stat", value: "$50M+", label: "in Closed Deals" },
  { kind: "mark", name: "U.S. AIR FORCE", sub: "VETERAN ★" },
]

// Dark accomplishments band under the hero. Pure CSS marquee (see globals.css);
// content duplicated once so the -50% translate loops seamlessly.
export function AccomplishmentsStrip() {
  return (
    <div
      className="marquee overflow-hidden bg-[#0f1a18] border-y border-[#c9a227]/30"
      aria-label="Rami Rafeh's accomplishments"
      style={{ "--marquee-duration": "55s" } as React.CSSProperties}
    >
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {ITEMS.map((item, i) => (
              <div key={i} className="flex items-center">
                <div className="px-8 py-5 whitespace-nowrap">
                  {item.kind === "stat" ? (
                    <div className="text-center">
                      <div className="text-2xl font-semibold leading-none bg-gradient-to-r from-[#c9a227] to-[#e2cb7a] bg-clip-text text-transparent">
                        {item.value}
                      </div>
                      <div className="mt-1.5 text-[10px] tracking-[0.18em] uppercase text-[#9fb2af]">{item.label}</div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-[#2c3c3a] bg-[#15211f] px-5 py-2.5">
                      <div className="text-base font-bold tracking-wide text-[#f2f4f3] leading-none">{item.name}</div>
                      <div className="mt-1 text-[11px] tracking-[0.14em] text-[#c9a227]">{item.sub}</div>
                    </div>
                  )}
                </div>
                <span className="text-[#c9a227]/50 text-[9px]">◆</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
