# Guovin/iptv-api

> Tool that aggregates and tests IPTV sources and generates M3U/TXT playlists.

## The problem
IPTV channel lists are scattered, often dead or slow; sorting them by hand is tedious.

## What it actually does
Collects local sources and subscriptions, normalizes channel names (7,254 aliases), tests latency, throughput and resolution.
Filters out ads and placeholders, applies blacklists/whitelists, generates M3U/TXT and EPG.
Serves the results over HTTP, with optional RTMP restreaming via FFmpeg/Nginx.
Runs as a desktop GUI, CLI (pipenv), Docker or GitHub Actions.

## How it is wired
```mermaid
flowchart LR
  OP[Operator] --> MAIN[main.py]
  MAIN --> REQ[request.py]
  REQ --> CH[channel.py]
  CH --> AGG[aggregator.py]
  AGG --> SP[speed.py]
  SP --> ART[artifacts.py]
  ART --> APP[app.py]
```

## Trying it
```bash
docker compose up -d
docker run -d -p 80:8080 guovern/iptv-api
pipenv install --dev
pipenv run dev
```

## Cost and gotchas
Free; no sources provided. AGPL-3.0 according to the README: obligation to publish the code if offered as a network service. The author stresses the legal risks of unauthorized broadcasting.

## What it is not
Not a content provider. README mostly in Chinese.

## Alternatives
No alternative named in the README.

## For you
Ignore: outside the data/AI scope and legally sensitive.
