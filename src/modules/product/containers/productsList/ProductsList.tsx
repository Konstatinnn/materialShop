import { Box, Grid } from '@mui/material';

import { IProduct, Product } from '@modules/product/components/product';
import { useCart } from '@modules/product/hooks';

export interface IProductListProps {
  products: IProduct[];
}

export const ProductList = ({ products }: IProductListProps) => {
  const cartToolStore = useCart();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid
        sx={{
          marginBottom: '15px',
        }}
        container
        rowSpacing={3}
        spacing={2}
        wrap="wrap"
      >
        {products.map((product, idx) => (
          <Grid item xs={6} sm={4} md={3} lg={3} xl={2} key={idx}>
            <Product
              prod={{
                ...product,
                isInCart: !!cartToolStore.productsInCart.find(
                  (item) => item.id === product.id,
                ),
              }}
              addToCart={cartToolStore.handleAddToCart}
              removeFromCart={cartToolStore.handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
