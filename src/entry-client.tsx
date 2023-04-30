import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Header from './components/header/Header';

import { RootState, setupStore } from './store/store';
import { PreloadedState } from '@reduxjs/toolkit';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}

const store = setupStore(window.__PRELOADED_STATE__);

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header home={'Home page'} about={'About us'} card={'Create card'} />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
