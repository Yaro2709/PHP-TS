module.exports = function array_pad(input, padSize, padValue) {

  let pad = []
  const newArray = []
  let newLength
  let diff = 0
  let i = 0

  if (Object.prototype.toString.call(input) === '[object Array]' && !isNaN(padSize)) {
    newLength = padSize < 0 ? padSize * -1 : padSize
    diff = newLength - input.length

    if (diff > 0) {
      for (i = 0; i < diff; i++) {
        newArray[i] = padValue
      }
      pad = padSize < 0 ? newArray.concat(input) : input.concat(newArray)
    } else {
      pad = input
    }
  }

  return pad
}
