# freeok/so-novel

> Java tool to download web novel content and export it as EPUB, TXT or PDF.

## The problem
Reading novels published on websites offline requires fetching and converting them by hand.

## What it actually does
Extracts chapters from web sources using rule files, then exports them as EPUB, TXT, HTML or PDF. Three modes: TUI, CLI and web interface. Install scripts exist for Windows, Linux, Homebrew, Scoop and Docker. README in Chinese.

## How it is wired
```mermaid
flowchart LR
  M["Main"] --> A["SearchAndDownloadAction"]
  A --> C["Crawler"]
  C --> P["BookParser / TocParser"]
  P --> V["ChapterConverter"]
  V --> H["EpubMergeHandler"]
```

## Trying it
```bash
bash <(curl -sSL https://raw.githubusercontent.com/freeok/so-novel/main/bin/linux-install.sh)
brew install so-novel
docker run -d --name sonovel -p 7765:7765 -e JAVA_OPTS='-Dmode=web' ghcr.io/freeok/sonovel:latest
```

## Cost and gotchas
Free. The README requires reading a legal disclaimer; remote scripts are run via `curl | bash`. AGPL-3.0 license.

## What it is not
Not a data tool: it scrapes copyrighted content, which puts the responsibility on you.

## Alternatives
- No alternative named in the README.

## For you
Ignore: outside the data/AI scope, with a legal risk tied to the collected content.
