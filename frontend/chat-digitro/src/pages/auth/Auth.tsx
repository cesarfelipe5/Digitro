import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../shared/contexts";

export const Auth = () => {
  const { userName, onChangeUserName } = useUserContext();
  const navigate = useNavigate();

  const [maxCall, setMaxCall] = useState<string>();

  const onHandleContinue = () => navigate("/chat");

  return (
    <Box
      flex={1}
      gap={2}
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <TextField
        label="Usuário"
        placeholder="Usuário"
        name="Usuário"
        value={userName}
        onChange={(e) => onChangeUserName(e.target.value)}
        size="small"
      />

      <TextField
        label="Máximo de chamadas"
        placeholder="Máximo de chamadas"
        name="Máximo de chamadas"
        value={maxCall}
        onChange={(e) => setMaxCall(e.target.value)}
        size="small"
        defaultValue={1}
      />

      <Button variant="contained" color="info" onClick={onHandleContinue}>
        Conectar
      </Button>
    </Box>
  );
};
