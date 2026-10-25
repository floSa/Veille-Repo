---
schema: 1
depot: heygen-com/hyperframes
source_readme_sha: f90b77b82976fe69
ecrite_le: 2026-10-25
nature: bibliothèque
deploiement: npm
prerequis: [Node, aucun]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [dépend d'un SaaS]
verdict: surveiller
---

# heygen-com/hyperframes

> Framework qui transforme HTML, CSS et animations en vidéos MP4 déterministes, pilotable par agent de code.

## Le problème
Produire des vidéos de façon reproductible (CI, pipelines automatisés) est lourd avec les outils d'édition ou exige React comme avec Remotion.

## Ce que ça fait vraiment
Une composition est un fichier HTML avec des attributs data pour le timing et les pistes. Un rendu cherche chaque image dans Chrome headless et encode avec FFmpeg : même entrée, même vidéo. Livré avec CLI, studio, catalogue d'environ 450 blocs, skills pour agents et rendu AWS Lambda. Les 7 skills guident l'agent (planifier, écrire, linter, prévisualiser, rendre).

## Comment c'est branché
```mermaid
flowchart LR
  A["Coding agent"] --> B["Agent skills"]
  B --> C["HyperFrames CLI (cli.ts)"]
  C --> D["HTML video project"]
  D --> E["Browser and FFmpeg (browserManager.ts)"]
  E --> F["Render producer"]
  F --> G["AWS Lambda renderer (handler.ts)"]
```

## Essayer
```bash
npx hyperframes init my-video
npx hyperframes preview
npx hyperframes render
npx hyperframes skills update
```

## Coût et pièges
Node 22+ et FFmpeg ; Git LFS si tu clones le dépôt complet (~240 Mo de baselines). Certaines skills (`/media-use`) s'appuient sur HeyGen ou outils locaux ; le rendu cloud suppose un compte AWS. Sans frais par rendu côté framework.

## Ce que ce n'est pas
Pas un éditeur vidéo classique ni un générateur de vidéo par IA : le contenu doit être écrit en HTML. `/slideshow` produit un deck navigable, pas un MP4.

## Alternatives
- Remotion : même principe en React, rendu Lambda plus mature, licence source-available.

## Pour toi
À surveiller : utile pour automatiser des rapports vidéo ou des visualisations animées dans un pipeline ; sans besoin vidéo concret, c'est peu prioritaire.

