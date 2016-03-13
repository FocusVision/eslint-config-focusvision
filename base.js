module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true
  },
  'ecmaFeatures': {
    'modules': true,
    'blockBindings': true
  },
  extends: [
    'eslint-config-focusvision/rules/bestPractices',
    'eslint-config-focusvision/rules/errors',
    'eslint-config-focusvision/rules/es6',
    'eslint-config-focusvision/rules/style',
    'eslint-config-focusvision/rules/variables'
  ],
  'rules': {}
}
