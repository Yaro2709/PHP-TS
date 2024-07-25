const each = require('./each');

test('each', () => {
  expect(each({a: "apple", b: "balloon"})).toStrictEqual({0: "a", 1: "apple", key: "a", value: "apple"});
});

