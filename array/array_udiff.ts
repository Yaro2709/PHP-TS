module.exports = function array_udiff(arr1) {

  const retArr = {}
  const arglm1 = arguments.length - 1
  let cb = arguments[arglm1]
  let arr = ''
  let i = 1
  let k1 = ''
  let k = ''

  const $global = typeof window !== 'undefined' ? window : global

  cb =
    typeof cb === 'string'
      ? $global[cb]
      : Object.prototype.toString.call(cb) === '[object Array]'
        ? $global[cb[0]][cb[1]]
        : cb

  arr1keys: for (k1 in arr1) {
    for (i = 1; i < arglm1; i++) {
      arr = arguments[i]
      for (k in arr) {
        if (cb(arr[k], arr1[k1]) === 0) {
          // If it reaches here, it was found in at least one array, so try next value
          continue arr1keys  
        }
      }
      retArr[k1] = arr1[k1]
    }
  }

  return retArr
}
