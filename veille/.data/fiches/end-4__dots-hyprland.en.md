# end-4/dots-hyprland

> **Configuration files shipping a complete graphical shell on top of the Hyprland Wayland compositor.**

## The problem

Hyprland is a compositor: it places and renders windows, and stops there. Everything else — a
status bar, a launcher, side panels, an overview of open windows, a consistent theme — has to
be assembled from separate components and then maintained. This repository offers that
assembly already done, under a single visual identity ("illogical-impulse").

## What it actually does

The README settles the question itself: "technically, configuration files; realistically,
mostly the custom graphical shell". The current widget system is Quickshell, described as a
QtQuick-based widget system used for the status bar and side panels — hence the QML language
recorded in the catalogue.

The advertised features: an overview showing open apps with live previews; assistant
integration (Gemini, Ollama, "and more"); conveniences listed as screen translation,
anti-flashbang and Google Lens; Material themes derived from the chosen wallpaper; and a
so-called transparent installation, where every command is shown before it is run.

The repository also carries its history: earlier styles (illogical-impulse on AGS, then m3ww,
NovelKnock, Hybrid, Windoes on EWW) are kept in the `ii-ags` and `archive` branches and
declared unsupported.

## How it is wired

```mermaid
graph LR
  A[setup install<br/>ou bash &lt;(curl -s https://ii.clsty.link/get)] --> B[fichiers de configuration<br/>déposés dans le système]
  B --> C[Hyprland<br/>compositeur : place et rend les fenêtres]
  B --> D[Quickshell / QML<br/>barre d'état · panneaux latéraux · vue d'ensemble]
  B --> E[autres dépendances<br/>sdata/deps-info.md]
  F[fond d'écran choisi] --> G[génération de couleurs<br/>thème Material]
  G --> D
  H[Gemini · Ollama] --> D
```

No code-derived diagram exists for this repository: this sketch is rebuilt from the README
alone, which only names `setup`, `sdata/deps-info.md` and the `ii-ags` and `archive` branches.
The point to keep is that Hyprland and Quickshell are third-party projects installed alongside:
this repository provides what configures them and the QML widgets, not the compositor.

## Trying it

```bash
bash <(curl -s https://ii.clsty.link/get)
```

Or, by cloning the repository:

```bash
./setup install
```

The README points to the wiki (`https://ii.clsty.link/en/ii-qs/01setup/`) for installation and
update details. Once in place, two keybinds are given: `Super`+`/` for the keybind list,
`Super`+`Enter` for the terminal.

## Cost and traps

- **A version break announced at the top of the README**: with the Hyprland 0.55 update, if
  your distribution has not shipped it or you are not ready for it, you must switch to the
  "Pre-Hyprland Luaification" release or not update. That is the main trap: this repository
  follows an upstream that breaks.
- **GPL-3.0 licence** (catalogue): copyleft. The README explicitly invites copying, "just
  follow the license".
- **Installation runs a downloaded script**: `bash <(curl …)` from a third-party domain
  (`ii.clsty.link`). The README offsets this by showing every command before running it, but
  the trust is still yours to extend.
- **Dependencies are not listed in the README**: they are deferred to `sdata/deps-info.md`. The
  real install footprint is therefore invisible until you read that file.
- **The AI part is not included**: Gemini needs an API key at your own cost, Ollama needs a
  model running locally. No quota or price is documented here.
- **A one-person repository** (end-4), with contributors thanked by name for the install script
  and the colour generation system. A Discord channel is offered for support, with real issues
  redirected to GitHub.

## What it is not

- **It is not a system setup script.** The README says so explicitly: no graphics drivers, no
  zram setup, etc. You start from an already working system.
- **It is not Hyprland**, nor Quickshell: those are third-party projects linked from the README.
  This repository is what plugs into them.
- **It is not a distribution or a versioned desktop environment**: the earlier styles (AGS, EWW)
  are marked "Unsupported!" and moved to branches. What is supported is the current style, on
  the current widget system.
- **It is not independent from upstream**: a Hyprland version jump forces a user action, as the
  0.55 warning shows.

## Alternatives

The catalogue offers no allowed neighbours for this repository, so no comparison is drawn from
it; the only comparable projects are the ones the README thanks, all collections of
configuration files of the same kind.

| | When to prefer it |
|---|---|
| **caelestia-dots/shell** | Cited among the Quickshell projects end-4 draws on: same widget system, different aesthetic choices and a different maintainer. |
| **Aylur/dotfiles** | Cited for AGS: prefer it if you stay on AGS rather than Quickshell, which this repository moved to. |
| **fufexan/dotfiles** | Cited for EWW: the path to look at if you want a shell built on EWW. |

## For you

Unrelated to data work, applied AI or MLOps: this is Linux desktop tailoring, and should be
judged as such. Worth watching if your daily environment is already Hyprland and you accept
tracking upstream's breaking changes; otherwise walk past, the install and maintenance effort
only pays off on a machine you use every day.
