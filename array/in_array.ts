module.exports = function in_array(needle, haystack, argStrict) {

  let key = ''
  const strict = !!argStrict

  // we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] === ndl)
  // in just one for, in order to improve the performance
  // deciding wich type of comparation will do before walk array
  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true
      }
    }
  } else {
    for (key in haystack) {
       
      if (haystack[key] == needle) {
        return true
      }
    }
  }

  return false
}
