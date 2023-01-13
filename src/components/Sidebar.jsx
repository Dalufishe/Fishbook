import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Avatar,
  Typography,
  Stack,
  Link,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { store } from "../redux/store";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  marginBottom: "8px",
  borderRadius: theme.shape.borderRadius,
  height: "48px",
}));

const MyListItem = (props) => {
  return (
    <StyledListItemButton
      sx={{ mb: 1, borderRadius: "4px" }}
      selected={props.select}
      onClick={props.onClick}
    >
      <ListItemIcon sx={{ ml: 1, mr: -1 }}>{props.icon}</ListItemIcon>
      <ListItemText>{props.text}</ListItemText>
    </StyledListItemButton>
  );
};

const UserBox = () => {
  return (
    <ListItemButton>
      <ListItemAvatar>
        <Avatar
          alt="Dalufishe"
          src="https://avatars.githubusercontent.com/u/118270401?v=4"
        />
      </ListItemAvatar>
      <ListItemText
      >
        Dalufishe
      </ListItemText>
    </ListItemButton>
  );
};

function Sidebar(props) {
  const { mode, changeMode } = props;

  const menuItem = useRef([
    { text: "主頁", icon: <HomeIcon /> },
    { text: "文章", icon: <ArticleIcon /> },
    { text: "影片", icon: <LiveTvIcon /> },
    { text: "商店", icon: <StorefrontIcon /> },
    { text: "朋友", icon: <PersonIcon /> },
    { text: "群組", icon: <GroupIcon /> },
    { text: "個人", icon: <AccountBoxIcon /> },
    { text: "設置", icon: <SettingsIcon /> },
  ]);
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <Box
      flex={props.flex}
      sx={props.sx}
      height="calc(100vh - 64px)"
      position="sticky"
      top={0}
    >
      <Stack height="100%" justifyContent="space-between" p={1}>
        <List aria-label="top-sidebar" component="nav">
          {menuItem.current.map((item, index) => (
            <MyListItem
              key={item.text}
              text={item.text}
              icon={item.icon}
              select={selectIndex === index}
              onClick={() => {
                setSelectIndex(index);
              }}
            />
          ))}
          <Divider sx={{ m: 1 }} />
          <UserBox />
          <MyListItem
            text={
              <Switch
                checked={mode === "light" ? false : true}
                onChange={() => {
                  if (mode === "dark") {
                    changeMode("light");
                  } else {
                    changeMode("dark");
                  }
                }}
              ></Switch>
            }
            icon={mode === "dark" ? <ModeNightIcon /> : <LightModeIcon />}
          />
        </List>
        <Typography
          color="text.secondary"
          sx={{
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          <Link color="inherit" underline="hover">
            隱私政策
          </Link>{" "}
          ·{" "}
          <Link color="inherit" underline="hover">
            服務條款
          </Link>{" "}
          ·{" "}
          <Link color="inherit" underline="hover">
            廣告
          </Link>{" "}
          ·{" "}
          <Link color="inherit" underline="hover">
            Ad Choices
          </Link>{" "}
          ·{" "}
          <Link color="inherit" underline="hover">
            Cookie
          </Link>{" "}
          ·{" "}
          <Link color="inherit" underline="hover">
            更多
          </Link>{" "}
          ·{" "}
          <Link color="inherit" underline="hover">
            Female © 2023
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    mode: state.darkModeState.mode,
  };
};

const mapDispatchToProps = {
  changeMode(mode) {
    return {
      type: "darkMode",
      mode: mode,
    };
  },
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
