module.exports = function array_reverse(array, preserveKeys) {

  const isArray = Object.prototype.toString.call(array) === '[object Array]'
  const tmpArr = preserveKeys ? {} : []
  let key

  if (isArray && !preserveKeys) {
    return array.slice(0).reverse()
  }

  if (preserveKeys) {
    const keys = []
    for (key in array) {
      keys.push(key)
    }

    let i = keys.length
    while (i--) {
      key = keys[i]
      // @todo: don't rely on browsers keeping keys in insertion order
      // it's implementation specific
      // eg. the result will differ from expected in Google Chrome
      tmpArr[key] = array[key]
    }
  } else {
    for (key in array) {
      tmpArr.unshift(array[key])
    }
  }

  return tmpArr
}
