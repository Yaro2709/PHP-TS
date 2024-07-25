const is_string = require('./is_string');

test('is_string', () => {
    expect(is_string('23')).toBe(true);
});

test('is_string', () => {
    expect(is_string(23)).toBe(false);
});
