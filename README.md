# CryptoPlayground

Welcome to CryptoPlayground, a web-based application for exploring and experimenting with various cryptographic algorithms. This project, developed by Suraj, showcases implementations of ciphers like Affine, Caesar, and Hill, built using React and TypeScript with Vite. The live demo is hosted on GitHub Pages, allowing users to interact with the ciphers directly in the browser.

## Features
- **Affine Cipher**: Encrypt or decrypt text using customizable keys (e.g., a=5, b=8).
- **Caesar Cipher**: Simple shift-based substitution cipher with a fixed or variable shift.
- **Hill Cipher**: Matrix-based encryption supporting 2x2 key matrices.
- Interactive user interface for selecting ciphers, inputting text, and viewing results.

## Live Demo
Check out the live version here: [https://Zuru07.github.io/CryptoPlayground](https://Zuru07.github.io/CryptoPlayground)

## How to Use
1. Visit the live demo link above.
2. Select a cipher from the dropdown menu (e.g., Affine).
3. Enter your plaintext (e.g., "suraj") and, if required, keys (e.g., a=5, b=8 for Affine).
4. Click "Encrypt" or "Decrypt" to see the result (e.g., "yglib" for "suraj" with a=5, b=8).
5. Experiment with different inputs and ciphers to explore the algorithms!

## Installation (for Local Development)
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Zuru07/CryptoPlayground.git
2. Navigate to the project directory:
   ```bash
   cd crypto-algorithms
3. # CryptoPlayground
Welcome to CryptoPlayground, a web-based application for exploring and experimenting with various cryptographic algorithms. This project, developed by Suraj, showcases implementations of ciphers like Affine, Caesar, and Hill, built using React and TypeScript with Vite. The live demo is hosted on GitHub Pages, allowing users to interact with the ciphers directly in the browser.
## Features
- **Affine Cipher**: Encrypt or decrypt text using customizable keys (e.g., a=5, b=8).
- **Caesar Cipher**: Simple shift-based substitution cipher with a fixed or variable shift.
- **Hill Cipher**: Matrix-based encryption supporting 2x2 key matrices.
- Interactive user interface for selecting ciphers, inputting text, and viewing results.
## Live Demo
Check out the live version here: [https://Zuru07.github.io/CryptoPlayground](https://Zuru07.github.io/CryptoPlayground)
## How to Use
1. Visit the live demo link above.
2. Select a cipher from the dropdown menu (e.g., Affine).
3. Enter your plaintext (e.g., "suraj") and, if required, keys (e.g., a=5, b=8 for Affine).
4. Click "Encrypt" or "Decrypt" to see the result (e.g., "yglib" for "suraj" with a=5, b=8).
5. Experiment with different inputs and ciphers to explore the algorithms!
## Installation (for Local Development)
To run this project locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Zuru07/CryptoPlayground.git
   ```
2. Navigate to the project directory:
   ```bash
   cd crypto-algorithms
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173` to see the application running locally.


## Technologies Used
- React.js
- TypeScript
- Vite
- GitHub Pages (for deployment)

## Cipher Implementations
### Affine Cipher
The Affine cipher is a type of monoalphabetic substitution cipher where each letter in the plaintext is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter.

Formula: `E(x) = (ax + b) mod m`
- Where `a` and `b` are the key values
- `m` is the size of the alphabet (26 for English)
- `a` must be coprime with `m`

### Caesar Cipher
One of the simplest and most widely known encryption techniques. Each letter in the plaintext is shifted a certain number of places down or up the alphabet.

Formula: `E(x) = (x + shift) mod 26`
- Where `shift` is the key value (1-25)

### Hill Cipher
A polygraphic substitution cipher based on linear algebra. Each block of plaintext letters is multiplied by a matrix of integers (the key) to produce the ciphertext.

Matrix multiplication is used to encrypt blocks of letters. For a 2×2 matrix, letters are processed in pairs.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Special thanks to all contributors who have helped with the development of this project.
- Inspired by classical cryptography techniques and educational resources.

## Contact
Suraj - [GitHub Profile](https://github.com/Zuru07)

Project Link: [https://github.com/Zuru07/CryptoPlayground](https://github.com/Zuru07/CryptoPlayground)
