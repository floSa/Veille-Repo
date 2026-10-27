---
schema: 1
depot: BLeeEZ/amperfy
source_readme_sha: 8b0662f0e35ef669
ecrite_le: 2026-10-27
nature: app
deploiement: compilation
prerequis: [compte à créer, service tiers]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# BLeeEZ/amperfy

> Application iOS, iPadOS et macOS en Swift pour écouter la musique d'un serveur Ampache ou Subsonic.

## Le problème
Écouter sa bibliothèque auto-hébergée sur appareils Apple avec mode hors ligne, CarPlay et Siri.

## Ce que ça fait vraiment
Client Swift pour Ampache/Subsonic : multi-comptes, hors ligne, CarPlay, lecture sans blanc, musique/podcasts/radio, Siri et App Intents, égaliseur, replay gain, minuterie de sommeil, notation, scrobbling. Compilation avec Xcode 26 et Swift 6. CarPlay et Siri exigent un certificat développeur avec droits dédiés pour tester sur appareil réel.

## Comment c'est branché
Pas de schéma fourni ni d'architecture décrite : non documenté.

## Essayer
```bash
git clone https://github.com/BLeeEZ/amperfy.git
cd amperfy
# puis ouvrir Amperfy.xcodeproj, build and run le scheme « Amperfy »
```

## Coût et pièges
Gratuit, mais il faut un serveur Ampache/Subsonic et Xcode (Mac). Dernier push en août 2026.

## Ce que ce n'est pas
Pas un serveur : uniquement un client. Licence GPLv3, à vérifier si tu redistribues du code dérivé.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : c'est une application mobile musicale sans rapport avec la data ou l'IA, et réservée à l'écosystème Apple.

