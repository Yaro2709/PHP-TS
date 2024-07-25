module.exports = function reset(arr) {

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
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    for (const k in arr) {
      if (pointers.indexOf(arr) === -1) {
        pointers.push(arr, 0)
      } else {
        pointers[arrpos + 1] = 0
      }
      return arr[k]
    }
    // Empty
    return false
  }
  if (arr.length === 0) {
    return false
  }
  pointers[arrpos + 1] = 0
  return arr[pointers[arrpos + 1]]
}
