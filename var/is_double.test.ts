const is_double = require('./is_double');

test('is_double', () => {
    expect(is_double(1.23)).toBe(true);
});
