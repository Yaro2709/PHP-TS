const array_merge = require('./array_merge');

const arr1 = {"color": "red", 0: 2, 1: 4}
const arr2 = {0: "a", 1: "b", "color": "green", "shape": "trapezoid", 2: 4}

test('array_merge', () => {
  expect(array_merge(arr1, arr2)).toStrictEqual({"color": "green", 0: 2, 1: 4, 2: "a", 3: "b", "shape": "trapezoid", 4: 4});
});

const arr3 = []
const arr4 = {1: "data"}

test('array_merge', () => {
  expect(array_merge(arr3, arr4)).toStrictEqual({0: "data"});
});

