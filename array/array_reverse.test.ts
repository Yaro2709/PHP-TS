const array_reverse = require('./array_reverse');

test('array_reverse', () => {
  expect(array_reverse( [ 'php', '4.0', ['green', 'red'] ], true)).toStrictEqual({ 2: ['green', 'red'], 1: '4.0', 0: 'php'});
});
