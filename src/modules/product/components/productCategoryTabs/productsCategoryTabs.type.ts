export enum Categories {
  clothing = 'clothing',
  electronics = 'electronics',
  jewelery = 'jewelery',
}

export interface CategoryItem {
  label: string;
  value: Categories;
}
