const getrandmax = require('./getrandmax');

test('getrandmax', () => {
    expect(getrandmax()).toBe(2147483647);
});

