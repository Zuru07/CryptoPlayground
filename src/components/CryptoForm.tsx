import { useState } from 'react';
import { Cipher, Operation } from '../types';
import {
  atbashCipher,
  caesarCipher,
  augustCipher,
  affineCipher,
  vigenereCipher,
  gronsfeldCipher,
  beaufortCipher,
  autokeyCipher,
  runningKeyCipher,
  hillCipher,
  railFenceCipher,
  routeCipher,
  myszkowskiCipher,
} from '../algorithms';

interface CryptoFormProps {
  ciphers: Cipher[];
  setOutput: (output: string) => void;
}

const CryptoForm = ({ ciphers, setOutput }: CryptoFormProps) => {
  const [cipher, setCipher] = useState('atbash');
  const [operation, setOperation] = useState<Operation>('encrypt');
  const [plaintext, setPlaintext] = useState('');
  const [key, setKey] = useState('');
  const [a, setA] = useState(3); // For Affine
  const [b, setB] = useState(5); // For Affine
  const [hillKey, setHillKey] = useState([[3, 5], [2, 7]]); // For Hill
  const [rails, setRails] = useState(3); // For Rail Fence
  const [rows, setRows] = useState(2); // For Route
  const [cols, setCols] = useState(5); // For Route

  const selectedCipher = ciphers.find((c) => c.value === cipher);

  const handleRun = () => {
    const isDecrypt = operation === 'decrypt';
    let result = '';
    console.log("Processing:", { cipher, operation, plaintext }); // Debug input
    try {
      switch (cipher) {
        case 'caesar':
          result = caesarCipher(plaintext, isDecrypt);
          console.log("Caesar result:", result); // Debug output
          break;
        case 'atbash':
          result = atbashCipher(plaintext);
          break;
        case 'august':
          result = augustCipher(plaintext, isDecrypt);
          break;
        case 'affine':
          result = affineCipher(plaintext, a, b, isDecrypt);
          break;
        case 'vigenere':
          result = vigenereCipher(plaintext, key, isDecrypt);
          break;
        case 'gronsfeld':
          result = gronsfeldCipher(plaintext, key, isDecrypt);
          break;
        case 'beaufort':
          result = beaufortCipher(plaintext, key, isDecrypt);
          break;
        case 'autokey':
          result = autokeyCipher(plaintext, key, isDecrypt);
          break;
        case 'runningKey':
          result = runningKeyCipher(plaintext, key, isDecrypt);
          break;
        case 'hill':
          result = hillCipher(plaintext, hillKey, isDecrypt);
          break;
        case 'railFence':
          result = railFenceCipher(plaintext, rails, isDecrypt);
          break;
        case 'route':
          result = routeCipher(plaintext, rows, cols, isDecrypt);
          break;
        case 'myszkowski':
          result = myszkowskiCipher(plaintext, key, isDecrypt);
          break;
        default:
          result = 'Error: Unknown cipher.';
      }
    } catch (e) {
      result = `Error: ${e instanceof Error ? e.message : String(e)}`;
    }
    setOutput(result);
  };

  return (
    <div className="container">
      <h2 className="fade-in">Cryptographic Playground</h2>

      {/* Cipher Selection */}
      <div className="mb-4 fade-in stagger-1">
        <label>Select Cipher</label>
        <select value={cipher} onChange={(e) => setCipher(e.target.value)}>
          {ciphers.map((c) => (
            <option key={c.value} value={c.value}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Operation Selection */}
      <div className="mb-4 fade-in stagger-2">
        <label>Operation</label>
        <select value={operation} onChange={(e) => setOperation(e.target.value as Operation)}>
          <option value="encrypt">Encrypt</option>
          <option value="decrypt">Decrypt</option>
        </select>
      </div>

      {/* Plaintext Input */}
      <div className="mb-4 fade-in stagger-3">
        <label>{operation === 'encrypt' ? 'Plaintext' : 'Ciphertext'}</label>
        <textarea
          value={plaintext}
          onChange={(e) => setPlaintext(e.target.value)}
          rows={4}
          placeholder="Enter your text here..."
        />
      </div>

      {/* Dynamic Key Input */}
      {selectedCipher?.needsKey && (
        <div className="mb-4 fade-in stagger-4">
          <label>
            {cipher === 'hill'
              ? '2x2 Key Matrix'
              : cipher === 'railFence'
              ? 'Number of Rails'
              : cipher === 'route'
              ? 'Rows and Columns'
              : cipher === 'affine'
              ? 'Keys a and b'
              : 'Key'}
          </label>
          {cipher === 'affine' ? (
            <div className="flex space-x-2">
              <input
                type="number"
                value={a}
                onChange={(e) => setA(parseInt(e.target.value))}
                placeholder="a (e.g., 3)"
              />
              <input
                type="number"
                value={b}
                onChange={(e) => setB(parseInt(e.target.value))}
                placeholder="b (e.g., 5)"
              />
            </div>
          ) : cipher === 'hill' ? (
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                value={hillKey[0][0]}
                onChange={(e) =>
                  setHillKey([
                    [parseInt(e.target.value), hillKey[0][1]],
                    [hillKey[1][0], hillKey[1][1]],
                  ])
                }
              />
              <input
                type="number"
                value={hillKey[0][1]}
                onChange={(e) =>
                  setHillKey([
                    [hillKey[0][0], parseInt(e.target.value)],
                    [hillKey[1][0], hillKey[1][1]],
                  ])
                }
              />
              <input
                type="number"
                value={hillKey[1][0]}
                onChange={(e) =>
                  setHillKey([
                    [hillKey[0][0], hillKey[0][1]],
                    [parseInt(e.target.value), hillKey[1][1]],
                  ])
                }
              />
              <input
                type="number"
                value={hillKey[1][1]}
                onChange={(e) =>
                  setHillKey([
                    [hillKey[0][0], hillKey[0][1]],
                    [hillKey[1][0], parseInt(e.target.value)],
                  ])
                }
              />
            </div>
          ) : cipher === 'railFence' ? (
            <input
              type="number"
              value={rails}
              onChange={(e) => setRails(parseInt(e.target.value))}
              placeholder="Number of rails (e.g., 3)"
            />
          ) : cipher === 'route' ? (
            <div className="flex space-x-2">
              <input
                type="number"
                value={rows}
                onChange={(e) => setRows(parseInt(e.target.value))}
                placeholder="Rows (e.g., 2)"
              />
              <input
                type="number"
                value={cols}
                onChange={(e) => setCols(parseInt(e.target.value))}
                placeholder="Columns (e.g., 5)"
              />
            </div>
          ) : (
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder={cipher === 'gronsfeld' ? 'Enter digits (e.g., 123)' : 'Enter key (e.g., KEY)'}
            />
          )}
        </div>
      )}

      {/* Run Button */}
      <button onClick={handleRun}>{operation === 'encrypt' ? 'Encrypt' : 'Decrypt'}</button>
    </div>
  );
};

export default CryptoForm;