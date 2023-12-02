/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: { appDir: true },
  images: {
    domains: ['dev-growwives.pantheonsite.io'],
    minimumCacheTTL: 60,
  },
  trailingSlash: true,
}

module.exports = nextConfig
