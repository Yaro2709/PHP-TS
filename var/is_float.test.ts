const is_float = require('./is_float');

test('is_float', () => {
    expect(is_float(1.23)).toBe(true);
});
