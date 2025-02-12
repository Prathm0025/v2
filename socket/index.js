const { io } = require("socket.io-client");

const socket = io("http://localhost:3009");

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
  socket.emit("message", "Hello from Node client!");
});

// Listen for server IP
socket.on("server-ip", (ip) => {
  console.log("Server IP Address:", ip);
});

socket.on("message", (data) => {
  console.log("Broadcast received:", data);
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
