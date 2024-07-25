const array_product = require('./array_product');

test('array_product', () => {
  expect(array_product([ 2, 4, 6, 8 ])).toBe(384);
});
