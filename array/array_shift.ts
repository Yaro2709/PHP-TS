module.exports = function array_shift(inputArr) {

  if (inputArr.length === 0) {
    return null
  }
  if (inputArr.length > 0) {
    return inputArr.shift()
  }
}
