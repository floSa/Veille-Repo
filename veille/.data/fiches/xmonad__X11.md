---
schema: 1
depot: xmonad/X11
source_readme_sha: a541e37342c13867
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence à vérifier]
verdict: ignorer
---

# xmonad/X11

> Liaison Haskell à la bibliothèque graphique X11, pour développeurs Haskell, notamment xmonad.

## Le problème
Appeler Xlib et ses extensions depuis Haskell demande des liaisons C maintenues.

## Ce que ça fait vraiment
Expose Xlib et ses extensions (dont Xrandr) via des fichiers `.hsc` appuyés par du code C et des en-têtes. `configure.ac` et `X11.cabal` détectent les bibliothèques ; le support Xinerama est activé par défaut si les en-têtes existent.

## Comment c'est branché
```mermaid
flowchart TD
  A["Graphics/X11.hs"] --> B["Graphics/X11/Xlib.hs"]
  B --> C["Xlib/Event.hsc"]
  C --> F["cbits/XUtils.c"]
  F --> G["include/HsXlib.h"]
  H["configure.ac"] --> I["X11.cabal"]
```

## Essayer
```bash
cabal configure
cabal build
cabal install
# depuis Git : autoreconf avant la compilation
```

## Coût et pièges
Gratuit. Exige Cabal (Haskell), autoconf depuis Git et les bibliothèques de développement X11, xrandr, XScreenSaver. Licence non identifiée par GitHub.

## Ce que ce n'est pas
Pas un gestionnaire de fenêtres : c'est la brique de liaison qu'il utilise.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : bas niveau Haskell/X11 sans lien avec ton métier.

