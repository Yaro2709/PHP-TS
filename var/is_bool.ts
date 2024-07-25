module.exports = function is_bool(mixedVar) {

  return mixedVar === true || mixedVar === false // Faster (in FF) than type checking
}
