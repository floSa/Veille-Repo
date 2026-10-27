---
schema: 1
depot: winsiderss/systeminformer
source_readme_sha: 76e8255bd9310099
ecrite_le: 2026-10-27
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: ignorer
---

# winsiderss/systeminformer

> Moniteur de ressources et débogueur de processus pour Windows, portable.

## Le problème
Savoir quel processus bloque un fichier, consomme CPU, disque ou réseau, ou se comporte comme un malware.

## Ce que ça fait vraiment
Vue détaillée des processus avec graphes, fichiers verrouillés, connexions réseau, accès disque, traces de pile (noyau, WOW64, .NET), gestion avancée des services. Un pilote noyau (KSystemInformer) et des plugins (ExtendedTools, NetworkTools…) étendent le noyau applicatif.

## Comment c'est branché
```mermaid
flowchart LR
  Core["SystemInformer (Core Application)"] --> Kernel["KSystemInformer (Kernel Driver)"]
  Core --> Libs["phlib / kphlib / phnt"]
  Plugins["ExtendedTools / NetworkTools"] --> Core
```

## Essayer
```bash
build\build_init.cmd
build\build_release.cmd
```

## Coût et pièges
Gratuit, MIT. Compilation avec Visual Studio 2022+. Windows 10 ou plus uniquement. Le pilote noyau requiert des droits élevés.

## Ce que ce n'est pas
Pas un outil Linux ni un EDR. Pas de télémétrie documentée.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : outil Windows de diagnostic système, utile ponctuellement mais sans lien avec data/IA.

