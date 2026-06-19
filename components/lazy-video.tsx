"use client"

import { useEffect, useRef, useState } from "react"

interface LazyVideoProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  /** How far before entering the viewport to start loading. Larger = earlier head-start. */
  rootMargin?: string
  /**
   * For decorative above-the-fold video (e.g. the hero background): don't load
   * during the critical render path. Wait until the page has loaded and the main
   * thread is idle, and skip entirely on data-saver / slow connections. Keeps the
   * heavy video from competing with LCP on throttled mobile.
   */
  deferUntilIdle?: boolean
}

/**
 * Renders a poster image instantly and only downloads + plays the video
 * once it scrolls into view (IntersectionObserver). Keeps the page's first
 * paint fast on mobile by deferring heavy video until needed.
 */
export function LazyVideo({
  src,
  poster,
  className,
  autoPlay,
  loop,
  muted,
  controls,
  rootMargin = "300px",
  deferUntilIdle = false,
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Decorative hero video: keep it off the critical path entirely.
    if (deferUntilIdle) {
      const conn = (navigator as any).connection
      if (conn && (conn.saveData || ["slow-2g", "2g", "3g"].includes(conn.effectiveType))) {
        return // poster only — never download the video on constrained networks
      }
      let cancelled = false
      const trigger = () => {
        if (cancelled) return
        const ric = (window as any).requestIdleCallback
        ric ? ric(() => setInView(true), { timeout: 3000 }) : setTimeout(() => setInView(true), 1200)
      }
      if (document.readyState === "complete") trigger()
      else window.addEventListener("load", trigger, { once: true })
      return () => {
        cancelled = true
        window.removeEventListener("load", trigger)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, deferUntilIdle])

  useEffect(() => {
    const el = ref.current
    if (!inView || !el) return
    el.muted = !!muted
    el.load()
    if (autoPlay) {
      el.play().catch(() => {})
    }
  }, [inView, autoPlay, muted])

  return (
    <video
      ref={ref}
      // Hero poster stays eager (it's the preloaded LCP); other posters load only
      // when the video nears the viewport, so off-screen posters don't load up-front.
      poster={deferUntilIdle || inView ? poster : undefined}
      preload="none"
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline
      className={className}
    >
      {inView && <source src={src} type="video/mp4" />}
    </video>
  )
}
