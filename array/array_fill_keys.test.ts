const array_fill_keys = require('./array_fill_keys');

test('array_fill_keys', () => {
  expect(array_fill_keys({'a': 'foo', 2: 5, 3: 10, 4: 'bar'}, 'banana')).toStrictEqual({"foo": "banana", 5: "banana", 10: "banana", "bar": "banana"});
});
