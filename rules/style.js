module.exports = {
  'rules': {
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'no-array-constructor': 2,
    'no-new-object': 2,
    'quote-props': [2, 'as-needed', {
      'keywords': false,
      'unnecessary': true,
      'numbers': false
    }],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': [1, 'never']
  }
}
