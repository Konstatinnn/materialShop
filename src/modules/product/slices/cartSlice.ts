import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IProduct } from '@modules/product/components/product';

interface ICartSlice {
  products: IProduct[];
  isOpen: boolean;
}

const initialState: ICartSlice = {
  products: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      console.log('test');

      state.products.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload,
      );
    },
    toogleCartVisibility: (state) => {
      return { ...state, isOpen: !state.isOpen };
    },
  },
});

export const { addToCart, removeFromCart, toogleCartVisibility } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
