const sum = require('./sum');

describe('sum', () => {
    it('should return the sum of two numbers', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(-1, 1)).toBe(0);
        expect(sum(-1, -1)).toBe(-2);
    });
});