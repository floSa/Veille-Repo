---
schema: 1
depot: R3gm/SoniTranslate
source_readme_sha: 0f221b84899ff8a0
ecrite_le: 2026-09-29
nature: app
deploiement: pip
prerequis: [GPU, compte à créer, version de Python]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# R3gm/SoniTranslate

> Interface Gradio qui traduit et doublle une vidéo dans une autre langue, avec transcription, TTS et synchronisation.

## Le problème
Doubler une vidéo dans une autre langue demande d'enchaîner extraction audio, transcription, traduction, synthèse vocale et remontage.

## Ce que ça fait vraiment
Une application web locale (`app_rvc.py`, port 7860) qui reçoit une vidéo, transcrit avec WhisperX et faster-whisper, segmente les locuteurs (pyannote), traduit, génère la voix (Piper, Coqui XTTS, edge-tts, OpenAI en option) puis remixe avec FFmpeg. Une option `--cpu_mode` existe.

## Comment c'est branché
```mermaid
graph LR
A["Gradio UI app_rvc.py"] --> B["Extraction audio FFmpeg"]
B --> C["ASR WhisperX"]
C --> D["Traduction"]
D --> E["TTS Piper ou XTTS"]
E --> F["Conversion de voix"]
F --> G["Vidéo synchronisée"]
```

## Essayer
```bash
conda create -n sonitr python=3.10 -y
conda activate sonitr
git clone https://github.com/r3gm/SoniTranslate.git
cd SoniTranslate
pip install -r requirements_base.txt -v
pip install -r requirements_extra.txt -v
export YOUR_HF_TOKEN="YOUR_HUGGING_FACE_TOKEN"
python app_rvc.py
```

## Coût et pièges
CUDA 11.8, compte Hugging Face avec licences pyannote acceptées et jeton de lecture. Une clé OpenAI facultative est facturée à ton compte. Le README teste Linux uniquement.

## Ce que ce n'est pas
Pas une API ni un service : un outil local avec 119 issues ouvertes. Le README mélange « SoniTranslate » et « SonyTranslate » et s'ouvre sur une publicité pour Recall.ai.

## Alternatives
Aucune alternative nommée ; les projets cités sont ses dépendances.

## Pour toi
Surveiller : chaîne ASR + TTS intéressante à étudier, mais mainteneur unique et installation lourde (CUDA, jetons, versions figées).

