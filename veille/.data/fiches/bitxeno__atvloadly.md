---
schema: 1
depot: bitxeno/atvloadly
source_readme_sha: e1c9e662ce8d6937
ecrite_le: 2026-09-30
nature: service
deploiement: docker
prerequis: [Docker, compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# bitxeno/atvloadly

> Service web pour installer et rafraîchir des apps sur Apple TV par sideloading, sous Linux ou OpenWrt.

## Le problème
Installer hors App Store une app IPA sur Apple TV expire vite avec un compte gratuit et demande une machine Apple.

## Ce que ça fait vraiment
Service Go avec interface Vue : découverte et appairage de l'Apple TV, installation d'un IPA via Impactor (cœur de sideloading), rafraîchissement automatique planifié, plusieurs comptes Apple ID, suivi de sources (releases GitHub, sources AltStore). Il expose `/healthcheck` et un point d'accès `/mcp` pour qu'un agent installe ou rafraîchisse des apps.

## Comment c'est branché
```mermaid
flowchart LR
  WEB["Web interface (App.vue)"] --> API["HTTP API (router.go)"]
  API --> PAIR["Device pairing (pair_manager.go)"]
  API --> INST["Sideload engine (install_manager.go)"]
  INST --> SRC["Source tracking (app_source.go)"]
  API --> TASK["Refresh scheduler (task.go)"]
  API --> MCP["MCP endpoint (server.go)"]
  API --> DB["Database (db.go)"]
```

## Essayer
```bash
docker run --security-opt seccomp:unconfined -d --name=atvloadly --restart=always -p 5533:80 -v /path/to/mount/dir:/data -v /var/run/dbus:/var/run/dbus -v /var/run/avahi-daemon:/var/run/avahi-daemon bitxeno/atvloadly:latest
```
(`avahi-daemon` doit être installé sur l'hôte.)

## Coût et pièges
Gratuit. Le README recommande un Apple ID jetable (« burned account ») et un téléphone pour le 2FA ; risques de gel de compte reconnus. Compte gratuit : 3 apps actives maximum.

## Ce que ce n'est pas
Ne fonctionne ni sous Mac ni sous Windows. Une mise à jour du système Apple TV impose un nouvel appairage ; les IPA exigeant CloudKit plantent avec un compte gratuit.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : utilitaire de divertissement sans lien avec data/IA/MLOps, avec un risque sur ton compte Apple.

