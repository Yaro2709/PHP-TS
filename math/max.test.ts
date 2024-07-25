const max = require('./max');

test('max', () => {
    expect(max(1, 3, 5, 6, 7)).toBe(7);
});

test('max', () => {
    expect(max([2, 4, 5])).toBe(5);
});

test('max', () => {
    expect(max(0, 'hello')).toBe(0);
});

test('max', () => {
    expect(max('hello', 0)).toBe('hello');
});

test('max', () => {
    expect(max(-1, 'hello')).toBe('hello');
});

