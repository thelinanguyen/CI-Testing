import defaultTo from '../../src/defaultTo.js'

describe('self-designed tests for defaultTo.js', () => {
    
    test ('return default value when input is null', () => {
        const result = defaultTo(null, 5);
        expect(result).toBe(5);
    });

    test ('return default value when input is undefined', () => {
        const result = defaultTo(undefined, 10);
        expect(result).toBe(10);
    });

    test ('return input value when it is neither null nor undefined', () => {
        const result = defaultTo(7, 15);
        expect(result).toBe(7);
    });

    test ('return default value when input is NaN', () => {
        const result = defaultTo(NaN, 15);
        expect(result).toBe(15);
    });

});