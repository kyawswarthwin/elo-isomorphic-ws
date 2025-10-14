import { WebSocket as NodeWebSocket } from 'ws';

const isNode = globalThis.process?.release?.name === 'node';

interface WebSocketInit {
  protocols?: string | string[];
  headers?: HeadersInit;
}

type ELOWebSocketConstructor = typeof globalThis.WebSocket & {
  new (
    url: string | URL,
    protocols?: string | string[] | WebSocketInit,
  ): WebSocket;
};

class ELOWebSocket extends (isNode ? NodeWebSocket : globalThis.WebSocket) {
  constructor(
    url: string | URL,
    protocols?: string | string[] | WebSocketInit,
  ) {
    if (typeof protocols === 'object' && !Array.isArray(protocols)) {
      super(url, isNode ? protocols : protocols.protocols);
    } else {
      super(url, protocols);
    }
  }
}

export const WebSocket = ELOWebSocket as ELOWebSocketConstructor;
