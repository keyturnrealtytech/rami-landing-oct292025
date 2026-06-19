import type React from "react"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Christopher Jones",
    source: "Google",
    text: "Rami was outstanding throughout the entire home-buying/selling process!! He was knowledgeable, responsive, and always available to answer questions when they came up. His expertise and attention to detail made everything smooth and stress-free. I truly appreciated his professionalism and dedication to getting the deals. I would highly recommend him to anyone looking for a trustworthy realtor!!",
  },
  {
    name: "Gaby Adame",
    source: "Google",
    text: "Really grateful I clicked on Rami's Instagram ad and decided to go with him. I was able to purchase my brand new home, and he made the buying process super easy! Thank you, Rami!",
  },
  {
    name: "Marissa Arras",
    source: "Google",
    text: "Rami was so helpful, went out of his way to help me get my beautiful home!",
  },
  {
    name: "Rayan Ani",
    source: "Google",
    text: "Rami is really clear and straightforward about the entire process. He was extremely patient and answered all of my questions thoroughly. He's connected to all of the best communities no matter what part of town you want to be in, found me incentives I didn't even know I'd be qualified for. The entire move-in process was really smooth and he was by my side the entire way. Even after moving in, he reached out to make sure everything is going well.",
  },
  {
    name: "K thePsalmist",
    source: "Google",
    text: "We couldn't have asked for a better guide than Key Turn & Co. Realty Group for our first home purchase. They truly listened to what we wanted, were incredibly patient, and masterfully negotiated on our behalf. Working with Rami was an absolute pleasure — professional, responsive, and deeply knowledgeable about the local market. He went above and beyond to ensure we found the perfect property. 5 stars all the way!",
  },
  {
    name: "Donna Wilson",
    source: "Google",
    text: "My experience with Key Turn was the best in home buying I ever experienced. Everything about the process that was promised was exactly what we experienced. The expert research that was done before we started looking at homes made the search smooth and easy. I appreciate our realtor Rami and how he walked us through the process without a hitch. We LOVE our new home!",
  },
  {
    name: "Irma Gutierrez",
    source: "Google",
    text: "I'm so grateful for Rami and his realtor services. I saw his ad on Instagram and messaged him to see if I qualified for any of the homes he was advertising. He contacted me right away, then again the next day about the mortgage loan I qualified for. He gave me builder options, set up tours of new-built homes, and was right by my side as the builder presented the home, price, and incentives. He even helped me buy out my remaining apartment lease. I'm grateful to him for helping make my dream of becoming a homeowner a reality.",
  },
  {
    name: "Susan Griffith",
    source: "Zillow",
    text: "Rami handled my spur-of-the-moment purchase with incredible ease. He approached each interaction very professionally and really had my best interests in mind. He is knowledgeable, pro-active, and makes himself available — which is so important throughout the home buying experience. I would highly recommend Rami, and my expectations are exceptionally high.",
  },
  {
    name: "Trevor Rice",
    source: "Zillow & Realtor.com",
    text: "Rami was a very professional realtor and tough negotiator while searching for our home in San Antonio. He worked our price down by 8 grand and even convinced them to throw in a fridge. We are a military couple navigating the buying process all the way from Maryland, and he had no problem bridging the distance for us. He even picked up the keys for us after closing since we weren't in town yet. You can't go wrong with this realtor!",
  },
  {
    name: "Tony Castelluci",
    source: "Zillow & Realtor.com",
    text: "Rami was excellent in every way. Considering we found and closed on exactly the house I wanted during the COVID-19 epidemic, it's easy to say he went above and beyond. He was honest about homes he wasn't positive on, so his opinions are genuinely helpful. I ended up in a house with the exact features I had given him as mandatory. I highly recommend this realtor.",
  },
  {
    name: "S.N.",
    source: "Realtor.com",
    text: "Rami is an excellent real estate agent. He is knowledgeable about the process and guides you throughout. His negotiation skills are unmatched. I've already used him for multiple transactions and every time he exceeded my expectations. I strongly recommend Rami for your real estate needs.",
  },
  {
    name: "Bea",
    source: "Realtor.com",
    text: "Great experience with Rami selling my home.",
  },
]

// Display names as first name + last initial ("Christopher Jones" → "Christopher J.").
// Single-word names and existing initials pass through unchanged.
function displayName(full: string): string {
  const parts = full.trim().split(/\s+/)
  if (parts.length < 2) return full
  // Handles like "K thePsalmist" aren't real first/last names — leave them alone.
  if (parts[0].length === 1) return full
  const last = parts[parts.length - 1]
  if (last.length <= 2 || last.includes(".")) return full
  return `${parts.slice(0, -1).join(" ")} ${last[0]}.`
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="w-[320px] md:w-[360px] shrink-0 mr-5 rounded-2xl border border-[#e8e4da] bg-white p-6 shadow-sm">
      <div className="flex gap-1 mb-3 text-[#c9a227]" role="img" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-sm text-[#3d4f4c] leading-relaxed mb-4 line-clamp-6">{review.text}</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm text-[#15211f]">{displayName(review.name)}</span>
        <span className="text-xs text-[#5f736f]">{review.source}</span>
      </div>
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="py-14 bg-gradient-to-b from-[#eef7f5] to-[#faf8f4] overflow-hidden">
      <div className="text-center mb-8 px-6">
        <span className="text-[11px] uppercase tracking-[0.22em] text-[#1f6b63] font-semibold">
          What clients say · <span className="text-[#c9a227]">★★★★★</span> 5.0 across Google, Zillow &amp; Realtor.com
        </span>
      </div>

      {/* Scrolling marquee — pure CSS, pauses on hover (see globals.css) */}
      <div className="marquee" style={{ "--marquee-duration": "80s" } as React.CSSProperties}>
        <div className="marquee-track items-stretch">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex" aria-hidden={dup === 1}>
              {reviews.map((review) => (
                <ReviewCard key={review.name} review={review} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
