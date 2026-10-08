---
schema: 1
depot: Coldcard/firmware
source_readme_sha: 0b93802ba3d7c398
ecrite_le: 2026-10-08
nature: outil
deploiement: compilation
prerequis: [Docker, version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: surveiller
---

# Coldcard/firmware

> Micrologiciel du portefeuille matériel Bitcoin Coldcard, avec simulateur et builds reproductibles.

## Le problème
Un portefeuille matériel doit pouvoir être audité : le binaire sur l'appareil doit correspondre au code source.

## Ce que ça fait vraiment
Code MicroPython/C du portefeuille : PIN, secrets, signature PSBT, multisig, sauvegardes, USB, avec simulateur de bureau. Builds reproductibles via Docker. Un avis de sécurité en tête signale qu'une mauvaise entropie a affecté les secrets générés de 2021 à juillet 2026, avec des versions minimales de confiance listées.

## Comment c'est branché
```mermaid
flowchart LR
    A["Firmware startup (main.py)"] --> B["PIN login (pincodes.py)"]
    A --> C["Wallet actions (actions.py)"]
    C --> D["Action authorization (auth.py)"]
    D --> E["Transaction signing (psbt.py)"]
    D --> F["Secret handling (stash.py)"]
```

## Essayer
```bash
git clone --recursive https://github.com/Coldcard/firmware.git
cd firmware/stm32
make -f MK4-Makefile repro
cd unix && ./simulator.py
```

## Coût et pièges
Docker et make pour la reproduction ; compilation longue (sous-modules). Chemin sans espace obligatoire. Licence présente mais non identifiée par GitHub : à vérifier.

## Ce que ce n'est pas
Pas un logiciel à installer pour utiliser le portefeuille. L'avis de sécurité impose de régénérer les secrets créés avec les versions antérieures aux niveaux indiqués.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À surveiller seulement si tu as un Coldcard (lire l'avis de sécurité d'abord) ; hors périmètre data/IA.

