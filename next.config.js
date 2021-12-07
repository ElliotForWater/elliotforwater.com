const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPlugins = require('next-compose-plugins')
const nextTranslate = require('next-translate')

module.exports = withPlugins([[withBundleAnalyzer], nextTranslate], {
  async redirects() {
    return [
      {
        source: '/why-water.html',
        destination: '/why-water',
        permanent: true,
      },
    ]
  },

  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://elliotforwaterblogstaging.azurewebsites.net/blog',
      },
      {
        source: '/blog/:path*',
        destination: `https://elliotforwaterblogstaging.azurewebsites.net/blog/:path*`,
      },
      {
        source: '/it/blog/:path*',
        destination: `https://elliotforwaterblogstaging.azurewebsites.net/it/blog/:path*`,
      },
    ]
  },
})
