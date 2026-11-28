import isEmpty from '../../src/isEmpty.js'

describe('Self-designed tests for isEmpty.js', () => {
    
    test ('return true for empty string', () => {
        const result = isEmpty('');
        expect(result).toBe(true);
    });

    test ('return true for null', () => {
        const result = isEmpty(null);
        expect(result).toBe(true);
    });

    test ('return true for undefined', () => {
        const result = isEmpty(undefined);
        expect(result).toBe(true);
    });

    test ('return false for non-empty string', () => {
        const result = isEmpty('hello');
        expect(result).toBe(false);
    });

    test ('return true for true', () => {
        const result = isEmpty(true);
        expect(result).toBe(true);
    });

    test ('return true for integer', () => {
        const result = isEmpty(1);
        expect(result).toBe(true);
    });

    test ('return false for non-empty array', () => {
        const result = isEmpty([1, 2, 3]);
        expect(result).toBe(false);
    });

    test ('return false for non-empty object', () => {
        const result = isEmpty({ 'a': 1 });
        expect(result).toBe(false);
    });

    test ('return true for empty map', () => {
        const result = isEmpty(new Map());
        expect(result).toBe(true);
    });  
    
    test ('return false for non-empty set', () => {
        const result = isEmpty(new Set([1, 2, 3]));
        expect(result).toBe(false);
    });
});