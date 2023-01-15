import { styled, TextField } from "@mui/material";
import React, { useCallback } from "react";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginBottom: "16px",
});

export default function ArticlePart(props) {
  const { article, setArticle } = props;

  const handleArticleChange = useCallback((ev) => {
    let article = ev.currentTarget.value;
    setArticle(article);
  });

  return (
    <StyledTextField
      autoFocus
      rows={6}
      placeholder="你在想什麼？"
      multiline
      variant="standard"
      value={article}
      onChange={handleArticleChange}
    />
  );
}
