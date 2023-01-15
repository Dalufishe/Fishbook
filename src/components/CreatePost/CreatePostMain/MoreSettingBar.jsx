import { ButtonGroup, IconButton, Tooltip } from "@mui/material";
import React, { useCallback } from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import MoodIcon from "@mui/icons-material/Mood";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import { connect } from "react-redux";

import { UploadFilePlaceIsShowAction } from "../../../redux/actions/UploadFilePlaceIsShowAction";

const MoreSettingButton = (props) => {
  const { title, icon, onClick } = props;

  return (
    <Tooltip title={title} placement="top">
      <IconButton onClick={onClick}>{icon}</IconButton>
    </Tooltip>
  );
};

function MoreSettingBar(props) {
  const { UploadFilePlaceIsShow, UploadFilePlaceIsShowAction } = props;

  const photoOnClick = useCallback(() => {
    UploadFilePlaceIsShowAction(!UploadFilePlaceIsShow);
  });
  const liveOnClick = useCallback(() => {});
  const tagOnClick = useCallback(() => {});
  const moodOnClick = useCallback(() => {});

  return (
    <ButtonGroup sx={{ mb: 1, mt: -1 }}>
      <MoreSettingButton
        title="圖片 / 影片"
        icon={<PhotoLibraryIcon color="success" />}
        onClick={photoOnClick}
      />
      <MoreSettingButton
        title="直播"
        icon={<VideoCameraBackIcon color="secondary" />}
        onClick={liveOnClick}
      />
      <MoreSettingButton
        title="標籤"
        icon={<LabelIcon color="info" />}
        onClick={tagOnClick}
      />
      <MoreSettingButton
        title="心情"
        icon={<MoodIcon color="warning" />}
        onClick={moodOnClick}
      />
    </ButtonGroup>
  );
}

const mapStateToProps = (state) => {
  return {
    UploadFilePlaceIsShow:
      state.UploadFilePlaceIsShowState.UploadFilePlaceIsShow,
  };
};

const mapDispatchToProps = {
  UploadFilePlaceIsShowAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreSettingBar);
