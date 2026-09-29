---
schema: 1
depot: cactus-compute/needle
source_readme_sha: 55083d2d71d86cae
ecrite_le: 2026-09-28
nature: modèle
deploiement: pip
prerequis: [aucun]
cout: freemium
maturite: utilisable
gouvernance: entreprise
alertes: [télémétrie, licence non déclarée]
verdict: surveiller
---

# cactus-compute/needle

> Modèle de 8 à 29 Mo pour appels d'outils et extraction structurée sur mobile, montre, robot, microcontrôleur.

## Le problème
Faire un appel d'outil ou extraire des champs typés sur un appareil contraint suppose d'habitude un aller-retour réseau vers un grand modèle.
Les modèles assez petits pour tenir localement échouent sur le remplissage d'arguments et produisent du JSON invalide.

## Ce que ça fait vraiment
Trois tâches : choisir les bons outils et remplir leurs arguments, extraire une structure déclarée depuis du texte, et renvoyer un vecteur d'embedding.
Une grammaire au niveau octet, compilée depuis vos schémas, contraint chaque token : la sortie parse par construction ; chaque réponse porte un score de confiance calibré.
Needle 3 est un « Laddered Simple Attention Network » : MLP Monarch Hadamard, attention GQA à prises convolutives causales, mémoire n-gram « engram » lue par gather, hyper-connexions multi-voies — chaque profondeur de 2 à 20 couches est déployable.
Décorer une fonction avec `@needle.tool` suffit : signature = types d'arguments, docstring = description, `run()` exécute et boucle.

## Comment c'est branché
```mermaid
flowchart TD
  A[@needle.tool fonctions Python] --> B[grammaire octet compilée depuis les schémas]
  B --> C[needle.Needle&#40;tools=…&#41;]
  C --> D[function_calls + reasoning + confidence]
  D --> E[run&#40;&#41; exécute et renvoie results]
  F[needle finetune LoRA local] --> G[needle build --lora --layers N]
  H[needle platform finetune 2-bit] --> G
  G --> I[needle3.cact + moteur < 1 Mo par plateforme]
```

## Essayer
```sh
pip install cactus-needle
pip install "cactus-needle[train]"
needle finetune data.jsonl --epochs 10 --out adapter.safetensors
needle build --lora adapter.safetensors --layers 8 --out tuned.cact
export NEEDLE_API_KEY=needle_ft_...
needle platform generate --tools tools.json --examples 1000 --out ./data
needle build --platform macos-arm64
./macos-arm64/needle --model needle3.cact --tools tools.json --serve
```

## Coût et pièges
Le paquet et les poids sont accessibles ; le fine-tuning « Platform » passe par les GPU de Cactus avec `NEEDLE_API_KEY`, donc facturé. Le fine-tuning local tourne sur votre machine en JAX (CPU, CUDA ou Metal).
Télémétrie activée par défaut dans le binaire : `NEEDLE_TELEMETRY=0` et `DO_NOT_TRACK=1` pour la couper. En LoRA local, la tête de confiance n'est pas entraînée et `confidence` vaut `None`.

## Ce que ce n'est pas
Pas un modèle de conversation : le README assume d'échanger la capacité de chat générale contre les appels d'outils.
Pas un modèle généraliste multilingue documenté : les scores annoncés portent sur l'appel d'outils et l'extraction.
Pas un service : c'est un binaire mappé en mémoire, la plateforme ne sert qu'au fine-tuning.

## Alternatives
- DeepSeek V4 Flash : point de comparaison cité, dépassé selon eux par un sous-réseau ajusté à partir de 4 couches.

## Pour toi
À tester si tu dois router des appels d'outils hors ligne ou en périphérie ; pas un substitut d'un LLM serveur.
