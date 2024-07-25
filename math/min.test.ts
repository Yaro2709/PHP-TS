const min = require('./min');

test('min', () => {
    expect(min(1, 3, 5, 6, 7)).toBe(1);
});

test('min', () => {
    expect(min([2, 4, 5])).toBe(2);
});

test('min', () => {
    expect(min(0, 'hello')).toBe(0);
});

test('min', () => {
    expect(min('hello', 0)).toBe('hello');
});

test('min', () => {
    expect(min(-1, 'hello')).toBe(-1);
});

