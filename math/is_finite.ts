module.exports = function is_finite(val) {

  let warningType = ''

  if (val === Infinity || val === -Infinity) {
    return false
  }

  // Some warnings for maximum PHP compatibility
  if (typeof val === 'object') {
    warningType = Object.prototype.toString.call(val) === '[object Array]' ? 'array' : 'object'
  } else if (typeof val === 'string' && !val.match(/^[+-]?\d/)) {
    // simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
    warningType = 'string'
  }
  if (warningType) {
    const msg = 'Warning: is_finite() expects parameter 1 to be double, ' + warningType + ' given'
    throw new Error(msg)
  }

  return true
}
