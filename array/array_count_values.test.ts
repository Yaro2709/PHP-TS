const array_count_values = require('./array_count_values');

test('array_count_values', () => {
  expect(array_count_values([ 3, 5, 3, "foo", "bar", "foo" ])).toStrictEqual({3:2, 5:1, "foo":2, "bar":1});
});

test('array_count_values', () => {
  expect(array_count_values({ p1: 3, p2: 5, p3: 3, p4: "foo", p5: "bar", p6: "foo" })).toStrictEqual({3:2, 5:1, "foo":2, "bar":1});
});

test('array_count_values', () => {
  expect(array_count_values([ true, 4.2, 42, "fubar" ])).toStrictEqual({42:1, "fubar":1});
});
