const express = require("express");
const app = express();
const path = require("path");
const socketIO = require("socket.io");
const PORT = 3000;

app.use("/login_page", express.static(path.join(__dirname, "/public")));
app.use("/general_chat_room", express.static(path.join(__dirname, "/public")));
app.use("/music_chat_room", express.static(path.join(__dirname, "/public")));
app.use("/study_chat_room", express.static(path.join(__dirname, "/public")));

// Creating a server, which is responsible for managing HTTP requests
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// IO, where I = input, O = Output
const io = socketIO(server);

const socket = io("http://localhost:3000/login_page");

const messages = [];

io.on("connection", (socket) => {
  console.log("new user connection");

  // Constant updating of messages sent by different users
  // Users who connect to the chat can see the messages
  io.emit("update_messages", messages);

  socket.on("new_message", (data) => {
    messages.push(data.msg);
  });

  io.emit("update_messages", messages);
});
