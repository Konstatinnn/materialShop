import { TypeSort } from '@modules/product/components/sortProducts';
import { IProduct } from '@modules/product/components/product';

export const sorting = (sortBy: TypeSort, products: IProduct[]) => {
  if (sortBy == TypeSort.ASC)
    return [...products].sort((prod, prod2) => +prod.price - +prod2.price);
  if (sortBy == TypeSort.DESC)
    return [...products].sort((prod, prod2) => +prod2.price - +prod.price);
  return products;
};
