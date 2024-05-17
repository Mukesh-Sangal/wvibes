/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
});
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
    minimumCacheTTL: 60,
  },
  trailingSlash: true,
}

module.exports = nextConfig
