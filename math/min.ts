module.exports = function min() {

  let ar
  let retVal
  let i = 0
  let n = 0
  const argv = arguments
  const argc = argv.length
  const _obj2Array = function (obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      return obj
    }
    const ar = []
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        ar.push(obj[i])
      }
    }
    return ar
  }

  const _compare = function (current, next) {
    let i = 0
    let n = 0
    let tmp = 0
    let nl = 0
    let cl = 0

    if (current === next) {
      return 0
    } else if (typeof current === 'object') {
      if (typeof next === 'object') {
        current = _obj2Array(current)
        next = _obj2Array(next)
        cl = current.length
        nl = next.length
        if (nl > cl) {
          return 1
        } else if (nl < cl) {
          return -1
        }
        for (i = 0, n = cl; i < n; ++i) {
          tmp = _compare(current[i], next[i])
          if (tmp === 1) {
            return 1
          } else if (tmp === -1) {
            return -1
          }
        }
        return 0
      }
      return -1
    } else if (typeof next === 'object') {
      return 1
    } else if (isNaN(next) && !isNaN(current)) {
      if (current === 0) {
        return 0
      }
      return current < 0 ? 1 : -1
    } else if (isNaN(current) && !isNaN(next)) {
      if (next === 0) {
        return 0
      }
      return next > 0 ? 1 : -1
    }

    if (next === current) {
      return 0
    }

    return next > current ? 1 : -1
  }

  if (argc === 0) {
    throw new Error('At least one value should be passed to min()')
  } else if (argc === 1) {
    if (typeof argv[0] === 'object') {
      ar = _obj2Array(argv[0])
    } else {
      throw new Error('Wrong parameter count for min()')
    }

    if (ar.length === 0) {
      throw new Error('Array must contain at least one element for min()')
    }
  } else {
    ar = argv
  }

  retVal = ar[0]

  for (i = 1, n = ar.length; i < n; ++i) {
    if (_compare(retVal, ar[i]) === -1) {
      retVal = ar[i]
    }
  }

  return retVal
}
