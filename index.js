module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true
  },
  extends: ['eslint-config-focusvision/rules/react'],
  'ecmaFeatures': {
    'modules': true,
    'blockBindings': true
  },
  'rules': {
    'comma-dangle': 2,
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'curly': 2,
    'dot-notation': 1,
    'eqeqeq': [2, 'allow-null'],
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
    'semi': [1, 'never']
  }
}
