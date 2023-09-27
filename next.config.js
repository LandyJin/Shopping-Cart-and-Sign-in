/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'avatars.githubusercontent.com',
              port: '',
              pathname: '/u/**',
          },
      ],
  },
}

module.exports = nextConfig

module.exports = {
    experimental: {
      serverActions: true,
    },
  }