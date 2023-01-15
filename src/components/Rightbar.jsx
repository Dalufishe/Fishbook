import {
  Avatar,
  Card,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  styled,
  Typography,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { createRandomUser } from "../functions/createRandomUser";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1rem",
}));

const SponsorList = () => {
  return (
    <List>
      <ListSubheader sx={{ mb: 0.5 }}>
        <StyledTypography color="text.secondary">贊助</StyledTypography>
      </ListSubheader>
      <ListItem>
        <Card>
          <CardMedia
            component="img"
            image="https://scontent.ftpe3-2.fna.fbcdn.net/v/t39.30808-6/324076694_2326741214169192_5912805213907062199_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=Hcl7U7jcis4AX_VhjpZ&_nc_ht=scontent.ftpe3-2.fna&oh=00_AfCcEPVg9zGAsvgHjO5mBPXkdWlk9v7O0_Gl9uRuuc3RUw&oe=63C72A1F"
            sx={{ opacity: 0.85 }}
          />
        </Card>
      </ListItem>
    </List>
  );
};

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  marginBottom: "8px",
  borderRadius: theme.shape.borderRadius,
  height: "48px",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "16px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.background.default,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.text.disabled,
    borderRadius: 10,
    border: `4px solid ${theme.palette.background.default}`,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: theme.palette.text.secondary,
  },
}));

const ContactList = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    setContactData(createRandomUser(20));
  }, []);

  return (
    <List>
      <ListSubheader sx={{ mb: 1 }}>
        <StyledTypography color="text.primary">聯絡人</StyledTypography>
      </ListSubheader>
      {contactData.map((item) => {
        const { avatar, name, _id } = item;
        return (
          <StyledListItemButton key={_id}>
            <ListItemAvatar sx={{ mr: -1 }}>
              <Avatar src={avatar} sx={{ width: 32, height: 32 }} />
            </ListItemAvatar>
            <ListItemText primary={name} />
          </StyledListItemButton>
        );
      })}
    </List>
  );
};

export default function Rightbar(props) {
  return (
    <StyledBox
      flex={props.flex}
      sx={props.sx}
      position="sticky"
      top={0}
      height="calc(100vh - 64px)"
    >
      <Stack gap={1} p={1}>
        <SponsorList />
        <ContactList />
      </Stack>
    </StyledBox>
  );
}
