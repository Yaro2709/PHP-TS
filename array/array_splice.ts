module.exports = function array_splice(arr, offst, lgth, replacement) {

  const isInt = require('../var/is_int')

  const _checkToUpIndices = function (arr, ct, key) {
    // Deal with situation, e.g., if encounter index 4 and try
    // to set it to 0, but 0 exists later in loop (need to
    // increment all subsequent (skipping current key,
    // since we need its value below) until find unused)
    if (arr[ct] !== undefined) {
      const tmp = ct
      ct += 1
      if (ct === key) {
        ct += 1
      }
      ct = _checkToUpIndices(arr, ct, key)
      arr[ct] = arr[tmp]
      delete arr[tmp]
    }
    return ct
  }

  if (replacement && typeof replacement !== 'object') {
    replacement = [replacement]
  }
  if (lgth === undefined) {
    lgth = offst >= 0 ? arr.length - offst : -offst
  } else if (lgth < 0) {
    lgth = (offst >= 0 ? arr.length - offst : -offst) + lgth
  }

  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    /* if (arr.length !== undefined) {
     // Deal with array-like objects as input
    delete arr.length;
    } */
    let lgt = 0
    let ct = -1
    const rmvd = []
    const rmvdObj = {}
    let replCt = -1
    let intCt = -1
    let returnArr = true
    let rmvdCt = 0
    // var rmvdLngth = 0
    let key = ''
    // rmvdObj.length = 0;
    for (key in arr) {
      // Can do arr.__count__ in some browsers
      lgt += 1
    }
    offst = offst >= 0 ? offst : lgt + offst
    for (key in arr) {
      ct += 1
      if (ct < offst) {
        if (isInt(key)) {
          intCt += 1
          if (parseInt(key, 10) === intCt) {
            // Key is already numbered ok, so don't need to change key for value
            continue
          }
          // Deal with situation, e.g.,
          _checkToUpIndices(arr, intCt, key)
          // if encounter index 4 and try to set it to 0, but 0 exists later in loop
          arr[intCt] = arr[key]
          delete arr[key]
        }
        continue
      }
      if (returnArr && isInt(key)) {
        rmvd.push(arr[key])
        // PHP starts over here too
        rmvdObj[rmvdCt++] = arr[key]
      } else {
        rmvdObj[key] = arr[key]
        returnArr = false
      }
      // rmvdLngth += 1
      // rmvdObj.length += 1;
      if (replacement && replacement[++replCt]) {
        arr[key] = replacement[replCt]
      } else {
        delete arr[key]
      }
    }
    // Make (back) into an array-like object
    // arr.length = lgt - rmvdLngth + (replacement ? replacement.length : 0);
    return returnArr ? rmvd : rmvdObj
  }

  if (replacement) {
    replacement.unshift(offst, lgth)
    return Array.prototype.splice.apply(arr, replacement)
  }

  return arr.splice(offst, lgth)
}
