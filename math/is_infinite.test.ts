const is_infinite = require('./is_infinite');

test('is_infinite', () => {
    expect(is_infinite(Infinity)).toBe(true);
});

test('is_infinite', () => {
    expect(is_infinite(-Infinity)).toBe(true);
});

test('is_infinite', () => {
    expect(is_infinite(0)).toBe(false);
});


