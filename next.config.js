/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/flask/:path*',
        destination: 'http://127.0.0.1:5328/api/:path*', // Proxy to Backend
      },
    ]
  },
}

module.exports = nextConfig
