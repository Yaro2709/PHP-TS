const rand = require('./rand');

test('rand', () => {
    expect(rand(1,1)).toBe(1);
});


test('rand', () => {
    expect(rand(1,10)).not.toBe(0);
});

test('rand', () => {
    expect(rand(10,20)).not.toBe(9);
});

