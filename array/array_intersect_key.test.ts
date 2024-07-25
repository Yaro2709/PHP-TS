const array_intersect_key = require('./array_intersect_key');

const array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
const array2 = {a: 'green', 0: 'yellow', 1: 'red'}

test('array_intersect_key', () => {
  expect(array_intersect_key(array1, array2)).toStrictEqual({0: 'red', a: 'green'});
});
