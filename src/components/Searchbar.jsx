import React from "react";
import {  InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Hoverbar from "./Hoverbar";

export default function Searchbar(props) {
  return (
    <Hoverbar
      {...props}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        p: 0.5,
      }}
    >
      <SearchIcon
        sx={{
          ml: 1,
          color: "text.secondary",
        }}
      />
      <InputBase
        autoFocus
        sx={{
          pl: 1,
          width: { xs: "35vw", sm: "35vw", md: "40vw" },
        }}
        placeholder="搜尋 Fishbook"
      />
    </Hoverbar>
  );
}
