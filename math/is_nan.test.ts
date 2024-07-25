const is_nan = require('./is_nan');

test('is_nan', () => {
    expect(is_nan(NaN)).toBe(true);
});

test('is_nan', () => {
    expect(is_nan(0)).toBe(false);
});


