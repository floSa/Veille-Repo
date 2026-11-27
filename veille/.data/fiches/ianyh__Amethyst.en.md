# ianyh/Amethyst

> Tiling window manager for macOS, in the spirit of xmonad, for keyboard-shortcut users.

## The problem
On macOS, arranging and resizing windows is done with the mouse, which costs time.

## What it actually does
It automatically arranges windows according to layouts (Tall, Wide, Column, Row, Fullscreen, BSP, three columns, Floating, custom ones in JavaScript, beta), driven from the keyboard with two configurable modifier combinations. Configuration is by YAML in the home folder, which takes precedence over the interface. It relies on macOS accessibility APIs.

## How it is wired
```mermaid
flowchart LR
  HK[Hotkey Manager] --> WM[Window Manager]
  APP[Application Events] --> WM
  WM --> SM[Screen Manager]
  SM --> LAY[Layout Engine]
  LAY --> RF[Reflow Operation]
  RF --> AX[Accessibility APIs]
```

## Trying it
```bash
brew install --cask amethyst
defaults write com.apple.dock workspaces-auto-swoosh -bool NO
killall Dock
```

## Cost and gotchas
macOS 10.15+, accessibility permission required. Automatic rearranging of Spaces must be disabled. 294 open issues.

## What it is not
It is not a manager for Windows or Linux. It is not a development tool.

## Alternatives
xmonad is cited as an inspiration; no other alternative named.

## For you
Ignore for professional watch: personal comfort on macOS, unrelated to data, AI or MLOps.
