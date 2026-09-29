---
schema: 1
depot: charmbracelet/huh
source_readme_sha: 169ba3394d57a7db
ecrite_le: 2026-09-28
nature: bibliothèque
deploiement: compilation
prerequis: [Go]
cout: gratuit
maturite: éprouvé
gouvernance: entreprise
alertes: []
verdict: surveiller
---

# charmbracelet/huh

> Bibliothèque Go pour construire des formulaires et prompts interactifs dans le terminal.

## Le problème
Demander une saisie structurée en CLI mène vite à un empilement de `fmt.Scanln` et de validations maison. Rien pour les listes, la sélection multiple, la navigation ou l'accessibilité.

## Ce que ça fait vraiment
Un formulaire est un ensemble de groupes (pages) faits de champs : `Input`, `Text`, `Select`, `MultiSelect`, `Confirm`. Chaque champ lie une valeur Go via `.Value(&var)`, valide avec une fonction, et se lance avec `form.Run()`. Formulaires dynamiques : `TitleFunc`/`OptionsFunc` recalculent titre et options selon un champ précédent, avec cache. Mode accessible pour lecteurs d'écran, cinq thèmes, spinner intégré.

## Comment c'est branché
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

## Essayer
```go
huh.NewInput().
    Title("What's your name?").
    Value(&name).
    Run()
```

## Coût et pièges
Gratuit, aucune clé. Les `OptionsFunc` appelant une API doivent recevoir le bon binding sous peine d'appels répétés.

## Ce que ce n'est pas
Pas un framework TUI complet : pour plus de flexibilité, un `huh.Form` est un `tea.Model` à intégrer dans Bubble Tea. Pas de widgets graphiques hors terminal.

## Alternatives
- AlecAivazis/survey : l'inspiration de huh, plus ancien.
- charmbracelet/bubbletea : le socle TUI complet, quand le formulaire ne suffit pas.

## Pour toi
Utile pour des CLI internes d'outillage data/MLOps ; écosystème Go, à garder sous le coude si tu écris des outils en Go.
