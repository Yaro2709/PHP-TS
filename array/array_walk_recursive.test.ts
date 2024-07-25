const array_walk_recursive = require('./array_walk_recursive');

test('array_walk_recursive', () => {
  expect(array_walk_recursive([3, 4], function () {}, 'userdata')).toBe(true);
});

test('array_walk_recursive', () => {
  expect(array_walk_recursive([3, [4]], function () {}, 'userdata')).toBe(true);
});

test('array_walk_recursive', () => {
  expect(array_walk_recursive([3, [4]], function () {}, 'userdata')).toBe(true);
});
