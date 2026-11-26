
import countBy from '../../src/countBy.js';

describe('countBy (self-designed tests)', () => {

  // Counts products based on boolean property
  test('counts products by availability', () => {
    const products = [
      { inStock: true },
      { inStock: true },
      { inStock: false }
    ];

    const result = countBy(products, product => product.inStock);

    expect(result).toEqual({
      true: 2,
      false: 1
    });
  });

  // Counts products belonging to different categories
  test('counts products by category', () => {
    const products = [
      { category: 'Electronics' },
      { category: 'Electronics' },
      { category: 'Clothing' },
      { category: 'Electronics' },
      { category: 'Clothing' }
    ];

    const result = countBy(products, product => product.category);

    expect(result).toEqual({
      Electronics: 3,
      Clothing: 2
    });
  });

  // Applies separate iteratee functions to the same items
  test('counts items by their category and category name length', () => {
    const items = ['Shirt', 'Scarf', 'Bags'];

    expect(countBy(items, item => item)).toEqual({
      'Shirt': 1,
      'Scarf': 1,
      'Bags': 1
    });

    expect(countBy(items, item => item.length)).toEqual({
      5: 2,
      4: 1
    });
  });

  // Separates product prices into low and high bands
  test('groups product prices into low and high price ranges', () => {
    const prices = [5, 15, 35, 45];

    const result = countBy(prices, price => price < 20 ? 'low' : 'high');

    expect(result).toEqual({
      low: 2,
      high: 2
    });
  });

  // Accepts an object as the collection
  test('counts values in an object collection', () => {
    const colors = {
      a: 'red',
      b: 'blue',
      c: 'green',
      d: 'red'
    };

    const result = countBy(colors, value => value);

    expect(result).toEqual({
      red: 2,
      blue: 1,
      green: 1
    });
  });

  // Processes a collection with no elements
  test('returns an empty object for an empty collection', () => {
    const result = countBy([], value => value);

    expect(result).toEqual({});
  });

  // Counts keys derived from null and undefined
  test('counts null and undefined values', () => {
    const result = countBy(
      [null, undefined, null],
      value => String(value)
    );

    expect(result).toEqual({
      null: 2,
      undefined: 1
    });
  });

  // Processes values of several data types
  test('groups mixed data types using String iteratee', () => {
    const result = countBy([1, '1', true], String);

    expect(result).toEqual({
      '1': 2,
      'true': 1
    });
  });

  // Processes a collection with a single item
  test('counts a collection containing one element', () => {
    const result = countBy(['apple'], value => value);

    expect(result).toEqual({
      apple: 1
    });
  });



  // Reports a TypeError for an invalid iteratee
  test('throws TypeError when the iteratee is null', () => {
    expect(() => countBy([1, 2, 3], null)).toThrow(TypeError);
  });

});
