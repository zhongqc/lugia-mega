module.exports = {
  testMatch: ['**/?(*.)(spec|test|e2e).(j|t)s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/examples/',
    '/lib/',
    '/babel-preset-mega/test.js',
    '/mega-scripts/src/test.js',
  ],
  collectCoverageFrom: ['packages/*/lib/**/*.{ts,tsx,js,jsx}'],
};