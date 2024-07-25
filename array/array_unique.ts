module.exports = function array_unique(inputArr) {

  let key = ''
  const tmpArr2 = {}
  let val = ''

  const _arraySearch = function (needle, haystack) {
    let fkey = ''
    for (fkey in haystack) {
      if (haystack.hasOwnProperty(fkey)) {
        if (haystack[fkey] + '' === needle + '') {
          return fkey
        }
      }
    }
    return false
  }

  for (key in inputArr) {
    if (inputArr.hasOwnProperty(key)) {
      val = inputArr[key]
      if (_arraySearch(val, tmpArr2) === false) {
        tmpArr2[key] = val
      }
    }
  }

  return tmpArr2
}
