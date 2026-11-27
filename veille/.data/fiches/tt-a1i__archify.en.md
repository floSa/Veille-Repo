# tt-a1i/archify

> Skill of an agent that transforms a description or deposit into an interactive HTML diagram.

## The problem
Explaining an architecture requires a diagram; drawing tools take time, and a static exported diagram is not easily navigable.

## What it actually does
The agent produces a typed JSON IR (Information Representation), which validators then check (schema, layout, HTML/SVG, routes, label handling) before delivery. If there is a failure, a "repair receipt" JSON is returned, containing the rule code and the supported corrections. There are five types: Architecture, Workflow, Sequence, Data Flow, and Lifecycle. Output: a standalone HTML file with focus, upstream/downstream reach, routes, guided chapters, and PNG/video/share card exports. A "preview" mode in loopback monitors a file and only reloads validated revisions.

## How it is wired
```mermaid
flowchart LR
  P["Description ou dépôt"] --> A["Agent : génère l'IR JSON"]
  A --> V["validate — schéma · layout · routes"]
  V -->|échec| Rx["Reçu de réparation JSON"]
  Rx --> A
  V -->|passe| D["deliver"]
  D --> H["HTML autonome interactif"]
```

## Trying it
```bash
npx skills add tt-a1i/archify -g
node bin/archify.mjs doctor
node bin/archify.mjs deliver workflow examples/agent-tool-call.workflow.json /tmp/workflow.html --quality showcase --json
```

## Cost and gotchas
Free. A GET request to a stable manifest can display an update reminder; setting `ARCHIFY_UPDATE_CHECK_DISABLED=1` disables this. The server only sees the IP address and the time, never the content.

## What it is not
Neither a general-purpose diagramming tool nor a Mermaid-specific application. Automatic Mermaid parsing, generic auto-layout, hosted sharing, and WYSIWYG editing are outside the scope of this tool. The diagrams do not reflect any runtime impact.

## Alternatives
No alternative is specified in the README.

## For you
Things to watch out for: Potentially useful for documenting a data pipeline in a shareable HTML format, but requires ongoing maintenance by a single individual.
