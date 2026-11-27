# mgechev/revive

> Configurable and extensible Go linter, a drop-in replacement for golint.

## The problem
golint is frozen: not configurable, slow, with no way to disable it by comment over a range of lines.

## What it actually does
Runs more than 90 rules configurable through a TOML file, with severity, confidence level and per-rule exclusions. `//revive:disable` directives per line or range, formatters (default, friendly, stylish, JSON, NDJSON, Checkstyle, SARIF), adjustable exit codes. Can be used as a library to add your own rules. The README claims a 2x speedup over golint with type checking, up to 6x without.

## How it is wired
```mermaid
flowchart LR
  D[Développeur Go] --> MN["main.go"]
  MN --> CF["config.go"]
  MN --> RN["core.go lint runner"]
  RN --> PK["package.go"]
  PK --> RL["rule.go + règles"]
  RL --> FM["friendly.go / sarif.go"]
```

## Trying it
```bash
brew install revive
go install github.com/mgechev/revive@latest
revive -config revive.toml -formatter friendly ./...
```

## Cost and gotchas
Free. "Typed" rules depend on GOROOT and GOPATH and may misbehave with `-trimpath` or on GitHub Actions. With a provided configuration, only the named rules are active.

## What it is not
Not a code formatter or a deep bug analyzer: it is a style and conventions linter.

## Alternatives
golint: frozen predecessor; golangci-lint and MegaLinter: aggregators that include it.

## For you
Worth watching: Go lint standard in CIs; useful only if you write Go.
