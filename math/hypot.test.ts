const hypot = require('./hypot');

test('hypot', () => {
    expect(hypot(3,4)).toBe(5);
});

test('hypot', () => {
    expect(hypot([], 'a')).toBe(null);
});


