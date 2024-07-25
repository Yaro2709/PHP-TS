module.exports = function is_real(mixedVar) {

  const _isFloat = require('./is_float')
  return _isFloat(mixedVar)
}
