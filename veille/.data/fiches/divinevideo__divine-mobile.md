---
schema: 1
depot: divinevideo/divine-mobile
source_readme_sha: 39546f0932c8f874
ecrite_le: 2026-11-25
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence copyleft]
verdict: ignorer
---

# divinevideo/divine-mobile

> Application Flutter de vidéos courtes de 6 secondes, décentralisée sur Nostr, sans contenu généré par IA.

## Le problème
Les réseaux de vidéos courtes gardent la main sur les contenus, les abonnés et les noms d'utilisateur.

## Ce que ça fait vraiment
Caméra et éditeur intégrés, fil infini, abonnements, messages chiffrés, notifications et provenance C2PA. Les identités signent sur Nostr, les médias sont hébergés sur Blossom, la base locale Drift est chiffrée. L'architecture suit UI, BLoC, dépôt puis client, avec une migration depuis Riverpod en cours.

## Comment c'est branché
```mermaid
flowchart TD
  A["main.dart"] --> B["app_composition_root.dart"]
  B --> C["app_router.dart"]
  B --> D["videos_repository"]
  D --> E["nostr_client"]
  E --> F["relay_pool"]
  D --> G["app_database Drift"]
  H["upload_manager"] --> I["blossom_upload_service"]
```

## Essayer
```bash
cd mobile
flutter pub get
flutter run -d <device>
flutter analyze
flutter test
```

## Coût et pièges
Gratuit. Flutter 3.47 et Dart 3.13 requis. La pile locale Docker n'est turnkey que sur émulateur Android. Firebase, Zendesk et ProofMode demandent des clés hors dépôt. 660 issues ouvertes.

## Ce que ce n'est pas
Pas une bibliothèque réutilisable : une application complète. Le dépôt contient aussi un worker Cloudflare pour l'annuaire d'applications.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : une application grand public sans lien avec un travail data, IA ou MLOps.

