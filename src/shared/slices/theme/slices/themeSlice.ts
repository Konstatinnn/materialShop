import { createSlice } from '@reduxjs/toolkit';

interface IThemeSlice {
  mode: string;
}

const initialState: IThemeSlice = {
  mode: 'light',
};

const themeSlice = createSlice({
  initialState,
  name: 'theme',
  reducers: {
    changeThemeMode: (state) => {
      state.mode = state.mode == 'light' ? 'dark' : 'light';
    },
  },
});

export const { changeThemeMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
