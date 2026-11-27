# matomo-org/matomo

> Self-hosted web analytics platform in PHP/MySQL, an open alternative to Google Analytics.

## The problem
Measuring site traffic without entrusting your data to a third party.

## What it actually does
A JavaScript tag sends the visits; the tracking handler processes them (visits, goals, e-commerce) and stores them in a database. Reports are archived then served by an API and a customizable dashboard. Features come as plugins; built-in privacy controls.

## How it is wired
```mermaid
flowchart LR
  A[Tracked website] --> B[Tracking handler]
  B --> C[Visit processing]
  C --> D[Analytics database]
  D --> E[Report archives]
  E --> F[Analytics API]
  F --> G[Dashboard UI]
```

## Trying it
Installation through the interface (README): download Matomo, upload it to the web server, open the folder in the browser and follow the steps, then paste the JavaScript tag. No command.

## Cost and gotchas
Server: PHP ≥ 8.1, MySQL ≥ 8.0 or MariaDB ≥ 10.6. Paid cloud offering (21-day trial). More than 2,500 open issues.

## What it is not
Not a generic BI tool: it is website analytics.

## Alternatives
Google Analytics (cited as the reference to replace).

## For you
Keep an eye on it: interesting as a source of behavioral data that you own, but the platform remains web analytics, not ML.
