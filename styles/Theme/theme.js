import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00183E',
      light: '#5D809F'
    },
    secondary: {
      main: '#B9E7FF',
      light: '#EEF9FF'
    },
    tertiary: {
      main: '#FDEDFA'
    }
  },
  typography: {
    fontFamily: "'Montserrat', 'Roboto', 'Helvetica', 'Roboto', sans-serif",
  }
});