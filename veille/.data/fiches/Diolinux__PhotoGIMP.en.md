# Diolinux/PhotoGIMP

> Configuration patch that gives GIMP 3 the look and shortcuts of Photoshop.

## The problem
A user coming from Photoshop loses their bearings in GIMP: tool layout, shortcuts, workspace.

## What it actually does
It is not executable code: the repository replaces GIMP configuration files (`shortcutsrc`, `toolrc`, `sessionrc`, `dockrc`, `gimprc`, `contextrc`, `theme.css`, `templaterc`, splash screen). On Linux, it adds a `.desktop` launcher and icons. The `install.sh` script detects Flatpak or a native install and backs up the existing setup. It requires GIMP 3.0+ launched at least once.

## How it is wired
```mermaid
graph LR
    Z[Archive de release] --> I[install.sh]
    I --> C[.config/GIMP/3.0]
    C --> L[Chargeur de config GIMP]
    C --> K[shortcutsrc + toolrc + sessionrc]
    I --> D[.desktop + icônes]
```

## Trying it
```bash
cd ~/Downloads/PhotoGIMP-linux
chmod +x install.sh
./install.sh
choco install photogimp
```

## Cost and gotchas
Free. It overwrites GIMP's configuration: the README asks for a backup beforehand. Not compatible with GIMP 2.x.

## What it is not
It is not a new version of GIMP nor Photoshop file compatibility: only the look and the shortcuts change.

## Alternatives
The README cites no alternative.

## For you
Ignore: graphical interface customization with no link to data, AI or MLOps.
