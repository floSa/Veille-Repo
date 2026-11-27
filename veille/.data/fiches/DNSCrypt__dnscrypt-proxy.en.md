# DNSCrypt/dnscrypt-proxy

> Local DNS proxy that encrypts queries via DNSCrypt, DoH or ODoH, for privacy-conscious users.

## The problem
DNS queries travel in the clear and reveal the sites visited.

## What it actually does
Listens locally, applies filters (blocking, cloaking, time-based filtering), checks a cache, then relays via DNSCrypt v2 (including post-quantum), DoH over TLS 1.3/QUIC or ODoH. Balances load across the fastest resolvers, can go through Tor, SOCKS or anonymized relays, logs queries and offers a monitoring interface.

## How it is wired
```mermaid
flowchart LR
  C[Client] --> L[Listener]
  L --> P[Plugin Pipeline]
  P --> Q[Query Processor + Cache]
  Q --> R[Resolver Manager]
  R --> T[Cryptographic Transport]
  T --> X[External Resolver]
```

## Trying it
The README contains no command: it points to the documentation and to the installation instructions with signature verification.

## Cost and gotchas
Free. Precompiled binaries for many platforms. Hot reload of the config disabled by default since v2.1.10. Only 9 open issues.

## What it is not
Not a VPN: it only encrypts DNS, not the rest of the traffic.

## Alternatives
No alternative cited in the README.

## For you
Adopt it: simple and under the ISC license, it protects your machine's or a lab network's DNS queries with no effort.
