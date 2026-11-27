# ilysenko/codex-desktop-linux

> Community redistribution of OpenAI's ChatGPT Linux application, with optional Linux features.

## The problem
The official Linux package offers no RPM, pacman, AppImage or Nix.
And some features expected on Linux do not exist.

## What it actually does
Verifies and repackages OpenAI's signed payload into deb, RPM, pacman, AppImage and Nix.
With no ASAR-modifying feature enabled, `resources/app.asar` stays byte-for-byte identical to the official one.
About forty Linux features, all disabled by default: `computer-use-linux`, `global-dictation`,
`read-aloud`, `tray-usage`, `record-and-replay`, `frameless-titlebar`, each with its own documentation.

## How it is wired
```mermaid
flowchart LR
  APT[Index APT stable signé OpenAI] --> VER[Vérification clé puis SHA-256]
  VER --> APP[codex-app/]
  FEAT[linux-features/features.json] --> APP
  APP --> PKG[make deb / rpm / pacman / appimage]
  PKG --> INST[/opt/codex-desktop]
  INST --> UPD[codex-update-manager.service]
```

## Trying it
```bash
git clone https://github.com/ilysenko/codex-desktop-linux.git
cd codex-desktop-linux
make bootstrap-native
```

## Cost and gotchas
Node.js 20+, Python 3, gpgv, dpkg-deb, a C/C++ toolchain and Rust for the updater: compiling is the normal route.
The launcher sends at most one anonymous event per day to GoatCounter; `CODEX_LINUX_DISABLE_USAGE_REPORTING=1` turns it off.

## What it is not
Not an OpenAI project: unaffiliated, and the MIT license covers only the wrapper, not the application.
Not a feature unlocker: server-side rollouts remain controlled by OpenAI.
The official and community packages share the `Codex` profile: do not run them at the same time.

## Alternatives
OpenAI's official `chatgpt` package, whose payload this repository reuses in full.

## For you
Relevant only if you want ChatGPT desktop on your distribution; the telemetry is honest and can be disabled.
