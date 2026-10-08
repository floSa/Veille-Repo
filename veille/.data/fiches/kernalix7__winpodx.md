---
schema: 1
depot: kernalix7/winpodx
source_readme_sha: 4d5977117684fcf1
ecrite_le: 2026-10-08
nature: outil
deploiement: pip
prerequis: [Docker, beaucoup de RAM, version de Python]
cout: gratuit
maturite: expérimental
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# kernalix7/winpodx

> Lance des applications Windows comme fenêtres Linux natives via FreeRDP RemoteApp sur un conteneur Windows.

## Le problème
Utiliser Word ou d'autres applis Windows sous Linux sans dual boot ni bureau Windows plein écran.

## Ce que ça fait vraiment
- Provisionne Windows 11 dans Podman ou Docker (dockur/windows), découvre les applis et crée des entrées de bureau.
- Chaque appli s'ouvre dans sa propre fenêtre ; presse-papiers, audio, imprimantes et dossier personnel partagés.
- Met la VM en pause à l'inactivité ; GUI, tray, passthrough USB/PCI.
- Statut « Beta », v0.11.0 ; Python 3.10 minimum.

## Comment c'est branché
```mermaid
flowchart LR
  CLI["CLI (main.py)"] --> SET["Setup wizard (setup_cmd.py)"]
  SET --> PRO["Provisioning (provisioner.py)"]
  PRO --> POD["Container backend (podman.py)"]
  CLI --> RDP["FreeRDP sessions (rdp.py)"]
  RDP --> POD
  CLI --> ENT["Desktop entries (entry.py)"]
```

## Essayer
```bash
curl -fsSL https://raw.githubusercontent.com/kernalix7/winpodx/main/install.sh | bash
winpodx setup
winpodx app run word
winpodx gui
```

## Coût et pièges
Virtualisation matérielle (VT-x/AMD-V, KVM), 8 Go de RAM (12 recommandés), disque Windows de 64 Go plus ISO. Une licence Windows reste à ta charge. Installation par `curl | bash`.

## Ce que ce n'est pas
Pas de l'émulation Wine : une vraie VM Windows tourne en arrière-plan. Pas pour GPU lourd.

## Alternatives
Le README cite winapps, LinOffice, winboat et Wine (fichier COMPARISON.md).

## Pour toi
À surveiller : pratique si tu dois ouvrir des outils Windows depuis un poste Linux, mais coûteux en ressources et encore en bêta.

