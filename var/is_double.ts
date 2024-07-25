module.exports = function is_double(mixedVar) {

  const _isFloat = require('./is_float')
  return _isFloat(mixedVar)
}
