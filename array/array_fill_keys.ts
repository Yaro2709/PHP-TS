module.exports = function array_fill_keys(keys, value) {

  const retObj = {}
  let key = ''

  for (key in keys) {
    retObj[keys[key]] = value
  }

  return retObj
}
