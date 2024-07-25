module.exports = function array_flip(trans) {

  let key
  const tmpArr = {}

  for (key in trans) {
    if (!trans.hasOwnProperty(key)) {
      continue
    }
    tmpArr[trans[key]] = key
  }

  return tmpArr
}
