const array_map = require('./array_map');

test('array_map', () => {
  expect(array_map( function (a){return (a * a * a)}, [1, 2, 3, 4, 5] )).toStrictEqual([ 1, 8, 27, 64, 125 ]);
});
