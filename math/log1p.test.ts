const log1p = require('./log1p');

test('log1p', () => {
    expect(log1p(1e-15)).toBe(9.999999999999995e-16);
});


