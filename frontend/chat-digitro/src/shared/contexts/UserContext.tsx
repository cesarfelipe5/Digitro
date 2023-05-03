import { Box } from "@mui/system";
import React, { createContext, useCallback, useContext, useState } from "react";
import { UserContextData, UserNameProvider } from "./UserContext.types";

const UserContext = createContext({} as UserContextData);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: UserNameProvider): JSX.Element => {
  const [userName, setUserName] = useState<string>("");

  const onChangeUserName = useCallback(
    (newUserName: string) => setUserName(newUserName),
    []
  );

  return (
    <UserContext.Provider value={{ userName, onChangeUserName }}>
      <Box height="100vh">{children}</Box>
    </UserContext.Provider>
  );
};
