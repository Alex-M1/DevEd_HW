module.exports = {
  collectCoverage: true,
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  globals: {
    window: true,
  },
  collectCoverageFrom: ['**/*.jsx', '**/*.js'],
  moduleDirectories: ['node_modules', '.', 'src'],
  testMatch: [
    '**/*.(test|spec).(js)',
    '**/*.(test|spec).(jsx)',
  ],
  coverageReporters: [
    'json',
    'lcov',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/testHelper.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/public/',
    '/dist/',
    'jest.config.js',
    'package.json',
    '/server/',
    '/coverage/',
    'webpack.config.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
    '^/src/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
};
