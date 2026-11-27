# python/steering-council

> Repository of the Python governance council: meeting minutes, processes and office hours.

## The problem
The Python community needs a public place to follow the council's decisions and rules.

## What it actually does
The README serves as an index to the process documents (member onboarding, best practices, standing delegations) and to the dated minutes. A Makefile regenerates the list of updates. It lists the reference PEPs (1, 13, 8001, 8016, 8100 to 8107) and the 2026 office hours.

## How it is wired
```mermaid
flowchart TD
  r1["README.md"] --> p1["process/onboarding.md"]
  r1 --> p2["process/best-practices.md"]
  r1 --> p3["process/standing-delegations.md"]
  r1 --> u1["updates/2019-02-15_steering-council-update.md"]
  u1 --> u2["updates/2023-01-steering-council-update.md"]
  r3["Makefile"] --> r1
```

## Trying it
No command documented.

## Cost and gotchas
No cost. Meetings by appointment via Google Calendar, 3 days in advance.

## What it is not
Not code nor a Python library: governance documentation.

## Alternatives
No alternative named.

## For you
Ignore: useful only as a watch on Python governance, with no operational use.
