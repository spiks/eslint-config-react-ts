module.exports = {
  overrides: [
    {
      files: [ '**/*/icons/**/*.tsx'],
      rules: {
        'max-len': 'off',
      },
    },
  ],

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
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'warn',
      {
        allowTernary: true,
      },
    ],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
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
    'no-nested-ternary': 'off',
    'prefer-template': 'off',
    'no-alert': 'off',
    'consistent-return': 'off',
    'max-classes-per-file': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/category.ts',
          '**/*.stories.tsx',
          '**/types.ts',
        ],
      },
    ],
    //: TODO сделать правило корректным
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'no-plusplus': 'off',
    'default-case': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-case-declarations': 'off',
    'no-continue': 'off',
    'prefer-destructuring': 'off',
    'object-curly-newline': ['error', {
      'ObjectExpression': {
        consistent: true,
      },
      'ObjectPattern': { 'multiline': true },
      'ImportDeclaration': { 'multiline': true},}
    ],
    'react/jsx-indent': ['error', 2, {
      indentLogicalExpressions: true,
    }],
    "no-else-return": "off",
    "no-lonely-if": "off",
    "brace-style": ["error", "1tbs", { "allowSingleLine": false }]
  },
};
