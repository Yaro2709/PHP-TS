const array_push = require('./array_push');

test('array_push', () => {
  expect(array_push(['kevin','van'], 'zonneveld')).toBe(3);
});
