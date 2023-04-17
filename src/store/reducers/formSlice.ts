import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../../types/form';

interface FormState {
  cards: Card[];
}

const initialState: FormState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = formSlice.actions;

export default formSlice.reducer;
