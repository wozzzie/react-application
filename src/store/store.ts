import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cardsApi } from './api/api';
import searchBarReducer from './reducers/searchBarSlice';
import searchResultsReducer from './reducers/searchResultsSlice';
import formReducer from './reducers/formSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    searchBar: searchBarReducer,
    searchResults: searchResultsReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
