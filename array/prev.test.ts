const prev = require('./prev');

test('prev', () => {
  expect(prev(['foot', 'bike', 'car', 'plane'])).toBe(false);
});
