const array_diff_key = require('./array_diff_key');

test('array_diff_key', () => {
  expect(array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5})).toStrictEqual({"green":2, "blue":3, "white":4});
});

test('array_diff_key', () => {
  expect(array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5}, {red: 5})).toStrictEqual({"green":2, "blue":3, "white":4});
});
