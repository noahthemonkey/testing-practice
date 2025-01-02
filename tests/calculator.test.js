// tests/calculator.test.js
import calculator from '../src/calculator';

test('adds two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(7, 4)).toBe(3);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('divides two numbers', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test('throws an error when dividing by zero', () => {
  expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
});
