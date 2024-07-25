module.exports = function array_intersect_key(arr1) {

  const retArr = {}
  const argl = arguments.length
  const arglm1 = argl - 1
  let k1 = ''
  let arr = {}
  let i = 0
  let k = ''

  arr1keys: for (k1 in arr1) {
    if (!arr1.hasOwnProperty(k1)) {
      continue
    }
    arrs: for (i = 1; i < argl; i++) {
      arr = arguments[i]
      for (k in arr) {
        if (!arr.hasOwnProperty(k)) {
          continue
        }
        if (k === k1) {
          if (i === arglm1) {
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
