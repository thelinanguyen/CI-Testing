import reduce from '../../src/reduce.js'

describe('Self-designed tests for reduce.js', () => {
    
    test ('reduce array to single value', () => {
        const result = reduce([1, 2, 3, 4], (acc, val) => acc + val, 5);
        expect(result).toBe(15);
    });

    test ('reduce object to single value', () => {
        const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key);
            return result;
        }, {});
        expect(result).toStrictEqual({ '1': ['a', 'c'], '2': ['b'] });
    });

     test ('no accumulator provided', () => {
        const result = reduce([1, 2, 1], (acc, val) => acc + val);
            expect(result).toBe(4);
    });

});
