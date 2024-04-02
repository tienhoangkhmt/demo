import { io } from 'socket.io-client';

const URL = import.meta.env.PROD ? 'http': 'http';

const socket = io(URL, { autoConnect: false })

export default socket;
