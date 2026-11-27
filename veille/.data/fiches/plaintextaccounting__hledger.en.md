# plaintextaccounting/hledger

> Plain-text double-entry accounting software, on the command line, for individuals and technical users.

## The problem
Accounting software locks your data in an opaque format, with no versioning or scripting.

## What it actually does
- Keeps the books in a versionable plain-text journal file, multi-currency, precise to 255 decimals.
- Produces reports (balance sheet, income statement) in text, HTML, JSON or SQL.
- Imports and exports CSV; partly compatible with Ledger, convertible with Beancount.
- Interfaces: CLI, terminal, web; scriptable through CLI, HTTP or API. Haskell code.

## How it is wired
```mermaid
graph LR
  A[fichier journal texte] --> B[moteur hledger]
  C[CSV importé] --> B
  B --> D[hledger bs / is]
  B --> E[UI terminal / web]
  B --> F[export JSON / SQL / HTML]
```

## Trying it
```bash
hledger bs
hledger is --monthly
```

## Cost and gotchas
Free. Interfaces described as basic; single main maintainer. Same README and same figures as simonmichael/hledger (same repository seen under another name, identical stars and dates).

## What it is not
Not a turnkey graphical accounting package nor an AI tool. The installation commands are not in the provided README.

## Alternatives
Ledger CLI and Beancount: cited as compatible or convertible.

## For you
Keep an eye on it: useful for finances in versioned text, outside the data/AI scope; probable duplicate of simonmichael/hledger in the catalog.
