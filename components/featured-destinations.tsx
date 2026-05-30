import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"
import { ContactFormModal } from "@/components/contact-form-modal"
import { LazyVideo } from "@/components/lazy-video"

const destinations = [
  {
    name: "Featured Listing 1",
    country: "San Antonio",
    image: "/placeholder.svg",
    poster: "/posters-listing-1.jpg",
    video: "/RAMI-1ST-LISTINGROW.mp4",
    description: "Premium home in San Antonio",
    price: "Contact for Details",
  },
  {
    name: "Featured Listing 2",
    country: "San Antonio",
    image: "/placeholder.svg",
    poster: "/posters-listing-2.jpg",
    video: "/RAMI-2ND-LIST-ROW.mp4",
    description: "Beautiful property in San Antonio",
    price: "Contact for Details",
  },
  {
    name: "Featured Listing 3",
    country: "San Antonio",
    image: "/placeholder.svg",
    poster: "/posters-listing-3.jpg",
    video: "/RAMI-LIST-3rd-listing.mp4",
    description: "Stunning home in San Antonio",
    price: "Contact for Details",
  },
  {
    name: "Santorini",
    country: "Greece",
    image: "/santorini-sunset.png",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAMI-listing2%202-F81xzYFyGdHJLaLecFpomM5Txbf9IH.mp4",
    description: "Iconic white-washed buildings and stunning sunsets",
    price: "From $2,499",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: "/bali-indonesia-rice-terraces-tropical-paradise.jpg",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAMI-listing-knT3sT4gyj8jGUt5a458rslEi7BzzB.mp4",
    description: "Tropical paradise with ancient temples and beaches",
    price: "From $1,899",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image: "/kyoto-japan-traditional-temples-cherry-blossoms.jpg",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAMI-listing3-5h31JCWwCMjPZECzHqNKn615FSIjCb.mp4", // Added video property for Japan listing
    description: "Ancient temples and traditional Japanese culture",
    price: "From $2,799",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    image: "/maldives-overwater-bungalows-crystal-clear-water.jpg",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/indownloader.app_video_0055248001761342656-JLihPL0bPi87bRaFFhCjeItvM4tGba.mp4", // Updated video property for Maldives listing
    description: "Overwater villas and pristine coral reefs",
    price: "From $3,499",
  },
  {
    name: "Iceland",
    country: "Nordic",
    image: "/iceland-northern-lights-waterfalls-dramatic-landsc.jpg",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/indownloader.app_video_0446854001761342798-HD5kyqNsPR4botE3VxA5IR535LV3TY.mp4", // Added video property for Iceland listing
    description: "Northern lights and dramatic volcanic landscapes",
    price: "From $2,999",
  },
  {
    name: "Dubai",
    country: "UAE",
    image: "/dubai-modern-skyline-luxury-desert.jpg",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/indownloader.app_video_0532373001761342899-xSSRMkOcuQNIxyiCbbugLGmm2SMQRW.mp4", // Added video property for Dubai listing
    description: "Modern luxury meets Arabian desert adventures",
    price: "From $2,299",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Featured <span className="font-semibold">Listings</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Handpicked homes that offer unforgettable experiences and breathtaking beauty
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[600px] overflow-hidden">
                {destination.video ? (
                  <LazyVideo
                    src={destination.video}
                    poster={destination.poster || destination.image}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Contact Badge */}
                <ContactFormModal>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center px-6 py-2 rounded-full cursor-pointer transition-colors z-10" style={{ backgroundColor: '#81D8D0' }}>
                    <span className="text-sm font-semibold text-white">Contact</span>
                  </div>
                </ContactFormModal>
              </div>

              {/* Content */}
              
            </Card>
          ))}
        </div>

        {/* View More Listings Button */}
        <div className="text-center mt-16">
          <ContactFormModal>
            <Button
              size="lg"
              className="w-full max-w-md h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base font-semibold"
            >
              View more listings
            </Button>
          </ContactFormModal>
        </div>
      </div>
    </section>
  )
}
