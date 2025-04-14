export interface Cipher {
    name: string;
    value: string;
    needsKey: boolean;
  }
  
  export type Operation = 'encrypt' | 'decrypt';