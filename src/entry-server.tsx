import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

import { setupStore } from './store/store';
import App from './App';
import { apiRequest } from './tools/apiRequest';
import Header from './components/header/Header';

export const render = async (url: string, opts?: object) => {
  const store = setupStore();
  await apiRequest(store);

  const stream = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <Header home={'Home page'} about={'About us'} card={'Create card'} />
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );

  const preloadedState = store.getState();

  const setPreloadedState = () => {
    return `
    <script>
    window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
    </script>
    `;
  };

  return { stream, setPreloadedState };
};
