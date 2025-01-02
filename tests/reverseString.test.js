// tests/reverseString.test.js
import reverseString from '../src/reverseString';

test('reverses a single word', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses a sentence', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('handles empty strings', () => {
  expect(reverseString('')).toBe('');
});

test('handles single characters', () => {
  expect(reverseString('a')).toBe('a');
});

test('preserves spaces and special characters', () => {
  expect(reverseString('a b c!')).toBe('!c b a');
});
