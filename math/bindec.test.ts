const bindec = require('./bindec');

test('bindec', () => {
    expect(bindec('110011')).toBe(51);
});

test('bindec', () => {
    expect(bindec('000110011')).toBe(51);
});

test('bindec', () => {
    expect(bindec('111')).toBe(7);
});


