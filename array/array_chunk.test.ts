const array_chunk = require('./array_chunk');

test('array_chunk', () => {
  expect(array_chunk(['Kevin', 'van', 'Zonneveld'], 2)).toStrictEqual([['Kevin', 'van'], ['Zonneveld']]);
});

test('array_chunk', () => {
  expect(array_chunk({1:'Kevin', 2:'van', 3:'Zonneveld'}, 2)).toStrictEqual([['Kevin', 'van'], ['Zonneveld']]);
});

test('array_chunk', () => {
  expect(array_chunk({1:'Kevin', 2:'van', 3:'Zonneveld'}, 2, true)).toStrictEqual([{1: 'Kevin', 2: 'van'}, {3: 'Zonneveld'}]);
});
