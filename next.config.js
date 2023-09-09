/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'usemed.com.br',
          },
        ],
        destination: 'wayfly.com.br',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
