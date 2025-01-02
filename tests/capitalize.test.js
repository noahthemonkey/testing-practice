// tests/capitalize.test.js
import capitalize from '../src/capitalize';

test('capitalizes the first letter of a word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('returns an empty string when input is empty', () => {
  expect(capitalize('')).toBe('');
});

test('does not change already capitalized words', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('handles single character strings', () => {
  expect(capitalize('a')).toBe('A');
});
