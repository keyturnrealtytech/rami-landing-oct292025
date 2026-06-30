"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"

/**
 * Interactive FAQ accordion. Content stays mounted in the DOM (Radix only
 * toggles height/visibility), so search engines and the FAQPage JSON-LD still
 * see every answer even while collapsed.
 */
export function VaFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-4">
      {items.map((f, i) => (
        <Accordion.Item
          key={f.q}
          value={`item-${i}`}
          className="group rounded-2xl bg-white border border-[#e8e4da] overflow-hidden transition-colors hover:border-[#bfe0db] data-[state=open]:border-[#81D8D0] data-[state=open]:shadow-[0_18px_50px_-30px_rgba(31,107,99,0.5)]"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between gap-4 p-6 text-left">
              <span className="text-lg font-semibold text-[#15211f]">{f.q}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef7f5] text-[#1f6b63] transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-[#81D8D0] group-data-[state=open]:text-white">
                <Plus className="h-4 w-4" />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content overflow-hidden">
            <p className="px-6 pb-6 text-[#5d6f6c] leading-relaxed">{f.a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
