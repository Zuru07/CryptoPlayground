export const myszkowskiCipher = (text: string, key: string, decrypt: boolean = false): string => {
  let result = '';
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  if (!key) return text;
  const keyOrder = Array.from(key).map((_, i) => i).sort((a, b) => key[a].localeCompare(key[b]));
  const numOrder = keyOrder.map(i => key[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1);
  const cols = key.length;
  const rows = Math.ceil(text.length / cols);
  const grid: string[] = Array(rows * cols).fill('');
  const paddedText = text.padEnd(rows * cols, 'X');
  if (!decrypt) {
    for (let i = 0; i < paddedText.length; i++) {
      grid[i] = paddedText[i];
    }
    for (let c = 0; c < cols; c++) {
      const col = keyOrder.indexOf(c);
      for (let r = 0; r < rows; r++) {
        result += grid[r * cols + col];
      }
    }
  } else {
    let index = 0;
    for (let c = 0; c < cols; c++) {
      const col = keyOrder.indexOf(c);
      for (let r = 0; r < rows; r++) {
        if (index < paddedText.length) grid[r * cols + col] = paddedText[index++];
      }
    }
    result = grid.join('').replace(/X+$/, '');
  }
  return result;
};