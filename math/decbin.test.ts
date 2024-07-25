const decbin = require('./decbin');

test('decbin', () => {
    expect(decbin(12)).toBe('1100');
});

test('decbin', () => {
    expect(decbin(26)).toBe('11010');
});

test('decbin', () => {
    expect(decbin('26')).toBe('11010');
});


