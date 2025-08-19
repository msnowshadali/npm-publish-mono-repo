import { describe, it, expect } from 'vitest';
import {
  clamp,
  round,
  random,
  percentage,
  isEven,
  isOdd,
  factorial,
  gcd,
  lcm,
  numberToString,
  numberToCurrency,
  numberToPercentage
} from './math';

describe('Math Utils', () => {
  describe('clamp', () => {
    it('should clamp value between min and max', () => {
      expect(clamp(5, 0, 10)).toBe(5);
      expect(clamp(-5, 0, 10)).toBe(0);
      expect(clamp(15, 0, 10)).toBe(10);
    });
  });

  describe('round', () => {
    it('should round to specified decimal places', () => {
      expect(round(3.14159, 2)).toBe(3.14);
      expect(round(3.14159, 0)).toBe(3);
      expect(round(3.5)).toBe(4);
    });
  });

  describe('random', () => {
    it('should generate random number within range', () => {
      const result = random(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
      expect(Number.isInteger(result)).toBe(true);
    });
  });

  describe('percentage', () => {
    it('should calculate percentage correctly', () => {
      expect(percentage(25, 100)).toBe(25);
      expect(percentage(0, 100)).toBe(0);
      expect(percentage(50, 0)).toBe(0);
    });
  });

  describe('isEven', () => {
    it('should identify even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(3)).toBe(false);
      expect(isEven(0)).toBe(true);
    });
  });

  describe('isOdd', () => {
    it('should identify odd numbers', () => {
      expect(isOdd(3)).toBe(true);
      expect(isOdd(2)).toBe(false);
      expect(isOdd(1)).toBe(true);
    });
  });

  describe('factorial', () => {
    it('should calculate factorial correctly', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(5)).toBe(120);
      expect(factorial(-1)).toBe(NaN);
    });
  });

  describe('gcd', () => {
    it('should calculate greatest common divisor', () => {
      expect(gcd(48, 18)).toBe(6);
      expect(gcd(0, 5)).toBe(5);
      expect(gcd(7, 13)).toBe(1);
    });
  });

  describe('lcm', () => {
    it('should calculate least common multiple', () => {
      expect(lcm(12, 18)).toBe(36);
      expect(lcm(0, 5)).toBe(0);
      expect(lcm(7, 13)).toBe(91);
    });
  });

  describe('numberToString', () => {
    it('should convert number to string with default options', () => {
      expect(numberToString(123.456)).toBe('123.456');
      expect(numberToString(0)).toBe('0');
      expect(numberToString(Infinity)).toBe('Infinity');
      expect(numberToString(-Infinity)).toBe('-Infinity');
      expect(numberToString(NaN)).toBe('NaN');
    });

    it('should handle different bases', () => {
      expect(numberToString(255, { base: 16 })).toBe('ff');
      expect(numberToString(255, { base: 2 })).toBe('11111111');
      expect(numberToString(255, { base: 8 })).toBe('377');
    });

    it('should handle precision', () => {
      expect(numberToString(3.14159, { precision: 2 })).toBe('3.14');
      expect(numberToString(3.14159, { precision: 0 })).toBe('3');
    });

    it('should handle locale formatting', () => {
      expect(numberToString(1234.56, { locale: 'de-DE' })).toBe('1.234,56');
      expect(numberToString(1234.56, { locale: 'en-US' })).toBe('1,234.56');
    });

    it('should handle scientific notation', () => {
      expect(numberToString(1000000, { notation: 'scientific' })).toBe('1E6');
      expect(numberToString(0.000001, { notation: 'scientific' })).toBe('1E-6');
    });

    it('should handle compact notation', () => {
      expect(numberToString(1000000, { notation: 'compact' })).toBe('1M');
      expect(numberToString(1000, { notation: 'compact' })).toBe('1K');
    });
  });

  describe('numberToCurrency', () => {
    it('should format as USD currency', () => {
      expect(numberToCurrency(1234.56)).toBe('$1,234.56');
      expect(numberToCurrency(0)).toBe('$0.00');
      expect(numberToCurrency(-123.45)).toBe('-$123.45');
    });

    it('should handle different currencies', () => {
      expect(numberToCurrency(1234.56, 'EUR')).toBe('€1,234.56');
      expect(numberToCurrency(1234.56, 'JPY')).toBe('¥1,235');
    });

    it('should handle different locales', () => {
      expect(numberToCurrency(1234.56, 'USD', 'de-DE')).toBe('1.234,56 $');
    });
  });

  describe('numberToPercentage', () => {
    it('should format as percentage', () => {
      expect(numberToPercentage(25)).toBe('25.00%');
      expect(numberToPercentage(0)).toBe('0.00%');
      expect(numberToPercentage(100)).toBe('100.00%');
    });

    it('should handle different precision', () => {
      expect(numberToPercentage(25.123, 1)).toBe('25.1%');
      expect(numberToPercentage(25.123, 3)).toBe('25.123%');
    });

    it('should handle different locales', () => {
      expect(numberToPercentage(25, 2, 'de-DE')).toBe('25,00 %');
    });
  });
});
