# MHSanaei/3x-ui

> **Web control panel for Xray-core servers, aimed at people running their own proxy VPS.**

## The problem

Configuring Xray-core by hand means writing and maintaining JSON for every inbound, every
client and every routing rule, with no view of traffic consumed or expiry dates. More servers
means more files, and nothing tells you who is using what.

## What it actually does

3X-UI is a Go web interface, an enhanced fork of the original X-UI project, that drives one or
more Xray-core instances. It creates inbounds (VLESS, VMess, Trojan, Shadowsocks, WireGuard,
AmneziaWG, TUIC v5, Hysteria2, MTProto, HTTP, SOCKS, Dokodemo-door, TUN) and their transports
(TCP/Raw, mKCP, WebSocket, gRPC, HTTPUpgrade, XHTTP, with TLS, XTLS, REALITY).

It keeps per-client accounting: traffic quotas, expiry dates, IP limits with trusted-address
exemptions, HWID device limits, renewal cycles, live online status, share links, QR codes and
subscriptions. Statistics are broken down per inbound, per client and per outbound.

Two pieces run *inside* the panel rather than being delegated: AmneziaWG on a userspace network
stack (no kernel module, no DKMS) and a TUIC v5 sidecar with UDP relay metering. The rest —
routing, load balancing, outbound chaining to WARP, NordVPN, PIA — is configuration pushed to
Xray.

Around that: a built-in subscription server (raw, JSON and Clash output picked from the
User-Agent), a REST API with scoped tokens, Telegram and Discord bots, Fail2ban integration,
SQLite or PostgreSQL storage, 13 UI languages, and PWA installation.

## How it is wired

No code-derived diagram exists for this repository: the graph below is reconstructed from the
README alone.

```mermaid
graph LR
  A[install.sh<br/>random credentials and access path] --> B[3x-ui web panel<br/>x-ui menu · PWA · 13 languages]
  B --> C[Xray-core<br/>VLESS/VMess/Trojan/Hysteria2 inbounds…]
  B --> D[built-in AmneziaWG<br/>userspace network stack]
  B --> E[TUIC v5 sidecar<br/>QUIC · metered UDP relay]
  B --> F[(storage<br/>SQLite /etc/x-ui/x-ui.db<br/>or PostgreSQL via XUI_DB_DSN)]
  B --> G[subscription server<br/>raw · JSON · Clash]
  B --> H[Telegram / Discord bots<br/>token-scoped REST API]
  B --> I[Fail2ban<br/>iptables bans · NET_ADMIN]
  B --> J[other nodes<br/>inbound cloning]
```

## Trying it

```bash
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```

A pinned version, or the rolling dev build:

```bash
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh) v3.7.0
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh) dev-latest
```

In containers, and with the bundled PostgreSQL:

```bash
docker compose --profile postgres up -d
docker run -d --cap-add=NET_ADMIN --cap-add=NET_RAW ... ghcr.io/mhsanaei/3x-ui
```

Migrating an existing SQLite install:

```bash
x-ui migrate-db --dsn "postgres://xui:password@127.0.0.1:5432/xui?sslmode=disable"
# then set XUI_DB_TYPE and XUI_DB_DSN in /etc/default/x-ui and restart:
systemctl restart x-ui
```

## Cost and gotchas

- **The software is free, the server is not.** You need a VPS you administer yourself; the
  README lists Hetzner, AWS, DO, Vultr, GCP, Azure and Oracle for cloud-init installs. No API
  key, no GPU, no account to create.
- **The repository's own warning**: "intended for personal use only […] do not use it for
  illegal purposes or in a production environment", in an IMPORTANT callout.
- **Install is `curl | bash` as root**, generating random credentials and access path. Release
  assets carry `.sha256` sums that `install.sh` and the updater verify, but the trust model is
  still "run a downloaded script".
- **Docker and Fail2ban**: without `--cap-add=NET_ADMIN` (and `NET_RAW`), bans are logged but
  never applied, so per-client IP limits become decorative.
- **Tunnel health monitor** (`XUI_TUNNEL_HEALTH_MONITOR`, off by default): the README notes
  that an xray restart drops all clients.
- **Node token encryption** (`NODE_TOKEN_ENCRYPTION`) defaults to `off`, with a `0600` keyring
  file to manage yourself. Settle this before any multi-node setup.
- **GPL-3.0**: copyleft, which matters if you redistribute a modified build.

## What it is not

- **Not a proxy engine.** Encryption, transport and routing are done by Xray-core; 3X-UI writes
  its config and reads its counters. Without Xray nothing flows.
- **Not a hosted product or a managed service**: no SaaS, no support, no SLA — the README rules
  out production use outright.
- **Not a data tool.** The "traffic statistics" are per-client operational counters, not an
  analytics pipeline, and nothing is provided for export.

## Alternatives

| | When to pick it |
|---|---|
| **XTLS/Xray-core** | Named in the README's first line: the engine 3X-UI drives. Pick it if you would rather own the JSON config as infrastructure as code, with no web panel. |
| **Gozargah/Marzban** | Another Xray management panel in the catalogue, not cited by the README. Worth comparing for a different governance or multi-node model. |
| **hiddify/Hiddify-Manager** | Same family of proxy administration panels; a catalogue neighbour, not cited by the README. |

## For you

Skip it for a data / AI / MLOps profile: this is proxy operations tooling, with no contact
point with data, models or training pipelines. The only reason to stop here is personal —
self-hosting a VPN — and the repository itself advises against production use.
