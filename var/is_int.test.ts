const is_int = require('./is_int');

test('is_int', () => {
    expect(is_int(23)).toBe(true);
});

test('is_int', () => {
    expect(is_int('23')).toBe(false);
});

test('is_int', () => {
    expect(is_int(23.5)).toBe(false);
});

test('is_int', () => {
    expect(is_int(true)).toBe(false);
});
