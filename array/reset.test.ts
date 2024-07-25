const reset = require('./reset');

test('reset', () => {
  expect(reset({0: 'Kevin', 1: 'van', 2: 'Zonneveld'})).toStrictEqual('Kevin');
});

