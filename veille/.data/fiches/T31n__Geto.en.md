# T31n/Geto

> Android app that applies per-app system settings, for example hiding developer options.

## The problem
Disabling developer options resets their settings, which gets in the way of some banking apps.

## What it actually does
Same README, same figures and same dates as JackEblan/Geto, so very likely a duplicate or a mirror. Modifies setting values through shared preferences. Requires the `android.permission.WRITE_SECURE_SETTINGS` permission.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.

```mermaid
flowchart LR
  A[Geto] --> B[WRITE_SECURE_SETTINGS]
  B --> C[Réglages système]
  C --> D[Applications ciblées]
```

## Trying it
No command documented in the README. A tutorial video is mentioned.

## Cost and gotchas
Free, GPL-3.0. Sensitive permission to grant yourself. The link with JackEblan/Geto is not documented.

## What it is not
Not a documented security bypass tool. The README is too short to judge reliability.

## Alternatives
No alternative named in the README, apart from JackEblan/Geto, which has an identical README.

## For you
Ignore: Android utility unrelated to data, AI or MLOps.
