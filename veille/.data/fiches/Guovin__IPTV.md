---
schema: 1
depot: Guovin/IPTV
source_readme_sha: 48a51cc4dd7e629e
ecrite_le: 2026-09-29
nature: outil
deploiement: docker
prerequis: [Docker, version de Python]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: ignorer
---

# Guovin/IPTV

> Outil d'agrégation et de test de sources IPTV, générant des playlists M3U/TXT ; même README que Guovin/TV.

## Le problème
Les listes IPTV publiques changent sans cesse et contiennent beaucoup de liens inutilisables.

## Ce que ça fait vraiment
Identique à Guovin/TV : abonnements et sources locales, alias de chaînes, tests de débit et de résolution, filtre pub, EPG, RTMP, GUI, CLI et Docker. Le catalogue liste les deux dépôts avec un README mot pour mot égal.

## Comment c'est branché
```mermaid
flowchart LR
  D[Desktop UI] --> U[Update controller]
  U --> S[Source collection]
  S --> A[Channel aggregation]
  A --> T[Stream testing]
  T --> P[Playlist artifacts]
  P --> H[HTTP service]
```

## Essayer
```bash
pip install pipenv
pipenv install --dev
pipenv run dev
pipenv run service
```

## Coût et pièges
AGPL-3.0 d'après le README ; catalogue sans licence. Avertissement du README : n'activer le RTMP que pour du contenu autorisé.

## Ce que ce n'est pas
Pas une source de chaînes ; doublon apparent de Guovin/TV.

## Alternatives
- Guovin/TV : même contenu sous un autre nom de dépôt.

## Pour toi
À ignorer : sans lien avec le travail data/IA ; un seul des deux dépôts suffit si tu veux tout de même l'essayer.
