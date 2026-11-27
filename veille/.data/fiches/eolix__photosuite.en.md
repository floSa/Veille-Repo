# eolix/photosuite

> Desktop image editor in Rust, modeled on Photoshop, with PSD/PSB reading and writing, for designers.

## The problem
Opening, editing and saving PSDs without paying Adobe, with already familiar tools.

## What it actually does
Native editor (egui on wgpu, CPU fallback): layers, masks, layer styles, smart objects, filters, Camera Raw, 38 languages. Scriptable: `photosuite-cli` CLI, JSON control channel and MCP server, WebAssembly plug-ins. The README describes full PSD round-tripping as "work in progress".

## How it is wired
The provided diagram describes a Tauri/JS version, whereas the README says the project is now in Rust: inconsistency, see below.
```mermaid
flowchart LR
    A["App controller (app-controller.js)"] --> B["File loading (file-loader.js)"]
    B --> C["PSD/PSB codec (psd-parser.js)"]
    C --> D["Document model (document.js)"]
    D --> E["Layer system (layer-system.js)"]
    E --> F["Filters and adjustments"]
```

## Trying it
```bash
cargo run --release -p photosuite
cargo test --workspace
sudo apt install ./photosuite-<version>-linux-<arch>.deb
```

## Cost and gotchas
Free, no account or telemetry. Building: Rust 1.90+ and several system libraries on Linux. Stated as not affiliated with Adobe.

## What it is not
Not a replacement for GIMP or Affinity, nor a complete Photoshop clone. PSD fidelity not finished. The GitDiagram diagram (Tauri/JS) does not match the current README (Rust).

## Alternatives
No alternative named (GIMP and Affinity are cited only as what the project is not).

## For you
Ignore for your data/AI/MLOps profile: it is a graphics editor, off-topic; only the MCP server is of marginal interest.
