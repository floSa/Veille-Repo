---
schema: 1
depot: Pumpkin-MC/Pumpkin
source_readme_sha: 845cce8aa27b32e5
ecrite_le: 2026-10-27
nature: service
deploiement: compilation
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# Pumpkin-MC/Pumpkin

> Serveur Minecraft écrit en Rust, multithread, pour les hébergeurs voulant une alternative légère.

## Le problème
Les serveurs Minecraft classiques consomment beaucoup de ressources et se prêtent peu à la personnalisation.

## Ce que ça fait vraiment
Un serveur Java et Bedrock (en cours) gère protocole, chiffrement, compression, mondes, chunks, lumière, entités, inventaires, commandes et permissions, avec configuration en TOML. Un système de plugins, un protocole de gestion (MSMP) et la compatibilité proxys (BungeeCord, Velocity) existent. Le README précise que le projet est en plein développement avant la 1.0.

## Comment c'est branché
```mermaid
flowchart LR
  A["Minecraft player"] --> B["Java and Bedrock"]
  B --> C["Server orchestration (mod.rs)"]
  C --> D["Player state (player.rs)"]
  C --> E["World management (level.rs)"]
  E --> F["Chunk lifecycle (chunk_state.rs)"]
  C --> G["Plugin system"]
```

## Essayer
Le README renvoie à un guide de démarrage et ne contient aucune commande. Aucune commande documentée.

## Coût et pièges
Gratuit. En développement actif : fonctions incomplètes (mobs, advancements, Bedrock en cours). 793 issues ouvertes.

## Ce que ce n'est pas
Pas un remplaçant complet du serveur vanilla à ce stade. Pas un outil de production garanti.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : serveur de jeu sans rapport avec la data/IA/MLOps, et encore expérimental.

