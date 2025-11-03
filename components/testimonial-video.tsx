import { Card } from "@/components/ui/card"

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
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
              Client <span className="font-semibold">Testimonial</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto">
              Hear from our satisfied clients about their home buying experience
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="/TESTIMONIAL-rami.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Testimonial Photos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={`/testimonoal-pics/${image}`}
                    alt={`Client testimonial ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
