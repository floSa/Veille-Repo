# TwiN/gatus

> Self-hosted health dashboard that probes your services and alerts, for developers and small teams.

## The problem
Metrics only surface an incident if there is traffic: if nobody calls the endpoint, nothing triggers.
As a result, it is your customers who tell you the load balancer is down.

## What it actually does
Queries endpoints over HTTP, ICMP, TCP, DNS or SSH at a chosen interval, and evaluates conditions on the result.
Conditions cover `[STATUS]`, `[RESPONSE_TIME]`, `[BODY]` with a JSON path or pattern, the IP, certificate expiry.
External endpoints are pushed by you (`gatus-cli external-endpoint push` or `POST /api/v1/endpoints/{key}/external`), with an optional heartbeat.
Suites (ALPHA) chain endpoints with a shared context: `store` captures a value, `[CONTEXT].itemId` reuses it.

## How it is wired
```mermaid
flowchart TD
  A[config/config.yaml ou GATUS_CONFIG_PATH] --> B[endpoints + conditions]
  B --> C[sondes HTTP/ICMP/TCP/DNS/SSH]
  C --> D[évaluation des conditions]
  D --> E[alerting Slack/PagerDuty/Discord…]
  D --> F[dashboard + badges]
  D --> G[/metrics Prometheus]
  H[external-endpoints token] --> D
  I[suites contexte partagé] --> C
```

## Trying it
```console
docker run -p 8080:8080 --name gatus ghcr.io/twin/gatus:stable
docker run -p 8080:8080 --name gatus twinproduction/gatus:stable
gatus-cli external-endpoint push --url https://status.example.org --key "core_ext-ep-test" --token "potato" --success
```

## Cost and gotchas
Free, one container is enough. Configuration is in YAML, mergeable by directory — but a primitive value can only be defined once, otherwise there is a conflict.
A `$` in a value must be written `$$`. `concurrency` defaults to 3, which serializes probes if you have many.

## What it is not
Not a metrics system: it exposes `/metrics` but replaces neither Prometheus nor Alertmanager, it covers their blind spot.
Not a full acceptance-testing tool, even though the README suggests that use through conditions.
Suites are in ALPHA and suite-level alerts are not yet supported.

## Alternatives
- Prometheus Alertmanager, CloudWatch, Splunk: cited as the point of comparison, blind when there is no traffic.
- Gatus.io: the same author's managed offering, if you don't want to host.

## For you
The right reflex for monitoring your inference endpoints and webhooks: readable conditions, a single container.
