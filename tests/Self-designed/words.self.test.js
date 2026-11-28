import words from '../../src/words.js'

describe('Self-designed tests for words.js', () => {
    
    test ('splits string into words', () => {
        const result = words('hello world & friends');
        expect(result).toEqual(['hello', 'world', 'friends']);
    });

    test ('splits string into words using regex', () => {
        const result = words('hello world & friends', /[^, ]+/g);
        expect(result).toEqual(['hello', 'world', '&', 'friends']);
    });

    test ('returns empty array when no matches found', () => {
        const result = words('hello world & friends', /xyz/g);
        expect(result).toEqual([]);
    });

    test ('returns empty array for empty string', () => {
        const result = words('');
        expect(result).toEqual([]);
    });

});
