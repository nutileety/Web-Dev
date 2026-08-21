"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on('connection', (socket) => {
    console.log("The user connected to the server");
    socket.on('message', (message) => {
        let parsedMessage = JSON.parse(message.toString());
        if (parsedMessage.type == 'join') {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }
        if (parsedMessage.type == 'chat') {
            const currentUserRoom = allSockets.find((x) => x.socket == socket)?.room;
            console.log(currentUserRoom);
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i]?.room == currentUserRoom) {
                    allSockets[i]?.socket.send(parsedMessage.payload.message);
                }
            }
        }
    });
});
//# sourceMappingURL=index.js.map