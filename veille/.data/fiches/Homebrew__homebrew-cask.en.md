# Homebrew/homebrew-cask

> Homebrew extension that installs ready-to-use applications on macOS and Linux with a single command.

## The problem
Installing a macOS application requires downloading a file, opening it and dragging it into Applications, by hand.

## What it actually does
Provides "casks": installation recipes for graphical applications, command-line tools, fonts, plugins and other artifacts distributed by their publishers. The `brew install` command downloads, verifies and places the application, for example in /Applications. New recipes arrive by pull request, not by issue.

## How it is wired
```mermaid
flowchart LR
  U["Utilisateur"] --> B["brew install"]
  B --> C["Recette cask"]
  C --> T["Téléchargement chez l'éditeur"]
  T --> V["Vérification"]
  V --> A["/Applications"]
```

## Trying it
```bash
brew install alfred
brew update-reset && brew update
```

## Cost and gotchas
Free, with Homebrew already installed. In case of a problem, the README asks you to run `brew update-reset && brew update` before any issue, otherwise it may be closed without review. Common errors listed: curl, permission denied, invalid checksum.

## What it is not
Not an application repository: the software comes from its publishers and is not hosted here. New cask requests via issue are closed.

## Alternatives
None named in the README.

## For you
Ignore as a watch topic: a macOS/Linux workstation tool already known to anyone who uses Homebrew, with no direct link to data/AI work.
