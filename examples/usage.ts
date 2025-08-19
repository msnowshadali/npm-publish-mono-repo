// Example usage of both packages
import { Button, Card, Input } from '@your-org/ui';
import { 
  capitalize, 
  toCamelCase, 
  unique, 
  shuffle, 
  deepClone,
  formatDate,
  clamp 
} from '@your-org/utils';

console.log('=== UI Package Demo ===');

// Create and render a button
const button = Button.create({
  children: 'Click me!',
  variant: 'primary',
  size: 'lg'
});
console.log('Button HTML:', button.render());

// Create and render a card
const card = Card.create({
  title: 'Sample Card',
  subtitle: 'This is a sample card component',
  children: 'Card content goes here',
  padding: 'lg'
});
console.log('Card HTML:', card.render());

// Create and render an input
const input = Input.create({
  placeholder: 'Enter your name',
  type: 'text',
  required: true
});
console.log('Input HTML:', input.render());

console.log('\n=== Utils Package Demo ===');

// String utilities
console.log('Capitalize:', capitalize('hello world'));
console.log('To CamelCase:', toCamelCase('hello-world'));
console.log('Clamped value:', clamp(150, 0, 100));

// Array utilities
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log('Unique numbers:', unique(numbers));
console.log('Shuffled numbers:', shuffle([...numbers]));

// Object utilities
const originalObj = { name: 'John', age: 30, address: { city: 'NYC' } };
const clonedObj = deepClone(originalObj);
console.log('Deep cloned object:', clonedObj);

// Date utilities
const now = new Date();
console.log('Formatted date:', formatDate(now, 'YYYY-MM-DD HH:mm:ss'));

console.log('\n=== Package Versions ===');
console.log('UI Package Version:', require('@your-org/ui').VERSION);
console.log('Utils Package Version:', require('@your-org/utils').VERSION);
