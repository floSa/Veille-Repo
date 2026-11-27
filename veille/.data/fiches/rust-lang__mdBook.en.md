# rust-lang/mdBook

> Tool that turns Markdown files into an online book, to document a project.

## The problem
Publishing structured documentation as navigable pages without building a site by hand.

## What it actually does
According to the README, mdBook creates online books from Markdown files. The features, installation and usage are described in the user guide, which also serves as a demonstration. The README says nothing more.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.

```mermaid
flowchart LR
  md["Fichiers Markdown"] --> mdbook["mdBook"]
  mdbook --> livre["Livre en ligne"]
```

## Trying it
No command documented in the README: everything is deferred to the user guide.

## Cost and gotchas
Free (MPL-2.0 license). The installation method is not in the README: the real requirement (a tool written in Rust) is not described there, not documented here.

## What it is not
Not a general-purpose site generator nor a wiki. The README is too short to judge the limits: read them in the guide.

## Alternatives
No alternative named in the README.

## For you
Watch: useful for publishing the docs of a data or MLOps project, but nothing in this README allows going further than "Markdown to book".
