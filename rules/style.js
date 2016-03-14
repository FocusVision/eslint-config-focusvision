module.exports = {
  'rules': {
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', { 'allowSingleLine': false }],
    'camelcase': [2, { 'properties': 'never' }],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': 0,
    'eol-last': 1,
    'func-names': 0,
    'func-style': [0, 'declaration', { 'allowArrowFunctions': true }],
    'indent': [2, 2, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    'max-len': [2, 80, 2, {
      'ignoreComments': true,
      'ignoreUrls': true
    }],
    'new-cap': [2, { 'newIsCap': true }],
    'new-parens': 2,
    'newline-per-chained-call': [0, { 'ignoreChainWithDepth': 3 }],
    'no-array-constructor': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { 'max': 2, 'maxEOF': 1, 'maxBOF': 0 }],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
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
    'semi': [2, 'never'],
    'space-before-blocks': [2, 'always'],
    'space-infix-ops': 2,
    'space-in-parens': [2, 'never'],
    'spaced-comment': [2, 'always']
  }
}
