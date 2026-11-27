# conversun/fnos-apps

> Repository that repackages self-hosted applications as .fpk packages for the fnOS NAS, for users of that NAS.

## The problem
Installing common NAS applications (media, DNS, monitoring) on fnOS requires packaging them by hand and tracking their versions.

## What it actually does
The repository tracks upstream versions, builds `.fpk` files with a shared packager and publishes them in GitHub releases. About 150 applications are listed, including a few AI ones (Ollama, Open WebUI, LocalAI, LibreChat, MaxKB). It does not modify the logic of the original applications. Manual installation from the fnOS app center.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
    A["Version amont"] --> B["resolve-release-tag.sh"]
    B --> C["build-apps.yml"]
    C --> D["build-fpk.sh"]
    D --> E["Release .fpk"]
    E --> F["Centre d'applications fnOS"]
```

## Trying it
```bash
cd apps/plex && ./update_plex.sh
./scripts/new-app.sh jellyfin "Jellyfin" 8097
```

## Cost and gotchas
Free, but you need to own an fnOS NAS. Some applications advertise default accounts (admin/admin) that must be changed. The packages are third-party repackages, not official builds.

## What it is not
Not a data or AI tool: it is a catalog of NAS packages. Unusable outside fnOS. The AI applications listed are just packages of existing tools.

## Alternatives
No alternative named in the README.

## For you
Ignore unless you have an fnOS NAS: it is packaging of third-party applications, with no value for a data / AI / MLOps profile.
