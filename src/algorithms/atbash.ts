export const atbashCipher = (text: string): string => {
  const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const reverse = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
  let result = '';
  for (const char of text) {
    if (/[a-zA-Z]/.test(char)) {
      const isUpper = char === char.toUpperCase();
      const base = isUpper ? 'A' : 'a';
      const index = char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
      const newChar = reverse[index];
      result += isUpper ? newChar : newChar.toLowerCase();
    } else {
      result += char;
    }
  }
  return result;
};