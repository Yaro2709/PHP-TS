const array_filter = require('./array_filter');

const odd = function (num) {return (num & 1);};

test('array_filter', () => {
  expect(array_filter({"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}, odd)).toStrictEqual({"a": 1, "c": 3, "e": 5});
});

const even = function (num) {return (!(num & 1));}

test('array_filter', () => {
  expect(array_filter([6, 7, 8, 9, 10, 11, 12], even)).toStrictEqual([ 6, , 8, , 10, , 12 ]);
});

test('array_filter', () => {
  expect(array_filter({"a": 1, "b": false, "c": -1, "d": 0, "e": null, "f":'', "g":undefined})).toStrictEqual({"a":1, "c":-1});
});
