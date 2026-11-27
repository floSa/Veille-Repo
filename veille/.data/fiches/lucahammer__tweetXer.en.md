# lucahammer/tweetXer

> Console script or userscript that deletes all your tweets from your X data export.

## The problem
Deleting thousands of old tweets by hand is impossible, including those that no longer appear on the profile.

## What it actually does
You paste the script into the console of the browser logged in to X, or install it as a userscript. It reads `tweets.js` from your export, intercepts XHR requests by substituting the IDs of your tweets, then deletes them (5 to 10 per second). Options: slow deletion without an export, deleting DMs, unfollowing everyone, exporting favorites.

## How it is wired
```mermaid
flowchart LR
  P[Propriétaire du compte] --> B[Barre de contrôle tweetXer.js]
  B --> F[Export tweet-headers.js]
  F --> I[Interception des requêtes]
  I --> D[Suppression tweets / DM]
  D --> X[Compte X]
```

## Trying it
No command: paste the script into the browser console (F12) on X, or install the userscript via Greasy Fork, then choose `tweet-headers.js` or `tweets.js`.

## Cost and gotchas
A data export must be requested (several days). Risk of the account being blocked, as flagged by the author. Browser crashes beyond 15,000 tweets. Pasting an unknown script into a console is risky.

## What it is not
Does not delete likes (only the latest few hundred); only removes what is in the export.

## Alternatives
Lyfhael/DeleteTweets, the source of inspiration for deletion speed, cited in the README.

## For you
Ignore for a data/AI profile: a personal account cleanup tool, unidentified license and risk of a ban.
