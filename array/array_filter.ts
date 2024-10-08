module.exports = function array_filter(arr, func) {

  let retObj = {}
  let k

  func =
    func ||
    function (v) {
      return v
    }

  if (Object.prototype.toString.call(arr) === '[object Array]') {
    retObj = []
  }

  for (k in arr) {
    if (func(arr[k])) {
      retObj[k] = arr[k]
    }
  }

  return retObj
}
