const array_key_exists = require('./array_key_exists');

test('array_key_exists', () => {
  expect(array_key_exists('kevin', {'kevin': 'van Zonneveld'})).toBe(true);
});
