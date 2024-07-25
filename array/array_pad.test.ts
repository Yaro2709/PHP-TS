const array_pad = require('./array_pad');

test('array_pad', () => {
  expect(array_pad([ 7, 8, 9 ], 2, 'a')).toStrictEqual([ 7, 8, 9]);
});

test('array_pad', () => {
  expect(array_pad([ 7, 8, 9 ], 5, 'a')).toStrictEqual([ 7, 8, 9, 'a', 'a']);
});

test('array_pad', () => {
  expect(array_pad([ 7, 8, 9 ], 5, 2)).toStrictEqual([ 7, 8, 9, 2, 2]);
});

test('array_pad', () => {
  expect(array_pad([ 7, 8, 9 ], -5, 'a')).toStrictEqual([ 'a', 'a', 7, 8, 9 ]);
});
