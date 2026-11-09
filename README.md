# meshbay-sample-next-web

Next.js 15 (App Router, Node 22, pnpm) frontend for the Meshbay vs Railway side-by-side test.

It is a server-rendered app: the page fetches the item list on the server, and the form posts to a Next route
handler that proxies to the API. `API_URL` is therefore read at runtime, so changing it only needs a restart, never a
rebuild.

## Environment

| Variable | Required | Default | Description |
|---|---|---|---|
| `API_URL` | no | `http://localhost:8080` | Base URL of the backend (the Go API in stack A) |
| `PORT` | no | `3000` | HTTP port used by `next start` |

## Run locally

```sh
pnpm install
API_URL=http://localhost:8080 pnpm dev
```

Production build:

```sh
pnpm build
API_URL=http://localhost:8080 pnpm start
```

## What it does

- `GET /` lists every item from `GET {API_URL}/api/items` (server component, `cache: "no-store"`).
- The form posts to `POST /api/items` on this app, which forwards `{"name":...}` to `{API_URL}/api/items` and refreshes
  the list.

No build-time API URL is baked in, so this repo has no Vite-style `VITE_*` variable.
