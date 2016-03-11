module.exports = {
  'plugins': [
    'react'
  ],
  'ecmaFeatures': {
    'jsx': true
  },
  'rules': {
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
    'react/wrap-multilines': 1
  }
}
