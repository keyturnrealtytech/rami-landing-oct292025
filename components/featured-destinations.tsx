import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/contact-form-modal"
import { LazyVideo } from "@/components/lazy-video"

const homes = [
  {
    alt: "Video tour of a San Antonio home listed by Rami Rafeh, Key Turn Realty Group",
    caption: "San Antonio · New Construction",
    poster: "/posters-listing-1.jpg",
    video: "/RAMI-1ST-LISTINGROW.mp4",
  },
  {
    alt: "Video tour of a San Antonio property listed by Rami Rafeh, Key Turn Realty Group",
    caption: "San Antonio · Family Home",
    poster: "/posters-listing-2.jpg",
    video: "/RAMI-2ND-LIST-ROW.mp4",
  },
  {
    alt: "Video tour of a San Antonio home sold by Rami Rafeh, Key Turn Realty Group",
    caption: "San Antonio · Modern Build",
    poster: "/posters-listing-3.jpg",
    video: "/RAMI-LIST-3rd-listing.mp4",
  },
  {
    alt: "Video tour of a Northwest San Antonio home listed by Rami Rafeh, Key Turn Realty Group",
    caption: "San Antonio · Northwest Side",
    poster: "/posters-listing-northwest-1.jpg",
    video: "/listing-northwest-1.mp4",
  },
  {
    alt: "Video tour of a Northwest San Antonio home listed by Rami Rafeh, Key Turn Realty Group",
    caption: "San Antonio · Northwest Side",
    poster: "/posters-listing-northwest-2.jpg",
    video: "/listing-northwest-2.mp4",
  },
  {
    alt: "Video tour of a Northeast San Antonio home listed by Rami Rafeh, Key Turn Realty Group",
    caption: "San Antonio · Northeast Side",
    poster: "/posters-listing-northeast-crosby.jpg",
    video: "/listing-northeast-crosby.mp4",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#1f6b63] font-semibold mb-3">
            Featured Homes
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance text-[#15211f]">
            Recent home <span className="font-semibold">tours</span>
          </h2>
          <p className="text-lg text-[#5d6f6c] text-balance leading-relaxed">
            Real San Antonio homes Rami has recently represented, on video
          </p>
        </div>

        {/* Homes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homes.map((home, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-[#e8e4da] rounded-2xl bg-white p-0 gap-0 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-[600px] overflow-hidden">
                <LazyVideo
                  src={home.video}
                  poster={home.poster}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 pointer-events-none" />

                {/* Contact Badge */}
                <ContactFormModal>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center px-6 py-2 rounded-full cursor-pointer transition-colors z-10 bg-[#81D8D0] hover:bg-[#74cdc5]">
                    <span className="text-sm font-semibold text-[#0b3b37]">Contact</span>
                  </div>
                </ContactFormModal>
              </div>
              <div className="px-4 py-3">
                <span className="text-sm font-semibold text-[#15211f]">{home.caption}</span>
                <div className="text-xs text-[#8aa09c] mt-0.5">Video tour</div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <ContactFormModal>
            <Button
              size="lg"
              className="w-full max-w-md h-12 bg-white border-2 border-[#81D8D0] text-[#15211f] hover:bg-[#eef7f5] rounded-full text-base font-semibold"
            >
              Find My Home
            </Button>
          </ContactFormModal>
        </div>
      </div>
    </section>
  )
}
