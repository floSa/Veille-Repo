# atelier-anchor/smiley-sans

> Chinese typeface "得意黑" (Smiley Sans), narrow and slanted, for posters, headlines and video subtitles.

## The problem
Common Chinese fonts lack character for headlines, posters and on-screen text.

## What it actually does
Provides a typeface in a hand-drawn lettering style, with 8,335 Chinese characters (GB/T 2312-1980 and the List of Commonly Used Standard Chinese Characters), Latin, Cyrillic, Greek, kana, digits and punctuation. Four files: `.otf`, `.ttf` for desktop, `.woff2` for the web. OpenType features: fractions, tabular figures, stylistic variants.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.
```mermaid
flowchart TD
    Release["Releases GitHub"] --> Files["otf, ttf, woff2"]
    Files --> Desktop["Installation bureau"]
    Files --> Web["Police web"]
    Actions["GitHub Actions"] --> Dev["Version de développement"]
```

## Trying it
```bash
brew install font-smiley-sans
yay -S ttf-smiley-sans
```

## Cost and gotchas
Free, SIL OFL 1.1 license. Last push in December 2024. The letterforms do not strictly follow the normative mainland China writing.

## What it is not
Not a typeface for body text, code or mobile interfaces: the README advises against these uses.

## Alternatives
No alternative named in the README.

## For you
Ignore: a display typeface unrelated to data / AI work, except for visuals in Chinese.
