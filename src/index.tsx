import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './core/containers/app/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>{<App />}</StrictMode>,
);
