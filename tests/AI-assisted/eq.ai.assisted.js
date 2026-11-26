
import eq from '../../src/eq.js'

describe('eq()', () => {
  // 1. Normal primitive values
  describe('Normal primitive values', () => {
    test('should return true for equal numbers', () => {
      expect(eq(5, 5)).toBe(true)
    })

    test('should return false for different numbers', () => {
      expect(eq(5, 10)).toBe(false)
    })

    test('should return true for equal strings', () => {
      expect(eq('hello', 'hello')).toBe(true)
    })

    test('should return false for different strings', () => {
      expect(eq('hello', 'world')).toBe(false)
    })

    test('should return true for equal booleans', () => {
      expect(eq(true, true)).toBe(true)
    })

    test('should return false for different booleans', () => {
      expect(eq(true, false)).toBe(false)
    })
  })

  // 2. Boundary values and special numbers
  describe('Boundary values and special numbers', () => {
    test('should treat positive zero and negative zero as equivalent', () => {
      expect(eq(+0, -0)).toBe(true)
    })

    test('should return true when comparing zero with zero', () => {
      expect(eq(0, 0)).toBe(true)
    })

    test('should return true for equal maximum safe integers', () => {
      expect(
        eq(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
      ).toBe(true)
    })

    test('should return true when comparing positive infinity with itself', () => {
      expect(eq(Infinity, Infinity)).toBe(true)
    })

    test('should return false when comparing positive and negative infinity', () => {
      expect(eq(Infinity, -Infinity)).toBe(false)
    })

    test('should return true when comparing NaN with itself', () => {
      expect(eq(NaN, NaN)).toBe(true)
    })
  })

  // 3. Different data types and type coercion
  describe('Different data types and type coercion', () => {
    test('should return true for a number and its equivalent numeric string', () => {
      expect(eq(5, '5')).toBe(true)
    })

    test('should return true when comparing zero with false', () => {
      expect(eq(0, false)).toBe(true)
    })

    test('should return true when comparing one with true', () => {
      expect(eq(1, true)).toBe(true)
    })

    test('should return true when comparing null with undefined', () => {
      expect(eq(null, undefined)).toBe(true)
    })

    test('should return true when comparing an empty string with zero', () => {
      expect(eq('', 0)).toBe(true)
    })

    test('should return false for values that remain unequal after coercion', () => {
      expect(eq(5, 'hello')).toBe(false)
    })

    test('should consider a boxed number equal to its primitive value', () => {
      expect(eq(1, Object(1))).toBe(true)
      expect(eq(Object(1), 1)).toBe(true)
    })

    test('should return false for different boxed primitive references', () => {
      expect(eq(Object('a'), Object('a'))).toBe(false)
      expect(eq(Object(1), Object(1))).toBe(false)
    })

  })

  // 4. Objects and reference comparisons
  describe('Objects and reference comparisons', () => {
    test('should return true when comparing the same object reference', () => {
      const obj = { a: 1 }

      expect(eq(obj, obj)).toBe(true)
    })

    test('should return false for different objects with identical properties', () => {
      const first = { a: 1 }
      const second = { a: 1 }

      expect(eq(first, second)).toBe(false)
    })

    test('should return true when comparing the same array reference', () => {
      const arr = [1, 2, 3]

      expect(eq(arr, arr)).toBe(true)
    })

    test('should return false for different arrays with identical elements', () => {
      const first = [1, 2]
      const second = [1, 2]

      expect(eq(first, second)).toBe(false)
    })

    test('should return false for different function references', () => {
      const fn1 = () => 1
      const fn2 = () => 1

      expect(eq(fn1, fn2)).toBe(false)
    })
  })
})
