module.exports = function is_unicode(vr) {

  if (typeof vr !== 'string') {
    return false
  }

  // If surrogates occur outside of high-low pairs, then this is not Unicode
  let arr = []
  const highSurrogate = '[\uD800-\uDBFF]'
  const lowSurrogate = '[\uDC00-\uDFFF]'
  const highSurrogateBeforeAny = new RegExp(highSurrogate + '([\\s\\S])', 'g')
  const lowSurrogateAfterAny = new RegExp('([\\s\\S])' + lowSurrogate, 'g')
  const singleLowSurrogate = new RegExp('^' + lowSurrogate + '$')
  const singleHighSurrogate = new RegExp('^' + highSurrogate + '$')

  while ((arr = highSurrogateBeforeAny.exec(vr)) !== null) {
    if (!arr[1] || !arr[1].match(singleLowSurrogate)) {
      // If high not followed by low surrogate
      return false
    }
  }
  while ((arr = lowSurrogateAfterAny.exec(vr)) !== null) {
    if (!arr[1] || !arr[1].match(singleHighSurrogate)) {
      // If low not preceded by high surrogate
      return false
    }
  }

  return true
}
