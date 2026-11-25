---
schema: 1
depot: AgOpenGPS-Official/AgOpenGPS
source_readme_sha: c92d11b9c397ba79
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: communauté
alertes: []
verdict: ignorer
---

# AgOpenGPS-Official/AgOpenGPS

> Logiciel de guidage et de cartographie de précision pour tracteurs, en mode maintenance, avec contrôle de sections.

## Le problème
Guider un tracteur sur un champ et éviter les recouvrements d'épandage demande un logiciel de positionnement.

## Ce que ça fait vraiment
Lit les trames NMEA d'un GPS, enregistre et cartographie la position. Produit des angles de direction par poursuite pure pour lignes AB, courbes AB et contours, gère les demi-tours automatiques et jusqu'à 16 sections de largeur propre, ou 64 de largeur égale. AgIO sert de relais de communication. Le développement WinForms est figé depuis avril 2026 : correctifs seulement, la suite est en Avalonia.

## Comment c'est branché
```mermaid
flowchart TD
  A["CNMEA.cs"] --> B["FormGPS.cs"]
  C["FormLoop.cs AgIO"] --> B
  B --> D["CGuidance.cs"]
  D --> E["CYouTurn.cs"]
  B --> F["CSection.cs"]
  B --> G["Fields.cs"]
```

## Essayer
```bash
dotnet publish SourceCode/AgOpenGPS.sln
# Installation : décompresser la release, lancer AgOpenGPS.exe
```

## Coût et pièges
Gratuit, mais le matériel (récepteur GPS, cartes et micrologiciels du dépôt PCB) est à ta charge. Se construit sous Visual Studio ; Windows en pratique.

## Ce que ce n'est pas
Pas une application de cartographie de rendement ni de télédétection. Plus de nouvelles fonctions sur cette version.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
Ignorer : agriculture embarquée en .NET figé, sans lien direct avec la data ou le MLOps.

