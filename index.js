module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true
  },
  'plugins': [
    'react'
  ],
  'ecmaFeatures': {
    'jsx': true,
    'modules': true,
    'blockBindings': true
  },
  'rules': {
    'comma-dangle': 2,
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'curly': 2,
    'dot-notation': 1,
    'eqeqeq': [2, 'allow-null'],
    'jsx-quotes': [2, 'prefer-single'],
    'no-constant-condition': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-func-assign': 2,
    'no-unreachable': 2,
    'no-unused-vars': 2,
    'no-var': 2,
    'quotes': [2, 'single', 'avoid-escape'],
    'react/jsx-boolean-value': [1, 'always'],
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-sort-prop-types': [1, { 'ignoreCase': true }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-uses-react': 2,
    'react/prop-types': 1,
    'react/no-direct-mutation-state': 2,
    'react/no-unknown-property': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/wrap-multilines': 1,
    'semi': [1, 'never']
  }
}
