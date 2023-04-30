import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { cardsApi } from './api/api';
import searchBar from './reducers/searchBarSlice';
import searchResults from './reducers/searchResultsSlice';
import form from './reducers/formSlice';

const rootReducer = combineReducers({
  searchBar,
  form,
  searchResults,
  [cardsApi.reducerPath]: cardsApi.reducer,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];

export { setupStore };
