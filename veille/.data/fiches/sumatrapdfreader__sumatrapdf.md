---
schema: 1
depot: sumatrapdfreader/sumatrapdf
source_readme_sha: a2d39e3fb927fc5b
ecrite_le: 2026-11-07
nature: app
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# sumatrapdfreader/sumatrapdf

> Lecteur Windows léger de PDF, EPUB, MOBI, CBZ, CBR, FB2, CHM, XPS et DjVu.

## Le problème
Ouvrir plusieurs formats de documents sous Windows sans application lourde.

## Ce que ça fait vraiment
Lit neuf formats. D'après le code, des moteurs distincts (PDF et XPS, ebooks, images et archives, DjVu) partagent une interface commune. Un aperçu PDF Windows est proposé. Le README ne détaille pas l'usage.

## Comment c'est branché
Schéma d'après le diagramme du code, simplifié.

```mermaid
flowchart TD
    APP["SumatraPDF app"] --> TYPES["GuessFileType.h"]
    PDF["EngineMupdf.cpp"] --> BASE["EngineBase.h"]
    EBOOK["EngineEbook.cpp"] --> BASE
    IMG["EngineImages.cpp"] --> BASE
    DJVU["EngineDjvuDec.cpp"] --> BASE
    APP -.-> PREVIEW["PdfPreview.cpp"]
```

## Essayer
Aucune commande documentée dans le README : site web et manuel.

## Coût et pièges
Gratuit, pour Windows seulement. Licence (A)GPLv3 avec une partie BSD. Compilation non décrite dans le README.

## Ce que ce n'est pas
Pas un éditeur de PDF. Pas multiplateforme. Le README est minimal.

## Alternatives
Aucune nommée dans le README.

## Pour toi
À ignorer : simple lecteur de documents Windows, sans valeur pour un pipeline data / IA, sauf usage personnel.

