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
import { Check, PiggyBank, HandCoins, GraduationCap, KeyRound, Star, Quote, Medal, BadgeCheck, ShieldCheck } from "lucide-react"

const PAGE_URL = "https://keyturnrealty.com/first-time-home-buyer-san-antonio"
const TITLE = "First-Time Home Buyer in San Antonio | Key Turn Realty"
const DESCRIPTION =
  "Buy your first San Antonio home with less than you think — down-payment help and plain-English guidance from veteran realtor Rami Rafeh. No pressure. Free chat."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/first-time-home-buyer-san-antonio" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Key Turn Realty Group",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "First-Time Home Buyer help in San Antonio — Key Turn Realty Group" },
    ],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.png"] },
}

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much do I really need for a down payment?",
    a: "Way less than the 20% most people assume. Plenty of first-time buyers in San Antonio get in with 3–5% down, and several local and Texas programs can cover part or all of that. If you served in the military, a VA loan can mean $0 down. We'll figure out your real number on a quick call — it's usually a pleasant surprise.",
  },
  {
    q: "What assistance programs can help me?",
    a: "San Antonio and Texas have several: the City's Homeownership Incentive Program (HIP) helps with down payment and closing costs; TSAHC and TDHCA offer down-payment grants and a mortgage tax credit (MCC); and there are special perks for teachers, first responders, and veterans. Amounts and rules change, so I'll walk you through exactly what you qualify for — no guessing.",
  },
  {
    q: "My credit isn't perfect — can I still buy?",
    a: "Probably, yes. First-time buyers don't need flawless credit, and there are loan types built for a range of credit situations. I'll connect you with a lender who'll tell you honestly where you stand and what to tweak — sometimes a small fix unlocks a much better rate.",
  },
  {
    q: "What's the very first step?",
    a: "A quick, free conversation — no commitment. We talk about what you want, your budget, and your timeline, then I point you to a lender to get pre-approved so you know your real number. From there I do the heavy lifting on the search, the offer, and the paperwork.",
  },
  {
    q: "How long does buying a first home take?",
    a: "Once you're pre-approved, many first-time buyers go from 'let's look' to keys in hand in about 30–60 days, depending on the home and your loan. I keep every step on track so nothing stalls and you're never left wondering what's next.",
  },
  {
    q: "Do you only work with veterans?",
    a: "Not at all. I'm a veteran and I love helping fellow service members, but a huge part of my work is everyday first-time buyers — teachers, nurses, young families, anyone buying their first place. You're in exactly the right hands whether you've served or not.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": "https://keyturnrealty.com/#website" },
      about: { "@id": "https://keyturnrealty.com/#agent" },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "First-Time Home Buyer Representation in San Antonio",
      serviceType: "First-time home buyer real estate representation",
      description:
        "Buyer's-agent representation and plain-English guidance for first-time home buyers in San Antonio — down-payment assistance programs, pre-approval, home search, and offer negotiation.",
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
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://keyturnrealty.com/" },
        { "@type": "ListItem", position: 2, name: "First-Time Home Buyer in San Antonio", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`text-[11px] uppercase tracking-[0.22em] font-semibold ${dark ? "text-[#81D8D0]" : "text-[#1f6b63]"}`}>
      {children}
    </div>
  )
}

const MYTHS = [
  ["You don't need 20% down", "It's the #1 myth that keeps people renting. Many first-time buyers get in with 3–5% — or even $0 with the right program."],
  ["Help with the down payment exists", "San Antonio and Texas have real programs that put money toward your down payment and closing costs. Most people don't know they qualify."],
  ["Your credit is probably fine", "You don't need perfect credit to buy your first home. A quick check tells you where you stand — often it's better than you feared."],
  ["Renting may cost more", "In a lot of San Antonio neighborhoods, a monthly payment on your own home is close to — or less than — what you're paying in rent."],
]

const PROGRAMS = [
  [HandCoins, "City of San Antonio HIP", "The Homeownership Incentive Program helps with your down payment and closing costs, with assistance that can be forgiven over time if you stay in the home."],
  [PiggyBank, "TSAHC & TDHCA grants", "Statewide programs offer down-payment grants and a mortgage tax credit (MCC) that can save you money every year you own the home."],
  [Medal, "Heroes & veteran perks", "Extra help for teachers, first responders, and military — including $0-down VA loans if you've served. I'll match you to what fits."],
  [ShieldCheck, "I find what you qualify for", "Programs change constantly and most lenders won't dig for them. I help you stack the right ones so you keep the most money in your pocket."],
] as const

const STEPS = [
  ["1", "We talk — free", "A relaxed, no-pressure chat about what you want, your budget, and your timeline."],
  ["2", "Get pre-approved", "I point you to a trusted lender so you know your real number — and which programs you qualify for."],
  ["3", "We find your home", "I line up showings, spot red flags, and help you make a smart, winning offer."],
  ["4", "You get the keys", "I handle inspection, appraisal, and closing day, and I'm there when you walk in the door."],
]

export default function FirstTimeBuyerPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[84vh] flex items-end overflow-hidden">
        <Image
          src="/first-home-hero.jpg"
          alt="House keys on a table — buying your first home in San Antonio"
          fill
          sizes="100vw"
          className="object-cover hero-kenburns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1413] via-[#0b1413]/72 to-[#0b1413]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1413]/65 to-transparent" />
        <div className="scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-white/70">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-36 w-full">
          <Reveal className="max-w-2xl space-y-6">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#81D8D0]">
              First-time buyers · San Antonio
            </div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-balance text-white drop-shadow-sm">
              Your first home is <span className="font-semibold text-[#81D8D0]">closer than you think</span>
            </h1>
            <p className="text-lg md:text-xl text-[#e6ece9] leading-relaxed max-w-xl">
              You probably need less money down than you'd guess — and there's real help out there for it. I'm Rami, a
              San Antonio realtor (and veteran) who walks first-time buyers through every step in plain English. No
              jargon, no pressure, no dumb questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button asChild size="lg" className="bg-[#81D8D0] text-[#0f1a18] hover:bg-[#74cdc5] rounded-full px-8 h-14 text-base font-semibold shadow-[0_12px_36px_-10px_rgba(129,216,208,0.5)] transition-transform hover:-translate-y-0.5">
                <CalendlyLink>Talk to Rami — it's free</CalendlyLink>
              </Button>
              <ContactFormModal>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-white/30 text-white hover:bg-white/10 bg-transparent">
                  Ask a quick question
                </Button>
              </ContactFormModal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat band */}
      <section className="bg-[#15211f]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            <CountUp key="s1" value={3} suffix="%" />,
            <CountUp key="s2" value={6} suffix="+" />,
            <CountUp key="s3" value={55} />,
            <CountUp key="s4" value={5} decimals={1} suffix="★" />,
          ].map((node, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="text-4xl md:text-5xl font-light text-[#81D8D0]">{node}</div>
              <div className="text-sm text-[#9fb2af] mt-2 leading-snug">
                {["down can be enough", "help programs available", "homes closed last year", "client rating"][i]}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Credentials bar */}
      <section className="bg-white border-b border-[#eef0ec]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#5d6f6c]">
          {[
            [Medal, "U.S. Air Force & Army Veteran · 100% Disabled"],
            [BadgeCheck, "Military Relocation Professional (MRP)"],
            [ShieldCheck, "Real Broker · TREC #724566"],
            [Star, "5.0★ on Google, Zillow & Realtor.com"],
          ].map(([Icon, label]) => {
            const I = Icon as typeof Medal
            return (
              <span key={label as string} className="inline-flex items-center gap-2 font-medium">
                <I className="h-4 w-4 text-[#1f6b63]" />
                {label as string}
              </span>
            )
          })}
        </div>
      </section>

      {/* Myths */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Eyebrow>Take a breath</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">
              Buying your first home isn't as <span className="font-semibold">scary</span> as it sounds
            </h2>
            <p className="text-lg text-[#5d6f6c] leading-relaxed">Let's clear up the four things that hold most people back.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {MYTHS.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 2) * 90}>
                <div className="h-full rounded-2xl border border-[#e8e4da] bg-[#faf8f4] p-6 flex items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#bfe0db] hover:shadow-[0_20px_50px_-26px_rgba(21,33,31,0.45)]">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1f6b63]">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#15211f] mb-1">{title}</h3>
                    <p className="text-[#5d6f6c] leading-relaxed text-[15px]">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assistance programs */}
      <section className="py-24 bg-[#eef7f5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Eyebrow>Free money you might be leaving on the table</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">
              Programs that help with your <span className="font-semibold">down payment</span>
            </h2>
            <p className="text-lg text-[#5d6f6c] leading-relaxed">
              San Antonio and Texas want to help you buy. Most first-time buyers qualify for something — and don't know it.
            </p>
          </Reveal>
          <div className="space-y-5">
            {PROGRAMS.map(([Icon, title, body], i) => {
              const I = Icon as typeof HandCoins
              return (
                <Reveal key={title as string} delay={i * 80}>
                  <div className="rounded-2xl bg-white border border-[#e4ece8] p-6 sm:p-7 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#bfe0db] hover:shadow-[0_22px_55px_-28px_rgba(21,33,31,0.45)]">
                    <div className="rounded-xl bg-[#eef7f5] p-3 shrink-0">
                      <I className="h-6 w-6 text-[#1f6b63]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#15211f] mb-1.5">{title as string}</h3>
                      <p className="text-[#5d6f6c] leading-relaxed">{body as string}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <p className="text-sm text-[#8a9d97] mt-6 text-center">
            Program amounts and rules change often — I'll confirm exactly what you qualify for, no guessing.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">
              From "maybe someday" to <span className="font-semibold">keys in hand</span>
            </h2>
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

      {/* Why Rami — headshot */}
      <section className="py-24 bg-[#0f1a18]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#1f2e2b] max-w-sm mx-auto lg:mx-0 w-full">
              <Image
                src="/rami-rafeh-headshot.png"
                alt="Rami Rafeh — San Antonio realtor who guides first-time home buyers"
                fill
                sizes="(min-width: 1024px) 35vw, 80vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={120} className="space-y-5">
              <Eyebrow dark>Why first-time buyers pick Rami</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#f2f4f3]">
                Patient, honest, and <span className="font-semibold text-[#81D8D0]">no dumb questions</span>
              </h2>
              <p className="text-lg text-[#9fb2af] leading-relaxed">
                Your first home is a big deal, and you deserve someone who explains everything, never rushes you, and
                tells you the truth — even when it means walking away from a house. I'm a veteran and a San Antonio
                realtor, and a huge part of my work is first-time buyers. Last year I closed 55 homes ($19M) for
                families across the area, many of them buying for the very first time.
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

      {/* Track record */}
      <section className="py-20 bg-[#15211f]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-12 space-y-3">
            <Eyebrow dark>The track record</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-balance text-[#f2f4f3]">
              A realtor who <span className="font-semibold text-[#81D8D0]">closes</span>
            </h2>
            <p className="text-[#9fb2af]">Rami's production over the last 12 months across San Antonio.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              <CountUp key="t1" value={55} />,
              <CountUp key="t2" value={19} prefix="$" suffix="M" />,
              <CountUp key="t3" value={5} decimals={1} suffix="★" />,
            ].map((node, i) => (
              <Reveal key={i} delay={i * 110}>
                <div className="text-5xl md:text-6xl font-light text-[#81D8D0]">{node}</div>
                <div className="text-sm text-[#9fb2af] mt-2">{["homes closed last year", "in home sales", "client rating"][i]}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial spotlight — real first-time buyer review */}
      <section className="py-24 bg-[#eef7f5]">
        <Reveal className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Quote className="h-10 w-10 text-[#81D8D0] mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-[#15211f] text-balance">
            "We couldn't have asked for a better guide for our first home purchase. Rami truly listened, was incredibly
            patient, and masterfully negotiated on our behalf. If you want a dedicated, honest professional in your
            corner, look no further."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-1 text-[#1f6b63]">
            {[0, 1, 2, 3, 4].map((i) => (<Star key={i} className="h-5 w-5 fill-current" />))}
          </div>
          <div className="mt-3 text-sm font-medium text-[#5d6f6c]">First-time buyers · San Antonio</div>
        </Reveal>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* FAQ */}
      <section className="py-24 bg-[#faf8f4]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-12 space-y-4">
            <Eyebrow>Real questions, straight answers</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">
              First-time buyer <span className="font-semibold">questions</span>
            </h2>
            <p className="text-base text-[#8a9d97]">Tap a question to see the answer.</p>
          </Reveal>
          <Reveal><VaFaq items={FAQS} /></Reveal>
          <Reveal className="mt-10 text-center text-[#5d6f6c]">
            Buying a brand-new home?{" "}
            <Link href="/va-loan-new-construction-san-antonio" className="font-semibold text-[#1f6b63] underline underline-offset-4 hover:text-[#15211f]">
              See my guide to new construction with a VA loan →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f1a18]">
        <Reveal className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center gap-1 text-[#81D8D0]">
            {[0, 1, 2, 3, 4].map((i) => (<Star key={i} className="h-5 w-5 fill-current" />))}
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#f2f4f3]">
            Ready to stop <span className="font-semibold text-[#81D8D0]">renting?</span>
          </h2>
          <p className="text-lg text-[#9fb2af] text-balance leading-relaxed">
            Let's find out what you actually qualify for. It's a free, no-pressure conversation — and it might be the
            day everything starts to feel possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
            <Button asChild size="lg" className="bg-[#81D8D0] text-[#0f1a18] hover:bg-[#74cdc5] rounded-full px-8 h-14 text-base font-semibold shadow-[0_12px_36px_-10px_rgba(129,216,208,0.4)] transition-transform hover:-translate-y-0.5">
              <CalendlyLink>Book a free consultation</CalendlyLink>
            </Button>
            <ContactFormModal>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-[#81D8D0]/40 text-[#81D8D0] hover:bg-[#81D8D0]/10 bg-transparent">
                Start my home search
              </Button>
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
