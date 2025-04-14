export const railFenceCipher = (text: string, rails: number, decrypt: boolean = false): string => {
  if (rails <= 1 || rails > text.length) return text;
  const cycle = 2 * (rails - 1);
  let result = '';
  if (!decrypt) {
    for (let i = 0; i < rails; i++) {
      for (let j = 0; j + i < text.length; j += cycle) {
        result += text[j + i];
        if (i > 0 && i < rails - 1 && j + cycle - i < text.length) {
          result += text[j + cycle - i];
        }
      }
    }
  } else {
    const positions = [];
    for (let i = 0; i < rails; i++) {
      for (let j = 0; j + i < text.length; j += cycle) {
        positions.push(j + i);
        if (i > 0 && i < rails - 1 && j + cycle - i < text.length) {
          positions.push(j + cycle - i);
        }
      }
    }
    positions.sort((a, b) => a - b);
    result = positions.map(pos => (pos < text.length ? text[pos] : '')).join('');
  }
  return result;
};