import { AppStore } from '../store/store';
import { cardsApi } from '../store/api/api';

const apiRequest = async (store: AppStore) => {
  store.dispatch(cardsApi.endpoints.getCards.initiate(''));

  return await Promise.all(store.dispatch(cardsApi.util.getRunningQueriesThunk()));
};

export { apiRequest };
