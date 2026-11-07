---
schema: 1
depot: xM4ddy/OFGB
source_readme_sha: ad30f8007ec736dd
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [dernier commit ancien, mainteneur unique]
verdict: ignorer
---

# xM4ddy/OFGB

> Petit outil Windows 11 qui modifie le registre pour désactiver les publicités du système.

## Le problème
Une mise à jour d'avril 2024 a ajouté des publicités dans l'Explorateur, le menu Démarrer et d'autres endroits de Windows 11.

## Ce que ça fait vraiment
L'application C# avec interface WPF change certaines clés du registre Windows pour couper ces publicités. Clés et commentaires viennent du script de Shawn Brink.

## Comment c'est branché
Schéma simplifié d'après la fiche, sans diagramme fourni.
```mermaid
flowchart LR
  A["Interface WPF"] --> B["Clés du registre Windows"]
  B --> C["Publicités Windows 11 désactivées"]
```

## Essayer
```bash
git clone https://github.com/xM4ddy/OFGB
```

## Coût et pièges
Gratuit. Compilation avec Visual Studio et le SDK .NET 8.0, ou version publiée. Dernier push en septembre 2024. Ne télécharger que depuis GitHub.

## Ce que ce n'est pas
Ce n'est pas un nettoyeur de système complet : il touche seulement des clés de registre liées aux publicités. Windows uniquement.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : réglage de confort Windows, sans rapport avec un travail data / IA / MLOps.

