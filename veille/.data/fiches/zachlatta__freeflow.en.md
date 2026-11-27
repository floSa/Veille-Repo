# zachlatta/freeflow

> Voice dictation for Mac with LLM cleanup, a free alternative to Wispr Flow, for those who dictate a lot.

## The problem
Dictation tools like Wispr Flow or Superwhisper are paid by subscription.

## What it actually does
You hold `Fn` to speak, the text is transcribed then cleaned up, and pasted into the active field. The cleanup can read the surrounding context to spell names and terms correctly; a custom vocabulary and an "edit mode" (rephrase a selection by voice) exist. Groq by default, or any OpenAI-compatible provider, including local ones (Ollama, LM Studio).

## How it is wired
```mermaid
flowchart LR
  A["Raccourci Fn"] --> B["Capture audio"]
  B --> C["API transcription (Groq ou local)"]
  C --> D["Nettoyage LLM + contexte"]
  D --> E["Collage dans l'app active"]
```

## Trying it
```bash
defaults write com.zachlatta.freeflow transcription_timeout_seconds -float 120
```
Installation: download the app, create a free Groq key at groq.com.

## Cost and gotchas
Free Groq key or your own provider. Audio and context are sent to that provider (no FreeFlow server). Default timeout of 20 s, too short for a local model.

## What it is not
Not offline by default: without a configured local model, everything goes through the API. The README does not discuss the provider's third-party license.

## Alternatives
Wispr Flow, Superwhisper, Monologue: cited as the paid tools that FreeFlow replaces.

## For you
Worth watching: handy for dictating your notes; use it with a local model only if confidentiality matters.
