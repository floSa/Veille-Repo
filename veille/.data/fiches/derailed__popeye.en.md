# derailed/popeye

> Read-only linter that inspects a live Kubernetes cluster and flags misconfigurations.

## The problem
On a growing cluster, nobody spots orphaned resources, missing probes, `latest` images or badly tuned limits.

## What it actually does
Queries the Kubernetes API, loads resources into an in-memory database, applies per-type linters (Node, Pod, Service, Secret, ConfigMap, RBAC, HPA, Gateway API…) and produces a report scored from 0 to 100. Formats: standard, YAML, JSON, HTML, JUnit, Prometheus, score. A "spinach" file sets thresholds and exclusions. Can push metrics to a Pushgateway and run as a CronJob.

## How it is wired
```mermaid
flowchart LR
  A["main.go"] --> B["root.go"]
  B --> C["popeye.go"]
  C --> D["loader.go / db.go"]
  D --> E["pod.go linters"]
  E --> F["collector.go"]
  F --> G["builder.go / writer.go"]
```

## Trying it
```bash
brew install derailed/popeye/popeye
popeye
popeye -n fred
popeye -A
popeye -f spinach.yaml
popeye -o html --save
```

## Cost and gotchas
Free. Needs `get/list` rights on many resources (ClusterRole provided). Without metrics-server, no over/under-allocation analysis. Exits with an error when it finds problems: use `--force-exit-zero` in a CronJob.

## What it is not
Not a scanner of manifests on disk, nor a tool that fixes things. The README calls itself "brittle" and more reliable up to Kubernetes 1.25; the license is ambiguous (the catalog does not identify it, the README says Apache v2).

## Alternatives
No alternative cited in the README.

## For you
Worth watching: useful for auditing a cluster that hosts your ML services, but last push in December 2025 and license to be confirmed.
