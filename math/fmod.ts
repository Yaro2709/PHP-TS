module.exports = function fmod(x, y) {

  let tmp
  let tmp2
  let p = 0
  let pY = 0
  let l = 0.0
  let l2 = 0.0

  tmp = x.toExponential().match(/^.\.?(.*)e(.+)$/)
  p = parseInt(tmp[2], 10) - (tmp[1] + '').length
  tmp = y.toExponential().match(/^.\.?(.*)e(.+)$/)
  pY = parseInt(tmp[2], 10) - (tmp[1] + '').length

  if (pY > p) {
    p = pY
  }

  tmp2 = x % y

  if (p < -100 || p > 20) {
    // toFixed will give an out of bound error so we fix it like this:
    l = Math.round(Math.log(tmp2) / Math.log(10))
    l2 = Math.pow(10, l)

    return (tmp2 / l2).toFixed(l - p) * l2
  } else {
    return parseFloat(tmp2.toFixed(Math.abs(p)))
  }
}
