const app = require('express')();
const http = require('http').Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (name, msg) => {
      io.emit('chat message', `${name}: ${msg}`);
    });
    socket.on("user connected", (name)=> {
      socket.broadcast.emit("user connected", name + " đã kết nối");
      // console.log(name + " đã kết nối");
    })
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});