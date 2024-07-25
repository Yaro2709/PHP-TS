const base_convert = require('./base_convert');

test('base_convert', () => {
    expect(base_convert('A3733', 16, 2)).toBe('10100011011100110011');
});

