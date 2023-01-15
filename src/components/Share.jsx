import {
  Avatar,
  List,
  ListItem,
  styled,
  Paper,
  ListItemButton,
  Stack,
  Typography,
  Divider,
  Modal,
} from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import MoodIcon from "@mui/icons-material/Mood";

import React, { useCallback,  useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import { connect } from "react-redux";
import Hoverbar from "./Hoverbar";

import { UploadFilePlaceIsShowAction } from "../redux/actions/UploadFilePlaceIsShowAction";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginLeft: "8px",
  color: theme.palette.text.secondary,
}));

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CreatePostBar = (props) => {
  return (
    <Hoverbar {...props} sx={{ p: 1, pl: 2, pr: 2, cursor: "pointer" }}>
      <Typography color="text.secondary">Dalufishe，你在想甚麼？</Typography>
    </Hoverbar>
  );
};

function Share(props) {
  const { mode, UploadFilePlaceIsShowAction } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreatePostBarClick = useCallback(() => {
    setModalOpen(true);
  });
  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  });
  const handlePhotoButtonClick = () => {
    handleCreatePostBarClick();
    UploadFilePlaceIsShowAction(true);
  };
  const handleTagButtonClick = () => {};
  const handleMoodButtonClick = () => {};

  return (
    <>
      <Paper
        sx={{
          width: { xs: "350px", sm: "450px", md: "650px" },
          borderRadius: 3,
          mt: 3,
        }}
      >
        <List>
          <ListItem sx={{ mb: 1 }}>
            <Avatar
              src="https://avatars.githubusercontent.com/u/118270401?v=4"
              alt="Dalufishe"
              sx={{ mr: 2, ml: 1 }}
            ></Avatar>
            <CreatePostBar mode={mode} onClick={handleCreatePostBarClick} />
          </ListItem>
          <Divider variant="middle" />
          <ListItem sx={{ mt: 1, pt: 0, pb: 0 }}>
            <Stack
              width="100%"
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <StyledListItemButton onClick={handlePhotoButtonClick}>
                <PhotoLibraryIcon color="success" />
                <StyledTypography>照片 / 影片</StyledTypography>
              </StyledListItemButton>
              <StyledListItemButton onClick={handleTagButtonClick}>
                <LabelIcon color="info" />
                <StyledTypography>標籤 / 地點</StyledTypography>
              </StyledListItemButton>
              <StyledListItemButton onClick={handleMoodButtonClick}>
                <MoodIcon color="warning" />
                <StyledTypography>感受 / 心情</StyledTypography>
              </StyledListItemButton>
            </Stack>
          </ListItem>
        </List>
      </Paper>
      <StyledModal open={modalOpen} onClose={handleModalClose}>
        <>
          <CreatePost handleModalClose={handleModalClose}></CreatePost>
        </>
      </StyledModal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    mode: state.darkModeState.mode,
  };
};

const mapDispatchToProps = {
  UploadFilePlaceIsShowAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Share);
