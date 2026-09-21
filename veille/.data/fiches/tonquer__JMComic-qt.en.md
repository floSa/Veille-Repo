# tonquer/JMComic-qt

> **Qt desktop client to read and download online comics, for Windows, macOS and Linux.**

## The problem

Without this client you browse the target site in a web browser: no organised local
downloads, no offline reader, no image upscaling. The README never states the problem
other than through its feature list.

## What it actually does

The README claims "most" of the target site's features, and names two concrete uses:
viewing images and downloading them. The listed screenshots (login, search, comic detail,
download, reading) describe the application: a desktop client that authenticates, searches,
displays and fetches content. The UI is Qt, the code Python 3.9.13+. Image upscaling
(Waifu2x and relatives) shows up through its prerequisites: on Windows the Visual C++
redistributable and the Vulkan runtime are required or initialisation fails. The README
states the project is "for technical research only".

## How it is wired

```mermaid
graph LR
  U[Utilisateur] --> GUI[Interface Qt]
  GUI --> Login[Connexion et recherche]
  Login --> Site[Site distant]
  Site --> DL[Telechargement]
  DL --> Disk[(Fichiers locaux)]
  Disk --> Reader[Lecteur d images]
  Reader --> SR[Super resolution Vulkan]
```

No code-derived diagram exists for this repository: these nodes are inferred from the README
alone (features, Windows prerequisites, credited projects). The chain runs from the Qt UI to
the remote site, then to disk, with an optional super-resolution stage relying on external
ncnn/Vulkan binaries. Actual file names are not documented.

## Trying it

```bash
# macOS, if the file is reported as damaged
sudo xattr -r -d com.apple.quarantine /Applications/JMComic.app

# Deepin / UOS, missing Qt dependency
wget http://ftp.br.debian.org/debian/pool/main/x/xcb-util/libxcb-util1_0.4.0-1+b1_amd64.deb
sudo dpkg -i ./libxcb-util1_0.4.0-1+b1_amd64.deb
```

The normal path is not a command line: download the release, unzip it and run `start.exe`
on Windows, drag the `.dmg` into Applications on macOS, run the binary on Linux. Building
is only described as a pointer to the repository's GitHub Actions.

## Cost and traps

Nothing to pay and no API key in the README. The traps are elsewhere: on Windows you must
install the Visual C++ redistributable and the Vulkan runtime, otherwise Waifu2x fails with
a DLL error; on Deepin/UOS you install `libxcb-util1` by hand. Updating means overwriting
the directory with the newer release. The real cost is legal: the tool talks to a third-party
service whose availability and legality vary by country, and the README hedges with
"technical research only". The LGPL-3.0 licence is copyleft, which constrains reuse of the code.

## What it is not

It is neither a library nor an API: nothing is exposed for another program to import — for
scripting, the README itself points to JMComic-Crawler-Python. It is not a super-resolution
tool either: upscaling is delegated to waifu2x-ncnn-vulkan, Real-ESRGAN and
realcugan-ncnn-vulkan, merely bundled. And it is not a generic local comic reader: it is tied
to one specific site, so it can break overnight.

## Alternatives

- **ollm/OpenComic** (catalogue neighbour): a local, multi-format comic reader, preferable if
  you already own your files and do not want a site-bound client.
- **hect0x7/JMComic-Crawler-Python** (credited in the README): the Python fetching layer,
  preferable for automation without a GUI.
- **tonquer/picacg-qt** and **tonquer/ehentai-qt** (same author and architecture): the same
  application aimed at other sites.

## For you

No value for a data / AI / MLOps profile: nothing reusable in a pipeline, no model, no API.
The only technical interest is the cross-platform packaging of a PyQt app with bundled Vulkan
binaries and CI builds via GitHub Actions — worth reading as an example, not adopting. Skip it.
