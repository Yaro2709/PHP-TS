module.exports = function key(arr) {

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
  const cursor = pointers[pointers.indexOf(arr) + 1]
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    let ct = 0
    for (const k in arr) {
      if (ct === cursor) {
        return k
      }
      ct++
    }
    // Empty
    return false
  }
  if (arr.length === 0) {
    return false
  }

  return cursor
}
