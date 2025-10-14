import { WebSocket as NodeWebSocket } from 'ws';

interface WebSocketInit {
  protocols?: string | string[];
  headers?: HeadersInit;
}

const isNode = globalThis.process?.release?.name === 'node';

export const WebSocket = (
  isNode ? NodeWebSocket : globalThis.WebSocket
) as typeof globalThis.WebSocket & {
  new (
    url: string | URL,
    protocols?: string | string[] | WebSocketInit,
  ): WebSocket;
};
