import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { TypeSort } from '@modules/product/components/sortProducts';

export interface ISortProductsProp {
  activeSort: string;
  handleChangeSort: (event: SelectChangeEvent<string>) => void;
}

export const SortProducts = ({
  activeSort,
  handleChangeSort,
}: ISortProductsProp) => {
  return (
    <FormControl sx={{ minWidth: '300px', marginRight: '15px' }}>
      <InputLabel id="demo-simple-select-label">Сортировка по цене:</InputLabel>
      <Select
        id="demo-simple-select"
        value={activeSort}
        label="Сортировка по цене:"
        onChange={handleChangeSort}
      >
        <MenuItem value={TypeSort.ASC}>По возрастанию</MenuItem>
        <MenuItem value={TypeSort.DESC}>По убыванию</MenuItem>
      </Select>
    </FormControl>
  );
};
