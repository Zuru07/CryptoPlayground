export const hillCipher = (text: string, keyMatrix: number[][], decrypt: boolean = false): string => {
  let result = '';
  let paddedText = text.toUpperCase().replace(/[^A-Z]/g, ''); // Changed from const to let
  if (paddedText.length % 2 !== 0) paddedText += 'X'; // Reassignment is now allowed
  const determinant = keyMatrix[0][0] * keyMatrix[1][1] - keyMatrix[0][1] * keyMatrix[1][0];
  const invDet = modularInverse(determinant % 26, 26);
  if (!invDet) return 'Error: Invalid key matrix';
  const inverseMatrix = decrypt
    ? [
        [(keyMatrix[1][1] * invDet) % 26, (-keyMatrix[0][1] * invDet) % 26],
        [(-keyMatrix[1][0] * invDet) % 26, (keyMatrix[0][0] * invDet) % 26]
      ].map(row => row.map(x => (x + 26) % 26))
    : keyMatrix;
  for (let i = 0; i < paddedText.length; i += 2) {
    const p1 = paddedText[i].charCodeAt(0) - 'A'.charCodeAt(0);
    const p2 = paddedText[i + 1].charCodeAt(0) - 'A'.charCodeAt(0);
    const c1 = (inverseMatrix[0][0] * p1 + inverseMatrix[0][1] * p2) % 26;
    const c2 = (inverseMatrix[1][0] * p1 + inverseMatrix[1][1] * p2) % 26;
    result += String.fromCharCode('A'.charCodeAt(0) + c1) + String.fromCharCode('A'.charCodeAt(0) + c2);
  }
  return result;
};

const modularInverse = (a: number, m: number): number => {
  let m0 = m, x0 = 0, x1 = 1;
  while (a > 1) {
    const q = Math.floor(a / m);
    let t = m;
    m = a % m;
    a = t;
    t = x0;
    x0 = x1 - q * x0;
    x1 = t;
  }
  if (x1 < 0) x1 += m0;
  return x1;
};