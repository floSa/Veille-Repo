---
schema: 1
depot: minsang-alt/PasteClip
source_readme_sha: 71f3fa5ba49d20a7
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# minsang-alt/PasteClip

> Clipbara : gestionnaire d'historique du presse-papiers pour macOS, local, gratuit, pour qui copie beaucoup.

## Le problème
Le presse-papiers macOS ne garde que le dernier élément copié. Les gestionnaires concurrents sont souvent payants.

## Ce que ça fait vraiment
Garde l'historique de ce qui est copié (texte, images, liens, fichiers, couleurs) dans SwiftData, en local. Un raccourci ouvre un panneau avec recherche, Pinboards et aperçu Quick Look. Choisir un clip le remet dans le presse-papiers ; l'utilisateur colle lui-même. Les applis exclues (gestionnaire de mots de passe) ne sont pas enregistrées.

## Comment c'est branché
```mermaid
flowchart TD
    A["ClipboardMonitor"] --> B["ClipLibrary.swift"]
    B --> C[("ClipStore.swift")]
    D["PanelController"] --> E["HistoryPanelView"]
    E --> F["PasteService.swift"]
    F --> G[("Presse-papiers système")]
    B --> H["ClipSync.swift iCloud"]
```

## Essayer
```bash
brew install --cask mobrava/tap/clipbara
```

## Coût et pièges
Gratuit sur le Mac App Store et GitHub. Il faut macOS 14 ou plus. Les builds App Store et DMG ont des identifiants différents donc des historiques séparés : n'en lancer qu'un.

## Ce que ce n'est pas
Ce n'est pas un outil qui colle à ta place : il ne simule pas de frappe. Aucune synchronisation entre Mac n'est promise par le README (export/import JSON). Les images ne se collent pas dans un terminal.

## Alternatives
Paste (cité dans la motivation) : version payante par abonnement de la même idée de cartes.

## Pour toi
Utile en poste de travail macOS pour récupérer un extrait ou une commande copiée plus tôt ; sans lien avec le pipeline data/IA, donc à surveiller plutôt qu'adopter.

