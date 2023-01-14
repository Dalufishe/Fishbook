import {
  Box,
  Card,
  CardMedia,
  FormControlLabel,
  IconButton,
  Input,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

const StyledInnerBox = styled(Box)(({ theme }) => ({
  width: "100%",
  borderRadius: "10px",
  minHeight: "150px",
  maxHeight: "450px",
  overflowY: "auto",
  backgroundColor: theme.palette.action.hover,
  "&:hover": {
    backgroundColor: theme.palette.action.disabledBackground,
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledOuterBox = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  marginTop: "8px",
  marginBottom: "16px",
  padding: "8px",
  border: `1px solid ${theme.palette.action.hover}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default function UploadFilePlace(props) {
  const inputRef = useRef();

  const [image, setImage] = useState("");

  const handleInputFile = useCallback((ev) => {
    const uploadFile = ev.currentTarget.files[0];
    const reader = new FileReader();
    reader.onload = function (ev) {
      setImage(ev.target.result);
      props.setMedia(ev.target.result);
    };
    reader.readAsDataURL(uploadFile);
  });

  useEffect(() => {
    inputRef.current.setAttribute("accept", "image/*");
  });

  return (
    <StyledOuterBox>
      <StyledInnerBox>
        <FormControlLabel
          sx={{
            m: "0 auto",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          control={
            <Input
              type="file"
              inputRef={inputRef}
              sx={{ display: "none" }}
              onChange={handleInputFile}
            />
          }
          label={
            image ? (
              <Card>
                <CardMedia component="img" image={image} />
              </Card>
            ) : (
              <>
                <Stack alignItems="center" spacing={1}>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      backgroundColor: "action.disabledBackground",
                    }}
                  >
                    <PhotoLibraryIcon />
                  </Box>
                  <Typography>新增相片 / 影片</Typography>
                </Stack>
              </>
            )
          }
        />
      </StyledInnerBox>
    </StyledOuterBox>
  );
}
