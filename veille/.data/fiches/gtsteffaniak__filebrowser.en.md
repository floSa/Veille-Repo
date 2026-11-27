# gtsteffaniak/filebrowser

> Self-hosted web file manager, extended fork of filebrowser, a single binary.

## The problem
Sharing and browsing files on a remote server without setting up a full Nextcloud leaves few options with serious authentication and usable search.

## What it actually does
Multiple sources with include and exclude rules, configured in a `config.yaml`.
Authentication via OIDC, LDAP, JWT, password with 2FA, or proxy.
Real-time indexed search, with filters on file and folder sizes, updated live.
Thumbnails for office documents, video, album covers and 3D models; WebDAV; configurable shares with expiration and permissions; long-lived API tokens and a Swagger page.

## How it is wired
```mermaid
flowchart LR
    A[config.yaml] --> B[serveur FileBrowser Quantum]
    C[sources multiples] --> B
    B --> D[index de recherche]
    B --> E[auth OIDC/LDAP/JWT/2FA]
    B --> F[UI trois composants]
    B --> G[WebDAV]
    B --> H[/swagger API]
```

## Trying it
No command is documented in the README: it points to the Getting Started Docs.

## Cost and gotchas
Free. 180 MB Docker image with ffmpeg, 512 MB of memory minimum announced — noticeably more than the original filebrowser (31 MB, 128 MB). No S3 or FTP support.

## What it is not
Not the original filebrowser project: it is a massive fork, and shell command execution has been removed entirely, permanently. Not yet stabilized: v2.0.0 is in beta and the README talks about "growing pains". The comparison table marks about ten features as in progress (quotas, trash, notifications, conversions).

## Alternatives
The original filebrowser (lighter), Filestash (S3, FTP, content search), Nextcloud — the columns of the README's comparison table.

## For you
Useful as web access to a dataset storage; the single maintainer and beta status suggest not making it a critical point.
