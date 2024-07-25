const array_change_key_case = require('./array_change_key_case');

test('array_change_key_case', () => {
  expect(array_change_key_case(42)).toBe(false);
});

test('array_change_key_case', () => {
  expect(array_change_key_case([ 3, 5 ])).toStrictEqual([ 3, 5 ]);
});

test('array_change_key_case', () => {
  expect(array_change_key_case({ FuBaR: 42 })).toStrictEqual({"fubar": 42});
});

test('array_change_key_case', () => {
  expect(array_change_key_case({ FuBaR: 42 }, 'CASE_LOWER')).toStrictEqual({"fubar": 42});
});

test('array_change_key_case', () => {
  expect(array_change_key_case({ FuBaR: 42 }, 'CASE_UPPER')).toStrictEqual({"FUBAR": 42});
});

test('array_change_key_case', () => {
  expect(array_change_key_case({ FuBaR: 42 }, 2)).toStrictEqual({"FUBAR": 42});
});
