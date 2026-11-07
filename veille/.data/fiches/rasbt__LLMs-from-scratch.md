---
schema: 1
depot: rasbt/LLMs-from-scratch
source_readme_sha: 7fe7c2073510b1e9
ecrite_le: 2026-11-07
nature: doc
deploiement: pip
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: adopter
---

# rasbt/LLMs-from-scratch

> Code du livre pour coder, pré-entraîner et fine-tuner pas à pas un LLM de type GPT avec PyTorch.

## Le problème
Utiliser des LLM via des bibliothèques cache leur fonctionnement interne ; difficile de les comprendre sans les recoder.

## Ce que ça fait vraiment
Notebooks et scripts par chapitre : préparation de texte et tokenizer BPE, attention, modèle GPT, pré-entraînement, chargement de poids pré-entraînés, fine-tuning de classification et d'instructions. Un large matériel bonus couvre KV cache, GQA, MoE, DPO, LoRA, Llama 3.2, Qwen3, Gemma 3, évaluation et RLVR/GRPO.

## Comment c'est branché
```mermaid
flowchart TD
  Data["Preparation de texte (ch02)"]
  GPT["gpt.py"]
  Train["gpt_train.py"]
  Load["gpt_download.py"]
  Gen["gpt_generate.py"]
  FT["Fine-tuning classification et instructions"]
  Data --> GPT
  GPT --> Train
  Load --> GPT
  Train --> Gen
  GPT --> FT
```

## Essayer
```bash
git clone --depth 1 https://github.com/rasbt/LLMs-from-scratch.git
```

## Coût et pièges
Gratuit ; les chapitres principaux tournent sur un laptop, le GPU est utilisé s'il existe. Le livre et le cours vidéo sont payants. Licence présente mais non identifiée par GitHub : à vérifier.

## Ce que ce n'est pas
Pas une bibliothèque de production ni un framework d'entraînement : c'est du code pédagogique. Le modèle entraîné est petit, à but éducatif.

## Alternatives
Aucune alternative nommée dans le README (renvoie à un livre compagnon sur les modèles de raisonnement).

## Pour toi
À adopter : meilleure base pour comprendre réellement les LLM avant de fine-tuner ou d'optimiser, avec du code exécutable sur CPU.

