import { Box, Button } from "@mui/material";
import "./Header.css";
import { HeaderProps } from "./header.types";

export const Header = ({ userName = "cesar", onHandleFinish }: HeaderProps) => {
  return (
    <Box
      height="15vh"
      className="container"
      display="flex"
      padding={2}
      gap={2}
      flex={1}
      alignItems="center"
      flexDirection="row"
    >
      <Box
        className="userName"
        color="white"
        fontSize={20}
        fontFamily="Syne"
        fontWeight={500}
      >
        {userName}
      </Box>

      <Button variant="contained" color="error" onClick={onHandleFinish}>
        Desconectar
      </Button>
    </Box>
  );
};
