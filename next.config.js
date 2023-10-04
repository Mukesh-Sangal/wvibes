/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'free.lndo.site',
        port: ' ',
        pathname: ' '
      },
    ],
  },
}

module.exports = nextConfig
