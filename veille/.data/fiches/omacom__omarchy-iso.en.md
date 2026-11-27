# omacom/omarchy-iso

> Builds the installation ISO of Omarchy, a preconfigured Arch Linux distribution, for maintainers and testers.

## The problem
Installing Omarchy cleanly, even without a keyboard, requires an image that bundles the configurator, base system and offline packages.

## What it actually does
Writes a compressed btrfs root image with `zstdcat | dd`, installs machine-specific packages from an embedded mirror and creates the user. Supports automatic installation via a `cidata` disk, nightly VM images, x86 and aarch64, checksum and signature verification. Many test scenarios (acceptance, integration, update) run on QEMU.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart LR
  M["bin/omarchy-iso-make"] --> I["ISO"]
  I --> T["bin/omarchy-iso-test"]
  T --> S["bin/omarchy-iso-sign"]
  S --> U["bin/omarchy-iso-upload"]
  I --> V["images VM (nightly)"]
```

## Trying it
```bash
./bin/omarchy-iso-make
./bin/omarchy-iso-boot release/omarchy.iso
./test/all
```

## Cost and gotchas
Linux machine with QEMU for tests; signing requires 1Password CLI and upload requires rclone. The VM image is 4 to 5 GB.

## What it is not
It is not the Omarchy environment itself: that lives in another repository. The README is mainly aimed at maintainers; user installation is in the manual.

## Alternatives
No alternative named in the README.

## For you
Ignore: tooling for a Linux distribution, unrelated to data, AI or MLOps.
