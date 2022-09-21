import { WebSocketServer } from 'ws';

// import functions
import { parseJSON } from './libs/functions.js';

// create WebSocket server
const wss = new WebSocketServer({port: 8081})

// listen on new connections
wss.on('connection', (ws) => {
    console.log("New client connection from IP: ", ws._socket.remoteAddress);
    console.log('Number of connected clients: ', wss.clients.size);

    // WebSocket events (ws) for single client

    // close event
    ws.on('close', () => {
        console.log('Client disconnected');
        console.log('Number of remaining connected clients: ', wss.clients.size);
    });

    // message event
    ws.on('message', (data) => {
        console.log('Message received: %s', data);

        // avoid error using try-catch - server still running!
        // use defined functions to handle errors - better code
        let obj = parseJSON(data);
        console.log('obj', obj);

    });

});