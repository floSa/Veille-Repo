---
schema: 1
depot: ublue-os/bluefin
source_readme_sha: 8073e3547108bbee
ecrite_le: 2026-11-25
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: surveiller
---

# ublue-os/bluefin

> Système de bureau Linux immuable basé sur Fedora, avec outils de conteneurs intégrés pour développeurs.

## Le problème
Maintenir un poste Linux fiable, à jour et prêt pour les conteneurs demande de la configuration manuelle.

## Ce que ça fait vraiment
Image de système d'exploitation atomique construite par un Containerfile et des workflows GitHub Actions, en deux variantes : base et « dx » pour développeurs (Docker, Incus, libvirt, VFIO, VS Code préconfiguré). Des hooks de premier démarrage gèrent thème, Tailscale, Flatpak et matériel Framework. Images signées par cosign.

## Comment c'est branché
```mermaid
flowchart TD
  node_containerfile["Containerfile"] --> node_build_script["build.sh"]
  node_build_script --> node_build_base["build_files/base"]
  node_build_script --> node_build_dx["build_files/dx"]
  node_system_shared["system_files/shared"] --> node_hooks_shared["Hooks de premier démarrage"]
  node_release_pipeline["Workflows GitHub Actions"] --> node_cosign_pub["cosign.pub"]
```

## Essayer
```bash
ujust enroll-secure-boot-key
```
L'installation est décrite sur projectbluefin.io.

## Coût et pièges
Gratuit. Il faut installer un système complet ; Secure Boot demande d'enrôler une clé, mot de passe `universalblue` indiqué dans le README.

## Ce que ce n'est pas
Pas un paquet à ajouter à un système existant : c'est un système entier. Pas orienté GPU ou ML en soi, rien n'est documenté à ce sujet.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Surveiller : intéressant pour un poste de dev conteneurisé stable, mais à adopter seulement si tu veux changer de système.

