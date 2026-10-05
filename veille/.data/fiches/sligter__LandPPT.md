---
schema: 1
depot: sligter/LandPPT
source_readme_sha: dfa1e90dfa65a291
ecrite_le: 2026-10-05
nature: app
deploiement: docker
prerequis: [clé d'API, Docker, version de Python]
cout: clé d'API à ta charge
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: surveiller
---

# sligter/LandPPT

> Plateforme web qui génère des présentations éditables depuis un sujet ou un document, avec discours et vidéo.

## Le problème
Produire un diaporama complet (plan, mise en page, images, notes de présentation, exports) est long.

## Ce que ça fait vraiment
Flux en quatre étapes : besoins, plan, suivi des tâches, génération de slides HTML en parallèle. Sources d'IA : OpenAI, Claude, Gemini, Azure, Ollama et API compatibles. Recherche approfondie (Tavily, SearXNG), images (galerie locale, Pixabay/Unsplash, génération IA), discours et narration Edge-TTS avec export vidéo MP4. Exports PDF, HTML, PPTX, DOCX, Markdown.

## Comment c'est branché
```mermaid
flowchart LR
  A[Web and API routes routes.py] --> B[Document processing file_processor.py]
  B --> C[AI providers providers.py]
  C --> D[Image service image_service.py]
  C --> E[Template packages service.py]
  E --> F[Public sharing share_service.py]
  A --> G[Database models models.py]
```

## Essayer
```bash
git clone https://github.com/sligter/LandPPT.git
cd LandPPT
uv sync --extra dev
cp .env.example .env
uv run python run.py
```

## Coût et pièges
Au moins une clé de fournisseur IA. PPTX éditable standard : clé commerciale Apryse (`APRYSE_LICENSE_KEY`) ; sinon PPTX en images non éditable. Compte admin par défaut `admin`/`admin123` à changer en production. ffmpeg pour la vidéo.

## Ce que ce n'est pas
Pas une alternative gratuite à PowerPoint pour tout export éditable. Le README déclare Apache 2.0 mais GitHub n'identifie pas la licence : à vérifier.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : démo rapide en SQLite, mais l'export éditable dépend d'une licence tierce et le mainteneur est unique.

