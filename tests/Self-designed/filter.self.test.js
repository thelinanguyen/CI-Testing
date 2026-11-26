import filter from '../../src/filter.js';

describe('filter (self-designed tests)', () => {
  // Runs the predicate against each object and gathers the matches.
  test('filters objects based on a boolean property', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ];

    const result = filter(users, u => u.active);

    expect(result).toEqual([{ user: 'barney', active: true }]);
  });

  test('filters products with prices greater than 30', () => {
  const products = [
    { name: 'Laptop', price: 100 },
    { name: 'Mouse', price: 20 },
    { name: 'Keyboard', price: 50 }
  ];

  const result = filter(products, product => product.price > 30);

  expect(result).toEqual([
    { name: 'Laptop', price: 100 },
    { name: 'Keyboard', price: 50 }
  ]);
  });

  // Verifies filtering primitive values by a comparison.
  test('filters numbers greater than 8', () => {
    const nums = [6, 5, 10, 34];

    const result = filter(nums, n => n > 8);

    expect(result).toEqual([10, 34]);
  });

  test('filters numbers smaller than 8', () => {
    const nums = [6, 5, 10, 34];

    const result = filter(nums, n => n < 8);

    expect(result).toEqual([6, 5]);
  });

  // Checks that a missing predicate produces an empty array.
  test('handles null / undefined predicate', () => {
    expect(filter([1, 2, 3], null)).toEqual([]);
    expect(filter([1, 2, 3], undefined)).toEqual([]);
  });

  // Returns an empty array if every predicate check fails.
  test('returns an array containing an empty array when no elements match', () => {
    const nums = [11, 12, 13, 14];

    const result = filter(nums, n => n > 100);

    expect(result).toEqual([]);
  });

  // Checks that null or undefined collections are handled safely.
  test('returns an array containing an empty array for null or undefined input', () => {
    const result1 = filter(null, () => true);
    const result2 = filter(undefined, () => true);

    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
  });

});

