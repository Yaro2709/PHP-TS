const mt_getrandmax = require('./mt_getrandmax');

test('mt_getrandmax', () => {
    expect(mt_getrandmax()).toBe(2147483647);
});

