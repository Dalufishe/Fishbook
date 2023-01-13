import { ButtonGroup, IconButton, Tooltip } from "@mui/material";
import React from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import MoodIcon from "@mui/icons-material/Mood";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

const MoreSettingButton = (props) => {
  const { title, icon } = props;

  return (
    <Tooltip title={title} placement="top">
      <IconButton>{icon}</IconButton>
    </Tooltip>
  );
};

export default function MoreSettingBar() {
  return (
    <ButtonGroup sx={{ mb: 1, mt: -1 }}>
      <MoreSettingButton
        title="圖片"
        icon={<PhotoLibraryIcon color="success" />}
      />
      <MoreSettingButton
        title="影片"
        icon={<VideoCameraBackIcon color="secondary" />}
      />
      <MoreSettingButton title="標籤" icon={<LabelIcon color="info" />} />
      <MoreSettingButton title="心情" icon={<MoodIcon color="warning" />} />
    </ButtonGroup>
  );
}
