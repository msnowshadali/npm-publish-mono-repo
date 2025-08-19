/**
 * String counting utilities for analyzing text content
 */

/**
 * Counts the total number of characters in a string
 */
export function countCharacters(str: string): number {
  if (!str) return 0;
  return str.length;
}

/**
 * Counts the number of words in a string
 */
export function countWords(str: string): number {
  if (!str) return 0;
  // Split by whitespace and filter out empty strings
  return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Counts the number of lines in a string
 */
export function countLines(str: string): number {
  if (!str) return 0;
  // Split by newline characters and count
  return str.split(/\r?\n/).length;
}

/**
 * Counts the number of sentences in a string
 */
export function countSentences(str: string): number {
  if (!str) return 0;
  // Split by sentence endings and filter out empty strings
  return str.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
}

/**
 * Counts the number of paragraphs in a string
 */
export function countParagraphs(str: string): number {
  if (!str) return 0;
  // Split by double newlines and filter out empty paragraphs
  return str.split(/\n\s*\n/).filter(paragraph => paragraph.trim().length > 0).length;
}

/**
 * Counts the frequency of a specific character in a string
 */
export function countCharacter(str: string, char: string): number {
  if (!str || !char) return 0;
  if (char.length !== 1) return 0;
  
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}

/**
 * Counts the frequency of a specific substring in a string
 */
export function countSubstring(str: string, substring: string): number {
  if (!str || !substring) return 0;
  if (substring.length === 0) return 0;
  
  let count = 0;
  let position = str.indexOf(substring);
  
  while (position !== -1) {
    count++;
    position = str.indexOf(substring, position + 1);
  }
  
  return count;
}

/**
 * Counts the frequency of each character in a string
 */
export function countCharacterFrequency(str: string): Record<string, number> {
  if (!str) return {};
  
  const frequency: Record<string, number> = {};
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  
  return frequency;
}

/**
 * Counts the frequency of each word in a string
 */
export function countWordFrequency(str: string, caseSensitive: boolean = false): Record<string, number> {
  if (!str) return {};
  
  const words = str.trim().split(/\s+/).filter(word => word.length > 0);
  const frequency: Record<string, number> = {};
  
  for (const word of words) {
    const key = caseSensitive ? word : word.toLowerCase();
    frequency[key] = (frequency[key] || 0) + 1;
  }
  
  return frequency;
}

/**
 * Counts the number of vowels in a string
 */
export function countVowels(str: string): number {
  if (!str) return 0;
  
  const vowels = /[aeiouAEIOU]/g;
  const matches = str.match(vowels);
  return matches ? matches.length : 0;
}

/**
 * Counts the number of consonants in a string
 */
export function countConsonants(str: string): number {
  if (!str) return 0;
  
  const consonants = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g;
  const matches = str.match(consonants);
  return matches ? matches.length : 0;
}

/**
 * Counts the number of digits in a string
 */
export function countDigits(str: string): number {
  if (!str) return 0;
  
  const digits = /\d/g;
  const matches = str.match(digits);
  return matches ? matches.length : 0;
}

/**
 * Counts the number of uppercase letters in a string
 */
export function countUppercase(str: string): number {
  if (!str) return 0;
  
  const uppercase = /[A-Z]/g;
  const matches = str.match(uppercase);
  return matches ? matches.length : 0;
}

/**
 * Counts the number of lowercase letters in a string
 */
export function countLowercase(str: string): number {
  if (!str) return 0;
  
  const lowercase = /[a-z]/g;
  const matches = str.match(lowercase);
  return matches ? matches.length : 0;
}

/**
 * Counts the number of spaces in a string
 */
export function countSpaces(str: string): number {
  if (!str) return 0;
  
  const spaces = /\s/g;
  const matches = str.match(spaces);
  return matches ? matches.length : 0;
}

/**
 * Counts the number of punctuation marks in a string
 */
export function countPunctuation(str: string): number {
  if (!str) return 0;
  
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const matches = str.match(punctuation);
  return matches ? matches.length : 0;
}

/**
 * Gets comprehensive statistics about a string
 */
export function getStringStats(str: string): {
  characters: number;
  words: number;
  lines: number;
  sentences: number;
  paragraphs: number;
  vowels: number;
  consonants: number;
  digits: number;
  uppercase: number;
  lowercase: number;
  spaces: number;
  punctuation: number;
  characterFrequency: Record<string, number>;
  wordFrequency: Record<string, number>;
} {
  return {
    characters: countCharacters(str),
    words: countWords(str),
    lines: countLines(str),
    sentences: countSentences(str),
    paragraphs: countParagraphs(str),
    vowels: countVowels(str),
    consonants: countConsonants(str),
    digits: countDigits(str),
    uppercase: countUppercase(str),
    lowercase: countLowercase(str),
    spaces: countSpaces(str),
    punctuation: countPunctuation(str),
    characterFrequency: countCharacterFrequency(str),
    wordFrequency: countWordFrequency(str)
  };
}
