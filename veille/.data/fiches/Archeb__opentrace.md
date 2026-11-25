---
schema: 1
depot: Archeb/opentrace
source_readme_sha: 36b7d923ca09f00d
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft]
verdict: ignorer
---

# Archeb/opentrace

> Interface graphique multiplateforme pour visualiser un traceroute, enveloppant l'outil NextTrace.

## Le problème
Lire un traceroute en ligne de commande est peu parlant, surtout pour localiser les sauts sur une carte.

## Ce que ça fait vraiment
Fournit une interface native (WPF sous Windows, GTK sous Linux, macOS) qui lance NextTrace et affiche les résultats, avec MTR, résolveurs DNS personnalisés (DNS, DoH), bases MMDB locales et cartes. Six langues, ligne de commande pour lancer une trace.

## Comment c'est branché
```mermaid
flowchart TD
  GUI["MainForm.cs"] --> P["Program.cs"]
  P --> W["NextTraceWrapper.cs"]
  W --> X["NextTrace (exécutable)"]
  W --> T["Traceroute.cs"]
  T --> I["IPDB.cs"]
  W --> M["googleMap.js / baiduMap.js"]
```

## Essayer
```bash
dotnet restore OpenTrace.csproj
dotnet build OpenTrace.csproj --runtime linux-x64 --configuration Release --self-contained -f net8.0
```
Sinon, télécharger la version depuis le site ou les releases.

## Coût et pièges
Gratuit. NextTrace doit être présent à côté de l'application (ou choisi dans les réglages). Sous Windows, Npcap est requis pour TCP/UDP. Licence GPL-3.0.

## Ce que ce n'est pas
Ce n'est pas un moteur de traceroute : toute la mesure vient de NextTrace.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : diagnostic réseau ponctuel, hors de tes sujets data, IA ou MLOps.

