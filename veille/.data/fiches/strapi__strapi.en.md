# strapi/strapi

> CMS, open-source, headless that generates REST and GraphQL APIs from content models.

## The problem
Publishing content to a website, a mobile app, or an IoT device requires creating the API and the manual editing interface.

## What it actually does
We define content types within the Content-Type Builder; Strapi generates REST and GraphQL APIs. The administration interface includes roles and permissions, a media library, i18n support, and draft/publication functionality. Each request follows defined routes, middleware, controllers, and services. Supported databases include SQLite, PostgreSQL, MySQL, and MariaDB. A "Strapi AI" layer also exists.

## How it is wired
```mermaid
flowchart LR
  D["Developer"] --> B["Content-Type Builder"]
  B --> G["Generated APIs"]
  G --> R["Routes"]
  R --> M["Middlewares"]
  M --> C["Controllers"]
  C --> S["Services"]
  S --> DB["Database"]
```

## Trying it
```bash
npx create-strapi@latest my-project
npx @strapi-community/dockerize@latest
```

## Cost and gotchas
Free self-hosting; Strapi Cloud is the paid, managed offering. There are no official Docker images available; you need to create your own.

## What it is not
Not a complete site: it only provides the API; the front-end needs to be built. The license is not identified by GitHub.

## Alternatives
No alternative is specified in the README file.

## For you
To be aware of: useful for displaying datasets or editorial content, but far removed from the core of data/AI.
