const array_slice = require('./array_slice');

test('array_slice', () => {
  expect(array_slice(["a", "b", "c", "d", "e"], 2, -1)).toStrictEqual([ 'c', 'd' ]);
});

test('array_slice', () => {
  expect(array_slice(["a", "b", "c", "d", "e"], 2, -1, true)).toStrictEqual({2: 'c', 3: 'd'});
});
