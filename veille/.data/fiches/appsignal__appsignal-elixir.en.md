# appsignal/appsignal-elixir

> Elixir client for the AppSignal service: error and performance tracking for Elixir applications.

## The problem
Spotting errors and slowness in an Elixir or Phoenix application in production.

## What it actually does
Automatically instruments requests, reports exceptions and performance problems to AppSignal. Integrations for Plug and Phoenix, custom instrumentation possible. The README mostly describes development: ExUnit tests, AddressSanitizer for the NIF, benchmarks with benchee.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
  APP["Application Elixir"] --> LIB["appsignal-elixir"]
  LIB --> NIF["NIF natif"]
  NIF --> API["AppSignal.com"]
```

## Trying it
```bash
mono bootstrap
mix test
```
User-side installation: guide at docs.appsignal.com.

## Cost and gotchas
An AppSignal account and a push key are required; the service is paid beyond a free tier (not specified in the README). Data goes to AppSignal.

## What it is not
Not a standalone monitoring tool: without the AppSignal service, it is useless. The README does not document installation.

## Alternatives
No alternative named in the README.

## For you
Ignore: a client for a SaaS for Elixir, outside your usual data, AI or MLOps stack.
