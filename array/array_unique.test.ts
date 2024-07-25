const array_unique = require('./array_unique');

test('array_unique', () => {
  expect(array_unique(['Kevin','Kevin','van','Zonneveld','Kevin'])).toStrictEqual({0: 'Kevin', 2: 'van', 3: 'Zonneveld'});
});

test('array_unique', () => {
  expect(array_unique({'a': 'green', 0: 'red', 'b': 'green', 1: 'blue', 2: 'red'})).toStrictEqual({a: 'green', 0: 'red', 1: 'blue'});
});
