import { Tabs, Tab } from '@mui/material';
import {
  Categories,
  CategoryItem,
} from '@modules/product/components/productCategoryTabs';

const categories: CategoryItem[] = [
  { label: 'Одежда', value: Categories.clothing },
  { label: 'Электроника', value: Categories.electronics },
  { label: 'Украшения', value: Categories.jewelery },
];

interface IProductsCategoryTabsProp {
  activeCat: Categories;
  handleChangeCat: (event: React.SyntheticEvent, category: Categories) => void;
}

export const ProductsCategoryTabs = ({
  activeCat,
  handleChangeCat,
}: IProductsCategoryTabsProp) => {
  return (
    <Tabs
      value={activeCat}
      onChange={handleChangeCat}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable force tabs example"
      sx={{ margin: '15px' }}
    >
      {categories.map((cat, idx) => (
        <Tab label={cat.label} value={cat.value} key={idx} />
      ))}
    </Tabs>
  );
};
