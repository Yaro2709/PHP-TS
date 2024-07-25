module.exports = function dechex(number) {

  if (number < 0) {
    number = 0xffffffff + number + 1
  }
  return parseInt(number, 10).toString(16)
}
