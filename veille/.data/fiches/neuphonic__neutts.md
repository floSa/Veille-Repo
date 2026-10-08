---
schema: 1
depot: neuphonic/neutts
source_readme_sha: df870ea2ac040be5
ecrite_le: 2026-10-08
nature: modèle
deploiement: pip
prerequis: [version de Python, GPU]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: adopter
---

# neuphonic/neutts

> Modèles de synthèse vocale locaux avec clonage de voix, pensés pour tourner sur appareil.

## Le problème
Les synthèses vocales réalistes passent par des API web payantes, impossibles dans les jouets, applications embarquées ou contextes de conformité.

## Ce que ça fait vraiment
Collection de modèles TTS à base de petits LLM (NeuTTS-Air ~360M, Nano ~120M, 2E émotionnel) plus le codec NeuCodec. Clonage à partir de 3 secondes d'audio de référence, variantes anglais, français, allemand, espagnol, quantifications GGUF Q4/Q8, décodeur ONNX, streaming en GGUF. Chaque sortie porte un filigrane Perth. Contexte de 2048 tokens, environ 30 secondes d'audio.

## Comment c'est branché
```mermaid
flowchart LR
  T[Texte + référence] --> API["neutts.py NeuTTS"]
  API --> PH["phonemizers.py"]
  PH --> BB[Backbone LLM]
  BB --> CD[Codec NeuCodec]
  CD --> WM[Filigrane Perth]
  WM --> WAV[Waveform]
```

## Essayer
```bash
pip install neutts
python -m examples.basic_example \
  --input_text "My name is Andy. I'm 25 and I just moved to London." \
  --ref_audio samples/jo.wav \
  --ref_text samples/jo.txt
```

## Coût et pièges
Gratuit, tourne sur CPU ; llama-cpp-python à compiler pour les GGUF. Licences mixtes : Apache 2.0 pour Air, « NeuTTS Open License 1.0 » pour Nano et 2E, et GitHub ne reconnaît pas la licence du dépôt. Avec `uv sync`, le filigrane est désactivé.

## Ce que ce n'est pas
Pas un service hébergé. Les benchmarks ne comptent que le modèle de langage, pas le codec. Les sites neutts.com ne sont pas affiliés.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Adopter à l'essai : TTS local avec clonage, pip-installable, utile pour des agents vocaux ; vérifie d'abord la licence du modèle avant usage commercial.

