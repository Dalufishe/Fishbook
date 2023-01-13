import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  styled,
  css,
  IconButton,
  Stack,
  Badge,
  Avatar,
} from "@mui/material";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";

import React from "react";

import Searchbar from "./Searchbar";
import { connect } from "react-redux";

const StyledBox = styled(Box)(css`
  display: flex;
  align-items: center;
`);

const StyledToolbar = styled(Toolbar)(css`
  justify-content: space-between;
  align-items: center;
  height: 64px;
`);

const Icon = (props) => {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={props.badge} color="info">
        {props.children}
      </Badge>
    </IconButton>
  );
};

const Logo = () => {
  return (
    <Box
      onClick={() => {
        window.location.reload();
      }}
    >
      <Typography
        variant="h5"
        fontSize={28}
        component="span"
        fontWeight={700}
        sx={{ cursor: "pointer", userSelect: "none" }}
      >
        Fishbook
      </Typography>
    </Box>
  );
};

function Topbar(props) {
  const { mode } = props;

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <StyledBox
          aria-label="topbar-left"
          flex={3}
          justifyContent="flex-start"
        >
          <Logo />
        </StyledBox>
        <StyledBox
          aria-label="topbar-center"
          flex={5}
          justifyContent="flex-start"
          sx={{ ml: 2 }}
        >
          <Searchbar mode={mode} />
        </StyledBox>
        <StyledBox
          aria-label="topbar-right"
          flex={3}
          gap={2}
          justifyContent="flex-end"
        >
          <Stack aria-label="topbar-icons" direction="row" gap={1}>
            <Icon badge={4}>
              <Person />
            </Icon>
            <Icon badge={3}>
              <Chat />
            </Icon>
            <Icon badge={7}>
              <Notifications />
            </Icon>
          </Stack>
          <Avatar
            src="https://avatars.githubusercontent.com/u/118270401?v=4"
            alt="Dalufishe"
          />
        </StyledBox>
      </StyledToolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => {
  return {
    mode: state.darkModeState.mode,
  };
};

export default connect(mapStateToProps)(Topbar);
