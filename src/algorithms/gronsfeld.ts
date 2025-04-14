export const gronsfeldCipher = (text: string, key: string, decrypt: boolean = false): string => {
  let result = '';
  const numericKey = key.split('').map(Number).filter(n => !isNaN(n) && n >= 0 && n < 26);
  if (!numericKey.length) return text;
  let j = 0;
  for (const char of text) {
    if (/[a-zA-Z]/.test(char)) {
      const isUpper = char === char.toUpperCase();
      const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      const x = char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
      const k = numericKey[j % numericKey.length];
      const shift = decrypt ? -k : k;
      const newIndex = (x + shift + 26) % 26;
      result += String.fromCharCode(base + newIndex);
      j++;
    } else {
      result += char;
    }
  }
  return result;
};