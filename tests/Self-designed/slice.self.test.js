
import slice from '../../src/slice.js';

describe('slice (self-designed tests)', () => {
  // Slice from a specified start
  test('returns elements from the specified start to the end', () => {
    const products = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor'
    ];

    expect(slice(products, 2)).toEqual(['Keyboard', 'Monitor']);
  });

  // Slice using both start and end
  test('returns elements between start and end positions', () => {
    const products = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor'
    ];

    expect(slice(products, 1, 3)).toEqual(['Mouse', 'Keyboard']);
  });

  // Undefined start uses the default value 0
  test('uses zero as the start when start is undefined', () => {
    const products = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor'
    ];

    expect(slice(products, undefined, 2)).toEqual(['Laptop', 'Mouse']);
  });

  // Undefined end uses the array length
  test('uses the array length as the end when end is undefined', () => {
    const products = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor'
    ];

    expect(slice(products, 2, undefined)).toEqual(['Keyboard', 'Monitor']);
  });

  // Negative start counts from the end
  test('supports a negative start index', () => {
    const products = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor'
    ];

    expect(slice(products, -2)).toEqual(['Keyboard', 'Monitor']);
  });

  // Negative end counts from the end
  test('supports a negative end index', () => {
    const products = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor'
    ];

    expect(slice(products, 1, -1)).toEqual(['Mouse', 'Keyboard']);
  });

  // Start greater than end
  test('returns an empty array when start is greater than end', () => {
    const products = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor'
    ];

    expect(slice(products, 3, 1)).toEqual([]);
  });

  // Start beyond the array length
  test('returns an empty array when start is beyond the array length', () => {
    const products = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor'
    ];

    expect(slice(products, 5)).toEqual([]);
  });

  //  Empty array
  test('returns an empty array when the input array is empty', () => {
    expect(slice([])).toEqual([]);
  });

  // Null or undefined input array
  test('returns an empty array when the input array is null or undefined', () => {
    expect(slice(null)).toEqual([]);
    expect(slice(undefined)).toEqual([]);
  });

  //  Null start is treated as the default start
  test('uses zero as the start when start is null', () => {
    const products = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor'
    ];

    expect(slice(products, null, 2)).toEqual(['Laptop', 'Mouse']);
  });

  // Sparse array should produce a dense result
  test('returns a dense array when the input array contains holes', () => {
    const data = [10, , 30, 40];

    const result = slice(data, 0, 3);

    expect(result).toEqual([10, undefined, 30]);
    expect(1 in result).toBe(true);
  });
});
