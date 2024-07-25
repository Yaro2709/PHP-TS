const array_walk = require('./array_walk');

test('array_walk', () => {
  expect(array_walk([3, 4], function () {}, 'userdata')).toBe(true);
});

test('array_walk', () => {
  expect(array_walk ('mystring', function () {})).toBe(false);
});

test('array_walk', () => {
  expect(array_walk ({"title":"my title"}, function () {})).toBe(true);
});
