module.exports = function array_pop(inputArr) {

  let key = ''
  let lastKey = ''

  if (inputArr.hasOwnProperty('length')) {
    // Indexed
    if (!inputArr.length) {
      // Done popping, are we?
      return null
    }
    return inputArr.pop()
  } else {
    // Associative
    for (key in inputArr) {
      if (inputArr.hasOwnProperty(key)) {
        lastKey = key
      }
    }
    if (lastKey) {
      const tmp = inputArr[lastKey]
      delete inputArr[lastKey]
      return tmp
    } else {
      return null
    }
  }
}
