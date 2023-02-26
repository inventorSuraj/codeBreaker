// Set up event listeners
const plainTextInput = document.querySelector('#plainTextInput');
const morseCodeInput = document.querySelector('#morseCodeInput');

plainTextInput.addEventListener('input', convertToMorse);
morseCodeInput.addEventListener('input', convertToPlainText);

// Plain text to Morse code conversion
function convertToMorse(e) {
  const plainText = e.target.value;
  const morseCode = convertPlainTextToMorse(plainText);
  morseCodeInput.value = morseCode;
}

// Morse code to Plain text conversion
function convertToPlainText(e) {
  const morseCode = e.target.value;
  const plainText = convertMorseToPlainText(morseCode);
  plainTextInput.value = plainText;
}

// Helper functions for converting plain text to morse code
function convertPlainTextToMorse(plainText) {
  // Your code here
  return morseCode;
}

// Helper functions for converting morse code to plain text
function convertMorseToPlainText(morseCode) {
  // Your code here
  return plainText;
}
