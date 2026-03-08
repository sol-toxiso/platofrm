/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Ensure proper server/client separation for Vercel
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
