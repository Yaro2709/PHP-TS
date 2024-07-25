const array_keys = require('./array_keys');

test('array_keys', () => {
  expect(array_keys( {firstname: 'Kevin', surname: 'van Zonneveld'} )).toStrictEqual([ 'firstname', 'surname' ]);
});
