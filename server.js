import { WebSocketServer } from 'ws';

// create WebSocket server
const wss = new WebSocketServer({port: 8081})

// listen on new connections
wss.on('connection', (ws) => {
    // console.log("Hello World");
    console.log("New client connection from IP: ", ws._socket.remoteAddress);
    console.log('Number of connected clients: ', wss.clients.size);

    // WebSocket events (ws) for single client

    // close event
    ws.on('close', () => {
        console.log('Client disconnected');
        console.log('Number of remaining connected clients: ', wss.clients.size);
    });
});