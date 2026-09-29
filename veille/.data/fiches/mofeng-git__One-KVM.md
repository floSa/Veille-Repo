---
schema: 1
depot: mofeng-git/One-KVM
source_readme_sha: a58e1a8d7f293894
ecrite_le: 2026-09-29
nature: outil
deploiement: docker
prerequis: [Docker]
cout: gratuit
maturite: utilisable
gouvernance: une personne
alertes: [licence copyleft, mainteneur unique]
verdict: ignorer
---

# mofeng-git/One-KVM

> Solution IP-KVM légère en Rust pour piloter à distance un serveur ou un poste, jusqu'au BIOS.

## Le problème
Dépanner une machine sans système démarré exige un accès physique à écran, clavier et alimentation.

## Ce que ça fait vraiment
Un binaire Rust avec interface web : capture vidéo (HDMI USB, MIPI CSI, RK3588), flux MJPEG ou WebRTC (H.264, H.265, VP8, VP9), encodage matériel ou logiciel, clavier et souris via USB OTG ou CH340/CH9329, média virtuel (ISO, Ventoy), contrôle d'alimentation ATX par GPIO ou relais USB, audio Opus. Le code décrit aussi une API Redfish et un module « computer use ». Le README est en chinois.

## Comment c'est branché
```mermaid
flowchart LR
    WEB[Console web - App.vue] --> GW[API HTTP/WebSocket - routes.rs]
    GW --> VID[Video Stream Manager]
    GW --> HID[HID Controller]
    GW --> MSD[Virtual Media]
    GW --> ATX[ATX Controller]
    GW --> CFG[Configuration Store]
```

## Essayer
```bash
sudo apt update
sudo apt install ./one-kvm_0.x.x_<arch>.deb
docker run --name one-kvm -itd \
  --privileged=true --restart unless-stopped \
  -v /dev:/dev -v /sys:/sys \
  --net=host \
  silentwind0/one-kvm-full
```

## Coût et pièges
Matériel spécifique de capture et de contrôle à prévoir. Le conteneur tourne en mode privilégié avec `/dev` et `/sys` montés et le réseau hôte : à isoler. Documentation détaillée sur un site externe.

## Ce que ce n'est pas
Ce n'est pas un logiciel de bureau à distance : il agit au niveau matériel. La version Python est abandonnée, remplacée par la version Rust.

## Alternatives
Aucune alternative nommée dans le README ; l'ancienne version Python est citée comme abandonnée.

## Pour toi
À ignorer sauf si tu gères un parc de machines physiques (homelab, GPU) à dépanner à distance : hors périmètre data/IA.

