const array_diff = require('./array_diff');

test('array_diff', () => {
  expect(array_diff(['Kevin', 'van', 'Zonneveld'], ['van', 'Zonneveld'])).toStrictEqual({0:'Kevin'});
});

