---
schema: 1
depot: Stonewuu/ai-fusion-video
source_readme_sha: 6dfbc906feab01e2
ecrite_le: 2026-11-07
nature: app
deploiement: docker
prerequis: [Docker, clé d'API]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# Stonewuu/ai-fusion-video

> Plateforme web d'agents pour créateurs de vidéo : scénario, storyboard, génération d'images et de vidéos.

## Le problème
Produire une vidéo avec des modèles génératifs oblige à disperser scénario, plans, assets et appels de modèles entre plusieurs outils.

## Ce que ça fait vraiment
Un espace de travail unique : projets par épisodes et scènes, storyboard, canevas infini reliant génération, montage et export, assistant agent avec outils, MCP, compétences et sous-agents, workflows ComfyUI associés à des modèles. Les modèles texte, image et vidéo se configurent dans l'interface (compatibles OpenAI, Anthropic, Gemini, DashScope, Ollama). Les médias vont sur disque ou stockage S3.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.

```mermaid
flowchart LR
    A["Nginx (entrée unique)"] --> B["Frontend Next.js"]
    A --> C["Backend Spring Boot"]
    C --> D[("MySQL + Redis")]
    C --> E["FFmpeg : montage"]
    C --> F["Fournisseurs de modèles et ComfyUI"]
```

## Essayer
```bash
git clone https://github.com/Stonewuu/ai-fusion-video.git
cd ai-fusion-video
cp .env.example .env
docker compose up -d
```

## Coût et pièges
Les modèles de texte, d'image et de vidéo sont facturés chez le fournisseur choisi. Les mots de passe MySQL et Redis valent 123456 par défaut : à changer avant toute exposition publique. Les modèles cloud exigent une adresse de ressources accessible depuis Internet.

## Ce que ce n'est pas
Pas un modèle de génération : il orchestre ceux d'autres fournisseurs. Le README est en chinois, mêle sponsors et publicité, et ne donne pas de licence des composants tiers.

## Alternatives
Aucune alternative citée dans le README.

## Pour toi
À ignorer : plateforme de création vidéo orientée créateurs chinois, qui t'apporte peu côté data / IA / MLOps, avec des identifiants par défaut faibles.

