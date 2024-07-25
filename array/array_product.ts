module.exports = function array_product(input) {

  let idx = 0
  let product = 1
  let il = 0

  if (Object.prototype.toString.call(input) !== '[object Array]') {
    return null
  }

  il = input.length
  while (idx < il) {
    product *= !isNaN(input[idx]) ? input[idx] : 0
    idx++
  }

  return product
}
