import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './main.css';

import { Provider } from 'react-redux';
import store from './redux/store';

// Récupération de l'élément DOM où l'application React sera rendue //
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Le "Provider" est un composant spécial qui enveloppe l'application React ...
// et permet de fournir le store Redux à tous les composants qui en ont besoin. //