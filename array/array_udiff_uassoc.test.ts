const array_udiff_uassoc = require('./array_udiff_uassoc');

const array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
const array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}

test('array_udiff_uassoc', () => {
  expect(array_udiff_uassoc(array1, array2, function (f_string1, f_string2){const string1 = (f_string1+'').toLowerCase(); const string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 === string2) return 0; return -1;}, function (f_string1, f_string2){const string1 = (f_string1+'').toLowerCase(); const string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 === string2) return 0; return -1;})).toStrictEqual({0: 'red', c: 'blue'});
});