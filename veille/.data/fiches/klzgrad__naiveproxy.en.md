# klzgrad/naiveproxy

> Censorship-circumvention proxy that reuses Chromium's network stack to blend in with Chrome traffic.

## The problem
Censors detect proxies through TLS fingerprinting, active probing or packet-length analysis. Home-grown protocols get spotted.

## What it actually does
The Naïve client embeds Chromium's network stack (TLS fingerprint identical to Chrome) and opens HTTP/2 or HTTP/3 CONNECT tunnels. On the server side, a front end such as Caddy (forwardproxy fork) or HAProxy routes based on the authorization header to resist probing. A padding protocol described in the README blurs packet lengths.

## How it is wired
```mermaid
flowchart LR
  A["Navigateur"] --> B["naive client SOCKS5 :1080"]
  B --> C["Censeur"]
  C --> D["Frontal Caddy / HAProxy"]
  D --> E["Naive server forward proxy"]
  E --> F["Internet"]
```

## Trying it
```bash
go install github.com/caddyserver/xcaddy/cmd/xcaddy@latest
~/go/bin/xcaddy build --with github.com/caddyserver/forwardproxy=github.com/klzgrad/forwardproxy@naive
sudo setcap cap_net_bind_service=+ep ./caddy
./caddy start
./naive   # avec config.json : listen socks://127.0.0.1:1080, proxy https://user:pass@example.com
```

## Cost and gotchas
You need a server with a domain name and a TLS certificate. The master branch is rewritten with every Chrome release: follow the stable tags, and stay on the latest version to keep the Chrome signature.

## What it is not
Not a turnkey VPN nor a data tool. The README does not promise invisibility: it speaks of mitigating several attacks.

## Alternatives
- Caddy forwardproxy alone: a proxy without the padding layer.
- v2rayN: graphical integration client cited in the README.

## For you
Watch: outside the data/AI scope, worth keeping only if you have a real network-circumvention need.
