import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../../types/form';

interface FormState {
  cards: Card[];
}

const initialState: FormState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards = [action.payload, ...state.cards];
    },
  },
});

const { actions, reducer } = formSlice;
export default reducer;

export const { addCard } = actions;
