import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Categories } from '@modules/product/components/productCategoryTabs';
import { RootState } from '@core/containers';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (category: Categories, thunkAPI) => {

    try {
      const resposnse = await axios.get(
        `${process.env.REACT_APP_API_URL}/${category}`,
      );
      console.log(resposnse);

      return resposnse.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition(arg, { getState }) {
      const postsStatus = getState() as RootState;
      if (postsStatus.products.loading !== 'idle') return false;
    },
  },
);
