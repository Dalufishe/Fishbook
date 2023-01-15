import { Box, Divider, Paper, styled } from "@mui/material";

import React from "react";

import CreatePostMain from "./CreatePostMain/CreatePostMain";
import CreatePostTop from "./CreatePostTop";

const StyledBox = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  maxHeight: "95vh",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "16px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.background.default,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.text.disabled,
    borderRadius: 10,
    border: `4px solid ${theme.palette.background.default}`,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: theme.palette.text.secondary,
  },
}));

export default function CreatePost(props) {
  const { handleModalClose } = props;
  return (
    <Paper elevation={3} sx={{ borderRadius: 5 }}>
      <StyledBox width={{ xs: 350, sm: 450 }}>
        <CreatePostTop handleModalClose={handleModalClose} />
        <Divider />
        <CreatePostMain handleModalClose={handleModalClose} />
      </StyledBox>
    </Paper>
  );
}
