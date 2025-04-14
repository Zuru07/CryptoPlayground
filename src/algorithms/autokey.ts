export const autokeyCipher = (text: string, key: string, decrypt: boolean = false): string => {
  let result = '';
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  if (!key) return text;
  let extendedKey = key;
  for (let i = key.length; i < text.length && !decrypt; i++) {
    if (/[a-zA-Z]/.test(text[i])) extendedKey += text[i].toUpperCase();
  }
  let j = 0;
  for (let i = 0; i < text.length; i++) {
    if (/[a-zA-Z]/.test(text[i])) {
      const isUpper = text[i] === text[i].toUpperCase();
      const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      const x = text[i].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
      const k = extendedKey[j % extendedKey.length].charCodeAt(0) - 'A'.charCodeAt(0);
      const shift = decrypt ? -k : k;
      const newIndex = (x + shift + 26) % 26;
      result += String.fromCharCode(base + newIndex);
      j++;
    } else {
      result += text[i];
    }
  }
  return result;
};