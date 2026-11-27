# 0xNyk/council-of-high-intelligence

> Skill that hands a hard decision to 18 analysis personas, with forced disagreement and a structured verdict.

## The problem
A single model reasoning pass often gives an overly consensual answer on high-stakes decisions (architecture, strategy, risk).

## What it actually does
The `/council` command convenes personas (Socrates, Feynman, Torvalds, Taleb, Karpathy…) in three modes: full (blind analysis, cross-examination, final position, synthesis), quick, duo. Verdict with unresolved points, stopping criteria and next action. Labels FACT, INFERENCE, ASSUMPTION, UNKNOWN. Can be spread across several providers.

## How it is wired
```mermaid
graph TD
  A[/council SKILL.md] --> B[Mode resolver]
  B --> C[Panel selector]
  C --> D[Independent analysis]
  D --> E[Cross examination]
  E --> F[Verdict synthesis]
  C --> G[Provider router]
```

## Trying it
```text
/plugin marketplace add 0xNyk/council-of-high-intelligence
/plugin install council@council-of-high-intelligence
/council --quick Should we add caching here?
```
```bash
./install.sh --codex-only
```

## Cost and gotchas
The full mode multiplies model calls (18 personas): the bill is on you. No quality measurement provided.

## What it is not
Not proof of a better decision: the README gives no figure for any gain. The personas are "lenses", not real people.

## Alternatives
No alternative named in the README.

## For you
Worth watching: useful for documenting an ML architecture trade-off, but test the `--quick` mode before committing to the costs of the full mode.
