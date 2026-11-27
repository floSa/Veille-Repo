# charmbracelet/huh

> Go library for building interactive forms and prompts in the terminal.

## The problem
Asking for structured input in a CLI quickly turns into a pile of `fmt.Scanln` calls and home-made validation. Nothing for lists, multiple selection, navigation or accessibility.

## What it actually does
A form is a set of groups (pages) made of fields: `Input`, `Text`, `Select`, `MultiSelect`, `Confirm`. Each field binds a Go value via `.Value(&var)`, validates with a function, and is launched with `form.Run()`. Dynamic forms: `TitleFunc`/`OptionsFunc` recompute the title and options based on a previous field, with caching. Accessible mode for screen readers, five themes, built-in spinner.

## How it is wired
```mermaid
flowchart TD
    F[huh.NewForm] --> G1[NewGroup]
    G1 --> S[NewSelect]
    G1 --> M[NewMultiSelect]
    G1 --> C[NewConfirm]
    S --> V[Value &var]
    F --> R[form.Run]
    F -.tea.Model.-> BT[Bubble Tea]
```

## Trying it
```go
huh.NewInput().
    Title("What's your name?").
    Value(&name).
    Run()
```

## Cost and gotchas
Free, no key. `OptionsFunc` callbacks that call an API must be given the right binding, otherwise they trigger repeated calls.

## What it is not
Not a full TUI framework: for more flexibility, a `huh.Form` is a `tea.Model` to embed in Bubble Tea. No graphical widgets outside the terminal.

## Alternatives
- AlecAivazis/survey: the inspiration for huh, older.
- charmbracelet/bubbletea: the full TUI foundation, when the form is not enough.

## For you
Useful for internal data/MLOps tooling CLIs; Go ecosystem, worth keeping in your back pocket if you write tools in Go.
