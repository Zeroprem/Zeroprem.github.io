import type { NextConfig } from "next";

/**
 * Security headers are declared here rather than only in netlify.toml: the
 * Next.js runtime serves the rendered HTML itself and does not pick up
 * netlify.toml [[headers]] for those routes. netlify.toml still covers the
 * static files in public/ that the CDN serves directly.
 */
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
