# CryptoPlayground

CryptoPlayground is a web-based application for exploring and experimenting with various cryptographic algorithms. Built with React and TypeScript using Vite, this project provides an interactive platform to learn about and work with multiple classical cipher techniques.

## Demo

Try it live: [CryptoPlayground](https://zuru07.github.io/CryptoPlayground/)

## Features

- **Interactive UI**: User-friendly interface for selecting ciphers, entering text, and viewing results
- **Multiple Cipher Implementations**:
  - **Affine Cipher**: Encrypt/decrypt using customizable keys (a, b)
  - **Caesar Cipher**: Classic shift-based substitution cipher
  - **Hill Cipher**: Matrix-based encryption with 2x2 key matrices
  - **Vigenère Cipher**: Polyalphabetic substitution using a keyword
  - **Atbash Cipher**: Simple substitution cipher using alphabet reversal
  - **Autokey Cipher**: Polyalphabetic substitution with plaintext as part of the key
  - **Beaufort Cipher**: Reciprocal cipher using tabula recta
  - **Gronsfeld Cipher**: Modified Vigenère using numbers instead of letters
  - **Rail Fence Cipher**: Transposition cipher writing text in zigzag pattern
  - **Route Cipher**: Transposition cipher following specific path through grid
  - **Myszkowski Cipher**: Columnar transposition variant

## How to Use

1. Visit the [live demo](https://zuru07.github.io/CryptoPlayground/)
2. Select a cipher from the dropdown menu (e.g., Affine)
3. Enter your plaintext (e.g., "suraj") 
4. Input required keys (e.g., a=5, b=8 for Affine)
5. Click "Encrypt" or "Decrypt" to see the result
6. Experiment with different inputs and ciphers!

## Installation for Local Development

```bash
# Clone the repository
git clone https://github.com/Zuru07/CryptoPlayground.git

# Navigate to project directory
cd crypto-algorithms

# Install dependencies
npm install

# Start development server
npm run dev

# Open your browser and visit http://localhost:5173
```

## Project Structure

```
crypto-algorithms/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── CryptoForm.tsx
│   │   ├── CryptoResult.tsx
│   ├── algorithms/
│   │   ├── atbash.ts
│   │   ├── caesar.ts
│   │   ├── august.ts
│   │   ├── affine.ts
│   │   ├── vigenere.ts
│   │   ├── gronsfeld.ts
│   │   ├── beaufort.ts
│   │   ├── autokey.ts
│   │   ├── ngram.ts
│   │   ├── hill.ts
│   │   ├── railfence.ts
│   │   ├── route.ts
│   │   ├── myszkowski.ts
│   ├── types/
│   │   ├── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── styles.css
├── package.json
├── tsconfig.json
├── README.md
```

## Cipher Implementations

### Affine Cipher
A monoalphabetic substitution cipher where each letter is mapped using a mathematical function.

**Formula**: `E(x) = (ax + b) mod m`
- `a` and `b` are key values
- `m` is the alphabet size (26 for English)
- `a` must be coprime with `m`

**Example**:
- Plaintext: "suraj"
- Keys: a=5, b=8
- Ciphertext: "yglib"

### Caesar Cipher
One of the simplest encryption techniques where each letter is shifted by a fixed number of positions.

**Formula**: `E(x) = (x + shift) mod 26`
- `shift` is the key value (1-25)

### Hill Cipher
A polygraphic substitution cipher based on linear algebra, using matrix multiplication.

For a 2×2 matrix, letters are processed in pairs and multiplied by the key matrix.

### Other Implemented Ciphers
- **Atbash**: Simple substitution that reverses the alphabet
- **Vigenère**: Uses a keyword to select different Caesar shifts
- **Gronsfeld**: Similar to Vigenère but uses numbers as the key
- **Beaufort**: A reciprocal cipher using a tabula recta
- **Autokey**: Uses the plaintext itself as part of the key
- **Rail Fence**: A transposition cipher writing text in a zigzag pattern
- **Route**: A transposition cipher following a specific path through a grid
- **Myszkowski**: A columnar transposition variant

## Technologies Used

- React.js
- TypeScript
- Vite
- GitHub Pages (deployment)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
