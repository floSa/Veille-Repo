---
schema: 1
depot: anchore/syft
source_readme_sha: b072fd6c75f6ba75
ecrite_le: 2026-11-12
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: adopter
---

# anchore/syft

> Outil CLI et bibliothèque Go qui génère un SBOM à partir d'images de conteneurs et de systèmes de fichiers.

## Le problème
Impossible d'auditer ou de scanner ce qui est installé dans une image sans inventaire fiable des paquets.

## Ce que ça fait vraiment
Détecte les paquets de dizaines d'écosystèmes (apk, dpkg, RPM, Go, Python, Java, JavaScript, Rust…) dans des images OCI, Docker, Singularity, des répertoires et des archives. Exporte en CycloneDX, SPDX ou JSON Syft, convertit entre formats et crée des attestations signées (in-toto). Fonctionne de pair avec Grype pour la détection de vulnérabilités.

## Comment c'est branché
```mermaid
flowchart TD
  U["Syft User"] --> SC["Scan Command (scan.go)"]
  SC --> SRC["Source Acquisition (get_source.go)"]
  SRC --> EX["Cataloging Executor (executor.go)"]
  EX --> DOC["SBOM Document (create_sbom.go)"]
  SC --> ENC["Format Encoders (encoders.go)"]
  ENC --> OUT["SBOM Consumer"]
```

## Essayer
```bash
curl -sSfL https://get.anchore.io/syft | sudo sh -s -- -b /usr/local/bin
syft alpine:latest
syft <image> -o cyclonedx-json
syft <image> -o spdx-json=./spdx.json -o cyclonedx-json=./cdx.json
```

## Coût et pièges
Gratuit. Le script d'installation passe par `sudo` : à lire avant. Pour scanner des images locales Podman, il faut `--from containers-storage`.

## Ce que ce n'est pas
Pas un scanner de vulnérabilités : il fait l'inventaire, c'est Grype qui évalue les failles.

## Alternatives
Grype, du même éditeur, prend le relais pour les vulnérabilités (complément, pas concurrent).

## Pour toi
À adopter : étape de base pour la chaîne d'approvisionnement logicielle de tes images ML, facile à brancher en CI.

