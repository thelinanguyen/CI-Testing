import add from '../../src/add.js'

describe('AI-assisted tests for add.js', () => {
    
    test ('adds two positive integers', () => {
        const result = add(4,4);

        expect(result).toBe(8);
    });

    test ('adds negative integers', () => {
        const result = add(-3,-2);

        expect(result).toBe(-5);
    });

    test ('adds decimal values', () => {
        const result = add(1.5,2.4);

        expect(result).toBeCloseTo(3.9);
    });

    test ('returns first value when second is undefined', () => {
        const result = add(4,undefined);

        expect(result).toBe(4);
    });

    test ('returns second value when first is undefined', () => {
        const result = add(undefined,4);

        expect(result).toBe(4);
    });

    test ('returns default value when both arguments are undefined', () => {
        const result = add(undefined,undefined);

        expect(result).toBe(0);
    });

    test ('concatenates values when one argument is a string', () => {
        const result = add('4',5);

        expect(result).toBe('45');
    });

    test ('concatenates two strings', () => {
        const result = add('hello', 'world');

        expect(result).toBe('helloworld');
    });

    test ('handles null values', () => {
        const result = add(null,5);

        expect(result).toBe(5);
    });

});