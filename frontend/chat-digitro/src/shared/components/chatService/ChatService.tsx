import { Box, Paper } from "@mui/material";
import { ChatServiceProps } from "./chatService.types";

export const ChatService = ({ calls, onHandleClick }: ChatServiceProps) => {
  return (
    <Box width="33vw" padding={2}>
      <Box
        padding={2}
        display={"flex"}
        flex={1}
        bgcolor={"white"}
        borderRadius={2}
        component={Paper}
        minHeight={"50vh"}
      >
        Atendimentos
      </Box>

      <Box>
        {calls.map((call) => (
          <Box>{call.media}</Box>
        ))}
      </Box>
    </Box>
  );
};
