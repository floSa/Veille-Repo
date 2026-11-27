# dmno-dev/varlock

> Schema-based .env files: agents read the structure, never the secrets.

## The problem
.env files expose secrets to AI agents, and the .env.example ends up out of sync.

## What it actually does
A `.env.schema` file describes variables, types, validation and sensitivity. The CLI builds a graph, resolves the values (plugins for 1Password, AWS, Azure, Vault, etc.), then injects the result into a process launched by `varlock run`. It redacts secrets in logs and `varlock scan` detects leaks. Integrations with Vite, Next.js, Astro, Cloudflare.

## How it is wired
```mermaid
flowchart TD
  schema[".env.schema"] --> parser["Env Spec parser"]
  parser --> graph["Environment graph"]
  graph --> resolver["Value resolver"]
  plugins["Secret plugins"] --> resolver
  resolver --> proc["Spawned process"]
  resolver --> redaction["Redaction"]
```

## Trying it
```bash
npx varlock init
varlock load
varlock run -- python script.py
varlock scan
```

## Cost and gotchas
Free. The secret plugins require an account on the chosen vault. Local encryption relies on native binaries (Rust, Swift).

## What it is not
Not a secrets vault: it reads those of an external vault. Does not protect if the agent can read the process environment directly.

## Alternatives
No alternative named in the README.

## For you
Worth adopting: hides API keys from agents in your pipelines, with a validated schema.
