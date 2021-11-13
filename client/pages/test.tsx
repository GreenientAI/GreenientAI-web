import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const ws = new W3CWebSocket('wss://ws.finnhub.io?token=c66negaad3icr57jk6l0');

const Test: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    ws.onopen = () => {
      console.log('WebSocket Client Connected');
      ws.send('Hello Server');
    };
    ws.onmessage = (e) => {
      console.log(e.data);
    };
    ws.onclose = () => {
      console.log('WebSocket Client Closed');
    };
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <>
      Test
    </>
  );
};

export default Test;