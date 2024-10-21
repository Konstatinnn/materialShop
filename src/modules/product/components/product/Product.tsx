import React from 'react';
import { CardContent, CardMedia, Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import type { IProduct } from '@modules/product/components/product';

interface IProductProp {
  prod: IProduct;
  addToCart: (prod: IProduct) => void;
  removeFromCart: (id: string) => void;
}

export const Product = React.memo<IProductProp>(
  ({ prod, addToCart, removeFromCart }) => {
    return (
      <Card
        sx={{
          maxWidth: '350px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '& .MuiCardContent-root': {
            flexGrow: 2,
            display: 'flex',
            flexDirection: 'column',
            '& .MuiTypography-root': {
              flexGrow: 2,
            },
          },
        }}
      >
        <CardMedia
          component="img"
          src={prod.image}
          sx={{
            height: '150px',
            width: '260px',
            objectFit: 'contain',
          }}
        />

        <CardContent>
          <Typography variant="caption" color="primary">
            {prod.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              marginBottom: '15px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              lineHeight: '1.5',
              maxHeight: '4.5em',
            }}
          >
            {prod.description}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: 'text.info', marginBottom: '10px' }}
          >
            {prod.price + ' $'}
          </Typography>
          {prod.isInCart ? (
            <Button onClick={() => removeFromCart(prod.id)} variant="contained">
              Удалить из корзины
            </Button>
          ) : (
            <Button onClick={() => addToCart(prod)} variant="contained">
              Добавить в корзину
            </Button>
          )}
        </CardContent>
      </Card>
    );
  },
);
