const is_unicode = require('./is_unicode');

test('is_string', () => {
    expect(is_unicode('We the peoples of the United Nations...!')).toBe(true);
});
