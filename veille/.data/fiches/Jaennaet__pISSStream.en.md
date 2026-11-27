# Jaennaet/pISSStream

> Apple app showing the ISS urine tank level live, a technical joke for the curious.

## The problem
No business problem: the author openly admits it is a deliberately absurd project to learn Swift.

## What it actually does
Connects to NASA's public telemetry stream via Lightstreamer (WebSocket) and shows the fill percentage in the macOS menu bar, and on iOS, watchOS and visionOS. Displays "Connecting" or "No Signal" if the stream goes down. The author admits minimal error handling.

## How it is wired
```mermaid
flowchart LR
  N["NASA ISS Telemetry Service"] --> L["Lightstreamer Service"]
  L --> S["PissSocket (WebSocket)"]
  S --> V["AppStateViewModel"]
  V --> U["Menu bar item (PissLabel.swift)"]
```

## Trying it
```bash
git clone https://github.com/Jaennaet/pISSStream.git
cd pISSStream
open pISSStream.xcodeproj
```
On macOS, the README says to download the DMG from the releases.

## Cost and gotchas
Free. iOS, watchOS and visionOS require Xcode 15.2+ and an Apple developer account (or a free 7-day profile). Last push in September 2025.

## What it is not
Not a serious monitoring tool, and not a usable data source: the author refuses to add other metrics.

## Alternatives
iss-mimic (Mimic), cited in the README, offers far more statistics.

## For you
Ignore: Apple gadget with no data, AI or MLOps use, and inactive for more than a year.
