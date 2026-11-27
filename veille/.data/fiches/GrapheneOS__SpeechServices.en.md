# GrapheneOS/SpeechServices

> Local text-to-speech service for GrapheneOS, based on a Matcha-TTS model running on the device.

## The problem
A phone's speech synthesis often goes through a cloud service. Here the text stays on the device.

## What it actually does
The README is only a few lines long: a speech synthesis engine for GrapheneOS, with a faster fork of Matcha-TTS, a phonemizer written in Kotlin inspired by Misaki, and Apache OpenNLP for text preprocessing. The rest is not documented.

## How it is wired
Simplified diagram based on the fiche, no diagram provided.

```mermaid
flowchart LR
  A["Texte"] --> B["Prétraitement OpenNLP"]
  B --> C["Phonémiseur Kotlin"]
  C --> D["Fork Matcha-TTS"]
  D --> E["Audio sur l'appareil"]
```

## Trying it
No command documented in the README.

## Cost and gotchas
Installation is not documented. It targets GrapheneOS, so a compatible phone.

## What it is not
It is not a Python TTS library. The README material is too thin to judge the languages, quality or model size.

## Alternatives
No alternative named in the README.

## For you
Watch: if you work on embedded TTS, the Matcha-TTS fork is worth a look, but nothing is documented to evaluate it.
