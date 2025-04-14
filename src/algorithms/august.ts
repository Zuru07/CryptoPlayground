import { caesarCipher } from './caesar'; // Adjust the path based on your project structure

export const augustCipher = (text: string, decrypt: boolean = false): string => {
  return caesarCipher(text, decrypt, 1);
};