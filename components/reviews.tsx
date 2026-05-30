import { Star } from "lucide-react"

const reviews = [
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

export function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            What Clients <span className="font-semibold">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            A 5.0 average across Google, Zillow, and Realtor.com — from first-time buyers, veterans, and military
            families across San Antonio.
          </p>
        </div>

        {/* Reviews (masonry) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="break-inside-avoid mb-8 rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex gap-1 mb-4 text-primary" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{review.text}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{review.name}</span>
                <span className="text-xs text-muted-foreground">{review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
