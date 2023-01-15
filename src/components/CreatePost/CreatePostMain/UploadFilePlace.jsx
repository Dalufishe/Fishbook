import {
  Box,
  Card,
  CardContent,
  CardMedia,
  FormControlLabel,
  Input,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { returnFileSize } from "../../../functions/returnFileSize";

const StyledInnerBox = styled(Box)(({ theme }) => ({
  width: "100%",
  borderRadius: "10px",
  minHeight: "150px",
  maxHeight: "450px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: theme.palette.action.hover,
  "&:hover": {
    backgroundColor: theme.palette.action.disabledBackground,
  },
  display: "flex",
  justifyContent: "center",
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

  //* this is File Object (Blob)
  const [file, setFile] = useState("");
  //* this is Image Url
  const [image, setImage] = useState("");

  const handleInputFile = useCallback((ev) => {
    const uploadFile = ev.currentTarget.files[0];
    if (uploadFile) {
      setFile(uploadFile);
      const reader = new FileReader();
      reader.onload = function (ev) {
        setImage(ev.target.result);
        props.setMedia(ev.target.result);
      };
      reader.readAsDataURL(uploadFile);
    }
  });

  useEffect(() => {
    inputRef.current.setAttribute("accept", "image/*");
  });

  return (
    <>
      <StyledOuterBox>
        <StyledInnerBox>
          <FormControlLabel
            disableTypography
            sx={{
              m: "0 auto",
              width: "100%",
              justifyContent: "center",
              alignItems: image ? "flex-start" : "center",
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
                <Card sx={{ width: "100%" }}>
                  <CardMedia component="img" image={image} />
                  <CardContent>
                    <Typography sx={{ wordBreak: "break-all" }}>
                      {file.name}
                    </Typography>
                    <Typography color="text.secondary">
                      {returnFileSize(file.size)}
                    </Typography>
                    <Typography color="text.secondary">
                      {file.type.replace(/image\//gu, "")} 檔案
                    </Typography>
                  </CardContent>
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
    </>
  );
}
