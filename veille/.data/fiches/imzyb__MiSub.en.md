# imzyb/MiSub

> Proxy subscription management panel, deployed on Cloudflare Pages, for individuals and small teams.

## The problem
Managing several proxy subscriptions and nodes and serving them in formats compatible with each client is tedious.

## What it actually does
A Vue 3 interface connected to Pages functions: merging subscriptions into profiles, an operator chain (filter, regex rename, sort, deduplication), output for Clash, Sing-Box, Surge, Loon and others. Storage on Cloudflare KV or D1, Telegram notifications.

## How it is wired
```mermaid
flowchart TD
  node_dashboard["Dashboard.vue"] --> node_http_client["http.js"]
  node_http_client --> node_api_router["api-router.js"]
  node_api_router --> node_subscription_handler["subscription-handler.js"]
  node_subscription_handler --> node_subscription_service["subscription-service.js"]
  node_subscription_service --> node_node_parser["node-parser.js"]
  node_subscription_service --> node_operator_runner["operator-runner.js"]
```

## Trying it
```bash
npm install
npm run dev
npm test -- --run
npm run build
```

## Cost and gotchas
Free. Requires a GitHub account and a Cloudflare account, plus a linked KV namespace. If `ADMIN_PASSWORD` is not set, the default password is `admin`.

## What it is not
Not a proxy or VPN service: only a manager of subscription links.

## Alternatives
No alternative named in the README.

## For you
Ignore: a personal network circumvention tool, unrelated to data / AI / MLOps work.
