---
schema: 1
depot: glzr-io/glazewm
source_readme_sha: 28190f8650c75e7f
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: communauté
alertes: [licence copyleft]
verdict: ignorer
---

# glzr-io/glazewm

> Gestionnaire de fenêtres en mosaïque pour Windows, inspiré d'i3, piloté au clavier.

## Le problème
Windows range mal les fenêtres : organiser plusieurs écrans à la souris prend du temps.

## Ce que ça fait vraiment
Place les fenêtres en mosaïque, par espaces de travail, avec raccourcis clavier configurables en YAML. Applique des règles par fenêtre (processus, classe, titre), des écarts, des bordures (Windows 11 seulement) et des modes de liaison. S'intègre à Zebar comme barre d'état. Écrit en Rust avec un IPC local.

## Comment c'est branché
```mermaid
flowchart TD
    OS["Windows OS"] --> Plat["wm-platform (Win32, COM)"]
    Plat --> Wm["packages/wm (main.rs, wm.rs)"]
    Cli["wm-cli"] --> Ipc["ipc_server.rs"]
    Ipc --> Wm
    Wm --> Cfg["user_config.rs (YAML)"]
    Watch["wm-watcher"] -.-> Wm
```

## Essayer
```bash
winget install GlazeWM
choco install glazewm
scoop bucket add extras
scoop install extras/glazewm
./glazewm.exe start --config="C:\<PATH_TO_CONFIG>\config.yaml"
```

## Coût et pièges
Gratuit. Windows uniquement. Le README note que la touche Windows est difficile à remapper : il recommande Alt. Pas de mise en page automatique native. 428 issues ouvertes.

## Ce que ce n'est pas
Ce n'est pas un gestionnaire pour Linux ou macOS, ni une surcouche graphique complète : sans barre d'état Zebar, il n'y a pas d'affichage intégré.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Confort de poste de travail sous Windows, sans lien avec data/IA/MLOps : à ignorer pour la veille, mais pertinent si tu travailles en multi-écrans sous Windows.

