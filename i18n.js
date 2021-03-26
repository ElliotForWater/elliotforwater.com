module.exports = {
  locales: ['en', 'it'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home'],
    '/why-water': ['whyWater'],
    '/about': ['about'],
    '/terms': ['terms'],
    '/privacy': ['privacy'],
    '/search': ['search'],
  },
  // make sure pages' `getInitialProps` are accessible via
  // `App.getInitialProps` in `_app`
  // https://github.com/vinissimus/next-translate#3-configuration
  staticsHoc: require('hoist-non-react-statics'),
}
