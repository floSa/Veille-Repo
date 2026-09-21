# Azure/azure-sdk-for-python

> **The development monorepo for Azure's Python client libraries, one library per service.**

## The problem

Talking to an Azure service from Python without a client library means writing authentication,
token handling, retries, pagination, timeouts and distributed tracing yourself, service by
service, each with its own REST API and its own error codes.

## What it actually does

This is the **development** repository for the SDKs, not a package to install: the README sends
consumers to the public developer docs and the published packages instead.

Under `/sdk` it hosts one separate library per Azure service, each with its own `README.md` (or
`README.rst`) in its project folder. You install the library for the service you need rather than
one large `azure` package.

The new-wave client libraries share a common core, `azure-core`: retries, logging, transport
protocols, authentication protocols. The newer management libraries add the Azure Identity
library, an HTTP pipeline with custom policies, error handling and distributed tracing.

The README splits packages into four families: client new releases (GA and preview), client
previous versions, management new releases, management previous versions. Management packages are
recognisable by their `azure-mgmt-` namespace, for example `azure-mgmt-compute`. Previous versions
cover more services but do not necessarily follow the design guidelines.

## How it is wired

No code-derived diagram exists for this repository; the graph below is rebuilt from the README
alone, using the names it cites.

```mermaid
graph LR
  A[your Python code] --> B[service library<br/>e.g. azure-storage-blob]
  A --> C[azure-mgmt-*<br/>management libraries]
  A --> D[azure.identity<br/>ManagedIdentityCredential]
  B --> E[azure-core<br/>retries · logging · transport · auth]
  C --> E
  D --> E
  E --> F[HTTP pipeline<br/>custom policies<br/>UserAgentPolicy]
  F --> G[Azure services<br/>*.blob.core.windows.net]
  H[/sdk folder in the repo<br/>one README per library] -.source.-> B
  H -.source.-> C
```

## Trying it

The README **documents no install or run command**: it states that each service has its own set of
libraries and points to the `README.md` inside the relevant library folder under `/sdk`. Nothing is
reconstructed here. Its only code is the Python telemetry opt-out sample, which incidentally shows
the shape of a client:

```bash
# This repository's README gives no installation command.
# It points to each library's own README, in its folder under /sdk.
# Python excerpt from the README (turning telemetry off):
#   from azure.identity import ManagedIdentityCredential
#   from azure.storage.blob import BlobServiceClient
#   from azure.core.pipeline.policies import UserAgentPolicy
#   class NoUserAgentPolicy(UserAgentPolicy):
#       def on_request(self, request): pass
#   blob_service_client = BlobServiceClient(
#       account_url, credential=mi_credential,
#       user_agent_policy=NoUserAgentPolicy())
```

## Cost and gotchas

- **Telemetry is on by default.** The README says plainly that the software may collect information
  about you and your use of it and send it to Microsoft. Opting out is not a global switch: you
  define a `NoUserAgentPolicy` subclass of `UserAgentPolicy` and pass it as `user_agent_policy=`
  **when constructing every new client**. One forgotten client reopens the channel.
- **An Azure account and subscription are required**: the libraries consume existing resources
  ("upload a blob") or provision them; the bill is Azure's, not the SDK's. Credentials are needed
  too — the README shows `ManagedIdentityCredential`.
- **Python versions**: several are supported, but under a dedicated support policy
  (`doc/python_version_support_policy.md`) worth checking before freezing an environment.
- **Previews**: the README warns twice that production code should use a stable, non-preview
  library.
- **Management library migration**: authentication breaks after upgrading if the auth code is not
  updated; a migration guide is referenced (`doc/sphinx/mgmt_quickstart.rst`).
- **Contributing requires a Microsoft CLA** (cla.microsoft.com), enforced by a bot on each pull
  request.

## What it is not

- **It is not a package.** You do not install "the Azure SDK for Python": this repo is the
  workshop, and the README redirects users to the published packages and docs. The 5,600 stars sit
  on a monorepo, not on a library.
- **It is not a multi-cloud abstraction**: everything is Azure-specific, and code written against
  these libraries does not move elsewhere.
- **It is not uniform**: the "previous versions" cover more services but follow neither the design
  guidelines nor the same feature set as the new ones. Depending on the service, the API quality
  differs.

## Alternatives

No comparable alternative in the catalogue: the supplied neighbours (`TheAlgorithms/Python`,
`AtsushiSakai/PythonRobotics`, `Avaiga/taipy`, `oppia/oppia`) are teaching, robotics, data-UI and
education projects, unrelated to a cloud provider's client libraries. The only useful comparison is
internal to the README: **client** libraries (consume a resource, e.g. upload a blob) versus
**management** `azure-mgmt-*` libraries (provision and administer it) — and, per service, the newer
guideline-following release versus the wider-coverage previous version.

## For you

If any part of your data or MLOps stack sits on Azure, this is a mandatory dependency, and the right
reflex is to install the library for the target service, following its README under `/sdk`, rather
than a blanket package. The thing to handle on your first client: telemetry is on by default and must
be disabled client by client if your policy demands it. Otherwise, skip it — nothing here is useful
off Azure.
