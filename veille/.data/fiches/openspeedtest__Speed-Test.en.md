# openspeedtest/Speed-Test

> **A self-hosted HTML5 speed test, to measure your own network from a browser.**

## The problem

Public speed-test sites measure the path to somebody else's infrastructure, not to your office,
your NAS or your cloud server. The README builds its case around exactly that: picking between
two ISPs, tracking down a wrong VLAN ID or a faulty switch, deciding where to put a repeater —
all of these need a test run against your own infrastructure.

## What it actually does

Download, upload and latency tests written in vanilla JavaScript with no third-party framework
or library, served as static files. It only uses built-in browser APIs (`XMLHttpRequest`, HTML,
CSS, JS, SVG); the UI is SVG and the script is stated to be under 8 kB gzipped. Behaviour is
driven by URL parameters: continuous testing (`Stress`, with presets `Low` to `Year` or a raw
number of seconds), auto-start (`Run`), number of parallel HTTP connections (`XHR`, from 1 up to
32), target server (`Host`), a single test at a time (`Test=Upload`), ping sample count
(`Ping`), ping timeout (`Out`) and the overhead compensation factor (`Clean`, 0 to 4 %,
defaulting to 4 %). Editing `Index.html` enables posting results to a database (`saveData`,
`saveDataURL`) and declares a server list (`openSpeedTestServerList`) from which the app picks
the lowest-latency one.

## How it is wired

```mermaid
graph LR
  A[Browser IE10+] --> B[Index.html + vanilla JS]
  B --> C[XMLHttpRequest]
  C --> D[Static web server<br/>NGINX / Apache / IIS / Express]
  D --> E[/downloading]
  D --> F[/upload]
  B --> G[SVG UI]
  B --> H[saveDataURL<br/>optional external database]
```

No code-derived diagram exists for this repository; the graph above is reconstructed from the
README. Server-side requirements are explicit: accept `GET`, `POST`, `HEAD` and `OPTIONS` with
`200 OK`, accept `POST` to static files, `client_max_body_size` of 35 megabytes or more, timeout
over 60 seconds. HTTP/1.1 is recommended for maximum throughput, and the README points to its
own NGINX configuration repository.

## Trying it

```bash
sudo docker run --restart=unless-stopped --name openspeedtest -d -p 3000:3000 -p 3001:3001 openspeedtest/latest
```

Then browse `http://YOUR-SERVER-IP:3000` for HTTP or `https://YOUR-SERVER-IP:3001` for HTTPS.
With automatic Let's Encrypt certificates:

```bash
docker run -e ENABLE_LETSENCRYPT=True -e DOMAIN_NAME=speedtest.yourdomain.com -e USER_EMAIL=you@yourdomain.pro --restart=unless-stopped --name openspeedtest -d -p 80:3000 -p 443:3001 openspeedtest/latest
```

Equivalent `docker-compose.yml` files are given in the README, along with mounting your own
certificate via `-v /${PATH-TO-YOUR-OWN-SSL-CERTIFICATE}:/etc/ssl/` (files renamed `nginx.crt`
and `nginx.key`).

## Cost and gotchas

Free, MIT licensed, no account and no API key. The gotchas are operational and the README names
them: behind a reverse proxy you must raise the post-body content length to 35 megabytes; the
Docker image performs poorly on macOS and Windows (Docker support there being for development
only, per the README) and NGINX on Windows uses a single worker regardless of configuration.
Automatic Let's Encrypt needs a public IPv4 and/or IPv6 address, a domain name resolving to the
server and an email address. Measurements also carry a 4 % overhead compensation factor by
default, which the author himself places within the margin of error.

## What it is not

It is not a link-quality measurement: no packet loss — the author points to a separate project,
OpenPacketLoss, for that. It is not monitoring: no collection, history or dashboard is provided,
and saving results amounts to posting to a URL you have to implement yourself. It is not an
absolute reference either: this is a browser test, sensitive to installed extensions and to
private vs normal windows — something the README turns into a feature, using the tool to gauge
extension impact.

## Alternatives

No comparable alternative in the catalogue: the suggested neighbours (juliangarnier/anime,
tabler/tabler-icons, Asabeneh's 30-Days-Of-React and 30-Days-Of-JavaScript courses) share the
JavaScript language but none measures a network. The only related repositories named in the
README are the author's own — openspeedtest/Nginx-Configuration for server configuration and
openpacketloss for packet loss — which complement the tool rather than replace it.

## Why it matters to you

A peripheral but real use for a data/MLOps profile: drop a speed test into a home lab, a cluster
or a VPC to qualify the link before blaming a slow data pipeline, without exposing anything
outside. One `docker run` and the commitment is nil. Do not mistake it for network telemetry:
if you need continuous observability, look elsewhere.
