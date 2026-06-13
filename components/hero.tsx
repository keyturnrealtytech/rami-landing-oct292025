import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ContactFormModal } from "@/components/contact-form-modal"
import { LazyVideo } from "@/components/lazy-video"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#eef7f5] to-[#faf8f4]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <LazyVideo
          src="/HERO-VIDEO.mp4"
          poster="/posters-hero.jpg"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/70 border border-[#81D8D0]/40 text-[#1f6b63] px-5 py-2 rounded-full text-xs font-medium tracking-[0.06em]">
            ★ 5.0 RATED · USAF VETERAN · VA LOAN EXPERT
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight text-[#15211f]">
            Discover Your New Home in
            <span className="block font-semibold mt-2 bg-gradient-to-r from-[#1f6b63] to-[#15211f] bg-clip-text text-transparent">
              San Antonio
            </span>
          </h1>

          <div className="mx-auto w-14 h-0.5 rounded-full bg-gradient-to-r from-[#c9a227] to-[#e2cb7a]" />

          <p className="text-lg md:text-xl text-[#5d6f6c] max-w-2xl mx-auto text-balance leading-relaxed">
            Rami Rafeh is a San Antonio realtor and retired Air Force veteran specializing in VA loans, first-time home
            buyers, and new construction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              asChild
              size="lg"
              className="bg-[#15211f] text-white hover:bg-[#15211f]/90 rounded-full px-8 h-14 text-base group shadow-[0_10px_28px_-10px_rgba(21,33,31,0.4)]"
            >
              <a href="#destinations">
                Explore Listings
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <ContactFormModal>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base border-2 border-[#81D8D0] bg-white/70 text-[#15211f] hover:bg-white"
              >
                Contact
              </Button>
            </ContactFormModal>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-[#e4e0d4]">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light text-[#15211f]">200+</div>
            <div className="text-xs uppercase tracking-[0.12em] text-[#8aa09c]">Transactions</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light text-[#15211f]">$50M+</div>
            <div className="text-xs uppercase tracking-[0.12em] text-[#8aa09c]">In Home Sales</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light text-[#15211f]">5.0 ★</div>
            <div className="text-xs uppercase tracking-[0.12em] text-[#8aa09c]">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
