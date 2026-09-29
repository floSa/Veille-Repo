---
schema: 1
depot: Guovin/iptv-api
source_readme_sha: 48a51cc4dd7e629e
ecrite_le: 2026-09-29
nature: outil
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: ignorer
---

# Guovin/iptv-api

> Outil d'agrégation et de test de sources IPTV générant des playlists M3U/TXT.

## Le problème
Les listes de chaînes IPTV sont éparpillées, souvent mortes ou lentes ; les trier à la main est fastidieux.

## Ce que ça fait vraiment
Collecte sources locales et abonnements, normalise les noms (7 254 alias), teste latence, débit, résolution.
Filtre publicités et placeholders, applique listes noires/blanches, génère M3U/TXT et EPG.
Sert les résultats par HTTP, restream RTMP optionnel via FFmpeg/Nginx.
Exécutable en GUI desktop, CLI (pipenv), Docker ou GitHub Actions.

## Comment c'est branché
```mermaid
flowchart LR
  OP[Operator] --> MAIN[main.py]
  MAIN --> REQ[request.py]
  REQ --> CH[channel.py]
  CH --> AGG[aggregator.py]
  AGG --> SP[speed.py]
  SP --> ART[artifacts.py]
  ART --> APP[app.py]
```

## Essayer
```bash
docker compose up -d
docker run -d -p 80:8080 guovern/iptv-api
pipenv install --dev
pipenv run dev
```

## Coût et pièges
Gratuit ; aucune source fournie. AGPL-3.0 selon le README : obligation de publier le code si service réseau. Risques juridiques de diffusion non autorisée soulignés par l'auteur.

## Ce que ce n'est pas
Pas un fournisseur de contenus. README majoritairement en chinois.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : hors périmètre data/IA et juridiquement sensible.
