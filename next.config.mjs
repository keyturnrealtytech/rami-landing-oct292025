/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        // Old combined page split into /new-construction-homes-... and
        // /va-home-loans-...; preserve its earned SEO by 308-redirecting.
        source: "/va-loan-new-construction-san-antonio",
        destination: "/new-construction-homes-san-antonio",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Long-lived caching for static media in /public (videos & fonts never change).
        source: "/:path*\\.(mp4|webm|woff|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // Images may be swapped under the same filename — cache a week, then revalidate.
        source: "/:path*\\.(jpg|jpeg|png|gif|svg|webp|avif|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
    ]
  },
}

export default nextConfig
