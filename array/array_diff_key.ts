module.exports = function array_diff_key(arr1) {

  const argl = arguments.length
  const retArr = {}
  let k1 = ''
  let i = 1
  let k = ''
  let arr = {}

  arr1keys: for (k1 in arr1) {
    for (i = 1; i < argl; i++) {
      arr = arguments[i]
      for (k in arr) {
        if (k === k1) {
          // If it reaches here, it was found in at least one array, so try next value
          continue arr1keys  
        }
      }
      retArr[k1] = arr1[k1]
    }
  }

  return retArr
}
