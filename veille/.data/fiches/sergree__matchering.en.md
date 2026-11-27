# sergree/matchering

> Python library that masters a track by matching it to a reference track.

## The problem
Getting the same sonic character as a reference track takes a mastering engineer or tweaking by ear.

## What it actually does
You provide a target track and a reference. The algorithm adjusts RMS level, frequency response, peak amplitude and stereo width, then applies a home-made "Hyrax" limiter, and writes the results as 16- or 24-bit PCM. It also exists as a Docker image, a ComfyUI node and a UVR5 integration; those integrations are not in this repository.

## How it is wired
```mermaid
flowchart LR
  A["Public API (__init__.py)"] --> B["Input validation (checker.py)"]
  B --> C["Audio loading (loader.py)"]
  C --> D["Processing coordinator (core.py)"]
  D --> E["Mastering stages (stages.py)"]
  E --> F["Hyrax limiter (hyrax.py)"]
  F --> G["Audio export (saver.py)"]
```

## Trying it
```bash
sudo apt update && sudo apt -y install libsndfile1
python3 -m pip install -U matchering
```
```python
import matchering as mg
mg.process(target="my_song.wav", reference="some_popular_song.wav",
           results=[mg.pcm16("my_song_master_16bit.wav")])
```
The Docker sections (Windows, macOS, Linux) are empty in the provided README.

## Cost and gotchas
Free; 4 GB of RAM and Python 3.8+ required; FFmpeg optional for MP3.

## What it is not
Not a generic "AI mastering": the result depends on the choice of reference. GPL-3.0 license: restrictive for embedded use.

## Alternatives
No alternative named in the README.

## For you
Worth watching: an audio signal-processing curiosity, outside the data/MLOps core; the GPL limits reuse.
