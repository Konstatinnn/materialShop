import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../rootReducer/reducer';

export const rootStore = configureStore({
  reducer: rootReducer,
  devTools: true,
});
