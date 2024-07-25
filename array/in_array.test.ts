const in_array = require('./in_array');

test('in_array', () => {
  expect(in_array('van', ['Kevin', 'van', 'Zonneveld'])).toBe(true);
});

test('in_array', () => {
  expect(in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'})).toBe(false);
});

test('in_array', () => {
  expect(in_array(1, ['1', '2', '3'])).toBe(true);
});

test('in_array', () => {
  expect(in_array(1, ['1', '2', '3'], false)).toBe(true);
});

test('in_array', () => {
  expect(in_array(1, ['1', '2', '3'], true)).toBe(false);
});
