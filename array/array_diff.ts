module.exports = function array_diff(arr1) {

  const retArr = {}
  const argl = arguments.length
  let k1 = ''
  let i = 1
  let k = ''
  let arr = {}

  arr1keys: for (k1 in arr1) {
    for (i = 1; i < argl; i++) {
      arr = arguments[i]
      for (k in arr) {
        if (arr[k] === arr1[k1]) {
          // If it reaches here, it was found in at least one array, so try next value
          continue arr1keys  
        }
      }
      retArr[k1] = arr1[k1]
    }
  }

  return retArr
}