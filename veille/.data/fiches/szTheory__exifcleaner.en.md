# szTheory/exifcleaner

> Desktop application that removes metadata from images, media and PDFs, for anyone publishing files.

## The problem
Published photos and documents embed GPS, device and author data: a privacy leak.

## What it actually does
Drag and drop files or folders, batch processing through ExifTool's `-stay_open` protocol. Options: keep orientation, save as a copy, remove macOS xattrs, keep timestamps. Before/after metadata preview. No telemetry or automatic updates. Electron, React 19, TypeScript.

## How it is wired
```mermaid
graph LR
  UI[Interface React] --> IPC[IPC validé]
  IPC --> Adapter[Adaptateur ExifTool]
  Adapter --> ExifTool[ExifTool stay-open]
  ExifTool --> Fichiers
```

## Trying it
```bash
git clone https://github.com/szTheory/exifcleaner.git
cd exifcleaner
yarn install
yarn dev
yarn test
```

## Cost and gotchas
Free. Unsigned binaries: macOS or Windows warning on first launch, SHA-256 checksums published. Backing up the originals is advised.

## What it is not
Not a guarantee of erasure: PDF (metadata recoverable), TIFF and AVIF partial, MKV refused, RAF refused.

## Alternatives
The README only names ExifTool, which it depends on.

## For you
Worth watching: handy before sharing image or document datasets, but per-format limits need checking.
