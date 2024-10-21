import React from 'react';
import type { IProduct } from '@modules/product/components/product';
import { CardContent, CardMedia, Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';

type CartProductpRrop = {
  prod: Omit<IProduct, 'description' | 'isInCart'>;
  handRemoveFromCart: (id: string) => void;
};

export const CartProduct = ({ prod, handRemoveFromCart }: CartProductpRrop) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        maxHeight: '200px',
        alignItems: 'center',
        marginBottom: '10px',
      }}
    >
      <CardMedia
        component="img"
        src={prod.image}
        sx={{
          maxWidth: '100px',
          maxHeight: '100px',
        }}
      ></CardMedia>

      <CardContent
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography variant="caption" color="primary">
          {prod.title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.info' }}>
          {`${prod.price} $`}
        </Typography>
      </CardContent>
      <Button
        onClick={() => handRemoveFromCart(prod.id)}
        sx={{ minWidth: '130px', maxHeight: '50px' }}
        variant="contained"
      >
        Удалить
      </Button>
    </Card>
  );
};
