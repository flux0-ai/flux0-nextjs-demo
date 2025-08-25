# flux0-nextjs-demo

A **Next.js 15 (App Router)** demo showcasing session-based chat, real-time streaming with `@flux0-ai/react`

## Features

- **App Router** pages: `/` (create session), `/session/[id]` (stream), and `/sessions` (list sessions).
- **Real-time streaming** of messages & tool calls via `@flux0-ai/react`.
- **Persistent sessions** — refresh to reload previous events.
- **Session list** — view all previous chat sessions, loaded from server in layout.

## Requirements

- Node 18.18+ (Node 20+ recommended)
- A running [Flux0 server](https://github.com/flux0-ai/flux0) (default: `http://localhost:8080`)

## Quick Start

1. **Install**

```bash
npm install
```

2. Configure env

Modify `.env`:

```env
# Where your Flux0 server runs
FLUX0_URL=http://localhost:8080

# Your existing Flux0 agent ID
NEXT_PUBLIC_AGENT_ID=<your-agent-id>
```

3. Run

```bash
npm run dev
# open http://localhost:3000
```

## How It Works

- /
  On Enter: `POST /api/sessions` → navigate to /session/{id} → (optionally) send the first message.

- /session/[id]
  A Client Component starts streaming with `@flux0-ai/react` and renders each chunk as it arrives.
  Refreshing the page reloads prior events, then continues streaming.
