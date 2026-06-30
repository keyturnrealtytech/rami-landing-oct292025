import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { Reviews } from "@/components/reviews"
import { Button } from "@/components/ui/button"
import { CalendlyLink } from "@/components/calendly-link"
import { ContactFormModal } from "@/components/contact-form-modal"
import { CheckCircle2, ShieldCheck, Hammer, Award } from "lucide-react"

const PAGE_URL = "https://keyturnrealty.com/va-loan-new-construction-san-antonio"
const TITLE = "VA Loan New Construction Homes in San Antonio | Key Turn"
const DESCRIPTION =
  "Buy a new-construction home in San Antonio with your VA loan. Service-disabled Air Force & Army veteran Rami Rafeh — $0 down, builder incentives. Free consult."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/va-loan-new-construction-san-antonio" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Key Turn Realty Group",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VA Loan New Construction Homes in San Antonio — Key Turn Realty Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
}

// Visible FAQ content — mirrored exactly in the FAQPage JSON-LD below so search
// engines and AI answer engines can cite the same answers shown on the page.
const FAQS: { q: string; a: string }[] = [
  {
    q: "Can you use a VA loan for new construction in San Antonio?",
    a: "Yes. You can use a VA loan to buy a newly built home in San Antonio as long as the builder and community are registered with the VA and the home meets the VA's Minimum Property Requirements. Most production builders in the San Antonio area already build VA-eligible homes — the key is verifying VA approval before you sign a builder contract, which is one of the first things Rami checks for you.",
  },
  {
    q: "Do I still get $0 down and no PMI on a new-construction VA purchase?",
    a: "Yes. The core VA benefits apply to new construction exactly as they do to a resale home: no down payment for eligible buyers, no private mortgage insurance, and competitive interest rates. On a brand-new home that often means moving in with little to no cash out of pocket beyond your earnest money and inspections.",
  },
  {
    q: "Is the VA funding fee waived for disabled veterans?",
    a: "Yes. Veterans who receive VA disability compensation are exempt from the VA funding fee, which can save thousands of dollars at closing. Rami is a 100% disabled Air Force and Army veteran himself and makes sure your exemption is applied correctly on a new build.",
  },
  {
    q: "Can I negotiate builder incentives with a VA loan?",
    a: "Absolutely — and this is where a buyer's agent earns their keep. San Antonio builders routinely offer closing-cost credits, rate buydowns, design-center upgrades, and appliance packages, but they're easiest to capture when you have your own representation from the first visit. Rami negotiates these incentives on your behalf; past clients have had thousands knocked off price plus upgrades thrown in.",
  },
  {
    q: "What about the VA appraisal on a home that isn't finished yet?",
    a: "New construction is appraised against the contract price and the builder's plans and specs. If the appraisal comes in below contract, you have options — including the VA's amendatory escape clause, which lets a VA buyer walk away or renegotiate without losing their earnest money if the home doesn't appraise. Rami walks you through exactly how this protects you on a new build.",
  },
  {
    q: "Do disabled veterans get a property tax break in Texas on a new home?",
    a: "Texas offers a property-tax exemption for veterans with a service-connected disability, and veterans rated 100% disabled (or with individual unemployability) can qualify for a total homestead property-tax exemption. The exact amount depends on your disability rating, so confirm details with your county appraisal district — but for many disabled veterans this is one of the largest ongoing savings of buying in Texas.",
  },
  {
    q: "Which San Antonio areas do you cover for new construction?",
    a: "All of San Antonio and the surrounding communities — including Alamo Ranch and the northwest, Stone Oak, Boerne, New Braunfels, Schertz, Cibolo, and Universal City across Bexar, Comal, Guadalupe, and Kendall counties. Rami helps you compare new-construction communities area-wide rather than steering you to any single builder.",
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
      name: "VA Loan New Construction Home Buying in San Antonio",
      serviceType: "VA loan new construction real estate representation",
      description:
        "Buyer's-agent representation for veterans and active-duty service members purchasing new-construction homes in San Antonio with a VA loan — builder VA-approval verification, incentive negotiation, and new-build appraisal guidance.",
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
        { "@type": "ListItem", position: 2, name: "VA Loan New Construction in San Antonio", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

// Eyebrow label used across sections (matches the homepage section pattern).
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] uppercase tracking-[0.22em] text-[#1f6b63] font-semibold">{children}</div>
  )
}

export default function VANewConstructionPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#eef7f5] to-[#faf8f4] pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-7">
          <Eyebrow>VA Loan · New Construction · San Antonio</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-balance text-[#15211f]">
            Build new in San Antonio with your <span className="font-semibold">VA loan</span>
          </h1>
          <div className="mx-auto w-14 h-0.5 rounded-full bg-gradient-to-r from-[#c9a227] to-[#e2cb7a]" />
          <p className="text-lg md:text-xl text-[#5d6f6c] leading-relaxed text-balance">
            Rami Rafeh is a service-disabled U.S. Air Force and Army veteran and a San Antonio new-construction
            specialist. He helps veterans and first-time buyers use the VA loan to buy brand-new homes — $0 down,
            no PMI, and builder incentives negotiated in your corner — across San Antonio and the surrounding Hill
            Country.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button
              asChild
              size="lg"
              className="bg-[#15211f] text-white hover:bg-[#15211f]/90 rounded-full px-8 h-14 text-base shadow-[0_10px_28px_-10px_rgba(21,33,31,0.4)]"
            >
              <CalendlyLink>Book a free consultation</CalendlyLink>
            </Button>
            <ContactFormModal>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base border-[#15211f]/20 text-[#15211f] hover:bg-[#15211f]/5"
              >
                Ask Rami a question
              </Button>
            </ContactFormModal>
          </div>
        </div>
      </section>

      {/* VA + new construction basics */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
            <Eyebrow>The short answer</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">
              Yes — you <span className="font-semibold">can</span> use a VA loan on a new build
            </h2>
            <p className="text-lg text-[#5d6f6c] leading-relaxed">
              A VA loan works on new construction the same way it does on a resale home, with a few extra steps
              around the builder and the appraisal. Here's what carries over — and what's different.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "$0 down payment",
                body: "Eligible veterans and service members buy with no down payment — even on a brand-new home.",
              },
              {
                title: "No PMI, ever",
                body: "VA loans never require private mortgage insurance, saving you hundreds a month versus conventional.",
              },
              {
                title: "Builder must be VA-registered",
                body: "The builder and community need to be set up with the VA. Rami verifies this before you sign anything.",
              },
              {
                title: "Appraised to plans & price",
                body: "A new build is appraised against the contract and the builder's specs, with VA escape-clause protection if it comes in low.",
              },
              {
                title: "One-year builder warranty",
                body: "The VA requires a one-year builder warranty on new construction — a protection that's built into the process.",
              },
              {
                title: "Funding fee waived if disabled",
                body: "Veterans receiving VA disability compensation pay no funding fee — thousands saved at closing.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-[#e8e4da] bg-[#faf8f4] p-7">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1f6b63] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#15211f] mb-1.5">{c.title}</h3>
                    <p className="text-[#5d6f6c] leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Rami helps — the differentiators competitors miss */}
      <section className="py-28 bg-[#eef7f5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
            <Eyebrow>Where most buyers leave money on the table</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">
              What a builder's sales office <span className="font-semibold">won't</span> tell you
            </h2>
            <p className="text-lg text-[#5d6f6c] leading-relaxed">
              The agent in the model home works for the builder — not for you. Bringing your own representation from
              the very first visit costs you nothing and changes how the deal goes.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                icon: ShieldCheck,
                title: "Verify VA approval before you sign",
                body: "Not every community is set up for VA financing, and a contract signed before that's confirmed can trap your earnest money. Rami confirms the builder and community are VA-eligible up front so there are no surprises in underwriting.",
              },
              {
                icon: Hammer,
                title: "Negotiate builder incentives & upgrades",
                body: "Closing-cost credits, interest-rate buydowns, design-center upgrades, appliance packages — these are negotiable, and builders expect a represented buyer to ask. One past client had $8,000 taken off the price and a refrigerator thrown in; another was shown builder incentives she didn't know she qualified for.",
              },
              {
                icon: Award,
                title: "Stack down-payment & tax assistance on a new build",
                body: "A VA loan can pair with San Antonio and Texas assistance programs (HIP, TSAHC, MCC tax credits) on new construction, not just resale. Rami helps you see what you actually qualify for and combine it with your VA benefit.",
              },
              {
                icon: CheckCircle2,
                title: "Protect yourself on appraisal, inspection & timeline",
                body: "An independent inspection on a new build (yes, you still want one), the VA appraisal and escape clause, and realistic build-timeline and rate-lock planning — Rami manages all of it so a months-long build doesn't derail your financing.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-white border border-[#e4ece8] p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#eef7f5] p-2.5 shrink-0">
                    <c.icon className="h-6 w-6 text-[#1f6b63]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#15211f] mb-2">{c.title}</h3>
                    <p className="text-[#5d6f6c] leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual-service / disabled-vet differentiator */}
      <section className="py-28 bg-[#0f1a18]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#81D8D0] font-semibold">
            Why veterans choose Rami
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#f2f4f3]">
            A veteran who's <span className="font-semibold text-[#81D8D0]">used these benefits himself</span>
          </h2>
          <p className="text-lg text-[#9fb2af] leading-relaxed text-balance">
            Rami Rafeh served in both the U.S. Air Force and the U.S. Army and is a 100% service-disabled veteran and
            certified Military Relocation Professional (MRP). He understands the VA loan, the disability funding-fee
            exemption, and Texas's total property-tax exemption for 100%-disabled veterans from the inside — because
            he qualifies for them himself. When you're buying a new build, that means someone in your corner who
            knows exactly which questions to ask the builder and which protections and benefits you're entitled to.
          </p>
        </div>
      </section>

      {/* Comparison: VA vs Conventional vs FHA for new construction */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-5">
            <Eyebrow>How the loans compare</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">
              VA vs. conventional vs. FHA on a <span className="font-semibold">new build</span>
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#e8e4da]">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#faf8f4] text-[#15211f]">
                  <th className="p-4 font-semibold text-sm"> </th>
                  <th className="p-4 font-semibold text-sm">VA loan</th>
                  <th className="p-4 font-semibold text-sm">Conventional</th>
                  <th className="p-4 font-semibold text-sm">FHA</th>
                </tr>
              </thead>
              <tbody className="text-[#5d6f6c]">
                {[
                  ["Down payment", "$0", "3%–20%", "3.5%"],
                  ["Mortgage insurance", "None", "Until 20% equity", "For the life of the loan"],
                  ["Funding/MI fee", "Waived if disabled", "N/A", "Upfront + monthly MIP"],
                  ["Low-appraisal protection", "VA escape clause", "Negotiated", "Negotiated"],
                  ["Best for", "Eligible veterans", "Strong-credit buyers", "Lower-credit buyers"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-[#e8e4da]">
                    <td className="p-4 font-medium text-[#15211f]">{row[0]}</td>
                    <td className="p-4 font-semibold text-[#1f6b63]">{row[1]}</td>
                    <td className="p-4">{row[2]}</td>
                    <td className="p-4">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#8a9d97] mt-4">
            For most eligible veterans buying new construction, the VA loan is the strongest option. Program details
            and figures change — Rami and your lender confirm what applies to your situation.
          </p>
        </div>
      </section>

      {/* Reviews (reused) */}
      <Reviews />

      {/* FAQ */}
      <section className="py-28 bg-[#faf8f4]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 space-y-5">
            <Eyebrow>VA new construction — answered</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">
              Frequently asked <span className="font-semibold">questions</span>
            </h2>
          </div>
          <div className="space-y-5">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl bg-white border border-[#e8e4da] p-7">
                <h3 className="text-lg font-semibold text-[#15211f] mb-2.5">{f.q}</h3>
                <p className="text-[#5d6f6c] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#0f1a18]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-7">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#81D8D0] font-semibold">Let&apos;s talk</div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#f2f4f3]">
            Thinking about a <span className="font-semibold text-[#81D8D0]">new build?</span>
          </h2>
          <p className="text-lg text-[#9fb2af] text-balance leading-relaxed">
            Talk to Rami before you walk into a model home — it's free, there's no obligation, and it's the single
            best way to keep the builder honest and the incentives in your pocket.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
            <Button
              asChild
              size="lg"
              className="bg-[#81D8D0] text-[#0f1a18] hover:bg-[#74cdc5] rounded-full px-8 h-14 text-base font-semibold shadow-[0_12px_36px_-10px_rgba(129,216,208,0.4)]"
            >
              <CalendlyLink>Book a free consultation</CalendlyLink>
            </Button>
            <ContactFormModal>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base border-[#81D8D0]/40 text-[#81D8D0] hover:bg-[#81D8D0]/10 bg-transparent"
              >
                Start my home search
              </Button>
            </ContactFormModal>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCtaBar />
    </main>
  )
}
