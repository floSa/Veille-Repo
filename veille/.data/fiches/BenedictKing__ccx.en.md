# BenedictKing/ccx

> Proxy gateway that translates between the Claude, OpenAI, Codex and Gemini protocols.

## The problem
Each AI client speaks the protocol of a single provider, with a single key.
Switching providers or spreading the load means reconfiguring all the clients.

## What it actually does
A single entry point that exposes Claude Messages, OpenAI Chat, Images, Embeddings, Codex Responses and Gemini.
A web admin console to manage channels, test, read logs and monitor.
Priority scheduling, promotion windows, health checks, failover and circuit recovery.
Per-channel key rotation, model mapping, allowed model lists, route prefixes, outbound proxy.

## How it is wired
```mermaid
flowchart LR
  CL[Client] --> BK[backend :3000]
  BK --> UI[Web UI]
  BK --> MSG[/v1/messages Claude]
  BK --> CHAT[/v1/chat/completions]
  BK --> RESP[/v1/responses Codex]
  BK --> GEM[/v1beta/models Gemini]
  BK --> SCHED[ordonnancement, santé, bascule]
```

## Trying it
```bash
docker run -d \
  --name ccx \
  -p 3000:3000 \
  -e PROXY_ACCESS_KEY=your-proxy-access-key \
  -e APP_UI_LANGUAGE=en \
  -v $(pwd)/.config:/app/.config \
  crpi-i19l8zl0ugidq97v.cn-hangzhou.personal.cr.aliyuncs.com/bene/ccx:latest
```

## Cost and gotchas
The providers' keys remain at your expense; the proxy concentrates all your keys in one place.
With `BIND_HOST` empty, it listens on all interfaces: restrict it to `127.0.0.1` outside a trusted network.

## What it is not
Not a model provider: it routes, it serves nothing itself.
Not a cost-control tool — no budget or cap is described.
The default Docker image comes from a personal Aliyun registry, not a well-known public registry.

## Alternatives
No alternative named in the README.

## For you
Worth a look if you juggle several providers; centralizing keys with a third party deserves thought.
