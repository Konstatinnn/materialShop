import React, { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from '@mui/material';
import { useAppSelector } from '@core/containers/store/selectors';
import { lightMode, darkMode } from '@shared/slices/theme/themeMode';

interface ThemeContainerProp {
  children: ReactNode;
}

export const ThemeContainer = ({ children }: ThemeContainerProp) => {
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={mode == 'light' ? lightMode : darkMode}>
      <GlobalStyles
        styles={(theme) => ({
          body: { backgroundColor: theme.palette.background.default },
        })}
      />
      {children}
    </ThemeProvider>
  );
};
