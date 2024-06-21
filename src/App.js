import React from 'react';
import Calculator from './components/calculator';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Calculator />
    </ThemeProvider>
  );
}
export default App;