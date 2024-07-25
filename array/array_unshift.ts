module.exports = function array_unshift(array) {

  let i = arguments.length

  while (--i !== 0) {
    arguments[0].unshift(arguments[i])
  }

  return arguments[0].length
}
