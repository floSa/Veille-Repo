# luckyPipewrench/pipelock

> Egress firewall for AI agents that inspects network and MCP traffic and signs its decisions.

## The problem
An agent that holds your API keys and has shell access can exfiltrate them in a single request, or be hijacked by a prompt injection.

## What it actually does
Sits in between as an HTTP, WebSocket, MCP and A2A proxy. Detects secrets (65 patterns), injections, SSRF and tool poisoning, with three modes (strict, balanced, audit). Emits signed receipts verifiable offline, offers a sandbox (Landlock, seccomp) and a kill switch. The core is Apache-2.0; the Pro dashboard and Enterprise fleet are under a paid license.

## How it is wired
```mermaid
flowchart LR
  AG["AI agent"] --> PX["Proxy runtime (server.go)"]
  PX --> SC["Content scanner"]
  PX --> MG["MCP gates (pipeline_gates.go)"]
  PX --> SR["Signed receipts"]
  SR --> FR["Flight recorder"]
  PX --> NET["Internet"]
```

## Trying it
```bash
pipelock init
pipelock check --url "https://evil.com/?k=AKIAIOSFODNN7EXAMPLE"
pipelock demo --receipts-dir ./out
docker pull ghcr.io/luckypipewrench/pipelock:3.5.0
```

## Cost and gotchas
Free core; per-agent features, dashboard and fleet require a license. The README admits that protection depends on blocking direct traffic and that independent verification of the anchors remains to be proven.

## What it is not
Not a guarantee of total security: traffic outside the proxy escapes control. The benchmark figures come from the author.

## Alternatives
agent-scan (scanner), srt (sandbox), agentsh (kernel agent), compared in the README.

## For you
Worth watching: very relevant if you let agents run with secrets; a recent project from a single maintainer, test in audit mode first.
