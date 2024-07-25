const array_flip = require('./array_flip');

test('array_flip', () => {
  expect(array_flip( {a: 1, b: 1, c: 2} )).toStrictEqual({1: 'b', 2: 'c'});
});
