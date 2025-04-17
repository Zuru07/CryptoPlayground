import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CryptoForm from './components/CryptoForm';
import CryptoResult from './components/CryptoResult';
import { Cipher } from './types';

const ciphers: Cipher[] = [
  { name: 'Atbash', value: 'atbash', needsKey: false },
  { name: 'Caesar', value: 'caesar', needsKey: false },
  { name: 'August', value: 'august', needsKey: false },
  { name: 'Affine', value: 'affine', needsKey: true },
  { name: 'Vigenere', value: 'vigenere', needsKey: true },
  { name: 'Gronsfeld', value: 'gronsfeld', needsKey: true },
  { name: 'Beaufort', value: 'beaufort', needsKey: true },
  { name: 'Autokey', value: 'autokey', needsKey: true },
  { name: 'Running Key', value: 'runningKey', needsKey: true },
  { name: 'Hill', value: 'hill', needsKey: true },
  { name: 'Rail Fence', value: 'railFence', needsKey: true },
  { name: 'Route', value: 'route', needsKey: true },
  { name: 'Myszkowski', value: 'myszkowski', needsKey: true },
];

const App = () => {
  const [output, setOutput] = useState('');

  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        {/* Add more links here if you want multiple pages later */}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <CryptoForm ciphers={ciphers} setOutput={setOutput} />
              <CryptoResult output={output} />
            </>
          }
        />
        {/* You can add more <Route> components here later */}
      </Routes>
    </div>
  );
};

export default App;