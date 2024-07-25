module.exports = function array_replace(arr) {

  const retObj = {}
  let i = 0
  let p = ''
  const argl = arguments.length

  if (argl < 2) {
    throw new Error('There should be at least 2 arguments passed to array_replace()')
  }

  // Although docs state that the arguments are passed in by reference,
  // it seems they are not altered, but rather the copy that is returned
  // (just guessing), so we make a copy here, instead of acting on arr itself
  for (p in arr) {
    retObj[p] = arr[p]
  }

  for (i = 1; i < argl; i++) {
    for (p in arguments[i]) {
      retObj[p] = arguments[i][p]
    }
  }

  return retObj
}
