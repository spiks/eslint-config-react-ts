module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    './rules/redefined',
  ],
  ignorePatterns: ['*.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
