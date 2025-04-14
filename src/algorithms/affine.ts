export const affineCipher = (text: string, a: number, b: number, decrypt: boolean = false): string => {
  let result = '';
  const gcd = (a: number, m: number): number => (m ? gcd(m, a % m) : a);
  if (gcd(a, 26) !== 1) return 'Error: A must be coprime with 26';
  const multiplier = decrypt ? modularInverse(a, 26) : a;
  const offset = decrypt ? -b : b;
  for (const char of text) {
    if (/[a-zA-Z]/.test(char)) {
      const isUpper = char === char.toUpperCase();
      const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      const x = char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
      const newIndex = ((multiplier * x) + offset) % 26;
      result += String.fromCharCode(base + newIndex);
    } else {
      result += char;
    }
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