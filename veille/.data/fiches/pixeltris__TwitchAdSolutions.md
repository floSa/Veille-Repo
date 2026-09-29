---
schema: 1
depot: pixeltris/TwitchAdSolutions
source_readme_sha: 9979466c5ef8d259
ecrite_le: 2026-09-29
nature: outil
deploiement: autre
prerequis: [service tiers]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [archivé, mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# pixeltris/TwitchAdSolutions

> Scripts utilisateur et règles uBlock Origin pour bloquer les publicités de Twitch, dépôt archivé.

## Le problème
Les publicités interrompent la lecture des flux Twitch.

## Ce que ça fait vraiment
Deux stratégies : `vaft` et `video-swap-new`. Elles tentent d'obtenir un flux sans publicité, sinon retirent les segments publicitaires (lecture suspendue jusqu'au flux propre). Livrés en userscript ou en ressource uBlock Origin. Le README recommande d'abord des proxys comme TTV LOL PRO.

## Comment c'est branché
```mermaid
flowchart LR
  B["Browser"] --> U["uBlock Origin / Userscript Manager"]
  U --> S["vaft.user.js / vaft-ublock-origin.js"]
  S --> AD["Ad Detector"]
  AD --> SW["Stream Switcher"]
  SW --> TW["Twitch Backend (HLS)"]
```

## Essayer
Ajouter `twitch.tv##+js(twitch-videoad)` dans « My filters » d'uBlock Origin, puis régler `userResourcesLocation` sur l'URL du script.

## Coût et pièges
Gratuit. Le dépôt est archivé depuis le 2026-03-05 : plus de correctifs alors que Twitch change ses flux. Le README avertit que les scripts peuvent cesser de s'appliquer.

## Ce que ce n'est pas
Pas maintenu, et pas la méthode la plus fiable selon le README lui-même (les proxys le sont davantage).

## Alternatives
TTV LOL PRO, Twitch Turbo, Alternate Player for Twitch.tv, Purple AdBlock.

## Pour toi
Ignorer : dépôt archivé, hors périmètre data/IA, et l'auteur le déconseille lui-même au profit d'autres solutions.

