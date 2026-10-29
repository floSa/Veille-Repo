---
schema: 1
depot: olikraus/u8g2
source_readme_sha: 3e26c4e3b04150a9
ecrite_le: 2026-10-29
nature: bibliothèque
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence à vérifier, mainteneur unique]
verdict: ignorer
---

# olikraus/u8g2

> Bibliothèque graphique pour écrans monochromes OLED et LCD de systèmes embarqués.

## Le problème
Piloter des dizaines de contrôleurs d'écran monochromes demande un code différent pour chacun.

## Ce que ça fait vraiment
Gère un grand nombre de contrôleurs (SSD1306, SH1106, ST7920…). U8g2 offre les primitives graphiques et de nombreuses polices avec tampon en mémoire ; U8x8 écrit du texte directement, sans tampon. Installable via le gestionnaire de bibliothèques Arduino.

## Comment c'est branché
```mermaid
graph TD
  SK[Sketch Arduino] --> U8G2[U8g2 graphique]
  SK --> U8X8[U8x8 texte]
  U8G2 --> CTRL[Contrôleur écran]
  U8X8 --> CTRL
```

## Essayer
```bash
# installation via le gestionnaire de bibliothèques de l'Arduino IDE
```

## Coût et pièges
Gratuit ; le mode U8g2 demande de la RAM microcontrôleur. Licence non identifiée par GitHub.

## Ce que ce n'est pas
Pas une bibliothèque pour écrans couleur.

## Alternatives
Aucune alternative nommée.

## Pour toi
Ignorer : embarqué, hors data/IA/MLOps (sauf projet Edge avec écran).

