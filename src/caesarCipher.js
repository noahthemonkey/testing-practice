// src/caesarCipher.js

// Helper function to shift a single character
function shiftCharacter(char, shift) {
  const isUpperCase = char >= 'A' && char <= 'Z';
  const isLowerCase = char >= 'a' && char <= 'z';

  if (isUpperCase) {
    const base = 'A'.charCodeAt(0);
    return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
  }

  if (isLowerCase) {
    const base = 'a'.charCodeAt(0);
    return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
  }

  // Return non-alphabetic characters unchanged
  return char;
}

// Main function
function caesarCipher(string, shift) {
  return string
    .split('')
    .map((char) => shiftCharacter(char, shift))
    .join('');
}

export default caesarCipher;
