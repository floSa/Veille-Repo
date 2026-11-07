---
schema: 1
depot: jellyfin/jellyfin-desktop
source_readme_sha: aeb178aa99da84f2
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# jellyfin/jellyfin-desktop

> Client de bureau pour Jellyfin, fondé sur Qt WebEngine et libmpv, pour lire plus de formats sans transcodage.

## Le problème
Le client web de Jellyfin transcode davantage et ne gère ni passthrough audio ni décodage matériel avancé.

## Ce que ça fait vraiment
Application C++/Qt qui héberge le client web Jellyfin et délègue la lecture à libmpv : décodage matériel, passthrough audio, nombreux formats. Gère clavier, manettes SDL, CEC, LIRC et touches multimédia, plus MPRIS sous Linux. Données par profil.

## Comment c'est branché
```mermaid
flowchart TD
    Main["src/main.cpp"] --> CM["ComponentManager.cpp"]
    CM --> WM["WindowManager.cpp"]
    WM --> Web["webview.qml"]
    Web --> Bridge["nativeshell.js, mpvVideoPlayer.js"]
    Bridge --> Player["PlayerComponent.cpp"]
    Player --> Render["MpvVideoItem.cpp"]
```

## Essayer
```bash
# Aucune commande dans le README : télécharger Flathub (Linux) ou les builds
# de développement ; la compilation est décrite dans dev/.
```

## Coût et pièges
Gratuit, mais il faut un serveur Jellyfin existant. Les builds proposés suivent le dernier commit de master. 382 issues ouvertes.

## Ce que ce n'est pas
Pas un serveur multimédia : c'est uniquement le client. Les écrans viennent du client web, pas de code natif.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : client multimédia grand public sans rapport avec la data ou l'IA.

