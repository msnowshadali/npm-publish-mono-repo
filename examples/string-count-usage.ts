import {
  countCharacters,
  countWords,
  countLines,
  countSentences,
  countParagraphs,
  countCharacter,
  countSubstring,
  countCharacterFrequency,
  countWordFrequency,
  countVowels,
  countConsonants,
  countDigits,
  countUppercase,
  countLowercase,
  countSpaces,
  countPunctuation,
  getStringStats
} from '../packages/utils/src/string-count';

// Example usage of the string counting utilities

console.log('=== String Counting Utilities ===\n');

// Sample text for demonstration
const sampleText = `Hello, world! This is a sample text.

It contains multiple paragraphs and sentences. We can analyze this text using our counting utilities.

The text has various characters: letters, numbers (123), and punctuation marks!`;

console.log('Sample Text:');
console.log(sampleText);
console.log('\n' + '='.repeat(50) + '\n');

// Basic counting functions
console.log('=== Basic Counting ===');
console.log(`Characters: ${countCharacters(sampleText)}`);
console.log(`Words: ${countWords(sampleText)}`);
console.log(`Lines: ${countLines(sampleText)}`);
console.log(`Sentences: ${countSentences(sampleText)}`);
console.log(`Paragraphs: ${countParagraphs(sampleText)}`);

// Character type counting
console.log('\n=== Character Analysis ===');
console.log(`Vowels: ${countVowels(sampleText)}`);
console.log(`Consonants: ${countConsonants(sampleText)}`);
console.log(`Digits: ${countDigits(sampleText)}`);
console.log(`Uppercase letters: ${countUppercase(sampleText)}`);
console.log(`Lowercase letters: ${countLowercase(sampleText)}`);
console.log(`Spaces: ${countSpaces(sampleText)}`);
console.log(`Punctuation marks: ${countPunctuation(sampleText)}`);

// Specific character and substring counting
console.log('\n=== Specific Counting ===');
console.log(`Letter 'e' appears: ${countCharacter(sampleText, 'e')} times`);
console.log(`Letter 'l' appears: ${countCharacter(sampleText, 'l')} times`);
console.log(`Word 'text' appears: ${countSubstring(sampleText, 'text')} times`);
console.log(`Word 'the' appears: ${countSubstring(sampleText, 'the')} times`);

// Frequency analysis
console.log('\n=== Character Frequency ===');
const charFreq = countCharacterFrequency(sampleText);
const topChars = Object.entries(charFreq)
  .sort(([,a], [,b]) => b - a)
  .slice(0, 5);
console.log('Top 5 most frequent characters:');
topChars.forEach(([char, count]) => {
  console.log(`  '${char}': ${count} times`);
});

// Word frequency analysis
console.log('\n=== Word Frequency ===');
const wordFreq = countWordFrequency(sampleText);
const topWords = Object.entries(wordFreq)
  .sort(([,a], [,b]) => b - a)
  .slice(0, 5);
console.log('Top 5 most frequent words:');
topWords.forEach(([word, count]) => {
  console.log(`  '${word}': ${count} times`);
});

// Comprehensive statistics
console.log('\n=== Comprehensive Statistics ===');
const stats = getStringStats(sampleText);
console.log('Complete text analysis:');
console.log(`  Total characters: ${stats.characters}`);
console.log(`  Total words: ${stats.words}`);
console.log(`  Total lines: ${stats.lines}`);
console.log(`  Total sentences: ${stats.sentences}`);
console.log(`  Total paragraphs: ${stats.paragraphs}`);
console.log(`  Vowels: ${stats.vowels}`);
console.log(`  Consonants: ${stats.consonants}`);
console.log(`  Digits: ${stats.digits}`);
console.log(`  Uppercase: ${stats.uppercase}`);
console.log(`  Lowercase: ${stats.lowercase}`);
console.log(`  Spaces: ${stats.spaces}`);
console.log(`  Punctuation: ${stats.punctuation}`);

// Real-world examples
console.log('\n=== Real-world Examples ===');

// Text editor character count
const userInput = 'This is what the user typed in the editor.';
console.log(`User input: "${userInput}"`);
console.log(`Character count: ${countCharacters(userInput)}`);
console.log(`Word count: ${countWords(userInput)}`);

// Document analysis
const document = `First paragraph with some content.

Second paragraph with more content and details.

Third paragraph concludes the document.`;

console.log('\nDocument analysis:');
console.log(`Paragraphs: ${countParagraphs(document)}`);
console.log(`Sentences: ${countSentences(document)}`);
console.log(`Words: ${countWords(document)}`);

// Social media post analysis
const socialPost = 'Just had an amazing day! #awesome #great #amazing';
console.log('\nSocial media post analysis:');
console.log(`Post: "${socialPost}"`);
console.log(`Characters: ${countCharacters(socialPost)}`);
console.log(`Words: ${countWords(socialPost)}`);
console.log(`Hashtags: ${countSubstring(socialPost, '#')}`);

// Code analysis
const codeSnippet = 'function hello() { return "Hello, World!"; }';
console.log('\nCode snippet analysis:');
console.log(`Code: "${codeSnippet}"`);
console.log(`Characters: ${countCharacters(codeSnippet)}`);
console.log(`Spaces: ${countSpaces(codeSnippet)}`);
console.log(`Punctuation: ${countPunctuation(codeSnippet)}`);
console.log(`Parentheses: ${countCharacter(codeSnippet, '(') + countCharacter(codeSnippet, ')')}`);

// Performance comparison
console.log('\n=== Performance Comparison ===');
const longText = 'Lorem ipsum '.repeat(1000); // Create a long text
console.log(`Long text length: ${countCharacters(longText)} characters`);

const startTime = performance.now();
const stats2 = getStringStats(longText);
const endTime = performance.now();

console.log(`Analysis completed in ${(endTime - startTime).toFixed(2)}ms`);
console.log(`Words found: ${stats2.words}`);
console.log(`Lines found: ${stats2.lines}`);
