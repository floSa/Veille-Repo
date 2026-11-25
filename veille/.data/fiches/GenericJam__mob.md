---
schema: 1
depot: GenericJam/mob
source_readme_sha: 9c4608821d974716
ecrite_le: 2026-11-25
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# GenericJam/mob

> Framework Elixir qui embarque la BEAM dans des apps iOS et Android, sans serveur.

## Le problème
Écrire une appli mobile native en Elixir sans backend distant, avec la supervision OTP.

## Ce que ça fait vraiment
Chaque écran est un GenServer (`Mob.Screen.Server`) dont l'arbre de composants est converti en JSON par `Mob.Renderer`, puis rendu par Compose (Android) ou SwiftUI (iOS) via un NIF. API d'appareil (haptique, caméra, localisation) en plugins, connexion distribuée pour pousser du bytecode à chaud.

## Comment c'est branché
```mermaid
flowchart TD
  A["lib/mob/app.ex"] --> E["lib/mob/router.ex"]
  E --> C["lib/mob/screen/server.ex"]
  C --> D["lib/mob/renderer.ex"]
  D --> F["src/mob_nif.erl"]
  F --> G["android/jni/mob_nif.zig"]
  F --> H["ios/mob_nif.m"]
```

## Essayer
```bash
mix archive.install hex mob_new
mix mob.connect
mix setup
```

## Coût et pièges
Statut « early development ». La BEAM est suspendue en arrière-plan sur iOS : il faut des notifications push (APNs/FCM). Runtime d'environ 80 Mo compressé.

## Ce que ce n'est pas
Pas React Native ni Flutter : il faut écrire en Elixir et le rendu reste natif.

## Alternatives
Le README cite LiveView Native, Elixir Desktop, React Native et Flutter.

## Pour toi
Surveiller : curieux pour de l'inférence embarquée (plugins Nx, TFLite), mais trop jeune pour un usage MLOps.

