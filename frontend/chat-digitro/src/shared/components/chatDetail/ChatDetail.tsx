import { Box, Button } from "@mui/material";
import moment from "moment";
import { ChatDetailProps } from "./chatDetail.types";

export const ChatDetail = ({
  callId,
  media,
  startDate,
  service,
  caller,
}: ChatDetailProps) => {
  return (
    <Box
      width={"66%"}
      margin={2}
      padding={2}
      bgcolor="#f7f7f9"
      flexDirection="column"
      borderRadius={2}
    >
      <Box flexDirection="column">
        <Box>Chamada selecionada</Box>

        <Box>CallId: {callId}</Box>
        <Box>Mídia: {media}</Box>
        <Box>
          Data inicial: {moment(startDate).format("DD/MM/YYYY HH:mm:ss")}
        </Box>
        <Box>Serviço: {service}</Box>
        <Box>Origem: {origin}</Box>
      </Box>
      <Box display="flex" justifyContent="end" marginTop={10}>
        <Button variant="contained" color="error">
          Finalizar
        </Button>
      </Box>
    </Box>
  );
};
