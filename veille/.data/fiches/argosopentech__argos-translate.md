---
schema: 1
depot: argosopentech/argos-translate
source_readme_sha: 1e3a48e8d963a503
ecrite_le: 2026-09-29
nature: bibliothèque
deploiement: pip
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: adopter
---

# argosopentech/argos-translate

> Bibliothèque Python de traduction automatique hors ligne, basée sur OpenNMT et CTranslate2.

## Le problème
Traduire des données sensibles ou en masse via des API cloud coûte cher et fait sortir les données.

## Ce que ça fait vraiment
Installe des paquets de modèles `.argosmodel` par paire de langues et traduit localement.
Pivot automatique par une langue intermédiaire (es → en → fr) quand la paire directe manque.
Pré/post-traitement : tokenisation, BPE, découpage en phrases, préservation des balises.
Python, CLI, GUI séparée ; GPU optionnel via `ARGOS_DEVICE_TYPE`. Base de LibreTranslate.

## Comment c'est branché
```mermaid
flowchart LR
  CLI[cli.py] --> T[translate.py]
  PM[argospm.py] --> PK[package.py]
  PK --> N[networking.py]
  T --> MD[models.py]
  T --> TK[tokenizer.py / sbd.py]
  T --> CT[CTranslate2]
```

## Essayer
```bash
pip install argostranslate
argospm update
argospm install translate-en_de
argos-translate --from en --to de "Hello World!"
```

## Coût et pièges
Gratuit, MIT ; téléchargement initial des modèles. Le pivot dégrade la qualité.
Qualité inférieure aux grands services commerciaux sur certaines paires.

## Ce que ce n'est pas
Pas un LLM : traduction neuronale classique.
Pas une API web (c'est LibreTranslate).

## Alternatives
- LibreTranslate : API et appli web construites dessus.
- translate-html, argos-translate-files : pour HTML et fichiers.

## Pour toi
À adopter pour traduire des corpus en local dans tes pipelines NLP : léger, hors ligne, licence permissive.
