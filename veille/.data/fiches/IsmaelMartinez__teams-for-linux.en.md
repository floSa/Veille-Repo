# IsmaelMartinez/teams-for-linux

> Unofficial Microsoft Teams client for Linux, an Electron wrapper around the web version.

## The problem
There is no maintained official Teams client on Linux, with built-in notifications and tray icon.

## What it actually does
An Electron application that loads Teams web and adds system notifications, a tray icon, custom backgrounds and themes, screen sharing, multiple profiles. Main-process modules: configuration, connection manager, certificates, custom CSS, spell checker, optional Intune, menus. Packages: AppImage, deb, rpm, snap, tar.gz.

## How it is wired
```mermaid
flowchart LR
  A["index.js (processus principal)"] --> B["appConfiguration / config"]
  A --> C["connectionManager"]
  A --> D["browserWindowManager"]
  D --> E["Fenêtre Teams (preload.js)"]
  E --> F["teams.microsoft.com"]
  A --> G["menus / tray"]
```

## Trying it
```bash
teams-for-linux
# configuration facultative : ~/.config/teams-for-linux/config.json
```

## Cost and gotchas
Free; a Microsoft Teams account is required. The README states that `contextIsolation` and Electron's sandbox are disabled to access Teams' DOM, and recommends a system sandbox (Flatpak, Snap, Firejail, AppArmor).

## What it is not
An independent project, not affiliated with Microsoft; some features are limited by the Teams web application.

## Alternatives
No alternative named in the README.

## For you
Ignore on the data/AI side: useful only if you are on Linux and forced to use Teams, with a weakened security setting to compensate for.
