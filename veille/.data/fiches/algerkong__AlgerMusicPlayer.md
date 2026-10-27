---
schema: 1
depot: algerkong/AlgerMusicPlayer
source_readme_sha: 155a2cbc0049ae51
ecrite_le: 2026-10-27
nature: app
deploiement: npm
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique, dépend d'un SaaS]
verdict: ignorer
---

# algerkong/AlgerMusicPlayer

> Lecteur de musique Vue/Electron tiers, avec parole desktop et téléchargement, pour utilisateurs sinophones.

## Le problème
Écouter et organiser un catalogue de musique en ligne avec lyrics, favoris et téléchargement hors des clients officiels.

## Ce que ça fait vraiment
Application Vue + Electron (desktop, web, mobile web) : recommandations, historique, favoris, paroles immersives et fenêtre de paroles, égaliseur, minuteur, téléchargement. La résolution des sources s'appuie sur @unblockneteasemusic/server et netease-cloud-music-api en local. README en chinois.

## Comment c'est branché
```mermaid
flowchart LR
  UI["App shell (App.vue)"] --> Ctrl["Playback controller"]
  Ctrl --> Api["Music API"]
  Ctrl --> Audio["Audio service"]
  UI --> IPC["IPC bridge"]
  IPC --> Main["Electron main"]
  Main --> Dl["Download manager"]
```

## Essayer
```bash
npm install
npm run dev
```

## Coût et pièges
Gratuit. Dépend d'API tierces non officielles de musique : peut casser sans préavis. La déclaration interdit l'usage commercial alors que la licence est MIT.

## Ce que ce n'est pas
Pas un service de streaming : il contourne/interroge des sources tierces. Le texte précise « usage d'apprentissage uniquement ».

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : sans rapport avec data/IA/MLOps et reposant sur des API non officielles à statut juridique flou.

