const dechex = require('./dechex');

test('dechex', () => {
    expect(dechex(10)).toBe('a');
});

test('dechex', () => {
    expect(dechex(47)).toBe('2f');
});

test('dechex', () => {
    expect(dechex(-1415723993)).toBe('ab9dc427');
});


