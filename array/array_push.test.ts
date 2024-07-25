const array_rand = require('./array_rand');

test('array_rand', () => {
  expect(array_rand( ['Kevin'], 1 )).toBe('0');
});
