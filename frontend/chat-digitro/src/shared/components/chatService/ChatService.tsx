import { Box, Paper } from "@mui/material";

export const ChatService = () => {
  return (
    <Box width="33vw" padding={2}>
      <Box
        minHeight={"50vh"}
        padding={2}
        display={"flex"}
        flex={1}
        component={Paper}
      >
        Atendimentos
      </Box>
    </Box>
  );
};
