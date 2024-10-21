import React from 'react';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from '@core/containers/layout/index';
import { ProductsPage } from '@modules/product/containers';

export const routes = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<ProductsPage />} />
    </Route>,
  ),
);

export const Router = () => {
  return <RouterProvider router={routes} />;
};
