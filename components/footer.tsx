import { Instagram, Facebook, Phone, Mail } from "lucide-react"
import { CalendlyLink } from "@/components/calendly-link"

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0f1a18] border-t border-[#1f2e2b] text-[#f2f4f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-semibold tracking-tight text-[#f2f4f3]">Key Turn Realty Group</div>
            <p className="text-sm text-[#9fb2af] leading-relaxed">
              Rami Rafeh, REALTOR® — a retired U.S. Air Force veteran helping San Antonio veterans, military families,
              and first-time buyers find home. VA loans · first-time buyers · new construction.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/key_turn_realty/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center p-2 -m-2 text-[#9fb2af] hover:text-[#81D8D0] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/keyturnrealtyrealtygroup/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center p-2 -m-2 text-[#9fb2af] hover:text-[#81D8D0] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#81D8D0]">Get in touch</div>
            <a href="tel:+17134409407" className="flex items-center gap-2 text-sm text-[#e8ece9] hover:text-[#81D8D0] transition-colors">
              <Phone className="h-4 w-4" /> (713) 440-9407
            </a>
            <a
              href="mailto:admin@keyturnrealty.com"
              className="flex items-center gap-2 text-sm text-[#e8ece9] hover:text-[#81D8D0] transition-colors"
            >
              <Mail className="h-4 w-4" /> admin@keyturnrealty.com
            </a>
            <CalendlyLink className="inline-block text-sm font-medium text-[#81D8D0] hover:underline">
              Book a free consultation →
            </CalendlyLink>
          </div>

          {/* Areas served */}
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#81D8D0]">Areas served</div>
            <p className="text-sm text-[#9fb2af] leading-relaxed">
              San Antonio &amp; the surrounding Hill Country — Boerne, New Braunfels, Schertz, Cibolo, Universal City,
              Alamo Ranch, and Stone Oak — across Bexar, Comal, Guadalupe &amp; Kendall counties.
            </p>
          </div>
        </div>

        {/* Compliance + copyright */}
        <div className="mt-16 pt-8 border-t border-[#1f2e2b] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#8a9d97]">
          <p>
            © {new Date().getFullYear()} Key Turn Realty Group. Brokered by Real Broker, LLC. TREC License #724566.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="/iabs.pdf" target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:underline">
              Information About Brokerage Services
            </a>
            <a
              href="/consumer-protection-notice.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-1.5 hover:underline"
            >
              TREC Consumer Protection Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
