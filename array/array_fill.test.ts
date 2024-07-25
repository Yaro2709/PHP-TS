const array_fill = require('./array_fill');

test('array_fill', () => {
  expect(array_fill(5, 6, 'banana')).toStrictEqual({ 5: 'banana', 6: 'banana', 7: 'banana', 8: 'banana', 9: 'banana', 10: 'banana' });
});
