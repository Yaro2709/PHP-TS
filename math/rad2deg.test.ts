const rad2deg = require('./rad2deg');

test('rad2deg', () => {
    expect(rad2deg(3.141592653589793)).toBe(180);
});


