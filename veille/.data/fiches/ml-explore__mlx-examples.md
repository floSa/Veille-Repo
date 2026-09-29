---
schema: 1
depot: ml-explore/mlx-examples
source_readme_sha: 4b8d8cc5f34dc945
ecrite_le: 2026-09-29
nature: doc
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# ml-explore/mlx-examples

> Recueil d'exemples autonomes d'Apple pour entraîner et exécuter des modèles avec MLX sur Apple silicon.

## Le problème
Découvrir MLX demande des exemples concrets pour chaque famille de modèles, faute de quoi on repart de PyTorch par réflexe.

## Ce que ça fait vraiment
Un dossier autonome par exemple : Transformer LM, LLaMA/Mistral/Mixtral, LoRA et QLoRA, T5, BERT, FLUX, Stable Diffusion/SDXL, ResNet CIFAR-10, CVAE, Wan2.1 vidéo, Whisper, EnCodec, MusicGen, CLIP, LLaVA, SAM, GCN, Real NVP. Chaque dossier a son README et ses dépendances. Point d'entrée recommandé : MNIST. Poids convertis sur l'organisation Hugging Face `mlx-community`.

## Comment c'est branché
```mermaid
graph LR
  MLX[Core MLX Framework] --> Text[Text Models Group]
  MLX --> Img[Image Models Group]
  MLX --> Audio[Audio Models Group]
  MLX --> Multi[Multimodal Models Group]
  Text --> LoRA[LORA Example]
  Audio --> Whisper[Whisper Example]
  Img --> SD[Stable Diffusion Example]
```

## Essayer
Aucune commande documentée dans le README racine : chaque exemple a ses instructions dans son dossier.

## Coût et pièges
Gratuit ; suppose un Mac Apple silicon pour profiter de MLX. Les dépendances varient d'un exemple à l'autre.

## Ce que ce n'est pas
Pas une bibliothèque installable ni une API stable : des exemples indépendants. Pour les LLM, le README renvoie lui-même vers MLX LM.

## Alternatives
- ml-explore/mlx-lm : paquet Python plus complet pour les LLM avec MLX.

## Pour toi
À surveiller si tu travailles sur Mac : bon catalogue pour prototyper en local (LoRA, Whisper, SD), mais pour les LLM préfère mlx-lm, que le README recommande.
