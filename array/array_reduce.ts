module.exports = function array_reduce(aInput, callback) {

  const lon = aInput.length
  let res = 0
  let i = 0
  let tmp = []

  for (i = 0; i < lon; i += 2) {
    tmp[0] = aInput[i]
    if (aInput[i + 1]) {
      tmp[1] = aInput[i + 1]
    } else {
      tmp[1] = 0
    }
    res += callback.apply(null, tmp)
    tmp = []
  }

  return res
}
