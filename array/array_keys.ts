module.exports = function array_keys(input, searchValue, argStrict) {

  const search = typeof searchValue !== 'undefined'
  const tmpArr = []
  const strict = !!argStrict
  let include = true
  let key = ''

  for (key in input) {
    if (input.hasOwnProperty(key)) {
      include = true
      if (search) {
        if (strict && input[key] !== searchValue) {
          include = false
        } else if (input[key] !== searchValue) {
          include = false
        }
      }

      if (include) {
        tmpArr[tmpArr.length] = key
      }
    }
  }

  return tmpArr
}
