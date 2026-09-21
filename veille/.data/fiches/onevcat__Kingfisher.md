---
schema: 1
depot: onevcat/Kingfisher
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
source_readme_sha: f09743b7a48c96a0
ecrite_le: 2026-09-21
---

# onevcat/Kingfisher

> **Téléchargement et cache d'images distantes pour applications Apple, en Swift, vue comprise.**

## Le problème

Afficher une image distante dans une vue iOS ou macOS oblige à écrire soi-même la requête
`URLSession`, le décodage, le redimensionnement, un cache mémoire, un cache disque avec
expiration, l'annulation quand la cellule est recyclée, et le placeholder pendant l'attente.
C'est chaque fois le même code, et chaque fois une occasion de le rater.

## Ce que ça fait vraiment

Kingfisher télécharge une image depuis une URL, la range simultanément en cache mémoire et en
cache disque, et la pose dans la vue. Au rappel suivant sur la même URL, elle sort du cache.

Le cache est hybride sur deux niveaux, avec date d'expiration et limite de taille réglables,
et une sonde de cache asynchrone optionnelle dans `KingfisherManager` pour ne pas bloquer le
fil appelant sur une lecture disque. Les téléchargements sont annulables et le contenu déjà
téléchargé est réutilisé.

Le traitement d'image passe par des processeurs composables avec l'opérateur `|>` —
`DownsamplingImageProcessor`, `RoundCornerImageProcessor` — et le jeu est extensible, formats
compris. Côté vues, des extensions `kf` couvrent `UIImageView`, `NSImageView`, `NSButton`,
`UIButton`, `NSTextAttachment`, `WKInterfaceImage`, `TVMonogramView` et `CPListItem`, avec
transition d'apparition, placeholder et indicateur de chargement.

Trois écritures pour la même chose : l'extension `kf.setImage`, le constructeur chaîné `KF`,
et `KFImage` pour SwiftUI — le README souligne qu'on passe de `KF` à `KFImage` en changeant le
nom. Le README annonce aussi le préchargement, le Low Data Mode, les Live Photos, et une
préparation à Swift 6 et au mode strict de la concurrence. Les composants (téléchargeur,
cache, processeurs) sont annoncés comme utilisables séparément.

## Comment c'est branché

Aucun diagramme tiré du code n'existe pour ce dépôt : ce schéma est reconstruit depuis le seul
README, avec les noms de types qu'il cite.

```mermaid
graph LR
  A[URL distante<br/>ou données locales] --> B[téléchargeur<br/>URLSession]
  B --> C[KingfisherManager<br/>sonde de cache async opt-in]
  C --> D[cache mémoire]
  C --> E[cache disque<br/>expiration · limite de taille]
  C --> F[processeurs<br/>DownsamplingImageProcessor |> RoundCornerImageProcessor]
  F --> G[kf.setImage<br/>UIImageView · NSButton · CPListItem…]
  F --> H[KF builder<br/>chaîné]
  F --> I[KFImage<br/>SwiftUI]
  D --> C
  E --> C
```

## Essayer

Le README ne donne pas de commande shell d'installation : elle passe par l'interface d'Xcode
(File > Swift Packages > Add Package Dependency, URL `https://github.com/onevcat/Kingfisher.git`,
« Up to Next Major » avec `8.0.0`), ou par le dépôt d'un `Kingfisher.xcframework` pré-compilé
téléchargé depuis la page des releases. Le seul bloc installable copié du README est le Podfile
CocoaPods :

```ruby
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '13.0'
use_frameworks!

target 'MyApp' do
  pod 'Kingfisher', '~> 8.0'
end
```

Puis, côté code, le cas le plus simple tel qu'écrit dans le README :

```swift
import Kingfisher

let url = URL(string: "https://example.com/image.png")
imageView.kf.setImage(with: url)
```

## Coût et pièges

- **Gratuit, MIT, pas de service tiers, pas de clé d'API, pas de compte.** Le financement passe
  par GitHub Sponsors, sans version bridée ni palier payant.
- **Le vrai prérequis est la plateforme** : Kingfisher 8.0 demande iOS 13+ / macOS 10.15+ /
  tvOS 13+ / watchOS 6+ / visionOS 1+ et Swift 5.9+ ; en SwiftUI, la barre monte à iOS 14+ /
  macOS 11+. La version 7.0 descend d'un cran (iOS 12+, Swift 5.0+). Hors écosystème Apple,
  rien à en tirer.
- **Une migration par majeure** : le README pointe des guides de migration 7.0 et 8.0. Monter de
  version n'est pas neutre.
- **Le cache disque est un coût** : expiration et limite de taille sont réglables, donc à régler.
  Par défaut on stocke des images sur l'appareil de l'utilisateur.
- **`cacheOriginalImage` double le stockage** : l'exemple avancé du README garde l'original
  haute résolution *en plus* de la vignette redimensionnée, pour la vue de détail.

## Ce que ce n'est pas

- **Ce n'est pas un moteur de traitement d'image généraliste.** Les processeurs servent le
  chemin d'affichage (redimensionnement, coins arrondis) ; l'auteur écrit vouloir garder le
  cadre léger et centré sur le téléchargement et le cache.
- **Ce n'est pas multiplateforme.** Pas de version Android, web ou serveur : les extensions
  citées sont toutes UIKit, AppKit, WatchKit, SwiftUI ou CarPlay.
- **Ce n'est pas un CDN ni une solution de stockage** : la bibliothèque consomme des URLs qu'on
  lui fournit, elle ne les héberge ni ne les optimise côté serveur.

## Alternatives

| | Quand le préférer |
|---|---|
| **Juanpe/SkeletonView** | Voisin du catalogue, complémentaire plus que concurrent : il s'occupe de l'état d'attente à l'écran (squelette animé) là où Kingfisher fournit un placeholder statique et un indicateur. À prendre en plus, pas à la place. |

Les autres voisins fournis (`jpsim/Yams`, `GopeedLab/gopeed`, `bitwarden/ios`) partagent le
langage Swift ou le mot « téléchargement » mais pas le sujet : aucune autre alternative
comparable dans le catalogue, et le README n'en nomme aucune.

## Pour toi

Peu de recouvrement avec un quotidien data / IA / MLOps : c'est de l'ingénierie client Apple,
pas de la chaîne de traitement. Le seul intérêt transférable est le modèle de cache hybride
mémoire + disque avec expiration et sonde asynchrone, qui se relit utilement quand on conçoit
un cache d'inférence ou de features. Adopter sans hésiter si une application iOS ou macOS est
au programme, passer son chemin sinon.
