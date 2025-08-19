import { describe, it, expect } from 'vitest';
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
} from './string-count';

describe('String Count Utils', () => {
  describe('countCharacters', () => {
    it('should count characters in a string', () => {
      expect(countCharacters('hello')).toBe(5);
      expect(countCharacters('')).toBe(0);
      expect(countCharacters('hello world')).toBe(11);
      expect(countCharacters('  spaces  ')).toBe(10);
    });

    it('should handle null/undefined', () => {
      expect(countCharacters('')).toBe(0);
      expect(countCharacters(null as any)).toBe(0);
      expect(countCharacters(undefined as any)).toBe(0);
    });
  });

  describe('countWords', () => {
    it('should count words in a string', () => {
      expect(countWords('hello world')).toBe(2);
      expect(countWords('hello')).toBe(1);
      expect(countWords('')).toBe(0);
      expect(countWords('  multiple   spaces  ')).toBe(2);
    });

    it('should handle edge cases', () => {
      expect(countWords('hello-world')).toBe(1);
      expect(countWords('hello.world')).toBe(1);
      expect(countWords('123 456')).toBe(2);
    });
  });

  describe('countLines', () => {
    it('should count lines in a string', () => {
      expect(countLines('line1\nline2\nline3')).toBe(3);
      expect(countLines('single line')).toBe(1);
      expect(countLines('')).toBe(1);
      expect(countLines('\n\n')).toBe(3);
    });

    it('should handle different line endings', () => {
      expect(countLines('line1\r\nline2')).toBe(2);
      expect(countLines('line1\rline2')).toBe(2);
    });
  });

  describe('countSentences', () => {
    it('should count sentences in a string', () => {
      expect(countSentences('Hello. How are you? I am fine!')).toBe(3);
      expect(countSentences('Single sentence')).toBe(1);
      expect(countSentences('')).toBe(0);
      expect(countSentences('Hello... How are you?')).toBe(2);
    });

    it('should handle edge cases', () => {
      expect(countSentences('Hello.')).toBe(1);
      expect(countSentences('Hello!')).toBe(1);
      expect(countSentences('Hello?')).toBe(1);
    });
  });

  describe('countParagraphs', () => {
    it('should count paragraphs in a string', () => {
      expect(countParagraphs('para1\n\npara2\n\npara3')).toBe(3);
      expect(countParagraphs('single paragraph')).toBe(1);
      expect(countParagraphs('')).toBe(0);
      expect(countParagraphs('\n\n\n')).toBe(0);
    });

    it('should handle single line breaks', () => {
      expect(countParagraphs('line1\nline2')).toBe(1);
      expect(countParagraphs('line1\n\nline2')).toBe(2);
    });
  });

  describe('countCharacter', () => {
    it('should count specific character occurrences', () => {
      expect(countCharacter('hello world', 'l')).toBe(3);
      expect(countCharacter('hello world', 'o')).toBe(2);
      expect(countCharacter('hello world', 'x')).toBe(0);
      expect(countCharacter('', 'a')).toBe(0);
    });

    it('should handle edge cases', () => {
      expect(countCharacter('hello', '')).toBe(0);
      expect(countCharacter('hello', 'll')).toBe(0);
      expect(countCharacter('', '')).toBe(0);
    });
  });

  describe('countSubstring', () => {
    it('should count substring occurrences', () => {
      expect(countSubstring('hello hello world', 'hello')).toBe(2);
      expect(countSubstring('hello world', 'o')).toBe(2);
      expect(countSubstring('hello world', 'xyz')).toBe(0);
      expect(countSubstring('', 'hello')).toBe(0);
    });

    it('should handle edge cases', () => {
      expect(countSubstring('hello', '')).toBe(0);
      expect(countSubstring('', '')).toBe(0);
      expect(countSubstring('aaa', 'aa')).toBe(2);
    });
  });

  describe('countCharacterFrequency', () => {
    it('should count frequency of each character', () => {
      const result = countCharacterFrequency('hello');
      expect(result).toEqual({
        h: 1,
        e: 1,
        l: 2,
        o: 1
      });
    });

    it('should handle empty string', () => {
      expect(countCharacterFrequency('')).toEqual({});
    });

    it('should handle special characters', () => {
      const result = countCharacterFrequency('a!a');
      expect(result).toEqual({
        a: 2,
        '!': 1
      });
    });
  });

  describe('countWordFrequency', () => {
    it('should count frequency of each word (case insensitive)', () => {
      const result = countWordFrequency('Hello hello WORLD world');
      expect(result).toEqual({
        hello: 2,
        world: 2
      });
    });

    it('should handle case sensitive counting', () => {
      const result = countWordFrequency('Hello hello WORLD world', true);
      expect(result).toEqual({
        Hello: 1,
        hello: 1,
        WORLD: 1,
        world: 1
      });
    });

    it('should handle empty string', () => {
      expect(countWordFrequency('')).toEqual({});
    });
  });

  describe('countVowels', () => {
    it('should count vowels in a string', () => {
      expect(countVowels('hello world')).toBe(3);
      expect(countVowels('HELLO WORLD')).toBe(3);
      expect(countVowels('bcdfgh')).toBe(0);
      expect(countVowels('')).toBe(0);
    });
  });

  describe('countConsonants', () => {
    it('should count consonants in a string', () => {
      expect(countConsonants('hello world')).toBe(7);
      expect(countConsonants('aeiou')).toBe(0);
      expect(countConsonants('bcdfgh')).toBe(6);
      expect(countConsonants('')).toBe(0);
    });
  });

  describe('countDigits', () => {
    it('should count digits in a string', () => {
      expect(countDigits('hello123world456')).toBe(6);
      expect(countDigits('hello world')).toBe(0);
      expect(countDigits('123')).toBe(3);
      expect(countDigits('')).toBe(0);
    });
  });

  describe('countUppercase', () => {
    it('should count uppercase letters in a string', () => {
      expect(countUppercase('Hello WORLD')).toBe(5);
      expect(countUppercase('hello world')).toBe(0);
      expect(countUppercase('HELLO')).toBe(5);
      expect(countUppercase('')).toBe(0);
    });
  });

  describe('countLowercase', () => {
    it('should count lowercase letters in a string', () => {
      expect(countLowercase('Hello WORLD')).toBe(4);
      expect(countLowercase('HELLO WORLD')).toBe(0);
      expect(countLowercase('hello world')).toBe(10);
      expect(countLowercase('')).toBe(0);
    });
  });

  describe('countSpaces', () => {
    it('should count spaces in a string', () => {
      expect(countSpaces('hello world')).toBe(1);
      expect(countSpaces('hello  world')).toBe(2);
      expect(countSpaces('hello')).toBe(0);
      expect(countSpaces('')).toBe(0);
    });
  });

  describe('countPunctuation', () => {
    it('should count punctuation marks in a string', () => {
      expect(countPunctuation('Hello, world!')).toBe(2);
      expect(countPunctuation('Hello world')).toBe(0);
      expect(countPunctuation('Hello... world!?')).toBe(5);
      expect(countPunctuation('')).toBe(0);
    });
  });

  describe('getStringStats', () => {
    it('should return comprehensive string statistics', () => {
      const stats = getStringStats('Hello, world! How are you?');
      
      expect(stats.characters).toBe(28);
      expect(stats.words).toBe(6);
      expect(stats.lines).toBe(1);
      expect(stats.sentences).toBe(2);
      expect(stats.paragraphs).toBe(1);
      expect(stats.vowels).toBe(8);
      expect(stats.consonants).toBe(12);
      expect(stats.digits).toBe(0);
      expect(stats.uppercase).toBe(1);
      expect(stats.lowercase).toBe(20);
      expect(stats.spaces).toBe(5);
      expect(stats.punctuation).toBe(3);
      expect(typeof stats.characterFrequency).toBe('object');
      expect(typeof stats.wordFrequency).toBe('object');
    });

    it('should handle empty string', () => {
      const stats = getStringStats('');
      
      expect(stats.characters).toBe(0);
      expect(stats.words).toBe(0);
      expect(stats.lines).toBe(1);
      expect(stats.sentences).toBe(0);
      expect(stats.paragraphs).toBe(0);
      expect(stats.vowels).toBe(0);
      expect(stats.consonants).toBe(0);
      expect(stats.digits).toBe(0);
      expect(stats.uppercase).toBe(0);
      expect(stats.lowercase).toBe(0);
      expect(stats.spaces).toBe(0);
      expect(stats.punctuation).toBe(0);
      expect(stats.characterFrequency).toEqual({});
      expect(stats.wordFrequency).toEqual({});
    });
  });
});
