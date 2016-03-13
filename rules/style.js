module.exports = {
  'rules': {
    'array-bracket-spacing': [2, 'never'],
    'brace-style': [2, '1tbs', { 'allowSingleLine': false }],
    'camelcase': [2, { 'properties': 'never' }],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'indent': [2, 2, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
    'max-len': [2, 80, 2, {
      'ignoreComments': true,
      'ignoreUrls': true
    }],
    'new-cap': [2, { 'newIsCap': true }],
    'newline-per-chained-call': [0, { 'ignoreChainWithDepth': 3 }],
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    'no-array-constructor': 2,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'always', {
      'arraysInObjects': false,
      'objectsInObjects': false
    }],
    'one-var': [2, 'never'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed', {
      'keywords': false,
      'unnecessary': true,
      'numbers': false
    }],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': [1, 'never'],
    'space-before-blocks': [2, 'always'],
    'space-infix-ops': 2,
    'space-in-parens': [2, 'never']
  }
}
