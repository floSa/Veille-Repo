# unsplash/comment-on-pr

> GitHub Action that posts a comment on the pull request opened by a push.

## The problem
A CI workflow needs to publish a message on the relevant PR without a home-grown script.

## What it actually does
Posts the message `msg` on the linked PR, for push, pull_request and pull_request_review events. Options: avoid duplicates (`check_for_duplicate_msg`), delete old messages according to a regex, duplicate pattern. Uses `GITHUB_TOKEN`.

## How it is wired
```mermaid
graph LR
  A[Workflow GitHub] --> B[unsplash/comment-on-pr@v1.3.0]
  B --> C[GITHUB_TOKEN]
  B --> D[commentaire sur la PR]
```

## Trying it
```bash
# Dans .github/workflows/ :
# uses: unsplash/comment-on-pr@v1.3.0
#   env: GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
#   with: msg: "Check out this message!"
```

## Cost and gotchas
Free within GitHub Actions limits. Last push in February 2023: no longer maintained.

## What it is not
Not a code review tool. No recent maintenance.

## Alternatives
No alternative named in the README.

## For you
Ignore: a minimal action with no updates since 2023; better to use a `gh` call or a maintained action.
