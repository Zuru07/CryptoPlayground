export const caesarCipher = (text: string, decrypt: boolean = false, shift: number = 3): string => {
  const effectiveShift = decrypt ? -shift : shift;
  let result = '';
  for (const char of text) {
    if (/[a-zA-Z]/.test(char)) {
      const isUpper = char === char.toUpperCase();
      const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      const x = char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
      const newIndex = (x + effectiveShift + 26) % 26;
      result += String.fromCharCode(base + newIndex);
    } else {
      result += char;
    }
  }
  return result;
};