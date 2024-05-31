import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import express from 'express';
import { Server as socketIo } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const httpServer = createServer(server);
  const io = new socketIo(httpServer);

  io.on('connection', (socket) => {
    console.log('a user connected');
    // Add your socket event handlers here
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res, parse(req.url, true));
  });

  const port = process.env.PORT || 3000;
  httpServer.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
