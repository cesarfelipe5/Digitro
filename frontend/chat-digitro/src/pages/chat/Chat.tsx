import { Box } from "@mui/material";
import { useState } from "react";
import { ChatDetail } from "../../shared/components/chatDetail";
import { ChatService } from "../../shared/components/chatService";
import { Header } from "../../shared/components/header";
import { useUserContext } from "../../shared/contexts";
import { socket, socketEmitEndCall } from "../../shared/utils/socket";
import { Call } from "./chat.types";

export const Chat = () => {
  const { userName } = useUserContext();

  const [calls, setCalls] = useState<Call[]>([] as Call[]);
  const [call, setCall] = useState<Call>({} as Call);

  // console.log("socketsocketsocket", socket.id);

  const onHandleFinish = () => {
    socketEmitEndCall("123");
  };

  const newCall = ({ callId, caller, media, service, startDate }: Call) =>
    setCalls((c) => [...c, { caller, callId, media, service, startDate }]);

  socket.on("NEW_CALL", newCall);

  return (
    <Box>
      <Header userName={userName} onHandleFinish={onHandleFinish} />

      <Box display="flex" flexDirection="row">
        <ChatService />

        <ChatDetail {...call} />
      </Box>
    </Box>
  );
};
