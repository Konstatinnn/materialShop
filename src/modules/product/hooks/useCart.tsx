import { useCallback } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '@core/containers/store/selectors';
import type { IProduct } from '@modules/product/components/product';
import {
  addToCart,
  removeFromCart,
  toogleCartVisibility,
} from '@modules/product/slices';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const productsInCart = useAppSelector((state) => state.cart.products);
  const isCartOpen = useAppSelector((state) => state.cart.isOpen);

  const handleAddToCart = useCallback(
    (prod: IProduct) => {
      dispatch(addToCart(prod));
    },
    [dispatch],
  );

  const handleRemoveFromCart = useCallback(
    (id: string) => {
      dispatch(removeFromCart(id));
    },

    [dispatch],
  );

  const handleChangeCartVisibility = useCallback(
    () => dispatch(toogleCartVisibility()),
    [dispatch],
  );

  return {
    productsInCart,
    isCartOpen,
    handleAddToCart,
    handleRemoveFromCart,
    handleChangeCartVisibility,
  };
};
