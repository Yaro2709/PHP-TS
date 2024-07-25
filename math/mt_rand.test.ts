const mt_rand = require('./mt_rand');

test('mt_rand', () => {
    expect(mt_rand(1,1)).toBe(1);
});


test('mt_rand', () => {
    expect(mt_rand(1,10)).not.toBe(0);
});

test('mt_rand', () => {
    expect(mt_rand(10,20)).not.toBe(9);
});

