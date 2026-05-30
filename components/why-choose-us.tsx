import { Globe, Shield, Headphones, Award, GraduationCap } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Large Network",
    description: "Direct connections with top builders and lenders across San Antonio for exclusive new construction deals",
  },
  {
    icon: Shield,
    title: "Secure Transaction",
    description: "Expert guidance through every step of the home buying process with complete transparency and protection",
  },
  {
    icon: Headphones,
    title: "Personalized Support",
    description: "Dedicated service for first-time buyers and veterans with support available whenever you need it",
  },
  {
    icon: Award,
    title: "Industry Expert",
    description: "Retired veteran with proven expertise in finding the best new construction homes and negotiating great deals",
  },
  {
    icon: GraduationCap,
    title: "VA Home Loan Expert",
    description: "Specializes in VA loans, educating and guiding clients through the entire home buying process",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Why Choose <span className="font-semibold">Rami</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            First-time homebuyers, veterans, and military families across San Antonio trust Rami to find the right home
            for their needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
