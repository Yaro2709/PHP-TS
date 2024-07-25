module.exports = function log1p(x) {

  let ret = 0
  // degree of precision
  const n = 50

  if (x <= -1) {
    // JavaScript style would be to return Number.NEGATIVE_INFINITY
    return '-INF'
  }
  if (x < 0 || x > 1) {
    return Math.log(1 + x)
  }
  for (let i = 1; i < n; i++) {
    ret += Math.pow(-x, i) / i
  }

  return -ret
}
