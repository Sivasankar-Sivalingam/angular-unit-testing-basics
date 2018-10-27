import { incrementNumber } from './incrementNumber';

describe('incrementNumber', () => {
    it('should return zero for a negative number', () => {
        const result = incrementNumber(-1);
        expect(result).toBe(0);
    });

    it('should return incremental value for a positive number', () => {
        const result = incrementNumber(1);
        expect(result).toBe(2);
    });
});
