---
schema: 1
depot: Furglitch/modorganizer2-linux-installer
source_readme_sha: 0bcff6515398e114
ecrite_le: 2026-11-25
nature: outil
deploiement: binaire
prerequis: [compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft]
verdict: ignorer
---

# Furglitch/modorganizer2-linux-installer

> Installeur en ligne de commande de Mod Organizer 2 sous Linux, via Proton.

## Le problème
Installer Mod Organizer 2 sous Linux demande Proton, Wine, un gestionnaire NXM et de nombreux contournements par jeu.

## Ce que ça fait vraiment
`mo2-lint install` configure Proton, télécharge MO2, enregistre les outils de compatibilité et le gestionnaire NXM de Nexus Mods. Plusieurs instances par jeu, extenseurs de scripts, plugins et thèmes en option. Réécrit en Python à partir d'un script Bash.

## Comment c'est branché
```mermaid
flowchart TD
  A["mo2-lint/__init__.py"] --> B["command/install.py"]
  H["configs/game_info.yml"] --> D["step/load_game_info.py"]
  B --> D
  D --> E["step/configure_prefix.py"]
  E --> F["step/external_resources.py"]
  F --> G["step/launch_opt.py"]
  G --> K["src/nxm-handler/__init__.py"]
```

## Essayer
```bash
mo2-lint install
```

## Coût et pièges
Gratuit. Le téléchargement depuis Nexus Mods suppose un compte. Les détails d'installation sont sur docs.furglitch.com, pas dans le README.

## Ce que ce n'est pas
Pas un gestionnaire de mods lui-même : il installe celui de Windows sous Proton.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : outil de modding de jeux vidéo sous Linux, hors de ton périmètre data / IA / MLOps.

