# kubernetes-sigs/ingress2gateway

> CLI that converts Kubernetes Ingress resources and provider CRDs into Gateway API resources.

## The problem
Migrating from Ingress to Gateway API by hand is slow and error-prone, especially with annotations specific to each controller.

## What it actually does
Reads Ingresses from a cluster or from files, converts them via providers into an intermediate representation, then an emitter (standard by default) produces Gateway and HTTPRoute as YAML, JSON or KYAML. Flags untranslated fields. Documented providers: ingress-nginx, gce, openapi3, among others.

## How it is wired
```mermaid
flowchart LR
  M["main.go"] --> PR["Print command (print.go)"]
  PR --> R["Conversion runner (ingress2gateway.go)"]
  R --> PV["Provider selection (provider.go)"]
  PV --> C["Common conversion (converter.go)"]
  C --> E["Standard emitter (standard.go)"]
  E --> RP["Conversion report (report.go)"]
```

## Trying it
```bash
brew install ingress2gateway
ingress2gateway print --providers=ingress-nginx
```

## Cost and gotchas
Free. Very specific annotations may not be supported; review the output before applying.

## What it is not
Does not copy annotations from Ingress to Gateway API and applies nothing to the cluster: it prints to standard output.

## Alternatives
No alternative named in the README.

## For you
Adopt if you are migrating a cluster that serves models: an official tool from a Kubernetes subproject, simple, to be reviewed before deployment.
