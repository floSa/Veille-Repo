---
schema: 1
depot: MonoGame/MonoGame
source_readme_sha: cc592c3f617582a0
ecrite_le: 2026-10-27
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: [licence à vérifier]
verdict: ignorer
---

# MonoGame/MonoGame

> Framework .NET open source de jeu vidéo multiplateforme, ré-implémentation du XNA de Microsoft.

## Le problème
Écrire en C# un jeu portable sur PC, consoles et mobiles sans moteur propriétaire.

## Ce que ça fait vraiment
Cycle de vie `Game`, API graphique gérée (`GraphicsDevice`, `SpriteBatch`), hôtes de plateforme (SDL, Android, iOS), backends OpenGL, DirectX et Vulkan natif via P/Invoke. Chaîne de contenu : `mgcb` (CLI), éditeur graphique, compilateur d'effets `mgfxc`.

## Comment c'est branché
```mermaid
flowchart LR
  Game[Game.cs] --> Platform[GamePlatform SDL Android iOS]
  Game --> GFX[GraphicsDevice.cs]
  GFX --> Backends[OpenGL DirectX]
  GFX --> Native[api_MGG.h Vulkan]
  Pipeline[PipelineManager] --> Content[ContentManager.cs]
  mgcb[mgcb mgfxc] --> Pipeline
```

## Essayer
```bash
git clone --recurse-submodules https://github.com/MonoGame/MonoGame.git
git submodule update --init
```

## Coût et pièges
Gratuit (soutien par abonnement). Compilation depuis les sources avec sous-modules ; licence non identifiée par GitHub.

## Ce que ce n'est pas
Pas un moteur avec éditeur de scènes : un framework de code et d'outils de contenu.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : le jeu vidéo est hors de ton périmètre data/IA.

