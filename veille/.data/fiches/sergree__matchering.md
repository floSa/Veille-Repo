---
schema: 1
depot: sergree/matchering
source_readme_sha: e5df7c0780cb0ed0
ecrite_le: 2026-10-05
nature: bibliothèque
deploiement: pip
prerequis: [version de Python, beaucoup de RAM]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: surveiller
---

# sergree/matchering

> Bibliothèque Python qui masterise un morceau en l'alignant sur un morceau de référence.

## Le problème
Obtenir le même rendu sonore qu'un titre de référence demande un ingénieur de mastering ou des réglages à l'oreille.

## Ce que ça fait vraiment
Tu fournis un morceau cible et une référence. L'algorithme ajuste niveau RMS, réponse en fréquence, amplitude crête et largeur stéréo, puis applique un limiteur « Hyrax » maison, et écrit les résultats en PCM 16 ou 24 bits. Il existe aussi en image Docker, nœud ComfyUI et intégration UVR5 ; ces intégrations ne sont pas dans ce dépôt.

## Comment c'est branché
```mermaid
flowchart LR
  A["Public API (__init__.py)"] --> B["Input validation (checker.py)"]
  B --> C["Audio loading (loader.py)"]
  C --> D["Processing coordinator (core.py)"]
  D --> E["Mastering stages (stages.py)"]
  E --> F["Hyrax limiter (hyrax.py)"]
  F --> G["Audio export (saver.py)"]
```

## Essayer
```bash
sudo apt update && sudo apt -y install libsndfile1
python3 -m pip install -U matchering
```
```python
import matchering as mg
mg.process(target="my_song.wav", reference="some_popular_song.wav",
           results=[mg.pcm16("my_song_master_16bit.wav")])
```
Les sections Docker (Windows, macOS, Linux) sont vides dans le README fourni.

## Coût et pièges
Gratuit ; 4 Go de RAM et Python 3.8+ requis ; FFmpeg en option pour le MP3.

## Ce que ce n'est pas
Pas un « mastering par IA » générique : le résultat dépend du choix de la référence. Licence GPL-3.0 : contraignante en usage embarqué.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller : curiosité de traitement du signal audio, hors du cœur data/MLOps ; la GPL limite la réutilisation.

