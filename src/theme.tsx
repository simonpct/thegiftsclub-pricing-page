'use client';
import { createTheme } from '@mui/material/styles';
import { Montserrat, Roboto } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f5efb',
    },
    secondary: {
      main: '#f59000',
    }
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    allVariants: { fontFamily: montserrat.style.fontFamily },
    h1: {
      fontSize: '38px',
      fontWeight: 700,
      textTransform: 'uppercase',
      marginBottom: '20px',
    },
    h2: {
      fontSize: '25px',
      fontWeight: 700,
    },
    h3: {
      fontSize: '28px',
      fontWeight: 700,
    },
  },
});

export default theme;