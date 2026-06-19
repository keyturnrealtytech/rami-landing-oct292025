import type React from "react"

const GOLD_STARS = "★★★★★"

// Stat: big gold numeral + label. Logo: official mark on a white chip
// (heights normalized to 80px source, displayed at h-7/h-8). Text: styled chip
// for credentials without a fetchable official mark.
const ITEMS: (
  | { kind: "stat"; value: string; label: string }
  | { kind: "logo"; src: string; alt: string; sub?: string; wide?: boolean; w: number; h: number }
  | { kind: "text"; name: string; sub: string }
)[] = [
  { kind: "stat", value: "TOP 1.5%", label: "of Realtors Nationwide" },
  { kind: "logo", src: "/logos/realtrends.png", alt: "RealTrends Verified", wide: true, w: 239, h: 80 },
  { kind: "stat", value: "TOP 1%", label: "in Texas" },
  { kind: "logo", src: "/logos/google.png", alt: "Google reviews", sub: `${GOLD_STARS} 5.0`, w: 242, h: 80 },
  { kind: "stat", value: "TOP 25", label: "U.S. Small Team by Units · Q4 2024" },
  { kind: "logo", src: "/logos/nar.png", alt: "National Association of REALTORS member", wide: true, w: 326, h: 80 },
  { kind: "stat", value: "55+", label: "Deals Closed Last Year" },
  { kind: "logo", src: "/logos/zillow.png", alt: "Zillow reviews", sub: `${GOLD_STARS} 5.0`, w: 359, h: 80 },
  { kind: "stat", value: "$50M+", label: "in Closed Deals" },
  { kind: "logo", src: "/logos/texas-realtors.png", alt: "Texas REALTORS member", wide: true, w: 277, h: 80 },
  { kind: "text", name: "MRP", sub: "MILITARY RELOCATION PROFESSIONAL" },
  { kind: "logo", src: "/logos/realtorcom.png", alt: "Realtor.com reviews", sub: `${GOLD_STARS} 5.0`, wide: true, w: 443, h: 80 },
  { kind: "logo", src: "/logos/sabor.png", alt: "San Antonio Board of REALTORS member", w: 160, h: 80 },
  { kind: "logo", src: "/logos/har.png", alt: "Houston Association of REALTORS member", w: 80, h: 80 },
  { kind: "text", name: "U.S. AIR FORCE", sub: "VETERAN ★" },
]

// Dark accomplishments band under the hero. Pure CSS marquee (see globals.css);
// content duplicated once so the -50% translate loops seamlessly.
export function AccomplishmentsStrip() {
  return (
    <div
      className="marquee overflow-hidden bg-[#0f1a18] border-y border-[#c9a227]/30"
      role="group"
      aria-label="Rami Rafeh's accomplishments and memberships"
      style={{ "--marquee-duration": "110s" } as React.CSSProperties}
    >
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {ITEMS.map((item, i) => (
              <div key={i} className="flex items-center">
                <div className="px-9 py-7 whitespace-nowrap">
                  {item.kind === "stat" ? (
                    <div className="text-center">
                      <div className="text-3xl font-semibold leading-none bg-gradient-to-r from-[#c9a227] to-[#e2cb7a] bg-clip-text text-transparent">
                        {item.value}
                      </div>
                      <div className="mt-2 text-[11px] tracking-[0.18em] uppercase text-[#9fb2af]">{item.label}</div>
                    </div>
                  ) : item.kind === "logo" ? (
                    <div className="flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white px-5 py-2.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.src} alt={item.alt} width={item.w} height={item.h} className={item.wide ? "h-7 w-auto" : "h-8 w-auto"} loading="lazy" />
                      {item.sub && <div className="text-[11px] tracking-[0.14em] text-[#7a610f] leading-none">{item.sub}</div>}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-[#2c3c3a] bg-[#15211f] px-6 py-3">
                      <div className="text-lg font-bold tracking-wide text-[#f2f4f3] leading-none">{item.name}</div>
                      <div className="mt-1.5 text-[11px] tracking-[0.14em] text-[#c9a227]">{item.sub}</div>
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
