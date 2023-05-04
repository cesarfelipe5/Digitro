import { io } from "socket.io-client";

// const socket = io(process.env.REACT_APP_BASE_URL);
// const socket = io("http://dev.digitro.com/callcontrol");
const socket = io("http://dev.digitro.com/callcontrol", {
  withCredentials: true,
  // transports: ["websocket"],
  // transports: ["websocket"],
  extraHeaders: {
    "Access-Control-Allow-Origin": "*",
  },
  // transportOptions: {
  //   polling: {
  //     extraHeaders: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   },
  // },
});

const socketEmitEndCall = (callId: string) =>
  socket.emit("END_CALL", { callId });

const socketUserDisconnect = (userName: string) => {
  socket.emit("USER_DISCONNECT", { userName });

  socket.on("disconnect", () => {
    console.log(socket.connected);
  });
};

export { socket, socketEmitEndCall, socketUserDisconnect };
