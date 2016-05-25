# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/)

## [1.0.1] - 2016-05-24
### Changed
* `no-param-reassign`: Warn instead of error when params have been reassigned
* `arrayInObjects`: Enforce space after fianl closing array brack inside object

### Removed
* `no-shadow`: Allow callbacks to shadow external variables
* `no-undefined`: Allow the use of `undefined` as an argument for redux store
  initialization
* `no-use-before-define`: Allow functions to be used before they are defined
  since they can be hoisted
