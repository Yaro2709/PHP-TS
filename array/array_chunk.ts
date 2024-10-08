module.exports = function array_chunk(input, size, preserveKeys) {

  let x
  let p = ''
  let i = 0
  let c = -1
  const l = input.length || 0
  const n = []

  if (size < 1) {
    return null
  }

  if (Object.prototype.toString.call(input) === '[object Array]') {
    if (preserveKeys) {
      while (i < l) {
        ;(x = i % size) ? (n[c][i] = input[i]) : (n[++c] = {})
        n[c][i] = input[i]
        i++
      }
    } else {
      while (i < l) {
        ;(x = i % size) ? (n[c][x] = input[i]) : (n[++c] = [input[i]])
        i++
      }
    }
  } else {
    if (preserveKeys) {
      for (p in input) {
        if (input.hasOwnProperty(p)) {
          ;(x = i % size) ? (n[c][p] = input[p]) : (n[++c] = {})
          n[c][p] = input[p]
          i++
        }
      }
    } else {
      for (p in input) {
        if (input.hasOwnProperty(p)) {
          ;(x = i % size) ? (n[c][x] = input[p]) : (n[++c] = [input[p]])
          i++
        }
      }
    }
  }

  return n
}
