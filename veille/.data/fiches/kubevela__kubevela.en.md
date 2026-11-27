# kubevela/kubevela

> Kubernetes control plane for delivering multi-cluster applications via the OAM model.

## The problem
Deploying across several clusters and clouds with canary and rollback ends up as fragile glue scripts.

## What it actually does
CRDs (`Application`, `ComponentDefinition`, `TraitDefinition`…) reconciled by a controller.
Rendering goes through CUE into concrete manifests, then `resourcekeeper` applies them and tracks the created resources.
Deployment workflows with Helm, Terraform and multi-cluster steps.
Addons to extend the platform; admission webhooks; `vela` CLI.

## How it is wired
```mermaid
flowchart LR
  U[Application CRD] --> WH[Webhooks]
  WH --> AC[App controller]
  AC --> CUE[CUE layer]
  CUE --> WF[Workflow engine]
  WF --> RK[Resource keeper]
  RK --> MC[Multicluster]
```

## Trying it
No command documented in the README (it points to the installation docs).

## Cost and gotchas
A Kubernetes cluster is required. It is advertised as lightweight (one pod, 0.5 CPU / 1 GB).

## What it is not
Not a CI tool: it plugs into an existing CI/CD or GitOps setup.

## Alternatives
No alternative named in the README.

## For you
Ignore, unless you operate a multi-cluster Kubernetes platform yourself: it is platform tooling, too far from day-to-day MLOps.
