import { Navigate, Route, Routes } from "react-router-dom";
import { Auth, Chat } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/chat" element={<Chat />} />

      {/* <Route path="*" element={<Navigate to={"/auth"} />} /> */}
      <Route path="*" element={<Navigate to={"/auth"} />} />
    </Routes>
  );
};
