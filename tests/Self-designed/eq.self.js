
import eq from '../src/eq.js';

describe('eq.js', () => {

  // Equal primitive values 
  test('should return true when two numbers are equal', () => {
    expect(eq(5, 5)).toBe(true);
  });

  // Different primitive values
  test('should return false when two numbers are different', () => {
    expect(eq(5, 10)).toBe(false);
  });

  // 0 should be equal to false because of loose equality (==)
  test('should compare values of different data types', () => {
    expect(eq(0, false)).toBe(true);
  });

  // Null and undefined
  test('should return true when comparing null and undefined', () => {
    expect(eq(null, undefined)).toBe(true);
  });

  //NaN comparisons
  test('should return true when comparing NaN with NaN', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

  // Different objects with identical properties
  test('should return false for different objects with identical properties', () => {
    expect(eq({ a: 1 }, { a: 1 })).toBe(false);
  });

  //  Identical object reference
  test('should return true when comparing the same object reference', () => {
    const object = { a: 1 };

    expect(eq(object, object)).toBe(true);
  });

  // Equal strings
  test('should return true when comparing equal strings', () => {
    expect(eq('a', 'a')).toBe(true);
  });

  // Different strings
  test('should return false when comparing different strings', () => {
    expect(eq('a', 'b')).toBe(false);
  });

  // Comparing arrays
  test('should compare arrays based on their references', () => {
    const array = [1, 2];
    // same reference
    expect(eq(array, array)).toBe(true); 
    // two separate arrays with identical contents
    expect(eq([1, 2], [1, 2])).toBe(false); 
    // different references and different contents
    expect(eq([1, 2], [2, 1])).toBe(false); 
  });

});
