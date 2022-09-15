const app = require('express')();
const http = require('http').Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});