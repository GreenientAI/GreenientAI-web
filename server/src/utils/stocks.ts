import {WebSocket} from 'ws';

const socket = new WebSocket('wss://ws.finnhub.io?token=c66negaad3icr57jk6l0');

// Connection opened -> Subscribe
socket.addEventListener('open', function (event: any) {
  socket.send(JSON.stringify({ type: 'subscribe', symbol: 'AAPL' }));
  socket.send(JSON.stringify({ type: 'subscribe', symbol: 'BINANCE:BTCUSDT' }));
});

// Listen for messages
socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);
});

// Unsubscribe
var unsubscribe = function (symbol: any) {
  socket.send(JSON.stringify({ type: 'unsubscribe', symbol: symbol }));
};
