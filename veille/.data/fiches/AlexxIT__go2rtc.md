---
schema: 1
depot: AlexxIT/go2rtc
source_readme_sha: f7837bed3f21951a
ecrite_le: 2026-09-28
nature: outil
deploiement: binaire
prerequis: [aucun]
cout: gratuit
maturite: éprouvé
gouvernance: une personne
alertes: [mainteneur unique]
verdict: surveiller
---

# AlexxIT/go2rtc

> Passerelle de flux caméra multi-protocoles, pour domotique et vidéosurveillance auto-hébergées.

## Le problème
Chaque caméra parle son protocole et chaque navigateur accepte d'autres codecs.
Relier les deux impose du transcodage permanent et de la latence.

## Ce que ça fait vraiment
Application unique sans dépendances qui ingère des dizaines de formats (RTSP, ONVIF, RTMP, WebRTC,
HomeKit, protocoles privés Tapo, Ring, Wyze, Nest…) et ressort en WebRTC, MP4/MSE, HLS, MJPEG,
RTSP. Elle négocie automatiquement les codecs entre sources et client (« multi-source two-way codec
negotiation »), ne transcode via FFmpeg que si nécessaire, gère l'audio bidirectionnel et remballe
PCMA/PCMU en FLAC pour MSE/MP4/HLS.

## Comment c'est branché
```mermaid
flowchart LR
  cams[caméras RTSP / ONVIF / Tapo] --> streams[module streams]
  cfg[go2rtc.yaml] --> streams
  streams --> neg[négociation de codecs]
  neg --> ffmpeg[FFmpeg si nécessaire]
  neg --> webrtc[WebRTC :8555]
  neg --> rtsp[serveur RTSP :8554]
  neg --> api[API + WebUI :1984]
```

## Essayer
```bash
chmod +x go2rtc_xxx_xxx
# puis ouvrir http://localhost:1984/
```
```yaml
streams:
  hall-camera: rtsp://admin:password@192.168.1.123/cam/realmonitor?channel=1&subtype=0
```

## Coût et pièges
Gratuit. Par défaut les ports 1984, 8554 et 8555 sont ouverts au réseau local sans authentification :
n'importe qui sur le LAN voit tes caméras. Le README est explicite — si un attaquant atteint l'API,
il peut passer par les sources `echo` et `exec` et obtenir un accès complet au serveur. Protéger
via `allow_paths`, `local_auth`, ou un reverse proxy.

## Ce que ce n'est pas
Ce n'est pas un NVR ni un moteur de détection : pas d'enregistrement ni d'IA embarquée — Frigate
s'en charge et consomme go2rtc. Pas de transcodage complexe intégré non plus, c'est délégué à FFmpeg.

## Alternatives
Le README cite ses inspirations plutôt que des concurrents : `rtsp-simple-server` de @aler9,
les projets de streaming de @deepch, et la bibliothèque webrtc de l'équipe @pion.

## Pour toi
Hors du périmètre data/IA, sauf si tu alimentes un pipeline de vision par ordinateur depuis des
caméras hétérogènes — c'est alors la brique d'entrée la plus économique.
