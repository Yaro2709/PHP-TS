const array_replace = require('./array_replace');

test('array_replace', () => {
  expect(array_replace(["orange", "banana", "apple", "raspberry"], {0 : "pineapple", 4 : "cherry"}, {0:"grape"})).toStrictEqual({0: 'grape', 1: 'banana', 2: 'apple', 3: 'raspberry', 4: 'cherry'});
});
