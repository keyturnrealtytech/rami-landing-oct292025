import type React from "react"
import type { Metadata } from "next"
import { Prompt } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
})

export const metadata: Metadata = {
  title: "Key Turn Realty Group | VA Loan & First-Time Buyer Realtor in San Antonio, TX",
  description:
    "Retired Air Force veteran and San Antonio realtor Rami Rafeh helps veterans and first-time buyers purchase with confidence — VA loans, new construction, and relocation across San Antonio and the Hill Country. Free consultation.",
  generator: "v0.app",
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": "https://keyturnrealty.com/#agent",
      name: "Key Turn Realty Group",
      alternateName: "Rami Rafeh — Key Turn Realty Group",
      description:
        "Retired Air Force veteran and San Antonio real estate agent specializing in VA loans, first-time home buyers, and new construction across San Antonio and the surrounding Hill Country.",
      url: "https://keyturnrealty.com",
      telephone: "713-440-9407",
      email: "admin@keyturnrealty.com",
      priceRange: "$$",
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
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        addressCountry: "US",
      },
      knowsAbout: [
        "VA Loans",
        "Military Relocation",
        "First-Time Home Buyers",
        "New Construction Homes",
        "San Antonio Real Estate",
      ],
      parentOrganization: {
        "@type": "Organization",
        name: "Real Broker, LLC",
      },
      founder: {
        "@type": "Person",
        name: "Rami Rafeh",
        jobTitle: "Real Estate Agent",
        description:
          "Retired U.S. Air Force veteran and licensed Texas REALTOR® (TREC License #724566).",
        sameAs: [
          "https://onereal.com/Keyturnrealty",
          "https://www.linkedin.com/in/rrafeh",
          "https://www.instagram.com/real_estate_rami/",
          "https://www.har.com/rami-rafeh/agent_sabortx-724566",
          "https://www.zillow.com/profile/RealEstateRami",
        ],
      },
      sameAs: [
        "https://onereal.com/Keyturnrealty",
        "https://www.instagram.com/key_turn_realty/",
        "https://www.facebook.com/keyturnrealtyrealtygroup/",
        "https://www.linkedin.com/in/rrafeh",
        "https://www.zillow.com/profile/RealEstateRami",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://keyturnrealty.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I use a VA loan to buy a home in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. As a retired Air Force veteran and San Antonio realtor, Rami Rafeh specializes in helping veterans and active-duty service members use their VA loan benefit to buy homes across San Antonio, including the areas near Randolph and Lackland Air Force bases.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with first-time home buyers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. A large part of Key Turn Realty Group's work is guiding first-time buyers through every step — from pre-approval to closing — in plain language and with no pressure.",
          },
        },
        {
          "@type": "Question",
          name: "What areas of San Antonio does Key Turn Realty Group serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rami Rafeh serves San Antonio and the surrounding Hill Country and suburbs — including Boerne, New Braunfels, Schertz, Cibolo, Universal City, Alamo Ranch, and Stone Oak — across Bexar, Comal, Guadalupe, and Kendall counties.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${prompt.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
