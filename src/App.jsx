import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { connect } from "react-redux";
import MRouter from "./router/MRouter";
import { theme } from "./theme";

import "./app.css"

function App(props) {
  const { mode } = props;
  const darkModeTheme = {
    palette: {
      mode: mode,
    },
  };
  return (
        <ThemeProvider theme={createTheme(deepmerge(theme, darkModeTheme))}>
          <CssBaseline />
          <MRouter />
        </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    mode: state.darkModeState.mode,
  };
};
export default connect(mapStateToProps)(App);
