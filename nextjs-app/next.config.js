/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.vivino.com'],
    unoptimized: true
  },
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig