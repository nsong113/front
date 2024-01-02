import { io } from 'socket.io-client';

const socket = io.connect(`${process.env.REACT_APP_SERVER_URL}`, {
  path: '/community/chat/socket.io',
  cors: { origin: '*' },
});

export default socket;
