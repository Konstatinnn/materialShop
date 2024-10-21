import { createTheme, ThemeOptions } from '@mui/material';

export const lightMode: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
  },
});

export const darkMode: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
  },
});
