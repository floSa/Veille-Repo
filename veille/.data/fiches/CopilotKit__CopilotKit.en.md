# CopilotKit/CopilotKit

> SDK for connecting an AI agent to a user interface (React, Angular, Vue, Slack, Teams) with shared state.

## The problem
Connecting an agent to a real interface (generated UI, human validation, shared state) requires a lot of custom glue.

## What it actually does
Provides hooks (`useAgent`, `useCopilotAction`) and chat components on the front end, a server-side runtime that talks to LLM providers through adapters, and JS/Python SDKs for LangGraph agents. The AG-UI protocol links agent and UI. "CopilotKit Intelligence" (persistent threads, memories, learning) is a separate offering, hosted or self-hosted.

## How it is wired
```mermaid
graph LR
  A[User/App] --> B[@copilotkit/react-core]
  B --> C[@copilotkit/react-ui]
  B --> D[CopilotKit/runtime]
  D --> E[LangGraph Agents]
  D --> F[External AI Services]
  G[sdk-js / sdk-python] --> E
```

## Trying it
```bash
npx --yes copilotkit@latest onboard start
npx copilotkit@latest create
npx copilotkit@latest skills install
```

## Cost and gotchas
The SDK is MIT, but LLM calls remain at your expense (the provider's API key). Intelligence has plans (content not detailed in the README).

## What it is not
Not an agent framework: it assumes an existing agent (LangGraph, CrewAI, Mastra, PydanticAI...). The persistence and learning features belong to the Intelligence offering, not the base SDK.

## Alternatives
No alternative named in the README (only compatible agent frameworks appear there).

## For you
Worth watching if you ship agents with a user interface; with no front end to build, it brings nothing.
