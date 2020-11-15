const { locales, defaultLocale } = require('./i18n')

module.exports = {
  i18n: {
    locales,
    defaultLocale
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/why-water': { page: '/why-water' },
      '/404': { page: '404' }
    }
  }
}
