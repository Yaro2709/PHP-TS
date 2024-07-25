const decoct = require('./decoct');

test('decoct', () => {
    expect(decoct(15)).toBe('17');
});

test('decoct', () => {
    expect(decoct(264)).toBe('410');
});

