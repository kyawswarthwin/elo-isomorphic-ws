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

## Platform Support

- **Node.js**: Uses `ws` library with headers support
- **Browsers**: Uses native WebSocket (headers safely ignored)

## License

MIT
