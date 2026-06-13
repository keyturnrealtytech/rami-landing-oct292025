import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AccomplishmentsStrip } from "@/components/accomplishments-strip"
import { Tools } from "@/components/tools"
import { About } from "@/components/about"
import { InformativeVideos } from "@/components/informative-videos"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TestimonialVideo } from "@/components/testimonial-video"
import { Reviews } from "@/components/reviews"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AccomplishmentsStrip />
      <Reviews />
      <FeaturedDestinations />
      <Tools />
      <InformativeVideos />
      <About />
      <TestimonialVideo />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
