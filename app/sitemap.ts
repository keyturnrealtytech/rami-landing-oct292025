import type { MetadataRoute } from "next"

// Bump this only when the homepage's actual content changes. Using a fixed date
// (rather than new Date()) keeps lastmod stable across builds so search engines
// don't treat every deploy as a content change.
const LAST_CONTENT_CHANGE = "2026-06-18"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://keyturnrealty.com",
      lastModified: LAST_CONTENT_CHANGE,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
