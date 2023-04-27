import { setupStore } from './store/store';
import { server } from './mocks/server/server';
import { cardsApi } from './store/api/api';
import { beforeAll, afterEach, afterAll } from 'vitest';

const store = setupStore({});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();

  store.dispatch(cardsApi.util.resetApiState());
});

afterAll(() => server.close());
