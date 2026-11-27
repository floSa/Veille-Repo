# matt8707/ha-fusion

> Modern Home Assistant dashboard in Svelte, now taken over by a fork.

## The problem
The default Lovelace dashboards are not very flexible for wall-mounted tablets.

## What it actually does
Customizable interface installable as an add-on or as a Docker container, with URL parameters (`?view=`, `?menu=false`), keyboard shortcuts and a Kubernetes chart. The README states that the repository is no longer maintained and points to knowald/ha-fusion (Svelte 5).

## How it is wired
```mermaid
graph TD
  B[Navigateur] --> S[ha-fusion SvelteKit]
  S --> HA[Home Assistant]
  S --> D[/app/data]
```
Diagram based on the README, no diagram provided.

## Trying it
```bash
docker-compose up -d ha-fusion
docker-compose pull ha-fusion
```

## Cost and gotchas
Free. No more maintenance: risk of drifting out of sync with Home Assistant.

## What it is not
Not the active project: use the fork mentioned.

## Alternatives
knowald/ha-fusion (maintained fork): it is the successor recommended by the README, which states that this repository is no longer maintained.

## For you
Ignore: abandoned and unrelated to data/AI/MLOps; go to the fork if needed.
