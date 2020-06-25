const decodeMorse = morseCode =>
  morseCode
    .trim()
    .split(" ")
    .map(e => (MORSE_CODE[`${e}`] === undefined ? " " : MORSE_CODE[`${e}`]))
    .join("")
    .replace(/\s\s+/g, " ");
