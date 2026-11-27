# pinpoint-apm/pinpoint

> APM tool for distributed Java, PHP and Python systems, which traces transactions without modifying the code.

## The problem
In a distributed architecture, the path of a transaction remains a black box: you can see neither the bottlenecks nor the failures.

## What it actually does
Agents trace transactions between components and provide a topology map (ServerMap), an active threads chart, a request/response scatter plot, code-level call stacks, an inspector (CPU, memory, JVM) and error analysis. Agents are installed without changing the code, with a stated overhead of about 3% of resources. Version 4.0.0 was released on October 28, 2026.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
  app["Application Java, PHP ou Python"] --> ag["Agent"]
  ag --> co["Collecteur"]
  co --> st["Stockage HBase ou Pinot"]
  st --> web["Interface web"]
```

No diagram provided. The README lists agent, collector, web and batch with compatibility tables for Java, HBase and Pinot. Not documented in detail.

## Trying it
No command in the README: it points to the quick start guide, the installation guide and the Kubernetes repository. Not documented here.

## Cost and gotchas
Free, but the infrastructure (collector, HBase, Pinot) is on you. The version compatibility tables are strict: a 4.0 agent requires a 4.0 collector.

## What it is not
Not an ML model monitoring tool: it is application APM. Not light to deploy.

## Alternatives
No alternative named in the README (it cites Dapper as inspiration).

## For you
Worth watching: relevant for tracing Java services in production, but the deployment is heavy for lightweight MLOps use.
