# ublue-os/bazzite

> Fedora Atomic image geared towards gaming, for PC, handheld consoles and the Steam Deck.

## The problem
SteamOS has old packages and no real package manager; you want an up-to-date atomic base for gaming.

## What it actually does
System image built on ublue-os/main: OGC kernel, HDR/VRR, drivers (xone, DisplayLink, OpenRazer), Distrobox, Waydroid, system and Flatpak updates, rollback through rpm-ostree. Desktop, Steam Deck/HTPC variants, KDE or GNOME, with or without NVIDIA. Images signed with cosign.

## How it is wired
```mermaid
flowchart LR
  F["Fedora Atomic OS"] --> R["RPM-OSTree System"]
  R --> K["Custom Bazzite Kernel"]
  K --> D["KDE Plasma / GNOME"]
  D --> G["Gamescope Session"]
  G --> S["Steam Integration"]
```

## Trying it
```bash
rpm-ostree rebase ostree-unverified-registry:ghcr.io/ublue-os/bazzite:stable
```
NVIDIA variant: `bazzite-nvidia` image. The README also points to the ISOs on the website.

## Cost and gotchas
Free. Secure Boot: a key must be enrolled, password `universalblue`. Do not enable Secure Boot on a Steam Deck without knowing what you are doing. Rebooting into a separate image still has to be managed.

## What it is not
Not a server- or MLOps-oriented distribution: everything is geared towards gaming.

## Alternatives
No alternative named in the README (SteamOS is mentioned as a point of comparison).

## For you
Ignore: designed for gaming; for compute GPUs, a leaner server base is a better fit.
