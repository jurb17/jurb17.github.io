import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Slab"],
  },
  palette: {
    primary: {
      main: "#122821",
      light: "#469B80",
      dark: "#060E0C",
    },
    secondary: {
      main: "#E6F9E0",
      dark: "#82E265",
    },
    accent: {
      main: "#fae48e",
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
