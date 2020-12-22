module.exports = {
  collectCoverageFrom: ['**/*.{js,ts,tsx}', '!**/node_modules/**', '!**/.storybook/**', '!**/tests/**', '!**/coverage/**', '!jest.config.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFiles: ['<rootDir>/enzymeConfig.js'],
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/lib/', '/tests/', '/coverage/', '/.storybook/', 'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/__mocks__/CSSStub.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '.(ts|tsx)': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
