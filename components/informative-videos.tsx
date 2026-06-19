import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/contact-form-modal"
import { LazyVideo } from "@/components/lazy-video"

const videos = [
  {
    title: "Watch with Rami",
    duration: "1:17",
    video: "/informative-vid-1.mp4",
    poster: "/posters-informative-1.jpg",
  },
  {
    title: "Watch with Rami",
    duration: "1:28",
    video: "/informative-vid-2.mp4",
    poster: "/posters-informative-2.jpg",
  },
  {
    title: "Watch with Rami",
    duration: "0:32",
    video: "/informative-vid-3.mp4",
    poster: "/posters-informative-3.jpg",
  },
]

export function InformativeVideos() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#1f6b63] font-semibold mb-3">
            Learn the Process
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance text-[#15211f]">
            Informative <span className="font-semibold">Videos</span>
          </h2>
          <p className="text-lg text-[#5d6f6c] text-balance leading-relaxed">
            Watch and learn about the home buying process with Rami
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-[#e8e4da] rounded-2xl bg-white p-0 gap-0 hover:shadow-2xl transition-all duration-500"
            >
              {/* Video */}
              <div className="relative h-[600px] overflow-hidden">
                <LazyVideo
                  src={item.video}
                  poster={item.poster}
                  autoPlay
                  loop
                  muted
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#15211f]">{item.title}</span>
                <span className="text-xs text-[#5f736f]">▶ {item.duration}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <ContactFormModal>
            <Button
              size="lg"
              className="w-full max-w-md h-12 bg-[#15211f] text-white hover:bg-[#15211f]/90 rounded-full text-base font-semibold shadow-[0_10px_28px_-10px_rgba(21,33,31,0.4)]"
            >
              Start My Home Search
            </Button>
          </ContactFormModal>
        </div>
      </div>
    </section>
  )
}
