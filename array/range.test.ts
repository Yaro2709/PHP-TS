const range = require('./range');

test('range', () => {
  expect(range ( 0, 12 )).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('range', () => {
  expect(range( 0, 100, 10 )).toStrictEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
});

test('range', () => {
  expect(range( 'a', 'i' )).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
});

test('range', () => {
  expect(range( 'c', 'a' )).toStrictEqual(['c', 'b', 'a']);
});
