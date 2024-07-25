module.exports = function array_map(callback) {

  const argc = arguments.length
  const argv = arguments
  let obj = null
  let cb = callback
  const j = argv[1].length
  let i = 0
  let k = 1
  let m = 0
  let tmp = []
  const tmpArr = []

  const $global = typeof window !== 'undefined' ? window : global

  while (i < j) {
    while (k < argc) {
      tmp[m++] = argv[k++][i]
    }

    m = 0
    k = 1

    if (callback) {
      if (typeof callback === 'string') {
        cb = $global[callback]
      } else if (typeof callback === 'object' && callback.length) {
        obj = typeof callback[0] === 'string' ? $global[callback[0]] : callback[0]
        if (typeof obj === 'undefined') {
          throw new Error('Object not found: ' + callback[0])
        }
        cb = typeof callback[1] === 'string' ? obj[callback[1]] : callback[1]
      }
      tmpArr[i++] = cb.apply(obj, tmp)
    } else {
      tmpArr[i++] = tmp
    }

    tmp = []
  }

  return tmpArr
}
