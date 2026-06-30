import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

// Homepage section linking out to the dedicated buyer guides so clients (and
// search engines) can reach them from the main page.
const GUIDES = [
  {
    href: "/first-time-home-buyer-san-antonio",
    img: "/first-home-living.jpg",
    label: "First-time buyers",
    title: "Buying your first home",
    blurb: "Less down than you think, plain-English guidance, zero pressure.",
  },
  {
    href: "/va-loan-new-construction-san-antonio",
    img: "/new-home-hero.jpg",
    label: "Veterans & new construction",
    title: "VA loan + new construction",
    blurb: "$0 down, builder perks negotiated for you, from a disabled veteran.",
  },
]

export function BuyerGuides() {
  return (
    <section className="py-32 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#1f6b63] font-semibold mb-3">
            Helpful guides
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance text-[#15211f]">
            Where are you <span className="font-semibold">starting?</span>
          </h2>
          <p className="text-lg text-[#5d6f6c] text-balance leading-relaxed">
            Pick the guide that fits you — written in plain English, no jargon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group relative overflow-hidden rounded-3xl border border-[#e8e4da] min-h-[340px] flex items-end shadow-[0_18px_50px_-26px_rgba(21,33,31,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(21,33,31,0.5)]"
            >
              <Image
                src={g.img}
                alt={g.title}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1413] via-[#0b1413]/55 to-[#0b1413]/10" />
              <div className="relative p-8 space-y-2">
                <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#81D8D0]">{g.label}</div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">{g.title}</h3>
                <p className="text-[#e6ece9] max-w-sm leading-relaxed">{g.blurb}</p>
                <span className="inline-flex items-center gap-2 text-[#81D8D0] font-semibold pt-1">
                  Read the guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
