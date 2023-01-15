import { ButtonGroup, IconButton, Tooltip } from "@mui/material";
import React from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import MoodIcon from "@mui/icons-material/Mood";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

const MoreSettingButton = (props) => {
  const { title, icon, onClick } = props;

  return (
    <Tooltip title={title} placement="top">
      <IconButton onClick={onClick}>{icon}</IconButton>
    </Tooltip>
  );
};

export default function MoreSettingBar(props) {
  return (
    <ButtonGroup sx={{ mb: 1, mt: -1 }}>
      <MoreSettingButton
        title="圖片 / 影片"
        icon={<PhotoLibraryIcon color="success" />}
        onClick={props.photoOnClick}
      />
      <MoreSettingButton
        title="直播"
        icon={<VideoCameraBackIcon color="secondary" />}
        onClick={props.liveOnClick}
      />
      <MoreSettingButton
        title="標籤"
        icon={<LabelIcon color="info" />}
        onClick={props.tagOnClick}
      />
      <MoreSettingButton
        title="心情"
        icon={<MoodIcon color="warning" />}
        onClick={props.moodOnClick}
      />
    </ButtonGroup>
  );
}
