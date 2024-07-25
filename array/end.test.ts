const end = require('./end');

test('end', () => {
  expect(end({0: 'Kevin', 1: 'van', 2: 'Zonneveld'})).toStrictEqual('Zonneveld');
});

test('end', () => {
  expect(end(['Kevin', 'van', 'Zonneveld'])).toStrictEqual('Zonneveld');
});
