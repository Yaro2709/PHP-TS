const array_udiff_assoc = require('./array_udiff_assoc');

test('array_udiff_assoc', () => {
  expect(array_udiff_assoc({0: 'kevin', 1: 'van', 2: 'Zonneveld'}, {0: 'Kevin', 4: 'van', 5: 'Zonneveld'}, function (f_string1, f_string2){const string1 = (f_string1+'').toLowerCase(); const string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 === string2) return 0; return -1;})).toStrictEqual({1: 'van', 2: 'Zonneveld'});
});
