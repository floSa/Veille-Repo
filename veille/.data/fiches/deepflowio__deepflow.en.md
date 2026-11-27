# deepflowio/deepflow

> Zero-instrumentation observability via eBPF for cloud-native and AI applications, with traces, metrics and profiling.

## The problem
Instrumenting every service to get traces and metrics is heavy, and leaves blind spots (gateways, databases, DNS).

## What it actually does
An agent on each node collects flows, L7 protocols, distributed traces and profiles (CPU, memory, GPU) via eBPF and packet capture. A server in the cluster manages the agents, injects labels (SmartEncoding), ingests the data into ClickHouse and exposes SQL, PromQL and interfaces compatible with Prometheus, OpenTelemetry, SkyWalking and Pyroscope. Three editions: Community, Enterprise, Cloud (beta).

## How it is wired
```mermaid
flowchart LR
  A["trident.rs agent"] --> B["ebpf_dispatcher.rs"]
  B --> C["flow_map.rs"]
  C --> D["protocol_logs.rs"]
  D --> E["ingester.go"]
  E --> F["ClickHouse"]
  F --> G["query.go"]
```

## Trying it
No command documented in the provided README: it points to the documentation for installation and to a page for building `deepflow-agent`.

## Cost and gotchas
Community edition is free; Enterprise and Cloud are commercial offerings. The agent runs on Linux nodes (eBPF) and the server requires a Kubernetes cluster.

## What it is not
Not a model monitoring tool: it observes the network and services, not the quality of predictions.

## Alternatives
- Prometheus, OpenTelemetry, SkyWalking, Pyroscope: ecosystems it integrates with.

## For you
Worth watching: interesting for diagnosing the latency of inference services without touching the code, provided you have command of the kernel and the cluster.
