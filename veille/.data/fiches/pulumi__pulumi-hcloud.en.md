# pulumi/pulumi-hcloud

> Pulumi provider to manage Hetzner Cloud resources as code, in several languages.

## The problem
Describing Hetzner Cloud servers in the same programming language as the rest of the infrastructure.

## What it actually does
Exposes Hetzner Cloud resources to Pulumi via Node.js, Python, Go and .NET packages. Configured with an API token (`hcloud:token` or `HCLOUD_TOKEN`), an endpoint and a polling interval (500 ms by default).

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
  A["Programme Pulumi"] --> B["SDK pulumi-hcloud"]
  B --> C["Fournisseur HCloud"]
  C --> D["API Hetzner Cloud"]
```

## Trying it
```bash
npm install @pulumi/hcloud
pip install pulumi-hcloud
go get github.com/pulumi/pulumi-hcloud/sdk
dotnet add package Pulumi.HCloud
```

## Cost and gotchas
Pulumi CLI must be installed first, plus a Hetzner account and API token. Resources created are billed by Hetzner. Increase `pollInterval` if you hit rate limiting.

## What it is not
Not a standalone tool: it only works with the Pulumi CLI. No detailed documentation in the README.

## Alternatives
None named in the README.

## For you
Watch: handy if you host your AI workloads on Hetzner with Pulumi, otherwise of no interest.
