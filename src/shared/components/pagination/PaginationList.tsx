import { Pagination } from '@mui/material';

interface IPaginationListProp {
  activePage: number;
  countPages: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const PaginationList = ({
  activePage,
  countPages,
  handleChangePage,
}: IPaginationListProp) => {
  return (
    <Pagination
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      page={activePage}
      count={countPages}
      onChange={handleChangePage}
    />
  );
};
