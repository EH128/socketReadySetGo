const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

server.listen(process.env.PORT || 3000);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("show start", () => {
    io.emit("show start");
  });
});
