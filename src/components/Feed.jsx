import { Box, Fab, Stack } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import Share from "./Share";

import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

function Feed(props) {
  const { mode, changeMode } = props;

  return (
    <Stack
      flex={props.flex}
      sx={props.sx}
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Share />
      <Post />
      <Fab
        color={mode === "dark" ? "warning" : "primary"}
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          top: "calc(100vh - 100px)",
        }}
        onClick={() => {
          if (mode === "dark") {
            changeMode("light");
          } else {
            changeMode("dark");
          }
        }}
      >
        {mode === "dark" ? (
          <ModeNightIcon sx={{ mt: 1 }} />
        ) : (
          <LightModeIcon sx={{ mt: 1 }} />
        )}
      </Fab>
    </Stack>
  );
}

const mapStateToProps = (state) => {
  return {
    mode: state.darkModeState.mode,
  };
};

const mapDispatchToProps = {
  changeMode(mode) {
    return {
      type: "darkMode",
      mode: mode,
    };
  },
};
export default connect(mapStateToProps, mapDispatchToProps)(Feed);
