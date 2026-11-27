# QCYTSN/dsh-dafeiyu

> Desktop companion plugin for DeepSeek Harness: an animated character shows the agent's state and the balance.

## The problem
While an agent works, you cannot see its state (thinking, running, waiting for approval) outside the tool's window.

## What it actually does
- Transparent native window, always on top, launched by the DSH plugin.
- Shows the state coming from DSH session events, task progress and the DeepSeek balance (API or account).
- Settings: size, bubbles, sounds, compact mode; approval notifications.
- Native helpers: Windows, Linux x64 (Qt), macOS (Swift, experimental), Python/PySide6 on Linux arm64.

## How it is wired
```mermaid
graph LR
  A[DSH Host] --> B[plugin dsh-dafeiyu]
  B --> C[Helper natif Qt / Swift / Python]
  C --> D[Personnage à l'écran]
  B --> E[/user/balance DeepSeek]
  A --> F[Événements de session]
  F --> B
```

## Trying it
```bash
dsh plugin --profile web add dsh-dafeiyu@0.1.23
dsh web
```

## Cost and gotchas
Free plugin; the balance queries DeepSeek with your key through DSH. First launch: about 100 MB of unpacked Qt. The web plugin is not visible in the desktop app (separate profiles). Assets are under a different license for code and images (ASSET_LICENSE.md).

## What it is not
Not an agent nor a monitoring tool: it does not read the screen and only shows what DSH exposes. It makes no call to the model.

## Alternatives
No alternative named in the README (characters come from PC2005-cloud/dsh-pet, inspired by keshing/balance-display).

## For you
Ignore: a cosmetic gadget tied to DeepSeek Harness, young (created in August 2026) and with a single maintainer; only the balance tracking is useful.
