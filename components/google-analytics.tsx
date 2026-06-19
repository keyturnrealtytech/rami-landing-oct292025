"use client"

import Script from "next/script"
import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"
import { useInteraction } from "@/lib/use-interaction"

export const GA_MEASUREMENT_ID = "G-279LG2PE95"

/**
 * Google Analytics 4 (gtag.js). Loads the base tag and configures the property.
 * Page views on client-side navigation are captured by GA4 Enhanced Measurement
 * (history events), so no manual per-route tracking is needed here.
 */
export function GoogleAnalytics() {
  // Load gtag.js only once the visitor engages — keeps ~66 KiB off the initial load.
  const interacted = useInteraction()

  // Capture tel:/mailto: clicks anywhere on the page. These aren't outbound http
  // links, so GA4 Enhanced Measurement's outbound-click tracking misses them.
  // trackEvent seeds the dataLayer queue, so clicks before gtag.js loads are replayed.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute("href") ?? ""
      if (href.startsWith("tel:")) trackEvent("phone_click", { link_url: href })
      else if (href.startsWith("mailto:")) trackEvent("email_click", { link_url: href })
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  if (!interacted) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
