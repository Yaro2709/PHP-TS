const array_diff_assoc = require('./array_diff_assoc');

test('array_diff_assoc', () => {
  expect(array_diff_assoc({0: 'Kevin', 1: 'van', 2: 'Zonneveld'}, {0: 'Kevin', 4: 'van', 5: 'Zonneveld'})).toStrictEqual({1: 'van', 2: 'Zonneveld'});
});
