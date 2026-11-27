# orkestral/venom

> Node.js library driving WhatsApp Web through Puppeteer, for building messaging bots.

## The problem
WhatsApp offers no simple API to automate sending and reading messages from a script.

## What it actually does
Launches Chromium via Puppeteer, shows a QR code to scan, injects a WAPI layer into the page and exposes a client: sending text, media, polls, lists, groups, profile, chats, events (messages, receipts, connection state, calls). Sessions are saved. v6 is a rewrite; the README states 6 source files. Requires Node 18+.

## How it is wired
```mermaid
flowchart LR
  A["Application"] --> B["create (initializer.ts)"]
  B --> C["Browser and page (browser.ts)"]
  C --> D["QR authentication"]
  D --> E["Browser WAPI"]
  E --> F["Venom client (client.ts)"]
  F --> G["WhatsApp Web"]
```

## Trying it
```bash
npm install venom-bot
npm install github:orkestral/venom
npm run build
```

## Cost and gotchas
Free, but depends on a WhatsApp account and on internal WhatsApp Web modules that change: a pinned Web version option exists. Call `client.close()` to save the session.

## What it is not
Not an official WhatsApp API: automation goes through the Web interface, with the associated risks of account blocking (`PROXYBLOCK`, `TOS_BLOCK` states are listed).

## Alternatives
- wppconnect-team/wa-version (cited in the README): to choose a WhatsApp Web version.

## For you
Worth watching: handy for a notification bot to a phone, but fragile and outside the terms of use; prefer an official API for anything serious.
