---
schema: 1
depot: mcmonkeyprojects/SwarmUI
source_readme_sha: 5534a23f88bef019
ecrite_le: 2026-10-27
nature: app
deploiement: autre
prerequis: [GPU, Node, version de Python]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# mcmonkeyprojects/SwarmUI

> Interface web modulaire de génération d'images, vidéo et audio, avec onglet de workflow ComfyUI.

## Le problème
Générer des images/vidéos avec diffusion demande des outils épars ; il faut une UI à la fois simple et puissante.

## Ce que ça fait vraiment
Serveur ASP.NET (.NET 8) avec onglet Generate, éditeur d'image, générateur de grilles et onglet Comfy Workflow. Il pilote des backends ComfyUI (installé automatiquement) ou AUTOMATIC1111, peut répartir le travail sur plusieurs GPU, gère extensions, modèles et API. Statut « Almost-Release » (v0.9.8 Beta).

## Comment c'est branché
```mermaid
flowchart LR
  WEB[Web Interface] --> API[Text2Image API]
  API --> T2I[Text2Image Engine]
  T2I --> BH[Backend Handler]
  BH --> COMFY[ComfyUI Backend]
  BH --> A1111[AutoWebUI Backend]
  EXT[Extension Manager] --> T2I
```

## Essayer
```bash
git clone https://github.com/mcmonkeyprojects/SwarmUI
cd SwarmUI
./launch-linux.sh
```

## Coût et pièges
Gratuit, mais GPU et téléchargement de modèles (volumineux). Python 3.10–3.12 ; ne pas utiliser 3.14+. Mac : Apple Silicon seulement. Mention légale : certains composants optionnels (ultralytics AGPL, ComfyUI GPL) peuvent imposer leurs termes.

## Ce que ce n'est pas
Pas un modèle : une interface. Les licences des modèles utilisés restent à vérifier ; l'assistance LLM native n'est pas encore là.

## Alternatives
AUTOMATIC1111/stable-diffusion-webui (cité comme backend) et ComfyUI (backend aussi).

## Pour toi
À adopter si tu as un GPU et veux expérimenter la génération d'images : MIT, très actif, accès direct aux workflows ComfyUI.

