# Mortennn/Dozer

> **A small macOS app that folds away the clutter of menu bar icons.**

## The problem

On a Mac, every background application drops an icon into the menu bar, and the row eventually
overflows — faster still on a laptop whose notch eats the space. macOS offers nothing to hide
part of it: you either keep everything in sight, or uninstall.

## What it actually does

Dozer adds two, optionally three, black icons to the menu bar, numbered from right to left.
The first is just a point of interaction, placed wherever you like. Everything to the left of
the second one is hidden or shown by left-clicking any Dozer icon. An optional third icon, the
"remove" one, defines a second group revealed by option-clicking instead.

Sorting is therefore manual: you drag the other applications' icons to either side of the
Dozer separators, holding command (`⌘`) while dragging. Right-clicking a Dozer icon opens the
settings. The README documents nothing further — no list of options, no keyboard shortcuts, no
configuration format.

## How it is wired

```mermaid
graph LR
  A[macOS menu bar<br/>background app icons] --> B[Dozer icon 1<br/>interaction point]
  A --> C[Dozer icon 2<br/>hidden-group separator]
  A --> D[Dozer icon 3 optional<br/>"remove", second group]
  E[drag + ⌘] --> A
  B -->|left-click| F[group 1 hidden / shown]
  B -->|option-click| G[group 2 shown]
  B -->|right-click| H[settings window]
  C --> F
  D --> G
```

No code-derived diagram exists for this repository: the graph above is reconstructed from the
README alone, which names no source file. It describes the interaction model, not the app's
Swift architecture.

## Trying it

```bash
brew install --cask dozer
```

That is the only command the README gives. The other documented route is not a command at all:
download the latest release, open it and drag the app into the Applications folder.

## Cost and gotchas

- **Free, no account, no key**: the README announces no third-party service, no quota, no
  crippled edition. A "Buy Me A Coffee" link sits at the top, as a donation.
- **macOS only, 10.13+ (High Sierra)**: the badges and the Requirements section state this as
  the sole requirement. Nothing about Apple Silicon or recent macOS releases.
- **MPL-2.0 licence**: file-level copyleft. Harmless for plain use, but worth reading before
  redistributing a modified build.
- **Distributed outside the App Store**: the README mentions neither signing nor notarisation,
  so first launch of a downloaded binary may need a manual step that is not documented.
- **Sorting stays manual**: nothing automates icon placement; you move them one by one.

## What it is not

- **Not a window manager or launcher**: Dozer only touches menu bar icons; it does not arrange
  windows and does not start applications.
- **Not a command-line tool or a library**: nothing to import, nothing to script — the README
  documents no API, no configuration file, no detailed settings.
- **Not a team project**: a single author, a donation link as the business model, and a README
  whose demo animation is commented out "until it is redone".

## Alternatives

- **jordanbaird/Ice** — same job, managing macOS menu bar icons; pick it if you want a more
  recently active project or more settings, with Dozer as the minimal option already installable
  in one Homebrew command.
- **DamascenoRafael/reminders-menubar** — also a macOS menu bar app, but for showing reminders:
  complementary rather than competing.
- The other catalogue neighbours (`darrylmorley/whatcable`, `gouwsxander/Reef`) are not
  comparable.

## For you

Nothing to do with data, AI or MLOps: this is desktop comfort, not a working tool. Worth noting
only if you work on a Mac whose menu bar overflows with Docker, the VPN, GPU indicators and sync
clients — in which case it is one Homebrew command and five minutes of tidying. Otherwise, move
on.
