const is_bool = require('./is_bool');

test('is_bool', () => {
    expect(is_bool(false)).toBe(true);
});

test('is_bool', () => {
    expect(is_bool(0)).toBe(false);
});
