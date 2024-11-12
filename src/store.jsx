import { configureStore } from '@reduxjs/toolkit';
import favorilerReducer from './reducer';

export const store = configureStore({
  reducer: favorilerReducer,
});

