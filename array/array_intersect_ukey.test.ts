const array_intersect_ukey = require('./array_intersect_ukey');

const array1 = {blue: 1, red: 2, green: 3, purple: 4}
const array2 = {green: 5, blue: 6, yellow: 7, cyan: 8}

test('array_intersect_ukey', () => {
  expect(array_intersect_ukey (array1, array2, function (key1, key2){ return (key1 === key2 ? 0 : (key1 > key2 ? 1 : -1)); })).toStrictEqual({blue: 1, green: 3});
});
