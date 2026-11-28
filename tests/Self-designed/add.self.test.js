import add from '../../src/add.js'

describe('Self-designed tests for add.js', () => {
    
    test ('add two numbers', () => {
        const result = add(4,4);

        expect(result).toBe(8);
    });

    test ('add zero value', () => {
        const result = add(0,3);

        expect(result).toBe(3);
    });

    test ('add negative numbers', () => {
        const result = add(-3,-2);

        expect(result).toBe(-5);
    });

    test ('add negative and positive numbers', () => {
        const result = add(-3,2);

        expect(result).toBe(-1);
    });

    test ('add decimal numbers', () => {
        const result = add(1.5,2.4);

        expect(result).toBe(3.9);
    });

    test ('missing or undefined input', () => {
        const result = add(undefined,4);

        expect(result).toBe(4);
    });

    test ('undefined inputs', () => {
        const result = add(undefined,undefined);

        expect(result).toBe(0);
    });

    test ('two strings', () => {
        const result = add('hello', 'world');

        expect(result).toBe('helloworld');
    });

    test ('string and number', () => {
        const result = add('4', 5);

        expect(result).toBe('45');
    });

     test ('string and number', () => {
        const result = add('hello', 5);

        expect(result).toBe('hello5');
    });

});