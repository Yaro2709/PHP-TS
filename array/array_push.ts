module.exports = function array_push(inputArr) {

  let i = 0
  let pr = ''
  const argv = arguments
  const argc = argv.length
  const allDigits = /^\d$/
  let size = 0
  let highestIdx = 0
  let len = 0

  if (inputArr.hasOwnProperty('length')) {
    for (i = 1; i < argc; i++) {
      inputArr[inputArr.length] = argv[i]
    }
    return inputArr.length
  }

  // Associative (object)
  for (pr in inputArr) {
    if (inputArr.hasOwnProperty(pr)) {
      ++len
      if (pr.search(allDigits) !== -1) {
        size = parseInt(pr, 10)
        highestIdx = size > highestIdx ? size : highestIdx
      }
    }
  }
  for (i = 1; i < argc; i++) {
    inputArr[++highestIdx] = argv[i]
  }

  return len + i - 1
}
