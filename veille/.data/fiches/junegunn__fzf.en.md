# junegunn/fzf

> Interactive command-line filter: you pick a file, a command or a line by typing a few letters.

## The problem
Finding a file, a history command or a branch in a terminal means retyping whole paths or chaining `grep` calls.

## What it actually does
fzf reads a list from standard input, displays a fuzzy-matching selector and writes the chosen item to the output. It integrates with bash, zsh, fish and Nushell (CTRL-T, CTRL-R, ALT-C, `**` completion) and with Vim/Neovim. Options (`--preview`, `--bind reload/become`) let you turn it into small interactive tools.

## How it is wired
```mermaid
graph LR
    A[Entrée standard ou reader.go] --> B[algo et pattern.go]
    B --> C[result.go]
    C --> D[terminal.go et tui]
    D --> E[Sélection en sortie]
    F[shell et plugin] --> D
```

## Trying it
```bash
brew install fzf
eval "$(fzf --bash)"
find * -type f | fzf > selected
fzf --bind 'enter:become(vim {})'
```

## Cost and gotchas
No cost. The shell integration shortcut must be enabled by hand (`eval "$(fzf --bash)"` or equivalent). Do not put `--preview` in `FZF_DEFAULT_OPTS`: the README advises against it.

## What it is not
Not an indexed search engine: it filters what you send it. It replaces neither `ripgrep` nor `fd`, it plugs into them.

## Alternatives
No alternative named in the README (pointer to the "Related projects" wiki).

## For you
Adopt: as soon as you work in a terminal on servers or repositories, it saves time at no cost.
