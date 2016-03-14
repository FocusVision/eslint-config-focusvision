# eslint-config-focusvision

This package provides FocusVision's .eslintrc as an extensible shared config.

[![npm version](https://badge.fury.io/js/eslint-config-focusvision.svg)](https://badge.fury.io/js/eslint-config-focusvision)

## Usage

We export two ESLint configurations for your usage.

### eslint-config-focusvision

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-focusvision eslint-plugin-react eslint`
2. add `"extends": "focusvision"` to your .eslintrc

### eslint-config-focusvision/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-focusvision eslint`
2. add `"extends": "focusvision/base"` to your .eslintrc

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

You can make sure this module lints with itself using `npm run lint`.
