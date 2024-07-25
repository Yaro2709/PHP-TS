const is_finite = require('./is_finite');

test('is_finite', () => {
    expect(is_finite(Infinity)).toBe(false);
});

test('is_finite', () => {
    expect(is_finite(-Infinity)).toBe(false);
});

test('is_finite', () => {
    expect(is_finite(0)).toBe(true);
});


