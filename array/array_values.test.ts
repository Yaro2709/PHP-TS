const array_values = require('./array_values');

test('array_values', () => {
  expect(array_values( {firstname: 'Kevin', surname: 'van Zonneveld'} )).toStrictEqual([ 'Kevin', 'van Zonneveld' ]);
});
