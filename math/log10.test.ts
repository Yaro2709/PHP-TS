const log10 = require('./log10');

test('log10', () => {
    expect(log10(10)).toBe(1);
});

test('log10', () => {
    expect(log10(1)).toBe(0);
});

