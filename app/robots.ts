import type { MetadataRoute } from "next"

// Major AI/answer-engine crawlers we explicitly welcome (search indexing,
// live browsing, and model grounding). Functionally covered by the "*" rule
// below, but listing them makes the intent unambiguous to each operator.
const AI_CRAWLERS = [
  "GPTBot", // OpenAI — model training
  "OAI-SearchBot", // OpenAI — ChatGPT Search index
  "ChatGPT-User", // OpenAI — ChatGPT live browsing
  "PerplexityBot", // Perplexity — index
  "Perplexity-User", // Perplexity — live browsing
  "ClaudeBot", // Anthropic — index/training
  "Claude-Web", // Anthropic — live browsing
  "anthropic-ai", // Anthropic — legacy
  "Google-Extended", // Google — Gemini grounding/training
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl — feeds many LLMs
  "cohere-ai", // Cohere
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://keyturnrealty.com/sitemap.xml",
  }
}
