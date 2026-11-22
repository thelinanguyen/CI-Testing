export default {
  testEnvironment: 'node',

  testMatch: [
    '**/tests/**/*.test.js'
  ],

  collectCoverageFrom: [
    'src/**/*.js',
    '!src/.internal/**'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    'text',
    'lcov',
    'html'
  ]
}