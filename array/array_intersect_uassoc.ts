module.exports = function array_intersect_uassoc(arr1) {

  const retArr = {}
  const arglm1 = arguments.length - 1
  const arglm2 = arglm1 - 1
  let cb = arguments[arglm1]
  // var cb0 = arguments[arglm2]
  let k1 = ''
  let i = 1
  let k = ''
  let arr = {}

  const $global = typeof window !== 'undefined' ? window : global

  cb =
    typeof cb === 'string'
      ? $global[cb]
      : Object.prototype.toString.call(cb) === '[object Array]'
        ? $global[cb[0]][cb[1]]
        : cb

  // cb0 = (typeof cb0 === 'string')
  //   ? $global[cb0]
  //   : (Object.prototype.toString.call(cb0) === '[object Array]')
  //     ? $global[cb0[0]][cb0[1]]
  //     : cb0

  arr1keys: for (k1 in arr1) {
    arrs: for (i = 1; i < arglm1; i++) {
      arr = arguments[i]
      for (k in arr) {
        if (arr[k] === arr1[k1] && cb(k, k1) === 0) {
          if (i === arglm2) {
            retArr[k1] = arr1[k1]
          }
          // If the innermost loop always leads at least once to an equal value,
          // continue the loop until done
          continue arrs  
        }
      }
      // If it reaches here, it wasn't found in at least one array, so try next value
      continue arr1keys  
    }
  }

  return retArr
}
