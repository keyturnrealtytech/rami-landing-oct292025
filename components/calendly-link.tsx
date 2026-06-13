"use client"

import type React from "react"

export const CALENDLY_URL = "https://calendly.com/real_estate_rami/homeconsult"

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void }
  }
}

// Calendly's widget script is loaded lazily on first click — zero cost to page load.
let loader: Promise<void> | null = null
function loadCalendly(): Promise<void> {
  if (typeof window !== "undefined" && window.Calendly) return Promise.resolve()
  if (!loader) {
    loader = new Promise((resolve, reject) => {
      const css = document.createElement("link")
      css.rel = "stylesheet"
      css.href = "https://assets.calendly.com/assets/external/widget.css"
      document.head.appendChild(css)
      const js = document.createElement("script")
      js.src = "https://assets.calendly.com/assets/external/widget.js"
      js.onload = () => resolve()
      js.onerror = () => reject(new Error("Calendly widget failed to load"))
      document.body.appendChild(js)
    })
  }
  return loader
}

/** Opens the booking calendar in an on-page popup; falls back to a new tab. */
export function CalendlyLink({ children, className }: { children: React.ReactNode; className?: string }) {
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await loadCalendly()
      window.Calendly!.initPopupWidget({ url: CALENDLY_URL })
    } catch {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")
    }
  }
  return (
    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
