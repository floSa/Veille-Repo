# prompt-security/clawsec

> Security skills and signed advisory feeds for the OpenClaw, NanoClaw, Hermes and Picoclaw agent runtimes.

## The problem
Installing third-party skills into an agent exposes it to vulnerable or tampered packages, with no integrity check or security advisories.

## What it actually does
`clawsec-suite` verifies a signed advisory feed (Ed25519), cross-checks the advisories against the installed skills and blocks risky installs until a second explicit confirmation. Other packages watch for drift in sensitive files and produce attestations and audits. A web catalogue presents skills, advisories and the wiki. The `*-traffic-guardian` folders are specifications, not shipped proxies.

## How it is wired
```mermaid
flowchart LR
  F["feed.json signé"] --> V["feed.mjs : vérification"]
  V --> H["handler.ts : hook d'avis"]
  H --> M["matching.ts"]
  M --> G["Installation gardée"]
  W["App web"] --> F
```

## Trying it
```bash
npx skills add prompt-security/clawsec --skill clawsec-suite -a openclaw --global -y
node "$SUITE_DIR/scripts/setup_advisory_hook.mjs"
node "$SUITE_DIR/scripts/discover_skill_catalog.mjs"
```

## Cost and gotchas
Free. Enabling the hook modifies OpenClaw's persistent configuration (a preview is shown first). Depends on a feed hosted at clawsec.prompt.security.

## What it is not
Not an antivirus: it recommends and filters, while removals and exemptions remain subject to approval. Protections vary by platform.

## Alternatives
No alternative named in the README.

## For you
Watch: useful only if you run agents from the OpenClaw family; otherwise of little interest, and the AGPL licence limits reuse.
