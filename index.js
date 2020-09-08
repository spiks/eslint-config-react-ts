module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
  },
  env: {
    browser: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    './rules/redefined',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['*.config.js'],
  overrides: [
    {
      files: ['*.js', '*jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
