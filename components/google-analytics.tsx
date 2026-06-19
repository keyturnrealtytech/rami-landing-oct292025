"use client"

import Script from "next/script"
import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

export const GA_MEASUREMENT_ID = "G-279LG2PE95"

/**
 * Google Analytics 4 (gtag.js). Loads the base tag and configures the property.
 * Page views on client-side navigation are captured by GA4 Enhanced Measurement
 * (history events), so no manual per-route tracking is needed here.
 */
export function GoogleAnalytics() {
  // Capture tel:/mailto: clicks anywhere on the page. These aren't outbound http
  // links, so GA4 Enhanced Measurement's outbound-click tracking misses them.
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

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
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
