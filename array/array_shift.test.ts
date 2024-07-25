const array_shift = require('./array_shift');

test('array_shift', () => {
  expect(array_shift(['Kevin', 'van', 'Zonneveld'])).toBe('Kevin');
});
