---
schema: 1
depot: Guovin/TV
source_readme_sha: 48a51cc4dd7e629e
ecrite_le: 2026-09-29
nature: outil
deploiement: docker
prerequis: [Docker, version de Python]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique, licence non déclarée]
verdict: ignorer
---

# Guovin/TV

> Outil qui agrège des sources IPTV, teste leur vitesse et génère des playlists M3U ou TXT.

## Le problème
Les listes de chaînes IPTV changent et beaucoup de liens sont morts ou lents.

## Ce que ça fait vraiment
Collecte de sources locales et d'abonnements, normalisation des noms de chaînes (alias), tests de débit, latence et résolution avec FFmpeg, filtrage des publicités, sortie M3U/TXT, EPG, logos, RTMP. GUI bureau Windows/macOS, ligne de commande, Docker, GitHub Actions manuel. Ne fournit aucune source.

## Comment c'est branché
```mermaid
flowchart LR
  UI[Desktop UI] --> U[Update controller]
  U --> S[Source collection]
  S --> A[Channel aggregation]
  A --> Q[Stream testing]
  Q --> R[Playlist artifacts]
  R --> H[HTTP service]
```

## Essayer
```bash
docker pull guovern/iptv-api:latest
docker run -d -p 80:8080 guovern/iptv-api
```

## Coût et pièges
La licence est AGPL-3.0 selon le README (catalogue : non déclarée) : obligation de publier les sources en cas de service réseau modifié. Le README avertit sur les droits de diffusion, surtout pour le RTMP.

## Ce que ce n'est pas
Pas un fournisseur de chaînes ; pas de rapport avec la data ou l'IA. Le README est identique à celui de Guovin/IPTV (dépôt renommé ou doublon).

## Alternatives
- Aucune alternative nommée dans le README.

## Pour toi
À ignorer : outil de télévision personnelle sans lien avec ton métier, avec un risque juridique sur le contenu.
