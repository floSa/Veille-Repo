---
schema: 1
depot: ilysenko/codex-desktop-linux
source_readme_sha: ff0ae8f15b9c6996
ecrite_le: 2026-09-21
nature: app
deploiement: compilation
prerequis: [Node]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [mainteneur unique, télémétrie]
verdict: surveiller
---

# ilysenko/codex-desktop-linux

> Redistribution communautaire de l'application ChatGPT Linux d'OpenAI, avec des fonctions Linux optionnelles.

## Le problème
Le paquet Linux officiel ne propose ni RPM, ni pacman, ni AppImage, ni Nix.
Et certaines fonctions attendues sous Linux n'existent pas.

## Ce que ça fait vraiment
Vérifie et réempaquette la charge utile signée d'OpenAI vers deb, RPM, pacman, AppImage et Nix.
Sans fonction modifiant l'ASAR activée, `resources/app.asar` reste identique octet pour octet à l'officiel.
Une quarantaine de fonctions Linux, toutes désactivées par défaut : `computer-use-linux`, `global-dictation`,
`read-aloud`, `tray-usage`, `record-and-replay`, `frameless-titlebar`, chacune avec sa documentation.

## Comment c'est branché
```mermaid
flowchart LR
  APT[Index APT stable signé OpenAI] --> VER[Vérification clé puis SHA-256]
  VER --> APP[codex-app/]
  FEAT[linux-features/features.json] --> APP
  APP --> PKG[make deb / rpm / pacman / appimage]
  PKG --> INST[/opt/codex-desktop]
  INST --> UPD[codex-update-manager.service]
```

## Essayer
```bash
git clone https://github.com/ilysenko/codex-desktop-linux.git
cd codex-desktop-linux
make bootstrap-native
```

## Coût et pièges
Node.js 20+, Python 3, gpgv, dpkg-deb, chaîne C/C++ et Rust pour l'updater : la compilation est la voie normale.
Le lanceur envoie au plus un événement anonyme par jour à GoatCounter ; `CODEX_LINUX_DISABLE_USAGE_REPORTING=1` le coupe.

## Ce que ce n'est pas
Pas un projet OpenAI : non affilié, et la licence MIT ne couvre que l'enrobage, pas l'application.
Pas un déverrouillage de fonctions : les déploiements côté serveur restent contrôlés par OpenAI.
Les paquets officiel et communautaire partagent le profil `Codex` : ne pas les lancer en même temps.

## Alternatives
Le paquet `chatgpt` officiel d'OpenAI, dont ce dépôt réutilise intégralement la charge utile.

## Pour toi
Pertinent seulement si tu veux ChatGPT desktop sur ta distribution ; la télémétrie est honnête et désactivable.
