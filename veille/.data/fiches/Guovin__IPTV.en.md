# Guovin/IPTV

> Tool for aggregating and testing IPTV sources, generating M3U/TXT playlists; same README as Guovin/TV.

## The problem
Public IPTV lists keep changing and contain many unusable links.

## What it actually does
Identical to Guovin/TV: subscriptions and local sources, channel aliases, throughput and resolution tests, ad filter, EPG, RTMP, GUI, CLI and Docker. The catalog lists both repositories with word-for-word identical READMEs.

## How it is wired
```mermaid
flowchart LR
  D[Desktop UI] --> U[Update controller]
  U --> S[Source collection]
  S --> A[Channel aggregation]
  A --> T[Stream testing]
  T --> P[Playlist artifacts]
  P --> H[HTTP service]
```

## Trying it
```bash
pip install pipenv
pipenv install --dev
pipenv run dev
pipenv run service
```

## Cost and gotchas
AGPL-3.0 according to the README; catalog has no license. README warning: only enable RTMP for authorized content.

## What it is not
Not a source of channels; apparent duplicate of Guovin/TV.

## Alternatives
- Guovin/TV: same content under another repository name.

## For you
Ignore: unrelated to data/AI work; if you still want to try it, one of the two repositories is enough.
