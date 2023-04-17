import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from '../../types/form';

interface SearchResultsState {
  results: CardType[];
}

const initialState: SearchResultsState = {
  results: [],
};

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<CardType[]>) => {
      state.results = action.payload;
    },
  },
});

export const { setSearchResults } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
