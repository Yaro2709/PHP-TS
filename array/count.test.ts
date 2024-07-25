const count = require('./count');

test('count', () => {
  expect(count([[0,0],[0,-4]], 'COUNT_RECURSIVE')).toBe(6);
});

test('count', () => {
  expect(count({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE')).toBe(6);
});
