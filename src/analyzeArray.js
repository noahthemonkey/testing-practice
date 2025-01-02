// src/analyzeArray.js

function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('Input must be a non-empty array of numbers');
    }
  
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
  
    return {
      average,
      min,
      max,
      length,
    };
  }
  
  export default analyzeArray;
  