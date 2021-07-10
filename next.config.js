module.exports = {
  webpack(config) {
    return config
  },
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}
