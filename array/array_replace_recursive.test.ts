const array_replace_recursive = require('./array_replace_recursive');

test('array_replace_recursive', () => {
  expect(array_replace_recursive({'citrus' : ['orange'], 'berries' : ['blackberry', 'raspberry']}, {'citrus' : ['pineapple'], 'berries' : ['blueberry']})).toStrictEqual({citrus : ['pineapple'], berries : ['blueberry', 'raspberry']});
});

