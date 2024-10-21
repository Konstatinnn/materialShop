import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer, productsReducer } from '@modules/product/slices';
import { themeReducer } from '@shared/slices/theme/slices';

export const rootReducer = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
  products: productsReducer,
});
