# studyzy/imewlconverter

> Dictionary converter for Chinese input method editors, for users switching tools.

## The problem
The personal dictionaries of Chinese input method editors (Sogou, QQ, Rime, Google, Baidu) each have their own format, with no way to move from one to another.

## What it actually does
It converts between more than 50 editors and formats, in batches, through a Windows graphical interface or the command line. For example, it reads Sogou `.scel` dictionaries and writes text, Rime or Google. Length or type filters and `.scel` metadata can be configured.

## How it is wired
```mermaid
flowchart LR
  A["Fichier de dictionnaire : scel, qpyd, bdict"] --> B["ImeWlConverterCmd"]
  B --> C["Filtres : len, rm"]
  C --> D["Format de sortie : sgpy, ggpy, rime"]
  D --> E["Fichier converti"]
```

## Trying it
```bash
git clone https://github.com/studyzy/imewlconverter.git
cd imewlconverter
dotnet build src/ImeWlConverterCmd
dotnet src/ImeWlConverterCmd/bin/Debug/net10.0/ImeWlConverterCmd.dll -i scel -o sgpy -O output.txt input.scel
```

## Cost and gotchas
Free, GPL-3.0 license (copyleft). It needs the .NET 10 SDK or later, outside the standard list of prerequisites. Since version 3.0.0, arguments follow the GNU style (migration guide available). On Windows, the graphical version does not handle redirections.

## What it is not
It is not an input method editor or a translation tool: it only converts word files. The documentation is in Chinese.

## Alternatives
No alternative named in the README.

## For you
Ignore: a utility specialized in Chinese input dictionaries, unrelated to data, AI or MLOps.
