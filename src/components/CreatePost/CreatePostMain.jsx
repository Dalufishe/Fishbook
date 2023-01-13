import {
  Box,
  Typography,
  styled,
  TextField,
  Avatar,
  Stack,
  Button,
  ButtonGroup,
  IconButton,
  Tooltip,
} from "@mui/material";

import { createPostAction } from "../../redux/actions/createPostAction";
import DateRangeIcon from "@mui/icons-material/DateRange";
import React, { useCallback, useState } from "react";

import { connect } from "react-redux";
import MoreSettingBar from "./MoreSettingBar";

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "8px",
  marginBottom: "16px",
});

const StyledTextField = styled(TextField)({
  width: "100%",
  marginBottom: "16px",
});

const Sendbar = (props) => {
  return (
    <ButtonGroup variant="contained" fullWidth>
      <Button sx={{ flex: 4 }} onClick={props.onSend}>
        發佈
      </Button>
      <Button sx={{ flex: 1 }}>
        <DateRangeIcon />
      </Button>
    </ButtonGroup>
  );
};

function CreatePostMain(props) {
  const { handleModalClose, createPostAction } = props;

  const [article, setArticle] = useState("");
  const [media, setMedia] = useState(null);

  const handleSendPost = useCallback(() => {
    createPostAction(
      "Dalufishe",
      "https://avatars.githubusercontent.com/u/118270401?v=4",
      article,
      media
    );
    handleModalClose();
  });

  return (
    <Box p={4} pt={2} pb={3.5}>
      <UserBox>
        <Avatar
          src="https://avatars.githubusercontent.com/u/118270401?v=4"
          sx={{ width: 30, height: 30 }}
        />
        <Typography fontWeight={500} variant="span">
          Dalufishe
        </Typography>
      </UserBox>
      <Stack direction="row" justifyContent="center">
        <Box width="95%">
          <StyledTextField
            autoFocus
            rows={6}
            placeholder="你在想什麼？"
            multiline
            variant="standard"
            value={article}
            onChange={(ev) => {
              setArticle(ev.currentTarget.value);
            }}
          />
          <MoreSettingBar />
          <Sendbar onSend={handleSendPost} />
        </Box>
      </Stack>
    </Box>
  );
}

const mapDispatchToProps = {
  createPostAction,
};

export default connect(null, mapDispatchToProps)(CreatePostMain);