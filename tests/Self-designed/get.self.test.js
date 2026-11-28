
import get from '../../src/get.js';

describe('get (self-designed tests)', () => {

  // Basic nested property lookup
  test('returns a nested product attribute', () => {
    const data = {
      product: {
        details: {
          color: 'Green'
        }
      }
    };

    expect(get(data, 'product.details.color')).toBe('Green');
  });

  // Array index access using bracket notation
  test('accesses an array element using bracket notation', () => {
    const data = {
      cart: {
        lines: [
          { qty: 10 },
          { qty: 20 }
        ]
      }
    };

    expect(get(data, 'cart.lines[0].qty', 0)).toBe(10);
    expect(get(data, 'cart.lines[1].qty', 0)).toBe(20);
  });

  //  Path provided as an array of segments
  test('accepts a path provided as an array', () => {
    const Jacket = {
      category: [{ color: { size: 'M' } }]
    };

    expect(get(Jacket, ['category', '0', 'color', 'size'])).toBe('M');
  });

  // Explicitly undefined property
  test('returns the default value when the resolved property is undefined', () => {
    const data = {
      flags: {
        beta: undefined
      }
    };

    expect(get(data, 'flags.beta', false)).toBe(false);
  });

  // Missing nested property
  test('returns the default value when a nested path does not exist', () => {
    const data = {
      product: {}
    };

    expect(get(data, 'product.details.color', 'Unknown')).toBe('Unknown');
  });

  // Empty array path
  test('returns undefined when the path is an empty array', () => {
    const data = {
      product: {
        name: 'Laptop'
      }
    };

    expect(get(data, [])).toBe(undefined);
  });

  //Empty-string property key
  test('accesses a property with an empty string as its key', () => {
    const data = {
      '': 'Special value'
    };

    expect(get(data, '')).toBe('Special value');
  });

  //  Null or undefined root object
  test('returns the default value when the object is null or undefined', () => {
    expect(get(null, 'a.b.c', 'fallback')).toBe('fallback');
    expect(get(undefined, 'a.b.c', 'fallback')).toBe('fallback');
    expect(get(undefined, 'a.b.c')).toBe(undefined);
  });

  // Null intermediate property:
  test('returns the default value when an intermediate property is null', () => {
    const data = {
      product: {
        details: null
      }
    };

    expect(get(data, 'product.details.color', 'Unknown')).toBe('Unknown');
  });

  //  Existing falsy values
  test('preserves existing falsy values instead of returning the default', () => {
    const data = {
      price: 0,
      available: false,
      description: '',
      category: null
    };

    expect(get(data, 'price', 'Unknown')).toBe(0);
    expect(get(data, 'available', 'Unknown')).toBe(false);
    expect(get(data, 'description', 'Unknown')).toBe('');
    expect(get(data, 'category', 'Unknown')).toBe(null);
  });
});
