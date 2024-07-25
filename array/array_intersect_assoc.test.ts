const array_intersect_assoc = require('./array_intersect_assoc');

const array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
const array2 = {a: 'green', 0: 'yellow', 1: 'red'}

test('array_intersect_assoc', () => {
  expect(array_intersect_assoc(array1, array2)).toStrictEqual({a: 'green'});
});
