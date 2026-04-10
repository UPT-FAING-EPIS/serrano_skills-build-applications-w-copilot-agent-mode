
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Configurar variable de entorno para la URL base del backend
const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
const protocol = window.location.protocol;
const host = `${codespaceName}-8000.app.github.dev`;
const baseUrl = `${protocol}//${host}`;
process.env.REACT_APP_CODESPACE_URL = baseUrl;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
