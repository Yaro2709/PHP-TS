const array_sum = require('./array_sum');

test('array_sum', () => {
  expect(array_sum([4, 9, 182.6])).toBe(195.6);
});

const total = []
const index = 0.1
for (let y = 0; y < 12; y++){
  total[y] = y + index
}

test('array_sum', () => {
  expect(array_sum(total)).toBe(67.2);
});
