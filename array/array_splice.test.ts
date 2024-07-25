const array_splice = require('./array_splice');

const input1 = ["red", "green", "blue", "yellow"]

test('array_splice', () => {
  expect(array_splice(input1, 3, 0, "purple")).toStrictEqual([]);
});

const input2 = ["red", "green", "blue", "yellow"]

test('array_splice', () => {
  expect(array_splice(input2, -1, 1, ["black", "maroon"])).toStrictEqual(["yellow"]);
});


