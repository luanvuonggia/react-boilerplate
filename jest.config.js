module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/**/*.{css,scss,sass}',
    '!src/**/index.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/internals/testing/setupTests.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/*.{js,jsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx}',
  ],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/internals/testing/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
      '<rootDir>/internals/testing/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  modulePaths: [],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/internals/testing/svgrMock.js',
  },
  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  resetMocks: true,
};
