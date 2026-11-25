---
schema: 1
depot: xmonad/xmonad-contrib
source_readme_sha: d8ebd80a7a1f6bb2
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# xmonad/xmonad-contrib

> Centaines de modules communautaires (dispositions, hooks, invites) pour le gestionnaire de fenêtres xmonad.

## Le problème
Le noyau d'xmonad est minimal ; les dispositions et comportements avancés manquent.

## Ce que ça fait vraiment
Bibliothèque Haskell déclarée dans `xmonad-contrib.cabal`. Une config comme `Example.hs` combine des dispositions (`LayoutModifier`, `Tabbed`), des hooks (`ManageDocks`, `EwmhDesktops`, `StatusBar`), des actions et des invites ; `EZConfig` simplifie la liaison des touches, `NamedScratchpad` ajoute des scratchpads.

## Comment c'est branché
```mermaid
flowchart TD
  C["xmonad-contrib.cabal"] --> A["Config/Example.hs"]
  A --> B["Util/EZConfig.hs"]
  A --> D["Layout/LayoutModifier.hs"]
  D --> E["Layout/Tabbed.hs"]
  A --> F["Hooks/ManageDocks.hs"]
  B --> L["Util/NamedScratchpad.hs"]
```

## Essayer
Aucune commande dans le README : il renvoie vers le site xmonad (téléchargement, installation, tutoriel).

## Coût et pièges
Gratuit. Haskell et X11 nécessaires : ni Wayland ni macOS n'en profitent.

## Ce que ce n'est pas
Ce n'est pas un gestionnaire de fenêtres autonome : il étend xmonad.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer sauf si tu es déjà utilisateur xmonad : aucun lien avec le travail data / IA.

