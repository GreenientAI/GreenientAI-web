"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const socket = new ws_1.WebSocket('wss://ws.finnhub.io?token=c66negaad3icr57jk6l0');
// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({ type: 'subscribe', symbol: 'AAPL' }));
    socket.send(JSON.stringify({ type: 'subscribe', symbol: 'BINANCE:BTCUSDT' }));
});
// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
// Unsubscribe
var unsubscribe = function (symbol) {
    socket.send(JSON.stringify({ type: 'unsubscribe', symbol: symbol }));
};
