# elanthia-online/scripts

> Collaborative repository of scripts for Lich, published automatically on every merge to master.

## The problem
Community Lich scripts are scattered, with no shared publication.

## What it actually does
Centralizes scripts: on every merge to `master`, a build publishes the modified scripts under the author `elanthia-online` with the `util/repo` tool. To contribute, move the file into `scripts/` and hard-link it to the Lich folder.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.

```mermaid
flowchart LR
  Dev[Contributeur] --> PR[PR vers master]
  PR --> Scripts[scripts/]
  Scripts --> Build[Travis-CI]
  Build --> Repo[util/repo]
  Repo --> Lich[Scripts Lich publiés]
```

## Trying it
```bash
ln scripts/<fichier> <dossier-scripts-lich>/
```

## Cost and gotchas
Free. The README mentions Travis-CI. License not declared. Without knowledge of Lich, the content is opaque.

## What it is not
Not a standalone tool: these are scripts for Lich.

## Alternatives
No alternative named in the README.

## For you
Ignore: scripts for a game tool (Lich), unrelated to your work.
