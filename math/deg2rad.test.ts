const deg2rad = require('./deg2rad');

test('deg2rad', () => {
    expect(deg2rad(45)).toBe(0.7853981633974483);
});

