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
import { LazyVideo } from "@/components/lazy-video"
import { FloatingCta } from "@/components/floating-cta"
import { Check, ShieldCheck, Handshake, GraduationCap, KeyRound, Star, Quote, Medal, BadgeCheck } from "lucide-react"

const PAGE_URL = "https://keyturnrealty.com/new-construction-homes-san-antonio"
const TITLE = "New Construction Homes in San Antonio | Key Turn Realty"
const DESCRIPTION =
  "Buy a brand-new San Antonio home the smart way — builder incentives negotiated, closing costs covered, $0 down for veterans. Free chat with realtor Rami Rafeh."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/new-construction-homes-san-antonio" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Key Turn Realty Group",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "New Construction Homes in San Antonio — Key Turn Realty Group" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.png"] },
}

const FAQS: { q: string; a: string }[] = [
  {
    q: "Do I need my own agent to buy new construction?",
    a: "Yes — and it costs you nothing. The friendly person in the model home works for the builder, not for you. When you bring your own agent from the very first visit, you get someone negotiating on your side. Show up without one and you've quietly given up your representation.",
  },
  {
    q: "Can you really get the builder to pay my closing costs?",
    a: "Most of the time, yes. I only take my clients to builders who cover closing costs, and I push for rate buydowns, price reductions, and free upgrades on top. Builders expect a represented buyer to ask — so my clients regularly walk away with thousands in savings and extras.",
  },
  {
    q: "What financing can I use on a new build?",
    a: "Whatever fits you. Veterans can use a VA loan for $0 down and no PMI. Everyone else typically uses FHA (around 3.5% down) or a conventional loan. I'll help you compare and point you to a lender who'll tell you your real number.",
  },
  {
    q: "I'm a veteran — do I get extra benefits on a new home?",
    a: "You do: $0 down, no PMI, and if you get VA disability pay, no funding fee — plus Texas property-tax breaks for disabled veterans. I'm a 100% disabled Air Force and Army veteran myself. If you want the full breakdown, see my VA home loans page.",
  },
  {
    q: "Do I still need an inspection on a brand-new home?",
    a: "Absolutely. Brand-new doesn't mean flawless — builders move fast and things get missed. I make sure your new home gets a real inspection and that the builder fixes what turns up before you close.",
  },
  {
    q: "Which parts of San Antonio do you cover?",
    a: "All of it — and the suburbs and Hill Country too: the fast-growing northwest, Stone Oak, Alamo Ranch, Boerne, New Braunfels, Schertz, Cibolo, and Universal City. I help you compare new-home communities everywhere instead of pushing you toward one builder.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL, name: TITLE, description: DESCRIPTION, isPartOf: { "@id": "https://keyturnrealty.com/#website" }, about: { "@id": "https://keyturnrealty.com/#agent" }, inLanguage: "en-US" },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "New Construction Home Buying in San Antonio",
      serviceType: "New construction real estate representation",
      description:
        "Buyer's-agent representation for new-construction home buyers in San Antonio — builder vetting, incentive and closing-cost negotiation, inspections, and financing guidance (VA, FHA, conventional), in plain English.",
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
    { "@type": "BreadcrumbList", "@id": `${PAGE_URL}#breadcrumb`, itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://keyturnrealty.com/" }, { "@type": "ListItem", position: 2, name: "New Construction Homes in San Antonio", item: PAGE_URL } ] },
    { "@type": "FAQPage", "@id": `${PAGE_URL}#faq`, mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <div className={`text-[11px] uppercase tracking-[0.22em] font-semibold ${dark ? "text-[#81D8D0]" : "text-[#1f6b63]"}`}>{children}</div>
}

const QUICK = [
  ["The builder's agent isn't yours", "The person in the model home works for the builder. You want your own agent in your corner — at no cost to you."],
  ["Closing costs are negotiable", "I only take you to builders who cover your closing costs. That's thousands that stays in your pocket."],
  ["Incentives are on the table", "Rate buydowns, free upgrades, price cuts — builders offer them, but you have to know to ask. I ask."],
  ["You still need an inspection", "Brand-new doesn't mean flawless. I make sure your new home is inspected and fixed before you close."],
  ["Financing that fits you", "VA ($0 down for veterans), FHA (about 3.5%), or conventional — I help you choose what actually works."],
  ["There's a builder warranty", "New homes come with a warranty, so you're covered after you move in."],
]

const HOMES = [
  { poster: "/posters-listing-1.jpg", video: "/RAMI-1ST-LISTINGROW.mp4", alt: "Video tour of a new-construction home in Northeast San Antonio", tag: "All closing costs paid" },
  { poster: "/posters-listing-2.jpg", video: "/RAMI-2ND-LIST-ROW.mp4", alt: "Video tour of a new-construction home in Northeast San Antonio", tag: "Payment lowered" },
  { poster: "/posters-listing-northwest-1.jpg", video: "/listing-northwest-1.mp4", alt: "Video tour of a new-construction home in Northwest San Antonio", tag: "Northwest San Antonio" },
]

const BUILDER = [
  [ShieldCheck, "I vet the builder and community first", "Not every builder or community is a good deal. I check reputation, financing fit, and the fine print in the contract before you sign — so there are no nasty surprises later."],
  [Handshake, "I squeeze the builder for extras", "Free appliances, zero closing costs, price reductions, a lower monthly payment, free upgrades — builders expect a buyer with an agent to ask, and I push for every perk I can get you. My clients regularly walk away with thousands in savings and extras they didn't know were on the table."],
  [GraduationCap, "I explain the whole process", "New construction has a lot of moving parts. I break every step down in plain English — financing, builder contracts, timelines — so you always know what's happening and why."],
  [KeyRound, "I've got your back to the finish line", "Inspection, appraisal, build delays, closing day — I handle the moving parts so a months-long build never derails your loan or your nerves."],
] as const

const STEPS = [
  ["1", "We talk — free", "A quick, no-pressure chat about what you want and what you can qualify for."],
  ["2", "I vet the home & builder", "I confirm the community and financing fit and that the deal is fair — before you sign a thing."],
  ["3", "I negotiate your perks", "I push the builder for paid closing costs, a lower payment, or free upgrades."],
  ["4", "You get the keys", "I'm with you through inspection, appraisal, and closing day."],
]

export default function NewConstructionPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <Image src="/new-home-hero.jpg" alt="A brand-new two-story home in a San Antonio suburb under a bright blue sky" fill sizes="100vw" className="object-cover hero-kenburns" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1413] via-[#0b1413]/70 to-[#0b1413]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1413]/60 to-transparent" />
        <div className="hidden lg:flex flex-col gap-4 absolute right-10 top-1/3 z-10">
          {[["Paid", "closing costs"], ["Free", "upgrades negotiated"], ["$0", "down for veterans"]].map(([big, small], i) => (
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
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#81D8D0]">Brand-new homes · San Antonio</div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-balance text-white drop-shadow-sm">
              Buy a <span className="font-semibold text-[#81D8D0]">brand-new home</span> — the smart way
            </h1>
            <p className="text-lg md:text-xl text-[#e6ece9] leading-relaxed max-w-xl">
              New construction looks simple, but the builder's agent works for the builder. I'm Rami — a San Antonio
              realtor (and disabled veteran) who negotiates builder incentives, gets your closing costs covered, and
              makes sure you don't leave money on the table. First-time buyer or veteran, I've got you.
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
          {[<>Paid</>, <>$0</>, <CountUp key="c1" value={55} />, <CountUp key="c2" value={5} decimals={1} suffix=" ★" />].map((node, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="text-4xl md:text-5xl font-light text-[#81D8D0]">{node}</div>
              <div className="text-sm text-[#9fb2af] mt-2 leading-snug">{["closing costs (builder-paid)", "down for veterans", "homes closed last year", "client rating"][i]}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Credentials trust bar */}
      <section className="bg-white border-b border-[#eef0ec]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#5d6f6c]">
          {[[Medal, "U.S. Air Force & Army Veteran · 100% Disabled"], [BadgeCheck, "Military Relocation Professional (MRP)"], [ShieldCheck, "Real Broker · TREC #724566"], [Star, "5.0★ on Google, Zillow & Realtor.com"]].map(([Icon, label]) => {
            const I = Icon as typeof Medal
            return <span key={label as string} className="inline-flex items-center gap-2 font-medium"><I className="h-4 w-4 text-[#1f6b63]" />{label as string}</span>
          })}
        </div>
      </section>

      {/* What to know */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Eyebrow>Before you visit a model home</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">6 things smart new-build buyers <span className="font-semibold">know</span></h2>
            <p className="text-lg text-[#5d6f6c] leading-relaxed">In plain English — no jargon.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {QUICK.map(([title, body], i) => (
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

      {/* Real homes gallery */}
      <section className="py-24 bg-[#eef7f5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <Eyebrow>Real homes, real wins</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">New-construction homes I've helped buyers <span className="font-semibold">land</span></h2>
            <p className="text-lg text-[#5d6f6c] leading-relaxed">Closing costs covered. Prices dropped. Payments lowered. This is what having your own agent looks like.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {HOMES.map((h, i) => (
              <Reveal key={h.video} delay={i * 120}>
                <figure className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#d8e6e2] shadow-[0_18px_50px_-22px_rgba(21,33,31,0.45)]">
                    <LazyVideo src={h.video} poster={h.poster} autoPlay loop muted className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    <figcaption className="absolute bottom-3 left-3 right-3 rounded-full bg-white/90 backdrop-blur px-4 py-1.5 text-sm font-semibold text-[#1f6b63] text-center">{h.tag}</figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
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

      {/* Builder section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Eyebrow>Why bring your own agent</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">The model-home salesperson <span className="font-semibold">works for the builder</span></h2>
            <p className="text-lg text-[#5d6f6c] leading-relaxed">Not for you. Bringing me along from your very first visit costs you nothing and changes the whole deal.</p>
          </Reveal>
          <div className="space-y-5">
            {BUILDER.map(([Icon, title, body], i) => {
              const I = Icon as typeof ShieldCheck
              return (
                <Reveal key={title as string} delay={i * 80}>
                  <div className="rounded-2xl bg-[#faf8f4] border border-[#e8e4da] p-6 sm:p-7 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#bfe0db] hover:shadow-[0_22px_55px_-28px_rgba(21,33,31,0.45)]">
                    <div className="rounded-xl bg-[#eef7f5] p-3 shrink-0"><I className="h-6 w-6 text-[#1f6b63]" /></div>
                    <div><h3 className="text-lg font-semibold text-[#15211f] mb-1.5">{title as string}</h3><p className="text-[#5d6f6c] leading-relaxed">{body as string}</p></div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#faf8f4]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">Four simple <span className="font-semibold">steps</span></h2>
          </Reveal>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#cfe3df] to-transparent" />
            {STEPS.map(([n, title, body], i) => (
              <Reveal key={n} delay={i * 120}>
                <div className="relative rounded-2xl bg-white border border-[#e8e4da] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-26px_rgba(21,33,31,0.45)]">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#15211f] text-xl font-semibold text-[#81D8D0]">{n}</div>
                  <h3 className="text-lg font-semibold text-[#15211f] mb-1.5">{title}</h3>
                  <p className="text-[#5d6f6c] leading-relaxed text-[15px]">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rami block */}
      <section className="py-24 bg-[#0f1a18]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#1f2e2b] max-w-sm mx-auto lg:mx-0 w-full">
              <Image src="/rami-rafeh-headshot.png" alt="Rami Rafeh — San Antonio realtor and 100% disabled Air Force and Army veteran" fill sizes="(min-width: 1024px) 35vw, 80vw" className="object-cover" />
            </Reveal>
            <Reveal delay={120} className="space-y-5">
              <Eyebrow dark>Why buyers pick Rami</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#f2f4f3]">Someone who works the builder <span className="font-semibold text-[#81D8D0]">for you</span></h2>
              <p className="text-lg text-[#9fb2af] leading-relaxed">
                I'm a San Antonio realtor and a 100% disabled Air Force and Army veteran. Whether you've served or
                you're buying your very first home, I bring the same thing: someone in your corner who knows how to
                work builders, spot a bad deal, and keep your money in your pocket. Last year I closed 55 homes ($19M)
                for families across the area.
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
            "Rami was a tough negotiator — he worked our price down by 8 grand and even got them to throw in a fridge.
            He made it his mission to get us the home we wanted, and even picked up the keys for us after closing."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-1 text-[#1f6b63]">{[0, 1, 2, 3, 4].map((i) => (<Star key={i} className="h-5 w-5 fill-current" />))}</div>
          <div className="mt-3 text-sm font-medium text-[#5d6f6c]">Trevor R. · New-build buyer, San Antonio</div>
        </Reveal>
      </section>

      <Reviews />

      {/* FAQ */}
      <section className="py-24 bg-[#faf8f4]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-12 space-y-4">
            <Eyebrow>Real questions, straight answers</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">New-construction <span className="font-semibold">questions</span></h2>
            <p className="text-base text-[#8a9d97]">Tap a question to see the answer.</p>
          </Reveal>
          <Reveal><VaFaq items={FAQS} /></Reveal>
          <Reveal className="mt-10 text-center text-[#5d6f6c] space-y-2">
            <div>Veteran buyer? <Link href="/va-home-loans-san-antonio" className="font-semibold text-[#1f6b63] underline underline-offset-4 hover:text-[#15211f]">See my VA home loans guide →</Link></div>
            <div>First home? <Link href="/first-time-home-buyer-san-antonio" className="font-semibold text-[#1f6b63] underline underline-offset-4 hover:text-[#15211f]">See my first-time buyer guide →</Link></div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f1a18]">
        <Reveal className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center gap-1 text-[#81D8D0]">{[0, 1, 2, 3, 4].map((i) => (<Star key={i} className="h-5 w-5 fill-current" />))}</div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#f2f4f3]">Thinking about a <span className="font-semibold text-[#81D8D0]">new home?</span></h2>
          <p className="text-lg text-[#9fb2af] text-balance leading-relaxed">Talk to me before you walk into a model home. It's free, there's zero pressure, and it's the best way to keep the builder honest and the perks in your pocket.</p>
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
