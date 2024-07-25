const sin = require('./sin');

test('sin', () => {
    expect(sin(8723321.4) * 10000000).toBe(-9834330.34882591 );
});


