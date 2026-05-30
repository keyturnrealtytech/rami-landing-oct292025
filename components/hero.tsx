import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ContactFormModal } from "@/components/contact-form-modal"
import { LazyVideo } from "@/components/lazy-video"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <LazyVideo
          src="/HERO-VIDEO.mp4"
          poster="/posters-hero.jpg"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight">
            Discover Your New Home in
            <span className="block font-semibold mt-2">San Antonio</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Rami Rafeh is a San Antonio realtor and retired Air Force veteran specializing in VA loans, first-time home
            buyers, and new construction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base group"
            >
              <a href="#destinations">
                Explore Listings
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <ContactFormModal>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 bg-transparent">
                Contact
              </Button>
            </ContactFormModal>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-border/50">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">200+</div>
            <div className="text-sm text-muted-foreground">Transactions</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">$50M+</div>
            <div className="text-sm text-muted-foreground">Homes Sold</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">5.0 ★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
