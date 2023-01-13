import { Box, Stack } from "@mui/material";
import React from "react";
import Post from "./Post";
import Share from "./Share";

export default function Feed(props) {
  return (
    <Stack
      flex={props.flex}
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Share />
      <Post />
    </Stack>
  );
}
