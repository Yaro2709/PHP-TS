const next = require('./next');

test('next', () => {
  expect(next(['foot', 'bike', 'car', 'plane'])).toBe('bike');
});
