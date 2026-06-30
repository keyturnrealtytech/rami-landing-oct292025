import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendlyLink } from "@/components/calendly-link"

export function About() {
  return (
    <section id="meet-rami" className="py-32 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Headshot */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-muted border border-[#e8e4da]">
              <Image
                src="/rami-rafeh-headshot.png"
                alt="Rami Rafeh, San Antonio realtor and service-disabled Air Force and Army veteran, Key Turn Realty Group"
                width={1154}
                height={1104}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#1f6b63] font-semibold">About</div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-balance text-[#15211f]">
              Meet <span className="font-semibold">Rami Rafeh</span>
            </h2>
            <div className="w-14 h-0.5 rounded-full bg-gradient-to-r from-[#c9a227] to-[#e2cb7a]" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Buying or selling a home is one of the biggest decisions you'll make — and you deserve someone in your
              corner who listens, knows the market, and puts you first. That's how I work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a San Antonio real estate agent and a 100% service-disabled U.S. Air Force and Army veteran, so I
              understand firsthand how stressful a move can be — especially a PCS into a new city or buying your very
              first home. I specialize in VA loans, first-time home buyers, and new construction, and a big part of my
              work is helping fellow veterans and military families use their benefits to buy with confidence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Last year alone I closed 55 homes — more than $19 million in sales — for families across San Antonio and
              the surrounding Hill Country, from Boerne and New Braunfels to Schertz, Cibolo, and the fast-growing
              northwest. Whether you're buying your first home, selling, or relocating to Texas, I'd be glad to talk it
              through — no pressure, no obligation.
            </p>

            {/* Trust row */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <div className="text-3xl font-light">55</div>
                <div className="text-sm text-muted-foreground">Homes closed last year</div>
              </div>
              <div>
                <div className="text-3xl font-light">$19M</div>
                <div className="text-sm text-muted-foreground">In home sales last year</div>
              </div>
              <div>
                <div className="text-3xl font-light">5.0 ★</div>
                <div className="text-sm text-muted-foreground">Across Google, Zillow &amp; Realtor.com</div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#15211f] text-white hover:bg-[#15211f]/90 rounded-full px-8 h-14 text-base shadow-[0_10px_28px_-10px_rgba(21,33,31,0.4)]"
              >
                <CalendlyLink>Book a free consultation</CalendlyLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
