import React from 'react';
import { Box, Modal, Typography, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { createPortal } from 'react-dom';
import { useCart } from '../../hooks/useCart';
import { CartProduct } from '../../components/cartProduct/CartProduct';

export const CartList = () => {
  const theme = useTheme();
  const cartToolStore = useCart();

  return (
    <>
      {createPortal(
        <Modal
          open={cartToolStore.isCartOpen}
          onClose={cartToolStore.handleChangeCartVisibility}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{
              overflowY: 'scroll',
              width: '450px',
              backgroundColor: theme.palette.background.default,
              position: 'absolute',
              top: 0,
              right: 0,
              padding: '10px',
            }}
          >
            <CloseIcon
              sx={{ cursor: 'pointer' }}
              color="action"
              onClick={cartToolStore.handleChangeCartVisibility}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '10px',
              }}
            >
              <Typography
                sx={{ fontSize: '14px' }}
                color="textPrimary"
                variant="caption"
              >
                Корзина
              </Typography>
              <Typography
                sx={{ fontSize: '14px' }}
                color="textPrimary"
                variant="caption"
              >
                {`Сумма: ${cartToolStore.productsInCart.reduce((accum, prod) => (accum += +prod.price), 0)}`}
              </Typography>
            </Box>
            <Box
              sx={{
                scrollBehavior: 'smooth',
                flexDirection: 'column',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {cartToolStore.productsInCart.map((prod, idx) => (
                <CartProduct
                  key={idx}
                  prod={prod}
                  handRemoveFromCart={cartToolStore.handleRemoveFromCart}
                />
              ))}
            </Box>
          </Box>
        </Modal>,
        document.body,
      )}
    </>
  );
};
