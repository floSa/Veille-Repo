# fivetran/great_expectations

> Python data quality framework: "Expectations" test datasets and document the results.

## The problem
Data changes without warning; without tests, errors show up downstream.

## What it actually does
Defines Expectations (unit tests for data), connects sources, loads batches, evaluates via SQL or Spark execution engines and produces validation results, convertible into documentation. Azure Blob and GCS connectors (pandas, Spark) exist.

## How it is wired
```mermaid
flowchart LR
  A["Data sources"] --> B["batch_manager.py"]
  B --> C["Execution engine"]
  C --> D["Expectations"]
  D --> E["Validation"]
  E --> F["Validation results"]
  F --> G["Result documentation"]
```

## Trying it
```bash
pip install great_expectations
```
```python
import great_expectations as gx
context = gx.get_context()
```

## Cost and gotchas
Free. The README recommends a virtual environment. The repository has moved under the fivetran organization.

## What it is not
Not an orchestrator nor a catalog: a testing engine. The README says little about real usage beyond installation.

## Alternatives
No alternative named in the README.

## For you
Adopt to make your pipelines reliable: Apache-2.0, active (September 2026), a common language for data checks.
