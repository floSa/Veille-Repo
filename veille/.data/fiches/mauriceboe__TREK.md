---
schema: 1
depot: mauriceboe/TREK
source_readme_sha: 064a3ececdbc8c4b
ecrite_le: 2026-11-07
nature: app
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# mauriceboe/TREK

> Planificateur de voyages auto-hébergé, collaboratif, avec carte, budget, journal et assistant IA optionnel.

## Le problème
Organiser un voyage éparpille itinéraires, réservations, frais partagés et souvenirs dans plusieurs outils.

## Ce que ça fait vraiment
Planning par jour sur carte en temps réel (WebSocket), réservations, coûts partagés, listes, journal, album photo, calendrier de congés. Des modules s'activent ou non, dont un assistant IA et un serveur MCP, désactivés par défaut. Mode hors-ligne en PWA, plugins sandboxés, 28 langues. Backend NestJS.

## Comment c'est branché
```mermaid
flowchart TD
  pwa["PWA navigateur"] --> ws["WebSocket /ws"]
  pwa --> api["Backend NestJS"]
  api --> addons["Addons (admin on/off)"]
  addons --> mcp["MCP /mcp (off)"]
  addons --> ai["Assistant IA (off)"]
  api --> store[("data / uploads")]
```

## Essayer
```bash
ENCRYPTION_KEY=$(openssl rand -hex 32) docker run -d --name trek -p 3000:3000 \
  -e ENCRYPTION_KEY=$ENCRYPTION_KEY \
  -e COOKIE_SECURE=false \
  -v ./data:/app/data -v ./uploads:/app/uploads mauriceboe/trek
```

## Coût et pièges
Gratuit en auto-hébergement. Reverse proxy avec WebSocket requis en production, HTTPS pour la PWA. La recherche de lieux repose sur des serveurs sponsorisés par dataforest cloud. L'IA exige ta propre clé.

## Ce que ce n'est pas
Pas un outil data ou IA : une application grand public de voyage. Le dépôt date de mars 2026.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer pour le travail data/MLOps : sans rapport avec ton métier, sauf usage personnel.

