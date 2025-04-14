export const routeCipher = (text: string, rows: number, cols: number, decrypt: boolean = false): string => {
  if (rows * cols < text.length || rows <= 0 || cols <= 0) return text;
  const grid: string[] = Array(rows * cols).fill('');
  let index = 0;
  const paddedText = text.padEnd(rows * cols, 'X');
  if (!decrypt) {
    let r = 0, c = cols - 1, dir = 0; // 0: right, 1: down, 2: left, 3: up
    const dr = [0, 1, 0, -1];
    const dc = [-1, 0, 1, 0];
    let steps = cols;
    while (index < paddedText.length) {
      grid[r * cols + c] = paddedText[index++];
      r += dr[dir];
      c += dc[dir];
      steps--;
      if (steps === 0) {
        dir = (dir + 1) % 4;
        steps = dir % 2 === 0 ? cols : rows;
        if (dir === 1 || dir === 3) steps--;
      }
    }
    return grid.join('');
  } else {
    let r = 0, c = cols - 1, dir = 0;
    const dr = [0, 1, 0, -1];
    const dc = [-1, 0, 1, 0];
    let steps = cols;
    for (let i = 0; i < paddedText.length; i++) {
      grid[r * cols + c] = paddedText[i];
      r += dr[dir];
      c += dc[dir];
      steps--;
      if (steps === 0) {
        dir = (dir + 1) % 4;
        steps = dir % 2 === 0 ? cols : rows;
        if (dir === 1 || dir === 3) steps--;
      }
    }
    return grid.join('').replace(/X+$/, '');
  }
};