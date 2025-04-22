import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: "#003d29",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "5rem",
      fontWeight: "700",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "600",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: "400",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "300",
    },
    h5: {
      fontSize: "0.875rem",
      fontWeight: "300",
    },
    h6: {
      fontSize: "0.75rem",
      fontWeight: "300",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;