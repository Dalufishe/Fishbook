import React, { useState, useEffect, useCallback } from "react";
import { Box, Paper } from "@mui/material";

export default function Hoverbar(props) {
  const [elevation, setElevation] = useState(props.mode === "dark" ? 12 : 1);
  const [bgcolor, setBgcolor] = useState(null);

  useEffect(() => {
    setElevation(
        props.mode === "dark" ? 16 : 1);
    setBgcolor(null);
  }, [props.mode]);

  const handleCreatePostBarMouseEnter = useCallback(() => {
    setElevation(props.mode === "dark" ? 24 : 3);
    setBgcolor(props.mode === "dark" ? "action.hover" : null);
  });
  const handleCreatePostBarMouseLeave = useCallback(() => {
    setElevation(props.mode === "dark" ? 16 : 1);
    setBgcolor(null);
  });

  return (
    <Paper
      elevation={elevation}
      sx={{ borderRadius: "30px", flexGrow: 1, bgcolor: bgcolor }}
    >
      <Box
        {...props}
        onMouseEnter={handleCreatePostBarMouseEnter}
        onMouseLeave={handleCreatePostBarMouseLeave}
      >
        {props.children}
      </Box>
    </Paper>
  );
}
