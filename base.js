module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'eslint-config-focusvision/rules/bestPractices',
    'eslint-config-focusvision/rules/errors',
    'eslint-config-focusvision/rules/es6',
    'eslint-config-focusvision/rules/style',
    'eslint-config-focusvision/rules/variables'
  ],
  rules: {}
}
