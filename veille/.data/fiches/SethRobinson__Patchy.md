---
schema: 1
depot: SethRobinson/Patchy
source_readme_sha: 8a4b0e3859dbcefe
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique]
verdict: ignorer
---

# SethRobinson/Patchy

> Éditeur d'images libre compatible PSD, sur Windows, macOS, Linux et navigateur, pour graphistes.

## Le problème
Ouvrir et enregistrer des PSD en gardant textes, masques, styles et objets dynamiques éditables, sans Photoshop.

## Ce que ça fait vraiment
Éditeur C++ avec calques, pinceaux, sélections, vecteurs, filtres (dont G'MIC), import d'Affinity, Krita, GIMP, OpenRaster, Paint.NET et PDF. Il offre un moteur JavaScript, un traitement par lot et un connecteur MCP local pour piloter l'éditeur par un agent IA. Les outils OpenAI optionnels utilisent ta clé.

## Comment c'est branché
```mermaid
flowchart TD
  A["main.cpp"] --> B["Editor UI"]
  B --> C["document.cpp"]
  C --> D["layer_tree.cpp"]
  B --> E["filter_engine.cpp"]
  A --> F["Format I/O"]
  G["mcp_server.cpp"] --> H["script_engine.cpp"]
  H --> C
```

## Essayer
```bash
flatpak install --user https://rtsoft.com/flatpak/com.rtsoft.patchy.flatpakref
flatpak run com.rtsoft.patchy
```

## Coût et pièges
Gratuit. Les fonctions OpenAI Image Tools sont facturées sur ton compte OpenAI avec ta clé. Les mises à jour contactent GitHub. Pas d'accélération GPU ; édition en RGB seulement.

## Ce que ce n'est pas
Pas un clone complet de Photoshop : CMYK limité à l'épreuvage et à l'export, import Affinity avec limites. Développé avec une aide importante d'outils IA, selon l'auteur.

## Alternatives
Aucune alternative nommée dans le README comme remplaçant ; il se compare à Photoshop sur la compatibilité PSD.

## Pour toi
À ignorer : outil de retouche d'image, seul le connecteur MCP touche à l'IA et il ne sert pas ton travail data.

