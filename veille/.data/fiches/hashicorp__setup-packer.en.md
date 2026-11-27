# hashicorp/setup-packer

> GitHub Action that installs the Packer CLI in a workflow.

## The problem
GitHub runners do not always have the right version of Packer.

## What it actually does
Adds the `packer` binary to the PATH, with the `version` input (default `latest`, non-prerelease) and the `version` output. HCP Packer integration via `HCP_CLIENT_ID` and `HCP_CLIENT_SECRET` as secrets.

## How it is wired
```mermaid
flowchart LR
  A[Workflow GitHub] --> B[setup-packer]
  B --> C[packer init]
  C --> D[packer validate]
  D --> E[packer build]
```

## Trying it
```yaml
- uses: hashicorp/setup-packer@main
  with:
    version: "latest"
- run: "packer init ./image.pkr.hcl"
```

## Cost and gotchas
Free; the build may require provider credentials. The README references `@main`, not a pinned version.

## What it is not
Not an image-building tool: it only installs Packer.

## Alternatives
No alternative named in the README.

## For you
Worth watching: useful if you build machine images (GPU AMIs) in CI, otherwise not.
