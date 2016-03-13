module.exports = {
  'plugins': [
    'react'
  ],
  'parser-options': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-curly-spacing': 0,
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-handler-names': [2, {
      'eventHandlerPrefix': 'handle',
      'eventHandlerPropPrefix': 'on'
    }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': [2, { 'allowArrowFunctions': true }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-space-before-closing': [2, 'always'],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 2,
    'react/prop-types': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 0,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-unknown-property': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': [2, { 'extensions': ['.js', '.jsx'] }],
    'react/sort-comp': 2,
    'react/self-closing-comp': 2,
    'react/sort-prop-types': [2, { 'ignoreCase': true }],
    'react/wrap-multilines': 2
  }
}
