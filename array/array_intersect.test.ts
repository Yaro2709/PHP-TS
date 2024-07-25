const array_intersect = require('./array_intersect');

const array1 = {'a' : 'green', 0:'red', 1: 'blue'}
const array2 = {'b' : 'green', 0:'yellow', 1:'red'}
const array3 = ['green', 'red']

test('array_intersect', () => {
  expect(array_intersect(array1, array2, array3)).toStrictEqual({0: 'red', a: 'green'});
});
