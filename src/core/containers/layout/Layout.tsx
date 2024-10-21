import React from 'react';
import { Box, Container, Button } from '@mui/material';

import { Outlet } from 'react-router';

import { changeThemeMode } from '@shared/slices/theme/slices/index';
import { useAppDispatch } from '../store/selectors/selectors.types';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import { toogleCartVisibility } from '@modules/product/slices';

export const Layout = () => {
  const dispatch = useAppDispatch();

  return (
    <Container maxWidth="xl" sx={{ minHeight: '150px', padding: '10px 0' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button
          onClick={() => dispatch(toogleCartVisibility())}
          variant="contained"
        >
          Корзина
        </Button>
        <DarkModeIcon
          onClick={() => dispatch(changeThemeMode())}
          color="action"
        />
      </Box>
      <Outlet />
    </Container>
  );
};
