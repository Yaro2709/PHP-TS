const fmod = require('./fmod');

test('fmod', () => {
    expect(fmod(5.7, 1.3)).toBe(0.5);
});

test('fmod', () => {
    expect(fmod(10, 1)).toBe(0);
});

