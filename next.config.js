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
      {
        source: '/it',
        destination: '/',
        permanent: true,
      },
      {
        source: '/it/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/blog/search:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/search:path*`,
        permanent: true,
      },
    ]
  },

  async rewrites() {
    return [
      {
        source: '/blog',
        destination: `${process.env.NEXT_PUBLIC_BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${process.env.NEXT_PUBLIC_BLOG_URL}/blog/:path*`,
      },
    ]
  },
})
