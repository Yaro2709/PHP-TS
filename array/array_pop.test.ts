const array_pop = require('./array_pop');

test('array_pop', () => {
  expect(array_pop([0,1,2])).toBe(2);
});
