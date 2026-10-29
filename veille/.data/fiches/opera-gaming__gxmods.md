---
schema: 1
depot: opera-gaming/gxmods
source_readme_sha: ec7d932fddfa5e68
ecrite_le: 2026-10-29
nature: doc
deploiement: rien à installer
prerequis: [compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: entreprise
alertes: [licence non déclarée, dernier commit ancien, dépend d'un SaaS]
verdict: ignorer
---

# opera-gaming/gxmods

> Documentation et exemples pour créer des mods Opera GX : thèmes, sons, fonds d'écran, shaders.

## Le problème
Personnaliser le navigateur Opera GX au-delà des réglages demande un format de mod et un circuit de publication.

## Ce que ça fait vraiment
Explique les couches d'un mod : musique, sons de clavier et du navigateur, fond d'écran, thème, modification de pages web, shaders. Donne un gabarit, des tutoriels vidéo et la marche pour charger un mod non empaqueté ou produire un .CRX. La publication passe par GX.store via GX.create.

## Comment c'est branché
```mermaid
graph TD
  T[Mod_Template] --> M[manifest.json]
  M --> L[chargement opera:extensions]
  M --> CRX[paquet .CRX]
  M --> S[GX.store via GX.create]
```

## Essayer
Étapes du README, sans commande shell :
1. Ouvrir `opera:extensions`, activer le mode développeur.
2. Cliquer sur Load unpacked et pointer le dossier du manifest.json.

## Coût et pièges
Gratuit. Compte nécessaire pour publier sur GX.store. Aucune licence déclarée ; 272 issues ouvertes.

## Ce que ce n'est pas
Pas un outil de développement web général : spécifique à Opera GX.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : personnalisation de navigateur sans lien avec la data ou l'IA.

