// tests/analyzeArray.test.js
import analyzeArray from '../src/analyzeArray';

test('analyzes an array of numbers correctly', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('handles arrays with a single number', () => {
  const result = analyzeArray([10]);
  expect(result).toEqual({
    average: 10,
    min: 10,
    max: 10,
    length: 1,
  });
});

test('throws an error for an empty array', () => {
  expect(() => analyzeArray([])).toThrow('Input must be a non-empty array of numbers');
});

test('throws an error for non-array inputs', () => {
  expect(() => analyzeArray('not an array')).toThrow('Input must be a non-empty array of numbers');
});
