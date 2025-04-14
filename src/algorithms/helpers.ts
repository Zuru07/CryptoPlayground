export const modInverse = (a: number, m: number): number => {
    a = a % m;
    for (let x = 1; x < m; x++) {
      if ((a * x) % m === 1) {
        return x;
      }
    }
    return -1;
  };
  
  export const charToIndex = (c: string): number => {
    return c.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
  };
  
  export const indexToChar = (i: number, isUpper: boolean): string => {
    return String.fromCharCode((isUpper ? 'A' : 'a').charCodeAt(0) + (i % 26));
  };