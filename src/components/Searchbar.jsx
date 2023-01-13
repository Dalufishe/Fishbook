import React, { useState, useEffect, useCallback } from "react";
import { styled, Box, InputBase, Paper } from "@mui/material";
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
          width: { xs: 0, sm: "35vw", md: "40vw" },
        }}
        placeholder="搜尋 Fishbook"
      />
    </Hoverbar>
  );
}
