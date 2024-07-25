const array_multisort = require('./array_multisort');

test('array_multisort', () => {
  expect(array_multisort([1, 2, 1, 2, 1, 2], [1, 2, 3, 4, 5, 6])).toBe(true);
});

const characters = {A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward'}
const jobs = {A: 'Warrior', B: 'Thief', C: 'Monk', D: 'Mage', E: 'Knight'}

test('array_multisort', () => {
  expect(array_multisort(characters, 'SORT_DESC', 'SORT_STRING', jobs, 'SORT_ASC', 'SORT_STRING')).toBe(true);
});

const lastnames = [ 'Carter','Adams','Monroe','Tyler','Madison','Kennedy','Adams']
const firstnames = ['James', 'John' ,'James', 'John', 'James',  'John',   'John']
const president = [ 39, 6, 5, 10, 4, 35, 2 ]

test('array_multisort', () => {
  expect(array_multisort(firstnames, 'SORT_DESC', 'SORT_STRING', lastnames, 'SORT_ASC', 'SORT_STRING', president, 'SORT_NUMERIC')).toBe(true);
});

test('array_multisort', () => {
  expect(array_multisort(["productIds[]", "_"], 'SORT_ASC', ["productIds[]=977385529", "_=1502965788347"])).toBe(true);
});
