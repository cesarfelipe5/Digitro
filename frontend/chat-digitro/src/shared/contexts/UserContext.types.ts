import { ReactNode } from "react";

export interface UserContextData {
  userName: string;
  onChangeUserName: (userName: string) => void;
  // error: boolean;
}

export interface UserNameProvider {
  children: ReactNode;
}
