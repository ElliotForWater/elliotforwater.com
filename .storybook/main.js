const path = require('path')

module.exports = {
  stories: [
    '../components/**/**/*.stories.@(tsx|js)',
    '../webComponents/**/**/*.stories.@(tsx|js)',
  ],
  addons: ['@storybook/addon-docs'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  webpackFinal: async (config) => {
    // Remove the existing css rule
    config.module.rules = config.module.rules.filter((f) => f.test.toString() !== '/\\.css$/')

    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true, // Enable modules to help you using className
          },
        },
      ],
      include: [path.resolve(__dirname, '../components'), path.resolve(__dirname, '../styles')],
    })

    return config
  },
}
