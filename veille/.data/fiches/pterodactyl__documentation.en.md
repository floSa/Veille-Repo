# pterodactyl/documentation

> Source of the documentation for the Pterodactyl game server hosting panel.

## The problem
Users of the Pterodactyl panel need reference documentation.

## What it actually does
The README contains only the front matter of the site's home page: a "Get Started" link to /project/introduction, and three arguments (security with bcrypt, AES-256-CBC and HTTPS; modern stack; servers in isolated Docker containers). The rest is not documented here.

## How it is wired
```mermaid
graph LR
  A[Page d'accueil] --> B[Get Started]
  B --> C[/project/introduction]
```

## Trying it
No documented command.

## Cost and gotchas
Nothing stated. Insufficient material to judge setting up a local build.

## What it is not
Not the Pterodactyl panel itself, only its documentation.

## Alternatives
No alternative named in the README.

## For you
Ignore: documentation for a game hosting tool, unrelated to your profile.
