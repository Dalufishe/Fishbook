import React from "react";

import { Box, Typography, IconButton, styled } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const StyledDeleteButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 12,
  right: 16,
  backgroundColor: theme.palette.action.hover,
}));

export default function CreatePostTop(props) {
  return (
    <Box p={4} pt={2} pb={2} position="relative">
      <Typography
        variant="h6"
        color="text.secondary"
        component="h2"
        textAlign="center"
        fontWeight={600}
      >
        建立貼文
      </Typography>
      <StyledDeleteButton onClick={props.handleModalClose}>
        <ClearIcon />
      </StyledDeleteButton>
    </Box>
  );
}
