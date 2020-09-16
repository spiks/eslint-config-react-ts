module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    './rules/redefined',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['*.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
