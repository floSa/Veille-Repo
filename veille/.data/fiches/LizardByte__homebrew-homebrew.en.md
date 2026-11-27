# LizardByte/homebrew-homebrew

> Official LizardByte Homebrew tap: Sunshine formulas (stable, beta) and versioned CUDA Toolkit.

## The problem
Installing Sunshine and several CUDA versions through Homebrew without building by hand.

## What it actually does
A Homebrew tap with the formulas `sunshine`, `sunshine-beta` and `cuda@12.9` through `cuda@13.2`. The CUDA formulas share the installation logic of `lib/cuda_formula.rb`.

## How it is wired
```mermaid
flowchart LR
  A[brew tap] --> B[sunshine.rb]
  A --> C[sunshine-beta.rb]
  A --> D[cuda@13.0.rb]
  D --> E[cuda_formula.rb]
```

## Trying it
```bash
brew tap LizardByte/homebrew
brew tap-info LizardByte/homebrew
brew install sunshine
brew test sunshine
```

## Cost and gotchas
Free; NVIDIA hardware and CUDA license are on you. Very short README.

## What it is not
Not a GPU driver installer: nor any guarantee on the target platform, which is not documented.

## Alternatives
No alternative named in the README.

## For you
Ignore unless you install Sunshine (game streaming) or several CUDA versions via Homebrew; no value for your AI watch.
