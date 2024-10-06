import { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Typography,
  Paper,
  IconButton,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

import { formatCurrency } from '../../../../utils';
import { ITEMS } from '../../../../constants';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function ShoppingList() {
  const [items] = useState(ITEMS);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const totalPurchase = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{ padding: '20px', maxWidth: '100%', margin: 'auto' }}
      >
        <Box display='flex' flexDirection='column' alignItems='center' gap={2}>
          <Typography variant='h4' component='h1' gutterBottom>
            Lista de Compras
          </Typography>

          <Box display='flex' justifyContent='flex-end' width='100%'>
            <IconButton onClick={toggleTheme} color='inherit'>
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>

          <Box width='100%' overflow='auto'>
            <Table sx={{ minWidth: '320px' }}>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align='right'>Preço Unitário</TableCell>
                  <TableCell align='right'>Quantidade</TableCell>
                  <TableCell align='right'>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align='right'>
                      {formatCurrency(item.price)}
                    </TableCell>
                    <TableCell align='right'>{item.quantity}</TableCell>
                    <TableCell align='right'>
                      {formatCurrency(item.price * item.quantity)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3} align='right'>
                    Total da Compra:
                  </TableCell>
                  <TableCell align='right'>
                    {formatCurrency(totalPurchase)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default ShoppingList;
