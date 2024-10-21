import React from 'react';
import { Provider } from 'react-redux';
import { Router, rootStore } from '@core/containers';
import { ThemeContainer } from '@shared/slices/theme';

export const App = () => {
  return (
    <Provider store={rootStore}>
      <ThemeContainer>
        <Router />
      </ThemeContainer>
    </Provider>
  );
};
