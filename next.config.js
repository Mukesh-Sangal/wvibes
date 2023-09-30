/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'free.lndo.site:8000',
        port: '32769'
      },
    ],
  },
}

module.exports = nextConfig
