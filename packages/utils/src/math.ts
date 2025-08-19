/**
 * Clamps a number between min and max values
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Rounds a number to a specified number of decimal places
 */
export function round(value: number, decimals: number = 0): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

/**
 * Generates a random number between min and max (inclusive)
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Calculates the percentage of a value relative to a total
 */
export function percentage(value: number, total: number): number {
  if (total === 0) return 0;
  return (value / total) * 100;
}

/**
 * Checks if a number is even
 */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * Checks if a number is odd
 */
export function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

/**
 * Calculates the factorial of a number
 */
export function factorial(n: number): number {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Calculates the greatest common divisor of two numbers
 */
export function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Calculates the least common multiple of two numbers
 */
export function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

/**
 * Converts a number to a string with optional formatting options
 */
export function numberToString(
  num: number,
  options: {
    base?: number;
    precision?: number;
    locale?: string;
    notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
    compactDisplay?: 'short' | 'long';
  } = {}
): string {
  const {
    base = 10,
    precision,
    locale = 'en-US',
    notation = 'standard',
    compactDisplay = 'short'
  } = options;

  // Handle special cases
  if (num === 0) return '0';
  if (num === Infinity) return 'Infinity';
  if (num === -Infinity) return '-Infinity';
  if (isNaN(num)) return 'NaN';

  // Convert to different base if specified
  if (base !== 10) {
    return num.toString(base);
  }

  // Handle precision
  if (precision !== undefined) {
    num = round(num, precision);
  }

  // Format with locale and notation
  try {
    const formatter = new Intl.NumberFormat(locale, {
      notation,
      compactDisplay,
      maximumFractionDigits: precision !== undefined ? precision : 20,
      minimumFractionDigits: precision !== undefined ? precision : 0
    });
    return formatter.format(num);
  } catch (error) {
    // Fallback to basic toString if formatting fails
    return num.toString();
  }
}

/**
 * Converts a number to a currency string
 */
export function numberToCurrency(
  num: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(num);
  } catch (error) {
    // Fallback to basic formatting
    return `${currency} ${num.toFixed(2)}`;
  }
}

/**
 * Converts a number to a percentage string
 */
export function numberToPercentage(
  num: number,
  precision: number = 2,
  locale: string = 'en-US'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: precision,
      maximumFractionDigits: precision
    }).format(num / 100);
  } catch (error) {
    // Fallback to basic formatting
    return `${num.toFixed(precision)}%`;
  }
}
