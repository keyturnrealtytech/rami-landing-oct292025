import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { Reviews } from "@/components/reviews"
import { Button } from "@/components/ui/button"
import { CalendlyLink } from "@/components/calendly-link"
import { ContactFormModal } from "@/components/contact-form-modal"
import { Reveal } from "@/components/reveal"
import { CountUp } from "@/components/count-up"
import { VaFaq } from "@/components/va-faq"
import { FloatingCta } from "@/components/floating-cta"
import { Check, ShieldCheck, HandCoins, Landmark, Trophy, Star, Quote, Medal, BadgeCheck } from "lucide-react"

const PAGE_URL = "https://keyturnrealty.com/va-home-loans-san-antonio"
const TITLE = "VA Home Loans in San Antonio | $0 Down | Key Turn Realty"
const DESCRIPTION =
  "Buy a San Antonio home with your VA loan — $0 down, no PMI, with a 100% disabled Air Force & Army veteran realtor in your corner. New or resale. Free chat."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/va-home-loans-san-antonio" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Key Turn Realty Group",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "VA Home Loans in San Antonio — Key Turn Realty Group" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.png"] },
}

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much do I need down for a VA loan?",
    a: "Nothing. A VA loan lets eligible veterans and service members buy with $0 down and no monthly mortgage insurance — two of the biggest reasons the VA loan beats almost every other option. On most San Antonio homes that means you're mainly bringing your earnest money and inspection costs.",
  },
  {
    q: "I'm a disabled veteran — what extra benefits do I get?",
    a: "Two big ones. If you receive VA disability pay, you're exempt from the VA funding fee, which saves thousands at closing. And in Texas, veterans rated 100% disabled can have their homestead property taxes wiped out entirely. I'm a 100% disabled Air Force and Army veteran myself, so I make sure you claim every benefit you've earned.",
  },
  {
    q: "Can I use my VA loan more than once?",
    a: "Usually, yes. Your VA benefit is reusable — once you pay off or sell, your entitlement is typically restored, and in some cases you can even have two VA loans at once. I'll connect you with a VA-savvy lender who confirms exactly what your entitlement looks like.",
  },
  {
    q: "Why do people say VA offers get rejected — and how do you win?",
    a: "Some sellers wrongly think VA offers are slow or picky, so they favor cash or conventional. That's where I earn my keep: I write your offer to look strong, coach the listing agent through the VA process, and lean on new-construction builders (who love VA buyers) so your offer wins. A VA offer done right competes just fine.",
  },
  {
    q: "Can I use a VA loan on new construction?",
    a: "Yes — as long as the builder and community are set up for VA, and most big San Antonio builders are. I confirm it before you sign. If you're leaning toward a brand-new home, see my new construction guide for the full builder-incentive playbook.",
  },
  {
    q: "Who qualifies for a VA loan?",
    a: "Most veterans, active-duty service members, National Guard and Reserve members with enough service, and many surviving spouses. The quickest way to know for sure is a short conversation — I'll point you to a lender who pulls your Certificate of Eligibility, often in minutes.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL, name: TITLE, description: DESCRIPTION, isPartOf: { "@id": "https://keyturnrealty.com/#website" }, about: { "@id": "https://keyturnrealty.com/#agent" }, inLanguage: "en-US" },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "VA Home Loan Buyer Representation in San Antonio",
      serviceType: "VA loan real estate representation",
      description:
        "Buyer's-agent representation for veterans and active-duty service members using a VA loan to buy homes in San Antonio — $0 down, funding-fee and property-tax guidance for disabled veterans, and VA-offer strategy, in plain English.",
      provider: { "@id": "https://keyturnrealty.com/#agent" },
      areaServed: [
        { "@type": "City", name: "San Antonio, TX" },
        { "@type": "City", name: "Boerne, TX" },
        { "@type": "City", name: "New Braunfels, TX" },
        { "@type": "City", name: "Schertz, TX" },
        { "@type": "City", name: "Cibolo, TX" },
        { "@type": "City", name: "Universal City, TX" },
        { "@type": "AdministrativeArea", name: "Bexar County, TX" },
        { "@type": "AdministrativeArea", name: "Comal County, TX" },
        { "@type": "AdministrativeArea", name: "Guadalupe County, TX" },
        { "@type": "AdministrativeArea", name: "Kendall County, TX" },
      ],
    },
    { "@type": "BreadcrumbList", "@id": `${PAGE_URL}#breadcrumb`, itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://keyturnrealty.com/" }, { "@type": "ListItem", position: 2, name: "VA Home Loans in San Antonio", item: PAGE_URL } ] },
    { "@type": "FAQPage", "@id": `${PAGE_URL}#faq`, mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <div className={`text-[11px] uppercase tracking-[0.22em] font-semibold ${dark ? "text-[#81D8D0]" : "text-[#1f6b63]"}`}>{children}</div>
}

const BENEFITS = [
  ["$0 down payment", "Eligible veterans and service members buy with no down payment — new home or resale."],
  ["No monthly PMI", "VA loans never charge private mortgage insurance, so your monthly payment stays lower than an FHA or low-down conventional loan."],
  ["Funding fee waived if disabled", "Get VA disability pay? You skip the VA funding fee completely — thousands saved at closing."],
  ["Texas property-tax breaks", "Disabled Texas veterans get property-tax exemptions — and 100%-rated veterans can owe $0 in property tax on their home."],
  ["A benefit you can reuse", "Your VA entitlement isn't one-and-done — once restored, you can use it again on your next home."],
  ["Competitive rates", "VA loans often come with lower rates than conventional — one more way your payment stays affordable."],
]

const WINS = [
  [Trophy, "I make your VA offer win", "Some sellers wrongly shy away from VA offers. I write yours to look strong and coach the other side through the process so you don't lose the home to a cash buyer."],
  [HandCoins, "I get closing costs covered", "Between motivated sellers and new-construction builders who love VA buyers, I regularly get your closing costs paid — so your out-of-pocket stays tiny."],
  [Landmark, "I protect your disabled-vet benefits", "Funding-fee exemption, the Texas property-tax break — I make sure nothing you've earned slips through the cracks at closing."],
  [ShieldCheck, "I've been in your boots", "I'm a 100% disabled Air Force and Army veteran. I've used the VA loan myself, so I know the process cold — not from a brochure."],
] as const

const STEPS = [
  ["1", "We talk — free", "A relaxed, no-pressure conversation about what you want and your timeline."],
  ["2", "Get your COE & pre-approval", "I point you to a VA-savvy lender who pulls your Certificate of Eligibility and gets you pre-approved — often fast."],
  ["3", "We find your home", "New build or resale, I line up showings and write an offer built to win."],
  ["4", "You get the keys", "I manage the VA appraisal, inspection, and closing so nothing stalls."],
]

export default function VAHomeLoansPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <Image src="/va-loans-hero.jpg" alt="A Texas suburban home under a big blue sky — buy in San Antonio with a VA loan" fill sizes="100vw" className="object-cover hero-kenburns" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1413] via-[#0b1413]/70 to-[#0b1413]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1413]/60 to-transparent" />
        <div className="hidden lg:flex flex-col gap-4 absolute right-10 top-1/3 z-10">
          {[["$0", "down payment"], ["$0", "monthly PMI"], ["$0", "funding fee (disabled)"]].map(([big, small], i) => (
            <div key={small} className="float-bob rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 shadow-xl" style={{ animationDelay: `${i * 0.6}s` }}>
              <div className="text-2xl font-semibold text-[#81D8D0] leading-none">{big}</div>
              <div className="text-xs text-white/80 mt-1">{small}</div>
            </div>
          ))}
        </div>
        <div className="scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-white/70">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-36 w-full">
          <Reveal className="max-w-2xl space-y-6">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#81D8D0]">VA home loans · San Antonio</div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-balance text-white drop-shadow-sm">
              Buy in San Antonio with <span className="font-semibold text-[#81D8D0]">$0 down</span>
            </h1>
            <p className="text-lg md:text-xl text-[#e6ece9] leading-relaxed max-w-xl">
              Your VA loan is one of the best benefits you earned — no down payment, no PMI, and real savings for
              disabled veterans. I'm Rami, a 100% disabled Air Force and Army veteran and San Antonio realtor. I'll make
              sure you use every bit of it — on a new build or a resale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button asChild size="lg" className="bg-[#81D8D0] text-[#0f1a18] hover:bg-[#74cdc5] rounded-full px-8 h-14 text-base font-semibold shadow-[0_12px_36px_-10px_rgba(129,216,208,0.5)] transition-transform hover:-translate-y-0.5">
                <CalendlyLink>Talk to Rami — it's free</CalendlyLink>
              </Button>
              <ContactFormModal>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-white/30 text-white hover:bg-white/10 bg-transparent">Ask a quick question</Button>
              </ContactFormModal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat band */}
      <section className="bg-[#15211f]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[<>$0</>, <>$0</>, <CountUp key="c1" value={100} suffix="%" />, <CountUp key="c2" value={5} decimals={1} suffix=" ★" />].map((node, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="text-4xl md:text-5xl font-light text-[#81D8D0]">{node}</div>
              <div className="text-sm text-[#9fb2af] mt-2 leading-snug">{["down payment", "monthly mortgage insurance", "disabled-veteran owned", "client rating"][i]}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Credentials bar */}
      <section className="bg-white border-b border-[#eef0ec]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#5d6f6c]">
          {[[Medal, "U.S. Air Force & Army Veteran · 100% Disabled"], [BadgeCheck, "Military Relocation Professional (MRP)"], [ShieldCheck, "Real Broker · TREC #724566"], [Star, "5.0★ on Google, Zillow & Realtor.com"]].map(([Icon, label]) => {
            const I = Icon as typeof Medal
            return <span key={label as string} className="inline-flex items-center gap-2 font-medium"><I className="h-4 w-4 text-[#1f6b63]" />{label as string}</span>
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Eyebrow>The benefit you earned</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">Why the <span className="font-semibold">VA loan</span> is so good</h2>
            <p className="text-lg text-[#5d6f6c] leading-relaxed">In plain English — and what it means for your wallet.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {BENEFITS.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 2) * 90}>
                <div className="h-full rounded-2xl border border-[#e8e4da] bg-[#faf8f4] p-6 flex items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#bfe0db] hover:shadow-[0_20px_50px_-26px_rgba(21,33,31,0.45)]">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1f6b63]"><Check className="h-4 w-4 text-white" /></span>
                  <div><h3 className="text-base font-semibold text-[#15211f] mb-1">{title}</h3><p className="text-[#5d6f6c] leading-relaxed text-[15px]">{body}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How I get you the home — the "winning VA offers" gap */}
      <section className="py-24 bg-[#eef7f5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Eyebrow>The part other agents get wrong</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">A VA offer done right <span className="font-semibold">wins</span></h2>
            <p className="text-lg text-[#5d6f6c] leading-relaxed">The VA loan is powerful — but only if your agent knows how to use it. Here's what I bring.</p>
          </Reveal>
          <div className="space-y-5">
            {WINS.map(([Icon, title, body], i) => {
              const I = Icon as typeof Trophy
              return (
                <Reveal key={title as string} delay={i * 80}>
                  <div className="rounded-2xl bg-white border border-[#e4ece8] p-6 sm:p-7 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#bfe0db] hover:shadow-[0_22px_55px_-28px_rgba(21,33,31,0.45)]">
                    <div className="rounded-xl bg-[#eef7f5] p-3 shrink-0"><I className="h-6 w-6 text-[#1f6b63]" /></div>
                    <div><h3 className="text-lg font-semibold text-[#15211f] mb-1.5">{title as string}</h3><p className="text-[#5d6f6c] leading-relaxed">{body as string}</p></div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="py-20 bg-[#15211f]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-12 space-y-3">
            <Eyebrow dark>The track record</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-balance text-[#f2f4f3]">A realtor who <span className="font-semibold text-[#81D8D0]">closes</span></h2>
            <p className="text-[#9fb2af]">Rami's production over the last 12 months across San Antonio.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[<CountUp key="t1" value={55} />, <CountUp key="t2" value={19} prefix="$" suffix="M" />, <CountUp key="t3" value={5} decimals={1} suffix="★" />].map((node, i) => (
              <Reveal key={i} delay={i * 110}>
                <div className="text-5xl md:text-6xl font-light text-[#81D8D0]">{node}</div>
                <div className="text-sm text-[#9fb2af] mt-2">{["homes closed last year", "in home sales", "client rating"][i]}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">Four simple <span className="font-semibold">steps</span></h2>
          </Reveal>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#cfe3df] to-transparent" />
            {STEPS.map(([n, title, body], i) => (
              <Reveal key={n} delay={i * 120}>
                <div className="relative rounded-2xl bg-[#faf8f4] border border-[#e8e4da] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-26px_rgba(21,33,31,0.45)]">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#15211f] text-xl font-semibold text-[#81D8D0]">{n}</div>
                  <h3 className="text-lg font-semibold text-[#15211f] mb-1.5">{title}</h3>
                  <p className="text-[#5d6f6c] leading-relaxed text-[15px]">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Veteran block */}
      <section className="py-24 bg-[#0f1a18]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#1f2e2b] max-w-sm mx-auto lg:mx-0 w-full">
              <Image src="/rami-rafeh-headshot.png" alt="Rami Rafeh — 100% disabled Air Force and Army veteran and San Antonio realtor" fill sizes="(min-width: 1024px) 35vw, 80vw" className="object-cover" />
            </Reveal>
            <Reveal delay={120} className="space-y-5">
              <Eyebrow dark>Why veterans pick Rami</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#f2f4f3]">A veteran who's <span className="font-semibold text-[#81D8D0]">been there</span></h2>
              <p className="text-lg text-[#9fb2af] leading-relaxed">
                I served in both the Air Force and the Army, and I'm a 100% disabled veteran. I've used the VA loan, the
                disabled-vet fee waiver, and Texas's property-tax break myself — so I know the process cold and I fight
                to get you every benefit you've earned.
              </p>
              <div className="pt-1">
                <Button asChild size="lg" className="bg-[#81D8D0] text-[#0f1a18] hover:bg-[#74cdc5] rounded-full px-8 h-14 text-base font-semibold transition-transform hover:-translate-y-0.5">
                  <CalendlyLink>Book a free consultation</CalendlyLink>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonial spotlight */}
      <section className="py-24 bg-[#eef7f5]">
        <Reveal className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Quote className="h-10 w-10 text-[#81D8D0] mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-[#15211f] text-balance">
            "We're a military couple buying from out of state, and Rami made it his mission to get us the home we
            wanted. He worked our price down by 8 grand, and even picked up the keys for us after closing."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-1 text-[#1f6b63]">{[0, 1, 2, 3, 4].map((i) => (<Star key={i} className="h-5 w-5 fill-current" />))}</div>
          <div className="mt-3 text-sm font-medium text-[#5d6f6c]">Trevor R. · Military couple, relocated to San Antonio</div>
        </Reveal>
      </section>

      <Reviews />

      {/* FAQ */}
      <section className="py-24 bg-[#faf8f4]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-12 space-y-4">
            <Eyebrow>Real questions, straight answers</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">VA loan <span className="font-semibold">questions</span></h2>
            <p className="text-base text-[#8a9d97]">Tap a question to see the answer.</p>
          </Reveal>
          <Reveal><VaFaq items={FAQS} /></Reveal>
          <Reveal className="mt-10 text-center text-[#5d6f6c] space-y-2">
            <div>Want a brand-new home? <Link href="/new-construction-homes-san-antonio" className="font-semibold text-[#1f6b63] underline underline-offset-4 hover:text-[#15211f]">See my new construction guide →</Link></div>
            <div>First home? <Link href="/first-time-home-buyer-san-antonio" className="font-semibold text-[#1f6b63] underline underline-offset-4 hover:text-[#15211f]">See my first-time buyer guide →</Link></div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f1a18]">
        <Reveal className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center gap-1 text-[#81D8D0]">{[0, 1, 2, 3, 4].map((i) => (<Star key={i} className="h-5 w-5 fill-current" />))}</div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#f2f4f3]">Ready to use your <span className="font-semibold text-[#81D8D0]">VA benefit?</span></h2>
          <p className="text-lg text-[#9fb2af] text-balance leading-relaxed">Let's talk about what you qualify for and find your home. It's free, there's zero pressure, and you'll have a fellow veteran in your corner the whole way.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
            <Button asChild size="lg" className="bg-[#81D8D0] text-[#0f1a18] hover:bg-[#74cdc5] rounded-full px-8 h-14 text-base font-semibold shadow-[0_12px_36px_-10px_rgba(129,216,208,0.4)] transition-transform hover:-translate-y-0.5">
              <CalendlyLink>Book a free consultation</CalendlyLink>
            </Button>
            <ContactFormModal>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-[#81D8D0]/40 text-[#81D8D0] hover:bg-[#81D8D0]/10 bg-transparent">Start my home search</Button>
            </ContactFormModal>
          </div>
        </Reveal>
      </section>

      <Footer />
      <MobileCtaBar />
      <FloatingCta />
    </main>
  )
}
