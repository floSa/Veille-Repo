# vinceAmstoutz/symfony-security-auditor

> LLM-agent Symfony security auditor: an attacker and a reviewer hunt for logic flaws.

## The problem
Static analyzers and dependency scanners miss business-logic flaws and missing access controls.

## What it actually does
An attacker agent looks for flaws, a skeptical reviewer discards false positives over three iterations, then a report is produced in console, JSON, SARIF, HTML or Markdown. A token-free pre-scan flags risky areas, secrets are masked before being sent to the LLM, and a diff mode audits only modified files. Also works as an MCP server (experimental).

## How it is wired
```mermaid
flowchart LR
  A["Ingestion"] --> B["Mapping"]
  B --> C["Audit : Attacker"]
  C --> D["Audit : Reviewer"]
  D --> C
  D --> E["Report"]
```

## Trying it
```bash
curl -fsSL https://raw.githubusercontent.com/vinceAmstoutz/symfony-security-auditor/main/install.sh | sh
symfony-security-auditor init
symfony-security-auditor audit /path/to/your/symfony/project
bin/console audit:run --dry-run
```

## Cost and gotchas
An LLM provider API key at your own expense (about $0.50 per nightly audit of an average app according to the author), or local Ollama with no key. `init` requires PHP and Composer. Reports list your vulnerabilities: do not publish them as a public CI artifact.

## What it is not
A defensive tool for auditing your own code, not an intrusion scanner. It replaces neither PHPStan nor Dependabot. It targets Symfony only.

## Alternatives
- PHPStan and Psalm: type errors, no LLM.
- Dependabot, Renovate, Snyk: dependency CVEs.

## For you
Watch: a useful example of an attacker/reviewer loop with a measurable cost (`--dry-run`), but only useful if you audit Symfony.
