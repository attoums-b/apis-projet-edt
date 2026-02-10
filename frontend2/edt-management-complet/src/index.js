/**
 * Point d'entrée de l'application React
 * Ce fichier initialise et monte l'application dans le DOM
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import App from './App';

/**
 * Création de la racine React et rendu de l'application
 * L'application est montée dans l'élément avec l'id 'root' du DOM
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
