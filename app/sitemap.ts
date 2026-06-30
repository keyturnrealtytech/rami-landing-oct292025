import type { MetadataRoute } from "next"

// Bump this only when the homepage's actual content changes. Using a fixed date
// (rather than new Date()) keeps lastmod stable across builds so search engines
// don't treat every deploy as a content change.
const LAST_CONTENT_CHANGE = "2026-06-30"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://keyturnrealty.com",
      lastModified: LAST_CONTENT_CHANGE,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://keyturnrealty.com/va-loan-new-construction-san-antonio",
      lastModified: LAST_CONTENT_CHANGE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://keyturnrealty.com/first-time-home-buyer-san-antonio",
      lastModified: LAST_CONTENT_CHANGE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
