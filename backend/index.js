const express = require('express');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);


const port = 3001;

app.get("/", (req, res) => {
  res.send('Hello world!');
});

io.on('connection', socket => {
  console.log('Someone is connected!');
  socket.on('join-room', ({roomId, userName}) => {
    console.log('User joined room');
    console.log(roomId, userName);
  })
})

server.listen(port, () => {
  console.log(`Zoom clone API listening on localhost:${port}`);
})

