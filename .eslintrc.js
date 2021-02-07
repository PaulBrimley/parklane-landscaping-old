module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    semi: ['warn', 'always'],
    'spaced-comment': 0,
    'no-trailing-spaces': 0,
    'space-before-function-paren': 0,
    'no-multiple-empty-lines': 0,
    'no-undef': 1,
    'no-unused-vars': 0,
    'keyword-spacing': 0,
    'padded-blocks': 0,
    'prefer-promise-reject-errors': 0,
    'one-var': 0,
    indent: 0,
    'handle-callback-err': 0,
    'no-extend-native': 0,
    'comma-dangle': 1,
    'object-curly-spacing': 0,
    'no-tabs': 0,
    'no-useless-escape': 0,
    'prefer-const': 0,
    'lines-between-class-members': 0,
    'no-prototype-builtins': 0,
    'operator-linebreak': 0
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  plugins: [
    'react'
  ]
};
