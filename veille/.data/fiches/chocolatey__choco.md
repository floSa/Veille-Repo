---
schema: 1
depot: chocolatey/choco
source_readme_sha: b18702deb3bd0943
ecrite_le: 2026-11-07
nature: outil
deploiement: binaire
prerequis: [version de Python]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: [licence à vérifier]
verdict: ignorer
---

# chocolatey/choco

> Gestionnaire de paquets en ligne de commande pour Windows, façon apt-get ou yum.

## Le problème
Installer et mettre à jour des logiciels Windows à la main, sans commande unique ni script reproductible.

## Ce que ça fait vraiment
La commande `choco` résout des sources de paquets (format NuGet), installe, met à jour ou supprime, puis `refreshenv` recharge les variables d'environnement. Édition libre ; des éditions commerciales existent avec leur propre support.

## Comment c'est branché
```mermaid
flowchart TD
  U(("Utilisateur")) --> C["CLI entry (Program.cs)"]
  C --> CMD["Commands"]
  CMD --> N["Package operations (NugetService.cs)"]
  N --> SRC["Package sources"]
  N --> INS["Installer handlers"]
  N --> F[("Package repository")]
```

## Essayer
```bash
choco.exe --help
choco.exe install --help
./build.sh   # compilation hors Windows, via Mono
```

## Coût et pièges
Gratuit en édition libre. Exige .NET Framework 4.8+ et PowerShell 2.0+. Windows uniquement ; la compilation Mono est décrite comme rugueuse.

## Ce que ce n'est pas
Pas un outil Linux/macOS (ports non officiels). Les paquets du dépôt communautaire sont maintenus par des bénévoles.

## Alternatives
- winget : cité dans le README d'EarTrumpet comme autre client de paquets Windows.

## Pour toi
Ignorer si tu travailles sous Linux ou en MLOps conteneurisé ; utile seulement pour outiller un poste Windows.

