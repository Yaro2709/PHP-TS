module.exports = function each(arr) {

  const $global = typeof window !== 'undefined' ? window : global
  $global.$app = $global.$app || {}
  const $app = $global.$app
  $app.php = $app.php || {}
  $app.php.pointers = $app.php.pointers || []
  const pointers = $app.php.pointers

  const indexOf = function (value) {
    for (let i = 0, length = this.length; i < length; i++) {
      if (this[i] === value) {
        return i
      }
    }
    return -1
  }

  if (!pointers.indexOf) {
    pointers.indexOf = indexOf
  }
  if (pointers.indexOf(arr) === -1) {
    pointers.push(arr, 0)
  }
  const arrpos = pointers.indexOf(arr)
  const cursor = pointers[arrpos + 1]
  let pos = 0

  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    let ct = 0
    for (const k in arr) {
      if (ct === cursor) {
        pointers[arrpos + 1] += 1
        if (each.returnArrayOnly) {
          return [k, arr[k]]
        } else {
          return {
            1: arr[k],
            value: arr[k],
            0: k,
            key: k,
          }
        }
      }
      ct++
    }
    // Empty
    return false
  }
  if (arr.length === 0 || cursor === arr.length) {
    return false
  }
  pos = cursor
  pointers[arrpos + 1] += 1
  if (each.returnArrayOnly) {
    return [pos, arr[pos]]
  } else {
    return {
      1: arr[pos],
      value: arr[pos],
      0: pos,
      key: pos,
    }
  }
}
