import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { cardsReducer } from './cardsSlice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
