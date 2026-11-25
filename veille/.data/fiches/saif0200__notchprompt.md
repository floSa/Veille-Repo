---
schema: 1
depot: saif0200/notchprompt
source_readme_sha: 7c0c25e2cea0b02b
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# saif0200/notchprompt

> Téléprompteur natif macOS affiché près de l'encoche, pour présentations et enregistrements.

## Le problème
Lire un script en regardant la caméra est difficile ; un défilement placé près de l'encoche garde le regard proche de l'objectif.

## Ce que ça fait vraiment
Une application de barre de menus avec un panneau flottant : démarrage, pause, retour de 5 s, vitesse, taille de police et dimensions réglables, compte à rebours optionnel, import et export de scripts texte. Un mode privé tente de masquer la fenêtre au partage d'écran (selon les applications).

## Comment c'est branché
```mermaid
flowchart TD
  A["notchpromptApp.swift"] --> B["AppDelegate.swift"]
  B --> C["PrompterModel.swift"]
  B --> D["OverlayWindowController.swift"]
  D --> E["OverlayView.swift"]
  E --> F["ScrollingTextView.swift"]
  G["ScriptFileIO.swift"] --> C
```

## Essayer
```bash
xattr -cr /Applications/notchprompt.app
open /Applications/notchprompt.app
xcodebuild -project notchprompt.xcodeproj -scheme notchprompt -configuration Debug build
```

## Coût et pièges
Gratuit. Build non signé et non notarisé : macOS affiche des avertissements. Les images de démonstration sont des espaces réservés.

## Ce que ce n'est pas
Pas un outil multiplateforme (macOS seulement) ; le mode privé n'est qu'un effort de bonne foi.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : utile pour présenter des démos, mais hors périmètre data, IA ou MLOps, et non signé.

