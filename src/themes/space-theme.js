import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Slab"],
  },
  palette: {
    primary: {
      main: "#1E2952",
      light: "#425AB3",
      dark: "#0B0F1E",
    },
    secondary: {
      main: "#FEE9AE",
      dark: "#FDC221",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
