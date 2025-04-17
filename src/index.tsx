import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Use HashRouter
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
