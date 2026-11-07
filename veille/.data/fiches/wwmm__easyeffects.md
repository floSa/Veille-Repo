---
schema: 1
depot: wwmm/easyeffects
source_readme_sha: 10679ed3312d54dc
ecrite_le: 2026-11-07
nature: app
deploiement: autre
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# wwmm/easyeffects

> Application Linux d'effets audio (égaliseur, compresseur, réduction de bruit) pour PipeWire.

## Le problème
Appliquer des effets et nettoyer le son système (micro, sortie) sans traiter chaque application séparément.

## Ce que ça fait vraiment
Insère une chaîne d'effets ordonnable entre le matériel et les applications : égaliseur, compresseur, réverbération, débruitage RNNoise ou DeepFilterNet, correction de pitch, et plus de trente autres. Les effets reposent sur les greffons LADSPA et LV2. Interface en Qt/QML avec présets.

## Comment c'est branché
```mermaid
flowchart TD
  A["QML Kirigami"] --> B["local_client"]
  B --> C["local_server"]
  C --> D["pw_manager"]
  D --> E["PipeWire"]
  C --> F["plugin_base"]
  C --> G["presets_manager"]
```

## Essayer
Aucune commande dans le README : installation par le paquet de la distribution ou par Flatpak, compilation décrite sur le wiki.

## Coût et pièges
Gratuit. Plusieurs greffons externes (Linux Studio, Calf, RNNoise, etc.) ; le Flatpak les inclut. Ne pas définir les périphériques virtuels comme défaut.

## Ce que ce n'est pas
Pas un outil d'IA, malgré le débruitage neuronal. Le README alerte sur un site web usurpateur probablement frauduleux.

## Alternatives
Aucune alternative nommée dans le README.

## Pour toi
À ignorer : utilitaire audio Linux, sans rapport direct avec data, IA ou MLOps, hormis le nettoyage de micro pour tes enregistrements.

