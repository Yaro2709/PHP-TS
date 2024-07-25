module.exports = function array_rand(array, num) {

  // By using Object.keys we support both, arrays and objects
  // which phpjs wants to support
  const keys = Object.keys(array)

  if (typeof num === 'undefined' || num === null) {
    num = 1
  } else {
    num = +num
  }

  if (isNaN(num) || num < 1 || num > keys.length) {
    return null
  }

  // shuffle the array of keys
  for (let i = keys.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) // 0 ≤ j ≤ i

    const tmp = keys[j]
    keys[j] = keys[i]
    keys[i] = tmp
  }

  return num === 1 ? keys[0] : keys.slice(0, num)
}
