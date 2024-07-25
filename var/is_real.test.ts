const is_real = require('./is_real');

test('is_real', () => {
    expect(is_real(186.31)).toBe(true);
});
