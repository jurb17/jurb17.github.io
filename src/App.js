import React from "react";
import { useRoutes, useLocation } from "react-router-dom";

// material ui
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { StyledEngineProvider } from "@mui/material/styles";

// project imports
import routes from "./routes";
import NavigationScroll from "./layout/NavigationScroll";

const App = () => {
  const routing = useRoutes(routes());
  return (
    <StyledEngineProvider injectFirst>
      {/* <ThemeProvider theme={themes(customization)}> */}
      <CssBaseline />
      <NavigationScroll>{routing}</NavigationScroll>
      {/* </ThemeProvider> */}
    </StyledEngineProvider>
  );
};

export default App;
