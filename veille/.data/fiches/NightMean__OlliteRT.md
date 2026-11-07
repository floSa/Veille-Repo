---
schema: 1
depot: NightMean/OlliteRT
source_readme_sha: f1616a36c7338fac
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [beaucoup de RAM]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# NightMean/OlliteRT

> Application Android qui transforme un téléphone en serveur LLM compatible OpenAI sur le réseau local.

## Le problème
Héberger un LLM local demande un serveur dédié, alors qu'un vieux téléphone est inutilisé.

## Ce que ça fait vraiment
Charge des modèles `.litertlm` via le runtime LiteRT-LM de Google (GPU ou CPU) et sert les API OpenAI, Anthropic Messages et de transcription. Banc d'essai intégré, journaux, métriques Prometheus, authentification par jeton, API pour Home Assistant. Un seul modèle et une requête à la fois.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
  A[Client OpenAI : Open WebUI / Python] --> B[Serveur Ktor sur le téléphone]
  B --> C[LiteRT-LM]
  C --> D[Modèle .litertlm]
  B --> E[/metrics Prometheus]
```

## Essayer
```bash
# 1. installer l'APK  2. télécharger un modèle  3. Start Server
# endpoint : http://PHONE_IP:8000/v1
```

## Coût et pièges
Android 12 ou plus, arm64, 6 Go de RAM minimum. Pas de GGUF. Comptes de jetons estimés. Chauffe du téléphone en usage prolongé.

## Ce que ce n'est pas
Ce n'est pas un serveur concurrent : un modèle, requêtes en file. Ce n'est pas aussi complet qu'Ollama sur ordinateur.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : curiosité pratique pour exposer un petit modèle local sur ton réseau, trop limité pour une charge de travail sérieuse.

