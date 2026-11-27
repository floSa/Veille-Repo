# Guovin/TV

> Tool that aggregates IPTV sources, tests their speed and generates M3U or TXT playlists.

## The problem
IPTV channel lists keep changing and many links are dead or slow.

## What it actually does
Collects local sources and subscriptions, normalizes channel names (aliases), tests throughput, latency and resolution with FFmpeg, filters ads, outputs M3U/TXT, EPG, logos, RTMP. Windows/macOS desktop GUI, command line, Docker, manual GitHub Actions. Provides no sources.

## How it is wired
```mermaid
flowchart LR
  UI[Desktop UI] --> U[Update controller]
  U --> S[Source collection]
  S --> A[Channel aggregation]
  A --> Q[Stream testing]
  Q --> R[Playlist artifacts]
  R --> H[HTTP service]
```

## Trying it
```bash
docker pull guovern/iptv-api:latest
docker run -d -p 80:8080 guovern/iptv-api
```

## Cost and gotchas
The license is AGPL-3.0 according to the README (catalog: not declared): obligation to publish the source if a modified version is offered as a network service. The README warns about broadcasting rights, especially for RTMP.

## What it is not
Not a channel provider; unrelated to data or AI. The README is identical to that of Guovin/IPTV (renamed repository or duplicate).

## Alternatives
- No alternative named in the README.

## For you
Ignore: a personal-television tool unrelated to your work, with a legal risk on content.
