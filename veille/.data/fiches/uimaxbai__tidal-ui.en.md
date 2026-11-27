# uimaxbai/tidal-ui

> High-fidelity SvelteKit music streaming web interface with FLAC download, now being phased out.

## The problem
An alternative interface for listening to and downloading Tidal music in high resolution.

## What it actually does
SvelteKit and Tailwind application. FLAC download up to 24-bit/192 kHz. Some requests go through the `/api/proxy` proxy route to avoid CORS. Redis cache deprecated. The author announces that he is retiring the project in favor of Monochrome and that the repository will be archived.

## How it is wired
```mermaid
graph LR
  Navigateur --> SvelteKit
  SvelteKit --> Proxy[/api/proxy]
  Proxy --> API[API externe]
  SvelteKit --> Docker[docker compose]
```

## Trying it
```bash
cp .env.example .env
docker compose up --build
```

## Cost and gotchas
An active Tidal account is required. The repository is archived and the license is MPL-2.0. The README states that piracy is illegal in most countries.

## What it is not
Not a maintained tool: "It works (kinda)" says the README itself.

## Alternatives
Monochrome, cited by the author as the successor.

## For you
Ignore: archived, legal risk, unrelated to data/AI.
