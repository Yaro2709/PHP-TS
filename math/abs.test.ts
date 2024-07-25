const abs = require('./abs');

test('abs', () => {
    expect(abs(4.2)).toBe(4.2);
});

test('abs', () => {
    expect(abs(-4.2)).toBe(4.2);
});

test('abs', () => {
    expect(abs('_argos')).toBe(0);
});

