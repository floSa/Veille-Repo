---
schema: 1
depot: oss-review-toolkit/ort
source_readme_sha: b6bc01610fb97a8e
ecrite_le: 2026-11-25
nature: outil
deploiement: docker
prerequis: [Docker, beaucoup de RAM]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: surveiller
---

# oss-review-toolkit/ort

> Chaîne d'automatisation des politiques open source : dépendances, licences, vulnérabilités, SBOM, pour équipes logicielles.

## Le problème
Savoir quelles dépendances et licences un projet embarque, et le prouver (SBOM, notices), est long et manuel.

## Ce que ça fait vraiment
Pipeline en étapes : Analyzer (dépendances), Downloader (sources), Scanner (licences et copyrights), Advisor (avis de sécurité), Evaluator (règles de politique en code), Reporter (rapports, SBOM CycloneDX/SPDX) et Notifier (mails, tickets JIRA). Utilisable en bibliothèque, en CLI ou en CI.

## Comment c'est branché
```mermaid
flowchart TD
  CLI["OrtMain.kt"] --> AN["Analyzer.kt"]
  AN --> DL["Downloader.kt"]
  DL --> SC["Scanner"]
  SC --> AD["Advisor.kt"]
  AD --> EV["Evaluator.kt"]
  EV --> RP["Reporter"]
  EV --> NO["Notifier.kt"]
```

## Essayer
```bash
docker run ghcr.io/oss-review-toolkit/ort --help
```

## Coût et pièges
Java 25 requis pour les binaires ; le README conseille 8 Gio de mémoire et 4 coeurs. Les gros projets font vite grimper temps et mémoire.

## Ce que ce n'est pas
Pas un outil à lancer en deux minutes : il se configure (règles, classifications). Ce n'est pas un scanner de code malveillant.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : utile si tu dois livrer des SBOM ou auditer les licences d'une stack ML ; sinon trop lourd pour un usage ponctuel.

