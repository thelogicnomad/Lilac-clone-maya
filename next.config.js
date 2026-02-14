const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    qualities: [50, 75, 85, 100],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
