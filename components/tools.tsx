import { ToolsWidgets } from "@/components/tools-widgets"

export function Tools() {
  return (
    <section id="tools" className="py-32 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#1f6b63] font-semibold mb-3">
            Run Your Numbers
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance text-[#15211f]">
            Try it <span className="font-semibold">yourself</span>
          </h2>
          <p className="text-lg text-[#5d6f6c] text-balance leading-relaxed">
            Two minutes, no contact info needed — see what's actually possible before you talk to anyone.
          </p>
        </div>

        <ToolsWidgets />
      </div>
    </section>
  )
}
