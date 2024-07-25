const array_unshift = require('./array_unshift');

test('array_unshift', () => {
  expect(array_unshift(['van', 'Zonneveld'], 'Kevin')).toBe(3);
});
