# dotnet/aspnetcore

> Microsoft's cross-platform web framework for cloud applications and APIs on .NET.

## The problem
Build performant and portable web applications and APIs on .NET.

## What it actually does
A web server produces an HTTP context, routed to an endpoint, optionally filtered, and the result is returned. The repository also contains MVC and Razor, Blazor components, Identity, antiforgery, data protection, SignalR, SQL Server and Redis caches, health checks, localization, OpenAPI.

## How it is wired
```mermaid
flowchart LR
  W[Serveur web] --> H[HttpContext]
  H --> R[Endpoint routing]
  R --> F[Endpoint filters]
  F --> M[MVC / Razor / Blazor]
  M --> S[Identity, SignalR, caches]
```

## Trying it
The README points to the "Getting Started" instructions and to nightly builds; no command appears in it. The .NET SDK is enough according to the text ("install the SDK").

## Cost and gotchas
Free. Security bugs are reported privately to MSRC. Nightly builds are unstable by nature.

## What it is not
Not an AI or data framework. Not the .NET runtime (neighboring "Runtime" repository).

## Alternatives
No alternative named in the README.

## For you
Ignore: a .NET ecosystem with no direct relation to data/AI work, except to expose a model through an API on a Microsoft stack.
