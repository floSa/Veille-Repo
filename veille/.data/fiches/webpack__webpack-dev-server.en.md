# webpack/webpack-dev-server

> Development server with hot reloading for webpack projects.

## The problem
Manually rebuilding and reloading assets after every change slows down front-end development.

## What it actually does
Serves webpack assets from memory via webpack-dev-middleware, with live reload, HMR, an in-browser error overlay, proxy, HTTPS, WebSocket. Launched by `webpack serve`, in an npm script or via the API. For development use only.

## How it is wired
```mermaid
graph LR
  W[Compilateur webpack] --> M[webpack-dev-middleware]
  M --> S[Server.js]
  S --> WS[WebSocketServer]
  WS --> CL[Client navigateur]
```

## Trying it
```bash
npm install webpack-dev-server --save-dev
npx webpack serve
```

## Cost and gotchas
Free. Listens on localhost:8080 by default; do not expose in production.

## What it is not
Not a production server nor a replacement for webpack.

## Alternatives
No alternative named in the README.

## For you
Ignore: only useful if you maintain a webpack front end, unrelated to data/AI/MLOps.
