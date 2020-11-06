module.exports = {
  plugins: [
    'autoprefixer',
    'postcss-flexbugs-fixes',
    'postcss-extend',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ]
  ]
}
