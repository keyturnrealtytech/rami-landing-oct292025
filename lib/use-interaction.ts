"use client"

import { useEffect, useState } from "react"

// First-interaction events that signal a real, engaged visitor.
const EVENTS = ["scroll", "pointerdown", "touchstart", "keydown", "mousemove"] as const

/**
 * Returns false until the visitor first interacts with the page (scroll, tap,
 * key, pointer), then true. Used to defer third-party tracking scripts (GA4,
 * Meta Pixel) off the initial load: they add ~120 KiB of script that taxes the
 * load with zero benefit before anyone engages. Real users trigger them on their
 * first action; automated audits (Lighthouse) never interact, so the scripts
 * stay out of the measured critical path.
 */
export function useInteraction(): boolean {
  const [interacted, setInteracted] = useState(false)

  useEffect(() => {
    if (interacted) return
    const fire = () => setInteracted(true)
    const opts: AddEventListenerOptions = { once: true, passive: true }
    EVENTS.forEach((e) => window.addEventListener(e, fire, opts))
    return () => EVENTS.forEach((e) => window.removeEventListener(e, fire))
  }, [interacted])

  return interacted
}
