import { numberToString, numberToCurrency, numberToPercentage } from '../packages/utils/src/math';

// Example usage of the new number-to-string utilities

console.log('=== Number to String Utilities ===\n');

// Basic number to string conversion
console.log('Basic conversion:');
console.log(numberToString(123.456)); // '123.456'
console.log(numberToString(0)); // '0'
console.log(numberToString(Infinity)); // 'Infinity'
console.log(numberToString(NaN)); // 'NaN'

// Different bases
console.log('\nDifferent bases:');
console.log(numberToString(255, { base: 16 })); // 'ff'
console.log(numberToString(255, { base: 2 })); // '11111111'
console.log(numberToString(255, { base: 8 })); // '377'

// Precision control
console.log('\nPrecision control:');
console.log(numberToString(3.14159, { precision: 2 })); // '3.14'
console.log(numberToString(3.14159, { precision: 0 })); // '3'

// Locale formatting
console.log('\nLocale formatting:');
console.log(numberToString(1234.56, { locale: 'en-US' })); // '1,234.56'
console.log(numberToString(1234.56, { locale: 'de-DE' })); // '1.234,56'

// Scientific notation
console.log('\nScientific notation:');
console.log(numberToString(1000000, { notation: 'scientific' })); // '1E6'
console.log(numberToString(0.000001, { notation: 'scientific' })); // '1E-6'

// Compact notation
console.log('\nCompact notation:');
console.log(numberToString(1000000, { notation: 'compact' })); // '1M'
console.log(numberToString(1000, { notation: 'compact' })); // '1K'

// Currency formatting
console.log('\n=== Currency Formatting ===');
console.log(numberToCurrency(1234.56)); // '$1,234.56'
console.log(numberToCurrency(1234.56, 'EUR')); // '€1,234.56'
console.log(numberToCurrency(1234.56, 'JPY')); // '¥1,235'
console.log(numberToCurrency(1234.56, 'USD', 'de-DE')); // '1.234,56 $'

// Percentage formatting
console.log('\n=== Percentage Formatting ===');
console.log(numberToPercentage(25)); // '25.00%'
console.log(numberToPercentage(25.123, 1)); // '25.1%'
console.log(numberToPercentage(25, 2, 'de-DE')); // '25,00 %'

// Real-world examples
console.log('\n=== Real-world Examples ===');

// Format user input
const userInput = 42.123456;
console.log(`User input: ${userInput}`);
console.log(`Formatted: ${numberToString(userInput, { precision: 2 })}`);

// Display prices
const price = 29.99;
console.log(`Price: ${numberToCurrency(price)}`);
console.log(`Price in EUR: ${numberToCurrency(price, 'EUR')}`);

// Show progress
const progress = 75.5;
console.log(`Progress: ${numberToPercentage(progress)}`);

// Format large numbers
const population = 7800000000;
console.log(`World population: ${numberToString(population, { notation: 'compact' })}`);

// Binary representation
const binaryNumber = 42;
console.log(`Binary: ${numberToString(binaryNumber, { base: 2 })}`);
console.log(`Hex: ${numberToString(binaryNumber, { base: 16 })}`);
