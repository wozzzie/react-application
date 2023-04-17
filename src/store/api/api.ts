import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardType } from '../../types/form';

export const cardsApi = createApi({
  reducerPath: 'cards',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mock-server-api-two.vercel.app' }),
  endpoints: (builder) => ({
    getCards: builder.query<CardType[], string>({
      query: (searchTerm) => `/catalog?q=${searchTerm}`,
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;
export default cardsApi.reducer;
