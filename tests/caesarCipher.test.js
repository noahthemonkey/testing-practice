// tests/caesarCipher.test.js
import caesarCipher from '../src/caesarCipher';

test('wraps from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('keeps punctuation and spaces unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('handles large shifts by wrapping', () => {
  expect(caesarCipher('abc', 29)).toBe('def'); // Equivalent to shift of 3
});

test('handles negative shifts', () => {
  expect(caesarCipher('def', -3)).toBe('abc');
});
