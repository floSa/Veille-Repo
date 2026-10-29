---
schema: 1
depot: KhronosGroup/glTF-Sample-Assets
source_readme_sha: b9d6ad7b0a67acdc
ecrite_le: 2026-10-29
nature: dataset
deploiement: rien à installer
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: fondation
alertes: [licence non déclarée]
verdict: ignorer
---

# KhronosGroup/glTF-Sample-Assets

> Collection de modèles glTF 2.0 d'exemple illustrant les fonctionnalités du format, pour développeurs 3D.

## Le problème
Les visionneuses, convertisseurs et moteurs 3D ont besoin de modèles de test variés et bien licenciés.

## Ce que ça fait vraiment
Modèles en glTF séparé, embarqué ou binaire (.glb), listés par catégories (vitrine, complet, tests, noyau seul, tutoriels, tests PBR, problèmes). Un utilitaire TypeScript valide les métadonnées et génère listes, index et README par modèle. Un site de navigation existe hors de ce dépôt. Chaque modèle a sa licence ; le README annonce CC-BY-4.0, mais le catalogue ne détecte aucune licence.

## Comment c'est branché
```mermaid
flowchart LR
  A[Dossiers de modèles] --> B[main.ts]
  B --> C[ModelMetadata.ts]
  C --> D[Licenses.ts]
  C --> E[Listings Markdown]
  C --> F[README par modèle]
```

## Essayer
Aucune commande documentée : ouvrir le site de navigation du README.

## Coût et pièges
Gratuit. Licences variables selon le modèle (voir le README de chaque dossier).

## Ce que ce n'est pas
Pas un moteur ni un outil de conversion : des données de test.

## Alternatives
Khronos glTF Asset Generator, Sketchfab, Poly Haven, Kenney (cités dans le README).

## Pour toi
À ignorer : jeu de données 3D, utile seulement pour tester un chargeur glTF.

