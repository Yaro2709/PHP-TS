module.exports = function array_values(input) {

  const tmpArr = []
  let key = ''

  for (key in input) {
    tmpArr[tmpArr.length] = input[key]
  }

  return tmpArr
}
