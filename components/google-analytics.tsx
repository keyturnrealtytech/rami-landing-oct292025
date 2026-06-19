"use client"

import Script from "next/script"

export const GA_MEASUREMENT_ID = "G-SGSPHTHEP9"

/**
 * Google Analytics 4 (gtag.js). Loads the base tag and configures the property.
 * Page views on client-side navigation are captured by GA4 Enhanced Measurement
 * (history events), so no manual per-route tracking is needed here.
 */
export function GoogleAnalytics() {
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
