import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material';

import {
  useAppDispatch,
  useAppSelector,
} from '@core/containers/store/selectors';
import { fetchProducts } from '@modules/product/api';
import { useCustomSearchParams } from '@shared/hooks';
import { Categories } from '../components/productCategoryTabs';
import type { IProduct } from '@modules/product/components/product';
import { TypeSort } from '@modules/product/components/sortProducts';
import { sorting } from '@modules/product/utils';

const limit = 12;

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.itemProducts);
  const isLoading = useAppSelector((state) => state.products.loading);

  const params = useCustomSearchParams();
  const [_, setSearchParams] = useSearchParams();

  const countPages = Math.ceil(products.length / limit);

  const activePage = +(params.page ?? 1);
  const activeCategory: Categories =
    (params.category as Categories) || Categories.clothing;
  const activeSort: TypeSort = (params.sort as TypeSort) || TypeSort.DEFAULT;

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setSearchParams({ ...params, page: `${value}` });
  };

  const handleChangeCat = (
    event: React.SyntheticEvent,
    category: Categories,
  ) => {
    if (activeCategory === category) return;
    setSearchParams({ category, page: `${1}` });
  };

  const handleChangeSort = (event: SelectChangeEvent<string>) => {
    setSearchParams({ ...params, sort: event.target.value });
  };

  const sortedProducts = useMemo(() => {
    return sorting(activeSort, products);
  }, [products, activeSort]);

  const productsToShow: IProduct[] = useMemo(() => {
    return sortedProducts.slice((activePage - 1) * limit, activePage * limit);
  }, [activePage, sortedProducts]);

  useEffect(() => {
    dispatch(fetchProducts(activeCategory));
  }, [activeCategory, dispatch, params.category]);

  return {
    isLoading,
    productsToShow,
    countPages,
    activeCategory,
    activePage,
    activeSort,
    handleChangeSort,
    handleChangeCat,
    handleChangePage,
  };
};
