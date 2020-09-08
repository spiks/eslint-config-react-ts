module.exports = {
  rules: {
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/destructuring-assignment': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/display-name': 'off',
    'react/button-has-type': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    curly: ['error', 'all'],
    'no-shadow': [
      'error',
      { builtinGlobals: false, hoist: 'never', allow: ['value'] },
    ],
    'max-len': ['error', { code: 120 }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'warn',
      {
        allowTernary: true,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block',
          'block-like',
          'break',
          'switch',
          'class',
          'return',
          'for',
          'if',
          'function',
          'while',
          'throw',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'block',
          'block-like',
          'break',
          'switch',
          'class',
          'return',
          'for',
          'if',
          'function',
          'while',
          'throw',
        ],
        next: '*',
      },
    ],
    'no-console': 'warn',
    'no-nested-ternary': 'off',
    'prefer-template': 'off',
    'no-alert': 'off',
    'consistent-return': 'off',
  },
};
