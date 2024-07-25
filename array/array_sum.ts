module.exports = function array_sum(array) {

  let key
  let sum = 0

  // input sanitation
  if (typeof array !== 'object') {
    return null
  }

  for (key in array) {
    if (!isNaN(parseFloat(array[key]))) {
      sum += parseFloat(array[key])
    }
  }

  return sum
}
