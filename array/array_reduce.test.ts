const array_reduce = require('./array_reduce');

test('array_reduce', () => {
  expect(array_reduce([1, 2, 3, 4, 5], function (v, w){v += w;return v;})).toBe(15);
});

