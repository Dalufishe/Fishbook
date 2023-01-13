import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

const StyledStack = styled(Stack)(({ theme }) => ({
  height: "calc(100vh - 64px)",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "14px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.action.hover,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.text.disabled,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: theme.palette.text.secondary,
  },
}));

export default function Home() {
  return (
    <>
      <Topbar />
      <StyledStack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Sidebar flex={1} />
        <Feed flex={5} />
        <Rightbar flex={1} />
      </StyledStack>
    </>
  );
}
