---
schema: 1
depot: moq-wg/moq-transport
source_readme_sha: aa241a7314b226b3
ecrite_le: 2026-11-25
nature: doc
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: expérimental
gouvernance: communauté
alertes: [licence à vérifier, matière insuffisante]
verdict: ignorer
---

# moq-wg/moq-transport

> Brouillon IETF du protocole « Media over QUIC Transport », rédigé en Markdown.

## Le problème
Le transport de médias en temps réel sur QUIC n'est pas encore normalisé.

## Ce que ça fait vraiment
Le dépôt est la zone de travail du groupe MOQ de l'IETF. Le texte est `draft-ietf-moq-transport.md`, que le `Makefile` transforme en versions texte et HTML.

## Comment c'est branché
Schéma d'après le diagramme du code.

```mermaid
flowchart TD
  A["draft-ietf-moq-transport.md"] --> D["Makefile"]
  B["README.md"] --> D
  C["CONTRIBUTING.md"] --> A
  E[".note.xml"] --> D
  D --> G["Versions texte et HTML"]
```

## Essayer
```bash
make
```

## Coût et pièges
Gratuit. L'outillage i-d-template doit être installé. Licence non identifiée par GitHub.

## Ce que ce n'est pas
Pas une implémentation : seulement la spécification, encore à l'état de brouillon.

## Alternatives
Aucune citée dans le README.

## Pour toi
Ignorer : spécification réseau de diffusion de médias, sans rapport direct avec un travail data / IA / MLOps.

