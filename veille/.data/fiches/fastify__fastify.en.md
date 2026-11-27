# fastify/fastify

> Low-overhead Node.js web framework with a plugin architecture, for fast APIs.

## The problem
A slow or poorly structured HTTP server costs infrastructure money and hinders API development.

## What it actually does
Routes receive the request, which goes through a chain of hooks (`onRequest`, `preValidation`, `preHandler`, `preSerialization`, `onSend`, `onResponse`). Validation and serialization rely on compiled JSON Schema, logging on Pino. The plugin system encapsulates decorators, hooks and routes. The `main` branch corresponds to v6.

## How it is wired
```mermaid
flowchart LR
  Req[Requête HTTP] --> H1[onRequest]
  H1 --> H2[preValidation]
  H2 --> H3[preHandler]
  H3 --> Handler[Route Handler]
  Handler --> H4[preSerialization]
  H4 --> Resp[Réponse]
```

## Trying it
```bash
mkdir my-app
cd my-app
npm init fastify
npm i
npm run dev
npm start
npm i fastify
```

## Cost and gotchas
Free. `listen` binds to localhost by default: in a container you must bind `0.0.0.0`, with the risks the README points out. The benchmark figures quoted are for v4.0.0 and are synthetic.

## What it is not
Not an "all-inclusive" framework: ORM, authentication and the rest go through plugins. The README says so itself: it is up to you to measure on your own application.

## Alternatives
- Express, hapi, Restify, Koa: compared in the README benchmark, where Fastify comes out faster.

## For you
Worth adopting to expose a model or a data service as a Node API: built-in validation schema, plugin ecosystem and hosting by the OpenJS Foundation ("At-Large" project).
