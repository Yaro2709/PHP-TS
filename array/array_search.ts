module.exports = function array_search(needle, haystack, argStrict) {

  const strict = !!argStrict
  let key = ''

  if (typeof needle === 'object' && needle.exec) {
    // Duck-type for RegExp
    if (!strict) {
      // Let's consider case sensitive searches as strict
      const flags =
          'i' +
          (needle.global ? 'g' : '') +
          (needle.multiline ? 'm' : '') +
          // sticky is FF only
          (needle.sticky ? 'y' : '')
      needle = new RegExp(needle.source, flags)
    }
    for (key in haystack) {
      if (haystack.hasOwnProperty(key)) {
        if (needle.test(haystack[key])) {
          return key
        }
      }
    }
    return false
  }

  for (key in haystack) {
    if (haystack.hasOwnProperty(key)) {
       
      if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
        return key
      }
    }
  }

  return false
}
