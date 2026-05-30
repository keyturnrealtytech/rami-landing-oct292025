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
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
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
  }, [rootMargin])

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
      poster={poster}
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
