# Premium Visual Refresh — Design Spec

Approved by Rami 2026-06-12 via visual companion previews (`.superpowers/brainstorm/30019-1781304329/content/`, final: `full-preview-v2.html`, `banners.html`, `client-stories-final-v2.html`).

## Goal

Make keyturnrealty.com read as a high-end, top-producer site without changing what works: the one-page funnel structure, the load speed, and the lead pipeline. Pure CSS/Tailwind restyle — **no new JavaScript, no new fonts, no new dependencies**.

## Design system

| Token | Value | Use |
|---|---|---|
| Ivory | `#faf8f4` | Page base, alternating sections |
| Ivory-mint wash | `linear-gradient(#eef7f5 → #faf8f4)` | Hero top, Client Stories |
| Ink | `#15211f` | Text, primary buttons |
| Deep ink | `#0f1a18` | Dark bookend (closing CTA + footer) and accomplishments strip ONLY |
| Tiffany | `#81D8D0` | Accents, badge, washes, dark-section CTA |
| Teal-deep | `#1f6b63` | Section labels, gradient endpoint |
| Gold | `#c9a227` (→ `#e2cb7a`) | Hairline dividers, review stars only |

Typography: Prompt (existing). Display headings weight 300 with `font-semibold` spans, tracking-tight. Section pattern: small-caps Tiffany-teal label → light H2 → muted sub.

Dark is used exactly three times: accomplishments strip, closing CTA, footer.

## Sections (page order unchanged)

1. **Navbar** — ivory-glass scrolled state (`#eef7f5` tint), ink CTA pill.
2. **Hero** — wash gradient; badge `★ 5.0 RATED · USAF VETERAN · VA LOAN EXPERT`; H1 with gradient ink→teal on "San Antonio"; gold divider; pill CTAs (ink solid + Tiffany outline); stats row (light numerals, uppercase labels). Background video stays, low opacity.
3. **Accomplishments strip (NEW)** — thin deep-ink CSS marquee below hero, gold hairline borders, pause on hover. Items (Rami-approved wording, "55+" per his explicit choice over the RealTrends-verified 52):
   `Top 1.5% of Realtors Nationwide ◆ Top 1% in Texas ◆ RealTrends Verified ◆ Top 25 U.S. Small Team by Units · Q4 2024 ◆ 55+ Deals Closed Last Year ◆ $50M+ in Closed Deals ◆ 5.0★ Google · Zillow · Realtor.com ◆ U.S. Air Force Veteran ◆ VA Loan Specialist`
   RealTrends mark rendered as styled text "REALTRENDS VERIFIED ✓" (official asset can replace later).
4. **About** — label "About", H2 "Meet **Rami Rafeh**", gold divider, rounded-22 headshot with hairline border, existing copy, ink pill CTA.
5. **Informative Videos** — label "Learn the Process"; caption bars with real durations (1:17, 1:28, 0:32) — no invented topic titles.
6. **Featured Homes** (was Featured Destinations) — label + "Featured **Homes**"; caption bars "San Antonio · Video tour"; hairline borders, radius 18. Real neighborhood data pending from Rami.
7. **Why Rami** — 5 compact pillars: Tiffany-ring icon circles, short titles.
8. **Client Stories** (merges TestimonialVideo + Reviews):
   - 4 NEW testimonial video cards (lazy, poster-first): Blake W., Alejandro D., Dawana B., Delita S. — captions "Bought with Rami · San Antonio" / "Closed 2026 · San Antonio" (FUB-verified for Dawana/Delita)
   - Existing main testimonial video (39s) below
   - 17-photo closing-day wall (kept, restyled)
   - **Review marquee (NEW)**: CSS auto-scroll, pause on hover, all 12 written reviews
   - **All displayed reviewer names = first name + last initial** (Rami's instruction). Schema author names likewise; reviewCount → 12 (adds Christopher J.).
9. **Dark bookend** — closing CTA (`#0f1a18`, label "Let's Talk", Tiffany-glow pill "Start My Home Search") + footer (same ink, compliance line with gold stars).
10. **Form modal / mobile CTA bar** — align surfaces to ivory/ink; behavior untouched.

## Performance guardrails

- Marquees: pure CSS `@keyframes translateX(-50%)` with duplicated content; `prefers-reduced-motion` disables.
- New testimonial videos already H.264/faststart, 15.6MB total, lazy-loaded via existing `LazyVideo`.
- Lighthouse (mobile, local prod) must not score below the pre-redesign baseline (perf 59 local / LCP 8.8s / 2,233 KiB).

## Out of scope

Real listing card data (Rami to supply), RealTrends official logo asset, crop of black bars on client-testimonial-4 (polish step if time allows), multi-page SEO expansion.
