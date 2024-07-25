const array_search = require('./array_search');

test('array_search', () => {
  expect(array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'})).toBe('surname');
});

test('array_search', () => {
  expect(array_search('3', {a: 3, b: 5, c: 7})).toBe('a');
});
