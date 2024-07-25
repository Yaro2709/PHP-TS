const is_null = require('./is_null');

test('is_null', () => {
    expect(is_null(23)).toBe(false);
});

test('is_null', () => {
    expect(is_null(null)).toBe(true);
});
