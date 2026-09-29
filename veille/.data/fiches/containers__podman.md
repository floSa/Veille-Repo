---
schema: 1
depot: containers/podman
source_readme_sha: a4bd359952bca786
ecrite_le: 2026-09-29
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: adopter
---

# containers/podman

> Outil sans démon pour gérer conteneurs OCI, images et pods, y compris sans droits root.

## Le problème
Docker impose un démon privilégié ; on veut des conteneurs rootless, compatibles avec les outils existants.

## Ce que ça fait vraiment
CLI compatible Docker qui gère images (pull, build via Buildah, push), cycle de vie des conteneurs (checkpoint via CRIU), pods, volumes, réseau (Netavark, pasta en rootless) et une API REST à deux surfaces (Docker-compatible et native). Sur Mac et Windows, `podman machine` lance une VM. Quadlet génère des unités systemd. Versions majeures 4 fois par an, seule la dernière est supportée.

## Comment c'est branché
```mermaid
flowchart LR
  A["podman CLI (main.go)"] --> B["Domain model"]
  B --> C["ABI engine"]
  B --> D["Tunnel client"]
  C --> E["Runtime core"]
  E --> F["OCI launch"]
  D --> G["API server"]
```

## Essayer
```bash
podman run quay.io/podman/hello
```

## Coût et pièges
Gratuit. Le rootless demande un peu de configuration admin (subuid/subgid). Mac et Windows passent par une VM. Ne gère pas la signature/push spécialisés (Skopeo) ni le CRI Kubernetes (CRI-O). Licence non renseignée au catalogue.

## Ce que ce n'est pas
Pas un orchestrateur : les pods sont locaux. Les conteneurs Podman et Buildah ne se voient pas entre eux.

## Alternatives
Le README nomme Buildah (construction d'images), Skopeo (signature, push), CRI-O (CRI Kubernetes) et Podman Desktop (interface).

## Pour toi
Adopter : remplace Docker sans démon pour des builds et exécutions rootless en CI ou sur poste, avec une API compatible.
