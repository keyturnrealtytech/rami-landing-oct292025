import Image from "next/image"
import { Card } from "@/components/ui/card"
import { LazyVideo } from "@/components/lazy-video"

const videoTestimonials = [
  {
    name: "Blake W.",
    caption: "Bought with Rami · San Antonio",
    video: "/client-testimonial-1.mp4",
    poster: "/posters-client-testimonial-1.jpg",
  },
  {
    name: "Alejandro D.",
    caption: "Bought with Rami · San Antonio",
    video: "/client-testimonial-2.mp4",
    poster: "/posters-client-testimonial-2.jpg",
  },
  {
    name: "Dawana B.",
    caption: "Closed 2026 · San Antonio",
    video: "/client-testimonial-3.mp4",
    poster: "/posters-client-testimonial-3.jpg",
  },
  {
    name: "Delita S.",
    caption: "Closed 2026 · San Antonio",
    video: "/client-testimonial-4.mp4",
    poster: "/posters-client-testimonial-4.jpg",
  },
]

const testimonialImages = [
  "1stNov-testimonnial1.jpg",
  "RAMI-TESTIMONIAL.jpg",
  "REAMI-TESTIMONIAL2.jpg",
  "testimnial7.jpg",
  "testimnoanial10.jpg",
  "TESTIMONIAL-12.jpg",
  "testimonial;15.jpg",
  "testimonial11.jpg",
  "testimonial13.jpg",
  "testimonial2-NOV1.jpg",
  "testimonial3-nOV1.jpg",
  "Testimonial4-nOV1.jpg",
  "Testimonial5-nov1.jpg",
  "testimonial9.jpg",
  "testimoniial-16.jpg",
  "testimonioal16.jpg",
  "Testimonoial6-NOV1.jpg",
]

export function TestimonialVideo() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-20">
          <div className="text-center space-y-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#1f6b63] font-semibold">
              Client Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-[#15211f]">
              Don&apos;t take Rami&apos;s <span className="font-semibold">word for it</span>
            </h2>
            <p className="text-lg text-[#5d6f6c] text-balance leading-relaxed max-w-2xl mx-auto">
              Hear it straight from clients who just closed
            </p>
          </div>

          {/* Client video testimonials */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {videoTestimonials.map((t) => (
              <Card
                key={t.name}
                className="group overflow-hidden border border-[#e8e4da] rounded-2xl bg-white p-0 gap-0 shadow-[0_14px_36px_-16px_rgba(21,33,31,0.18)] hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-[320px] md:h-[380px] overflow-hidden">
                  <LazyVideo
                    src={t.video}
                    poster={t.poster}
                    muted
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 py-3">
                  <div className="text-sm font-semibold text-[#15211f]">{t.name}</div>
                  <div className="text-xs text-[#8aa09c] mt-0.5">{t.caption}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[#e8e4da]">
            <LazyVideo
              src="/testimonial-rami-hd.mp4"
              poster="/testimonial-rami-poster.jpg"
              autoPlay
              loop
              muted
              controls
              rootMargin="1500px"
              className="w-full h-auto"
            />
          </div>

          {/* Testimonial Photos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden border border-[#e8e4da] rounded-2xl bg-card p-0 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={`/testimonoal-pics/${image}`}
                    alt={`5-star client review of Rami Rafeh, San Antonio realtor at Key Turn Realty Group (${index + 1})`}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
