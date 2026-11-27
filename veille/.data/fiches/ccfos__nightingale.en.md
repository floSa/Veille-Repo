# ccfos/nightingale

> Open source alerting platform that plugs into your existing data sources.

## The problem
Grafana emphasizes visualization; a dedicated engine for generating, processing and distributing
alerts is missing.

## What it actually does
Nightingale connects to existing sources (Prometheus, VictoriaMetrics, ElasticSearch, Loki,
ClickHouse, MySQL, Postgres) and applies alert rules, silence rules, subscriptions and notification
rules to them, with 20 built-in media and customizable message templates. It offers event pipelines
to enrich or relabel alarms, business groups with permissions, script-based auto-remediation,
archiving and multidimensional statistics of historical alarms, and a distributed alerting mode
(`n9e-edge`) for poorly connected data centers. The process exposes a built-in MCP server on `/mcp`:
74 tools (42 read, 32 write) across 13 toolsets, read-only by default.

## How it is wired
```mermaid
flowchart LR
  categraf[Categraf] --> n9e[processus n9e]
  tsdb[(VictoriaMetrics / ES / Loki)] --> n9e
  n9e --> rules[règles d'alerte et de silence]
  rules --> pipe[event pipelines]
  pipe --> notify[20 médias de notification]
  n9e --> mcp[/mcp MCP + /a2a]
  edge[n9e-edge] --> rules
```

## Trying it
```toml
[HTTP.A2A]
# DisableMCP = true
# MCPToolsets = ["alerts", "dashboards"]
# MCPEnableWriteTools = true
```
```json
{
  "mcpServers": {
    "nightingale": {
      "type": "http",
      "url": "http://127.0.0.1:17000/mcp",
      "headers": { "X-User-Token": "<your-token>" }
    }
  }
}
```

## Cost and gotchas
Free. Nightingale does not collect metrics: you need a collector (Categraf recommended) and a
time-series database. The `/mcp` endpoint is enabled by default and reuses `[HTTP.TokenAuth]`, which
you must therefore keep enabled; write tools require an explicit opt-in in the configuration.

## What it is not
The README says it frankly: it is not an on-call product. No team schedule management, no
escalation, no collaborative handling or multi-system consolidation — for that it points to
PagerDuty or FlashDuty. And if you are comfortable with Grafana, it recommends keeping Grafana for
visualization.

## Alternatives
- PagerDuty, FlashDuty: for on-call, escalation and collaborative response.
- Grafana: for visualization, more mature in that area.
- `n9e-mcp-server`: standalone MCP server against a remote Nightingale.

## For you
The built-in MCP is the interesting angle: driving the alert rules of your pipelines from an agent,
with the RBAC permissions of the token holder applied as is.
