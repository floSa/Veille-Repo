# sigstore/root-signing

> TUF repository that securely distributes Sigstore's root of trust to clients.

## The problem
Sigstore clients must obtain `trusted_root.json` without being fooled by a substitution.

## What it actually does
Maintains the TUF repository published at tuf-repo-cdn.sigstore.dev. Changes require signatures from key holders (signing events via pull request) and online signatures with KMS keys, at least every three days. A staging deployment is tested with cosign before production.

## How it is wired
```mermaid
graph LR
  A[branche sign/*] --> B[signing-event]
  B --> C[online-sign]
  C --> D[publish préproduction]
  D --> E[tests clients]
  E --> F[tuf-repo-cdn.sigstore.dev]
```

## Trying it
No documented command: the README points to the manuals (signer, maintainer, infrastructure).

## Cost and gotchas
Reserved for key holders to sign. End user: nothing to do, the Sigstore client consumes the repository.

## What it is not
Not a tool to install nor a library: a trust infrastructure. The staging repository is separate.

## Alternatives
No alternative named in the README.

## For you
Watch: worth understanding if you sign artifacts or models with cosign, with nothing to deploy.
