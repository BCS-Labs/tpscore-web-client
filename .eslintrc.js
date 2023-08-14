module.exports = {
  extends: [
    'next/core-web-vitals',
    'next',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '*.+(css)',
            group: 'object',
            patternOptions: {
              matchBase: true,
            },
            position: 'after',
          },
        ],
      },
    ],
    '@next/next/no-img-element': 'off',
  },
}
