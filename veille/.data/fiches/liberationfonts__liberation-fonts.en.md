# liberationfonts/liberation-fonts

> Free fonts metrically compatible with Times New Roman, Arial and Courier New, for document layout.

## The problem
An Office document opened without the Microsoft fonts reflows and shifts; fonts with equivalent dimensions are needed.

## What it actually does
Provides the sources of the Liberation Fonts collection, which aims at layout compatibility with Times New Roman, Arial and Courier New. A `make` generates the TTF files from the sources (fontforge and fonttools). Installation consists of copying the TTFs to `~/.fonts` or `/usr/share/fonts/liberation` and then running `fc-cache`.

## How it is wired
```mermaid
graph LR
  A[Sources] --> B[make]
  B --> C[fontforge + fonttools]
  C --> D[liberation-fonts-ttf-VERSION]
  D --> E[~/.fonts ou /usr/share/fonts]
  E --> F[fc-cache]
```

## Trying it
```bash
git clone https://github.com/liberationfonts/liberation-fonts.git
cd liberation-fonts
make
# puis copier les TTF dans ~/.fonts et lancer fc-cache
```

## Cost and gotchas
Free. fontforge and python fonttools are needed to build. The README details installation only for Fedora.

## What it is not
Not a data or AI tool. The README declares the SIL Open Font License 1.1, but GitHub does not recognize the repository's license. Last push in December 2022.

## Alternatives
No alternative named in the README.

## For you
Ignore for data / AI watch: this is system typography, useful only if you need Microsoft-compatible fonts, and the package is already provided by most distributions.
