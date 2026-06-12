import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/contact-form-modal"
import { LazyVideo } from "@/components/lazy-video"

const videos = [
  {
    title: "Informative Video 1",
    video: "/informative-vid-1.mp4",
    poster: "/posters-informative-1.jpg",
  },
  {
    title: "Informative Video 2",
    video: "/informative-vid-2.mp4",
    poster: "/posters-informative-2.jpg",
  },
  {
    title: "Informative Video 3",
    video: "/informative-vid-3.mp4",
    poster: "/posters-informative-3.jpg",
  },
]

export function InformativeVideos() {
  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Informative <span className="font-semibold">Videos</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Watch and learn about the home buying process with Rami
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 pointer-events-none" />
              </div>
            </Card>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-16">
          <ContactFormModal>
            <Button
              size="lg"
              className="w-full max-w-md h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base font-semibold"
            >
              Start My Home Search
            </Button>
          </ContactFormModal>
        </div>
      </div>
    </section>
  )
}
