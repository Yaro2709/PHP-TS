const array_combine = require('./array_combine');

test('array_combine', () => {
  expect(array_combine([0,1,2], ['kevin','van','zonneveld'])).toEqual({0: 'kevin', 1: 'van', 2: 'zonneveld'});
});
