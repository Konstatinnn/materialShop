import { createSlice } from '@reduxjs/toolkit';
import type { IProduct } from '@modules/product/components/product';

import { fetchProducts } from '@modules/product/api';

interface IProductSlice {
  itemProducts: IProduct[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IProductSlice = {
  itemProducts: [],
  loading: 'idle',
  error: null,
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.itemProducts = action.payload;
        state.loading = 'idle';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const productsReducer = productsSlice.reducer;
