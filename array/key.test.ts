const key = require('./key');

test('key', () => {
  expect(key({fruit1: 'apple', 'fruit2': 'orange'})).toBe('fruit1');
});

