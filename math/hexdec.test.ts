const hexdec = require('./hexdec');

test('hexdec', () => {
    expect(hexdec('that')).toBe(10);
});

test('hexdec', () => {
    expect(hexdec('a0')).toBe(160);
});


