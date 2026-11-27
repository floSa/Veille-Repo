# icloud-photos-downloader/icloud_photos_downloader

> Command-line tool that downloads your iCloud photo library to local disk.

## The problem
Getting your photos out of iCloud and keeping them in sync without going through the Apple app.

## What it actually does
`icloudpd` authenticates (with 2FA), lists the libraries, downloads photos with deduplication, and handles Live Photos and RAW. Three modes: copy, synchronization (local deletion if deleted on iCloud) and move (deletion on iCloud). Can run continuously and update EXIF dates.

## How it is wired
```mermaid
flowchart LR
  U[Utilisateur] --> CLI[cli.py + config.py]
  CLI --> AU[authentication.py]
  AU --> IC[iCloud : base.py + session.py]
  IC --> PH[photos.py]
  PH --> DL[download.py]
  DL --> FS[Fichiers locaux]
```

## Trying it
```bash
icloudpd --directory /data --username my@email.address --watch-with-interval 3600
icloudpd --username my@email.address --password my_password --auth-only
```

## Cost and gotchas
Free. iCloud prerequisites: enable web access to data and disable Advanced Data Protection. The sync and move modes delete files.

## What it is not
The repository is looking for a maintainer (notice at the top of the README). Depends on Apple's servers, which may return ACCESS_DENIED.

## Alternatives
- No alternative named in the README.

## For you
Worth watching: handy for backing up photos or building an image dataset, but the need for a maintainer and the dependence on Apple make the future uncertain.
