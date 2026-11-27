# vercel-labs/agent-skills

> Collection of skills for coding agents: Vercel audit, React best practices and deployment.

## The problem
A coding agent does not know the React/Next.js performance rules, the interface conventions or the costs of a Vercel project.

## What it actually does
Provides eight skills, each with a SKILL.md: vercel-optimize (cost and performance audit), react-best-practices (40+ rules), web-design-guidelines (100+ rules), writing-guidelines, react-native-guidelines, react-view-transitions, composition-patterns and vercel-deploy-claimable. The most detailed, vercel-optimize, collects Vercel metrics, filters candidates, then verifies each recommendation before returning a ranked report.

## How it is wired
```mermaid
flowchart LR
  VC["Vercel Client (vercel.mjs)"] --> SC["Code Scanners"]
  SC --> CG["Candidate Gates"]
  CG --> SA["Sanitizer Pipeline"]
  SA --> CV["Claim Verifier (verify-claim.mjs)"]
  CV --> RR["Report Renderer (render-report.mjs)"]
```

## Trying it
```bash
npx skills add vercel-labs/agent-skills
npm ci --ignore-scripts
node scripts/build-discovery-index.mjs https://example.com/skills
```

## Cost and gotchas
Free; vercel-optimize assumes a Vercel project and metrics. vercel-deploy-claimable packages your project and sends it to a deployment service: do not use it on sensitive code. No license declared in the catalog.

## What it is not
Not general-purpose rules: they target React, Next.js and Vercel. The internal workings of the other skills are not described.

## Alternatives
No alternative cited in the README.

## For you
Ignore: focused on React and Vercel, with no declared license, so of little use to a data/AI/MLOps profile.
