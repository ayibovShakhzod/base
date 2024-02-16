/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
  async rewrites() {
    return [
      {
        source: `/${process.env.NEXT_PUBLIC_API_PREFIX}/:path*`,
        destination: `${process.env.NEXT_PUBLIC_API}/:path*`,
      }
    ]
  }
}

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer(nextConfig)

