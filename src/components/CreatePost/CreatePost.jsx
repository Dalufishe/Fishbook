import {
  Box,
  Typography,
  styled,
  Divider,
  Paper,
  IconButton,
} from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import CreatePostMain from "./CreatePostMain";

const StyledDeleteButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 12,
  right: 16,
  backgroundColor: theme.palette.action.hover,
}));

const CreatePostTop = (props) => {
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
};

export default function CreatePost(props) {
  const { handleModalClose } = props;
  return (
    <Paper elevation={3} sx={{ borderRadius: 5 }}>
      <Box width={450} color="text.primary">
        <CreatePostTop handleModalClose={handleModalClose} />
        <Divider />
        <CreatePostMain handleModalClose={handleModalClose} />
      </Box>
    </Paper>
  );
}
