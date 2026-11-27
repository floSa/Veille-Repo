# AlexxIT/go2rtc

> Multi-protocol camera stream gateway, for self-hosted home automation and video surveillance.

## The problem
Each camera speaks its own protocol and each browser accepts different codecs.
Bridging the two means constant transcoding and latency.

## What it actually does
A single dependency-free application that ingests dozens of formats (RTSP, ONVIF, RTMP, WebRTC,
HomeKit, proprietary protocols from Tapo, Ring, Wyze, Nest…) and outputs WebRTC, MP4/MSE, HLS, MJPEG,
RTSP. It automatically negotiates codecs between sources and client ("multi-source two-way codec
negotiation"), only transcodes through FFmpeg when needed, handles two-way audio and repackages
PCMA/PCMU as FLAC for MSE/MP4/HLS.

## How it is wired
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

## Trying it
```bash
chmod +x go2rtc_xxx_xxx
# puis ouvrir http://localhost:1984/
```
```yaml
streams:
  hall-camera: rtsp://admin:password@192.168.1.123/cam/realmonitor?channel=1&subtype=0
```

## Cost and gotchas
Free. By default ports 1984, 8554 and 8555 are open to the local network without authentication:
anyone on the LAN can see your cameras. The README is explicit: if an attacker reaches the API,
they can go through the `echo` and `exec` sources and get full access to the server. Protect it
with `allow_paths`, `local_auth`, or a reverse proxy.

## What it is not
Not an NVR nor a detection engine: no recording or embedded AI. Frigate handles that and consumes go2rtc.
No built-in complex transcoding either, that is delegated to FFmpeg.

## Alternatives
The README cites its inspirations rather than competitors: `rtsp-simple-server` by @aler9,
the streaming projects by @deepch, and the webrtc library by the @pion team.

## For you
Outside the data/AI scope, unless you feed a computer vision pipeline from heterogeneous
cameras, in which case it is the cheapest entry brick.
