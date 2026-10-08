---
schema: 1
depot: elai950/AlertToast
source_readme_sha: 82dce63e2bbd2252
ecrite_le: 2026-10-08
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# elai950/AlertToast

> Bibliothèque SwiftUI pour afficher des alertes et toasts sans action de l'utilisateur.

## Le problème
SwiftUI n'offre que `Alert` : l'utilisateur doit appuyer sur OK pour chaque information.

## Ce que ça fait vraiment
Un modificateur `.toast` affiche des fenêtres éphémères en trois modes (alerte au centre, HUD par le haut, bannière par le bas), avec types texte, validation, erreur, image système, image et chargement. Mode clair/sombre, localisation, personnalisation de police et de fond. iOS 13+ et macOS 11+.

## Comment c'est branché
```mermaid
graph LR
  A[Host View] --> B[Toast Modifier AlertToast.swift]
  B --> C[Alert Toast View]
  C --> D[Activity Indicator]
  C --> E[BlurView.swift]
```

## Essayer
```ruby
pod 'AlertToast'
```
```swift
.toast(isPresenting: $showToast){
    AlertToast(type: .regular, title: "Message Sent!")
}
```

## Coût et pièges
Gratuit. Dernier push en novembre 2024. Le README affiche une adresse de don cryptomonnaie ambiguë (réseau BNB, intitulé BTC) : prudence.

## Ce que ce n'est pas
Pas multiplateforme hors Apple. Pas de notifications système.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : bibliothèque d'interface iOS/macOS sans rapport avec data, IA ou MLOps, et peu active depuis fin 2024.

