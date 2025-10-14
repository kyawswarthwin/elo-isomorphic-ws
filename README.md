# elo-isomorphic-ws

Lightweight, cross-platform WebSocket client with Node.js headers support

## Installation

```bash
npm install elo-isomorphic-ws
```

## Usage

```typescript
import { WebSocket } from 'elo-isomorphic-ws';

// Works in all environments
const ws = new WebSocket('wss://echo.websocket.org', {
  headers: {
    Authorization: 'Bearer token', // Node.js only - ignored elsewhere
  },
});
```

## Features

- Lightweight, cross-platform WebSocket client
- Headers support for Node.js
- TypeScript ready

## License

MIT
