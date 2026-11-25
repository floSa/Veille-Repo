---
schema: 1
depot: ldoubil/astral
source_readme_sha: 2193a232d9df5a65
ecrite_le: 2026-11-25
nature: app
deploiement: binaire
prerequis: [compte à créer]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence à vérifier]
verdict: ignorer
---

# ldoubil/astral

> Application réseau multiplateforme pour créer des réseaux privés virtuels pair à pair, basée sur EasyTier.

## Le problème
Relier des machines éloignées dans un réseau privé demande de configurer VPN, relais et pare-feu.

## Ce que ça fait vraiment
Interface Flutter au-dessus d'un moteur Rust (EasyTier, WireGuard). Gestion de salons, de serveurs, d'utilisateurs, paramètres réseau et pare-feu Magic Wall. Un plugin VPN natif et flutter_rust_bridge relient le Dart au Rust. Windows, macOS, Linux, Android, iOS. README en chinois, anglais pour les chaînes de l'interface.

## Comment c'est branché
```mermaid
flowchart TD
  MD["lib/main.dart"] --> RP["room_page.dart"]
  RP --> SCM["server_connection_manager.dart"]
  SCM --> VM["vpn_manager.dart"]
  VM --> VP["vpn_service_plugin.dart"]
  SCM --> P2D["rust/api/p2p.dart"]
  P2D --> P2R["rust/src/api/p2p.rs"]
```

## Essayer
```bash
# Aucune commande dans le README : voir la documentation du projet (astral.fan).
```

## Coût et pièges
Gratuit pour un usage non commercial seulement : licence PolyForm Noncommercial 1.0.0, non reconnue automatiquement par GitHub. Interdit de renommer le logiciel.

## Ce que ce n'est pas
Pas un logiciel libre au sens usuel : usage commercial interdit. Pas un outil data.

## Alternatives
Aucune alternative nommée dans le README (il repose sur EasyTier).

## Pour toi
À ignorer : VPN pair à pair sans lien avec ton métier, et licence non commerciale incompatible avec un usage pro.

