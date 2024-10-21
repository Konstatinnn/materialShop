import React from 'react';
import { Box, CircularProgress } from '@mui/material';

import {
  ProductsCategoryTabs,
  SortProducts,
} from '@modules/product/components';
import { CartList, ProductList } from '@modules/product/containers';
import { useProducts } from '@modules/product/hooks';

import { PaginationList } from '@shared/components/pagination';

export const ProductsPage = () => {
  const prodToolsStore = useProducts();

  return (
    <>
      <ProductsCategoryTabs
        activeCat={prodToolsStore.activeCategory}
        handleChangeCat={prodToolsStore.handleChangeCat}
      />
      <Box sx={{ marginBottom: '20px' }}>
        <SortProducts
          activeSort={prodToolsStore.activeSort}
          handleChangeSort={prodToolsStore.handleChangeSort}
        />
      </Box>

      {prodToolsStore.isLoading == 'pending' ? (
        <CircularProgress />
      ) : (
        <>
          <ProductList products={prodToolsStore.productsToShow} />
          <PaginationList
            activePage={prodToolsStore.activePage}
            countPages={prodToolsStore.countPages}
            handleChangePage={prodToolsStore.handleChangePage}
          />
        </>
      )}

      <CartList />
    </>
  );
};
