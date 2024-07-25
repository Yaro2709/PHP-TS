const is_object = require('./is_object');

test('is_object', () => {
    expect(is_object('23')).toBe(false);
});

test('is_object', () => {
    expect(is_object({foo: 'bar'})).toBe(true);
});

test('is_object', () => {
    expect(is_object(null)).toBe(false);
});
