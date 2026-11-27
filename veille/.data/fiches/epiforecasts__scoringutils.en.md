# epiforecasts/scoringutils

> R package to evaluate forecasts (binary, point, quantile, sample) with scoring rules, for modellers.

## The problem
Comparing forecasting models requires metrics specific to each forecast type, and a rigorous data format. Without a common framework, everyone recodes their own scores.

## What it actually does
Validates a data.frame and converts it into a "forecast" object (binary, point, quantile, sample, nominal), then computes default scores according to the type. Scores are summarised by group with `summarise_scores()`. You can add your own scoring rules. Visualisation and missing-forecast handling functions are announced.

## How it is wired
Simplified diagram based on the sheet, no diagram provided.

```mermaid
flowchart LR
  A["data.frame observed + predicted"] --> B["as_forecast_*()"]
  B --> C["objet forecast validé"]
  C --> D["score()"]
  D --> E["summarise_scores()"]
  E --> F["visualisation"]
```

## Trying it
```bash
# dans R
install.packages("scoringutils")
remotes::install_github("epiforecasts/scoringutils", dependencies = TRUE)
```

## Cost and gotchas
Free, but you need R. The input format is strict: extra columns blur the forecast unit, hence the `forecast_unit` argument.

## What it is not
It is not a forecasting tool: it scores forecasts already produced. It is not available in Python. The licence is present but GitHub does not identify it.

## Alternatives
- scoringRules: cited in the README for CRPS, DSS and Log Score (to cite as well if used).

## For you
Watch: useful if you evaluate probabilistic forecasts in R, otherwise irrelevant in a Python stack, and the licence remains to be checked before any commercial use.
