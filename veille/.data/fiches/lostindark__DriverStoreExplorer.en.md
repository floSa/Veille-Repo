# lostindark/DriverStoreExplorer

> Windows utility to list, back up and delete drivers from the DriverStore.

## The problem
The Windows drivers folder grows with old versions, and managing them by hand is risky.

## What it actually does
WinForms application (.NET Framework 4.7.2+, administrator rights): lists driver packages with their metadata, installs, exports, deletes (including by force) and selects old versions or drivers with no device. Choice of backends: native API, DISM or PnPUtil; online mode or offline image; CSV export.

## How it is wired
```mermaid
flowchart LR
  UI["WinForms UI (DSEForm)"] --> RP["DriverStoreRepository"]
  RP --> F["IDriverStore (factory)"]
  F --> NA["NativeDriverStore"]
  F --> DI["DismUtil"]
  F --> PN["PNPUtil"]
  UI --> CS["CSVExporter"]
```

## Trying it
```powershell
winget install lostindark.DriverStoreExplorer
rapr
```

## Cost and gotchas
Free. Careless deletion can stop Windows from booting; the README requires making a backup first.

## What it is not
Not a safe tool for beginners: "no device" does not mean "useless". Automatic selection is disabled in offline mode.

## Alternatives
No alternative named in the README.

## For you
Unrelated to data/AI; only useful if you need to free up space on a Windows machine, with a backup.
