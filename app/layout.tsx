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
      image: "https://keyturnrealty.com/rami-rafeh-headshot.png",
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
        image: "https://keyturnrealty.com/rami-rafeh-headshot.png",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "11",
        bestRating: "5",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Gaby Adame" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Really grateful I clicked on Rami's Instagram ad and decided to go with him. I was able to purchase my brand new home, and he made the buying process super easy! Thank you, Rami!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Marissa Arras" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Rami was so helpful, went out of his way to help me get my beautiful home!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Rayan Ani" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Rami is really clear and straightforward about the entire process. He was extremely patient and answered all of my questions thoroughly. He's connected to all of the best communities no matter what part of town you want to be in, found me incentives I didn't even know I'd be qualified for. The entire move in process was really smooth and he was by my side the entire way. Even after moving in, he reached out to make sure everything is going well.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "K thePsalmist" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "We couldn't have asked for a better guide than Key Turn & Co. Realty Group for our first home purchase. They truly listened to what we wanted, were incredibly patient, and masterfully negotiated on our behalf. If you want a dedicated, honest professional in your corner, look no further! Working with Rami was an absolute pleasure — professional, responsive, and deeply knowledgeable about the local market. He went above and beyond to ensure we found the perfect property. 5 stars all the way!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Donna Wilson" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "My experience with Key Turn was the best in home buying I ever experienced. Everything about the process that was promised was exactly what we experienced. The expert research that was done before we started looking at homes made the search smooth and easy. I appreciate our realtor Rami and how he walked us through the process without a hitch. We LOVE our new home and we recommend Key Turn & Co. for a fast, smooth and enjoyable home buying experience.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Irma Gutierrez" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "I'm so grateful for Rami and his realtor services. I saw his ad on Instagram and messaged him to see if I qualified for any of the homes he was advertising at a lower mortgage interest rate and minimal down payment. He contacted me right away with information, then again the next day about the mortgage loan I qualified for. He gave me two builder options, set up tours of new-built homes, and was right by my side as the builder presented the home, price, and incentives. Rami gave me a clear breakdown of every step, provided the service contractors I'd need, and was always available for any question or concern. He even helped me buy out my remaining apartment lease. I'm grateful for him and his services for helping make my dream of becoming a homeowner a reality.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Susan Griffith" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Rami handled my spur-of-the-moment purchase with incredible ease. He approached each interaction very professionally and really had my best interests in mind. He is knowledgeable, pro-active, and wants successful outcomes for his clients. He makes himself available — which is so important throughout the home buying experience. I would highly recommend Rami, and my expectations are exceptionally high.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Trevor Rice" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Rami was a very professional realtor and tough negotiator while searching for our home in San Antonio, TX. He worked our price down by 8 grand and even convinced them to throw in a fridge. We are a military couple and were navigating the buying process all the way from Maryland, and he had no problem bridging the distance for us. Rami made it his mission to ensure we got the home we wanted, and now we own a home! He even picked up the keys for us after closing since we weren't in town yet. You can't go wrong with this realtor!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Tony Castelluci" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Rami was excellent in every way. Considering we found and closed on exactly the house I wanted during the COVID-19 epidemic, it's easy to say he went above and beyond what I expected. What I liked a lot about his service was that there were a few houses he was honest about not being positive on — so his opinions are genuinely helpful. I ended up in a house with the exact features I had given him as mandatory. I highly recommend this realtor.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "S.N." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Rami is an excellent real estate agent. He is knowledgeable about the process and guides you throughout. His negotiation skills are unmatched. I've already used him for multiple transactions and every time he exceeded my expectations. I strongly recommend Rami for your real estate needs.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Bea" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Great experience with Rami selling my home.",
        },
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
