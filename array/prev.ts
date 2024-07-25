module.exports = function prev(arr) {

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
  const arrpos = pointers.indexOf(arr)
  const cursor = pointers[arrpos + 1]
  if (pointers.indexOf(arr) === -1 || cursor === 0) {
    return false
  }
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    let ct = 0
    for (const k in arr) {
      if (ct === cursor - 1) {
        pointers[arrpos + 1] -= 1
        return arr[k]
      }
      ct++
    }
    // Shouldn't reach here
  }
  if (arr.length === 0) {
    return false
  }
  pointers[arrpos + 1] -= 1
  return arr[pointers[arrpos + 1]]
}