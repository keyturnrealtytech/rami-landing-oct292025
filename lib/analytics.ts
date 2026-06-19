// Minimal GA4 (gtag) event helper. The site's Google tag loads lazily, so this
// seeds the gtag stub + dataLayer queue: events fired before gtag.js finishes
// loading are queued and replayed by gtag.js rather than dropped.
type EventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params?: EventParams): void {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== "function") {
    window.gtag = function () {
      // gtag consumes the arguments object, not an array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
  }
  window.gtag("event", name, params ?? {})
}
