# Rétro GitHub — Septembre 2026

> **481 dépôts distincts** passés en trending du 2026-09-01 au 2026-09-16 (mois en cours, partiel) — dont **216 ont tenu 2 jours ou plus**.
> Classés par **persistance** : le nombre de jours distincts où le dépôt est réapparu en trending. C'est le signal qui sépare ce qui a pris de ce qui a été poussé.
>
> ⚠️ **Deux limites de la source.** L'archive ne couvre que **python, javascript, go et swift** — un dépôt Rust ou C++ qui a trendé n'y est pas. Et **les étoiles affichées sont celles d'aujourd'hui**, pas celles de la période : on sait qu'un dépôt trendait le 19 août, jamais avec combien d'étoiles.
>
> ℹ️ 1 jour(s) manquent à l'archive amont sur cette période.

**Mode d'emploi** — coche ce que tu veux récupérer. Les descriptions du corps du catalogue sont celles des dépôts, pas mon analyse ; seule la section « À parcourir en premier » est commentée.

## À parcourir en premier

*Ma sélection dans les 481, pour ton profil. Le reste du catalogue est un inventaire brut ;
cette section-là est commentée.*

Septembre (partiel, jusqu'au 16) confirme août et ajoute une couche : **l'infrastructure
d'exécution des agents** — bacs à sable, navigateurs furtifs, suivi de consommation. Et
`WeKnora` tient neuf jours sur seize, ce qui en fait la sortie data la plus solide des deux
mois.

- [ ] **[Tencent/WeKnora](https://github.com/Tencent/WeKnora)** — 9 j · ⭐ 24k · MIT
      Déjà en fiche dans la note du 16/09, mais le rétro ajoute l'information qui manquait :
      **neuf jours de trending en seize**, plus dix jours en août. Ce n'est pas un feu de
      paille, c'est la sortie RAG de la rentrée.
- [ ] **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** — 8 j · ⭐ 67k · CC0-1.0
      Les prompts système extraits de Claude, ChatGPT, Gemini et consorts. Sous licence CC0,
      donc réutilisable sans contrainte. À lire comme un corpus de référence quand tu écris
      un prompt d'agent : c'est de la matière brute, pas un tutoriel.
- [ ] **[TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox)** — bac à sable léger et concurrent pour agents · ⭐ 12k
      La brique qui manque à la plupart des montages d'agents maison : exécuter du code
      généré sans ouvrir sa machine. À comparer à E2B si tu as déjà regardé.
      ⚠️ Licence NOASSERTION, et un seul jour de trending — jeune.
- [ ] **[jo-inc/camofox-browser](https://github.com/jo-inc/camofox-browser)** — ⭐ 11k · MIT
      Navigateur *headless* furtif pour agents, en remplacement direct de Puppeteer ou
      Playwright, qui passe Cloudflare et les détections de bots. Utile pour l'ingestion RAG
      sur des sources qui bloquent le scraping classique — avec les questions d'usage que ça
      pose, à trancher avant de le mettre dans un livrable client.
- [ ] **[vxcontrol/pentagi](https://github.com/vxcontrol/pentagi)** — 8 j · ⭐ 24k · MIT
      Agents autonomes pour tests d'intrusion. À regarder sous l'angle qui te concerne :
      c'est un cas d'école d'agent à longue chaîne d'outils, sur un domaine où l'erreur se
      voit tout de suite.
- [ ] **[k2-fsa/OmniVoice](https://github.com/k2-fsa/OmniVoice)** — 5 j · ⭐ 13k · Apache-2.0
      Clonage de voix et TTS sur 600+ langues, Apache-2.0. La licence et l'ampleur du
      support linguistique en font le candidat sérieux du mois côté audio.
- [ ] **[steipete/CodexBar](https://github.com/steipete/CodexBar)** — 7 j · ⭐ 21k · MIT
      Consommation de Codex et Claude Code sans se connecter à un tableau de bord. Anecdotique,
      mais c'est la question que tout le monde se pose à la fin du mois.
- [ ] **[openai/skills](https://github.com/openai/skills)** et **[openai/plugins](https://github.com/openai/plugins)** — 5 et 9 j · ⭐ 27k et 6,8k · **aucune licence**
      Les catalogues officiels d'OpenAI. À parcourir pour voir comment ils structurent les
      leurs — mais **aucun fichier de licence** sur les deux, donc rien à recopier tel quel
      dans `mes-skills`.

---

## 🎯 Collections de skills — 26

*À piller pour `mes-skills`. Rappel du 16/09 : d'après NVIDIA, 26 % des skills publics contiennent une vulnérabilité — passer `SkillSpector` avant d'installer.*

- [ ] **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — 9 j · ⭐ 259k · `JavaScript` · MIT
      The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor an…
- [ ] **[coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)** — 9 j · ⭐ 50k · `JavaScript` · MIT
      Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.
- [ ] **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — 7 j · ⭐ 95k · `JavaScript` · MIT
      Production-grade engineering skills for AI coding agents.
- [ ] **[blader/humanizer](https://github.com/blader/humanizer)** — 5 j · ⭐ 48k · `Python` · MIT
      Agent skill that removes signs of AI-generated writing from text
- [ ] **[ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)** — 5 j · ⭐ 46k · `Python` · MIT
      A skill to stop your coding agent from burying the answer. ADHD-friendly output.
- [ ] **[openai/skills](https://github.com/openai/skills)** — 5 j · ⭐ 27k · `Python` · **licence aucune**
      Skills Catalog for Codex
- [ ] **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** — 4 j · ⭐ 105k · `Go` · **licence NOASSERTION**
      🪨 why use many token when few token do trick — Claude Code skill that cuts 65% of tokens by talking like caveman
- [ ] **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** — 4 j · ⭐ 59k · `Python` · AGPL-3.0
      World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI cod…
- [ ] **[Gentleman-Programming/gentle-ai](https://github.com/Gentleman-Programming/gentle-ai)** — 4 j · ⭐ 6 871 · `Go` · MIT
      Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Spec-Driven Development,…
- [ ] **[jihe520/MathModelAgent](https://github.com/jihe520/MathModelAgent)** — 4 j · ⭐ 5 606 · `Python` · **licence aucune**
      🤖📐专为数学建模设计的 Agent & skills ,自动完成数学建模，生成一份完整的可以直接提交的论文。 An Agent Designed for Mathematical Modeling ,Automatically complete mathmodel and generate a complete paper…
- [ ] **[SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red)** — 4 j · ⭐ 5 555 · `Python` · MIT
      claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude wi…
- [ ] **[WorldFlowAI/everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code)** — 4 j · ⭐ 2 973 · `JavaScript` · **licence aucune**
      Claude Code toolkit - agents, commands, skills, rules, and hooks for productive AI-assisted development
- [ ] **[anthropics/skills](https://github.com/anthropics/skills)** — 3 j · ⭐ 176k · `Python` · **licence aucune**
      Public repository for Agent Skills
- [ ] **[tt-a1i/archify](https://github.com/tt-a1i/archify)** — 3 j · ⭐ 64k · `JavaScript` · MIT
      Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self-contained HTML with motion and crisp export.
- [ ] **[Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills)** — 3 j · ⭐ 48k · `Python` · **licence NOASSERTION**
      Academic Research Skills for Claude Code: research → write → review → revise → finalize
- [ ] **[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)** — 3 j · ⭐ 17k · `Python` · Apache-2.0
      Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in C…
- [ ] **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — 3 j · ⭐ 15k · `Python` · MIT
      A library of agent skills for CAD, CAE and CAM
- [ ] **[plugin87/ux-ui-agent-skills](https://github.com/plugin87/ux-ui-agent-skills)** — 3 j · ⭐ 1 471 · `JavaScript` · MIT
      Turn Claude into a senior design architect - DTCG design tokens, 50 components, WCAG 2.2 AA to AAA, 138 design systems, any-framework code, and 38 objective gates…
- [ ] **[anthropics/claude-code](https://github.com/anthropics/claude-code)** — 2 j · ⭐ 145k · `TypeScript` · **licence aucune**
      Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining com…
- [ ] **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** — 2 j · ⭐ 45k · `Python` · MIT
      Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100…
- [ ] **[handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill)** — 2 j · ⭐ 9 661 · `Python` · MIT
      中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审查答复。
- [ ] **[AgriciDaniel/claude-ads](https://github.com/AgriciDaniel/claude-ads)** — 2 j · ⭐ 9 321 · `Python` · MIT
      Claude-first paid-media operations skill for Claude Code across 12 ad platforms (Google, Meta, YouTube, LinkedIn, TikTok, Microsoft, Apple, Amazon, Reddit, Pinter…
- [ ] **[amElnagdy/delegate-skills](https://github.com/amElnagdy/delegate-skills)** — 2 j · ⭐ 2 049 · `JavaScript` · MIT
      Delegate a coding task to a separate coding agent CLI, review the diff, land the commit yourself — one per implementer.
- [ ] **[Shpigford/chops](https://github.com/Shpigford/chops)** — 2 j · ⭐ 1 897 · `Swift` · **licence NOASSERTION**
      Your AI agent skills, finally organized. A macOS app to browse, edit, and manage skills across Claude Code, Cursor, Codex, Windsurf, and Amp.
- [ ] **[0xranx/OpenContext](https://github.com/0xranx/OpenContext)** — 2 j · ⭐ 1 165 · `JavaScript` · MIT
      A personal context store for AI agents and assistants—reuse your existing coding agent CLI (Codex/Claude/OpenCode) with built‑in Skills/tools and a desktop GUI to…
- [ ] **[Eigenwise/eigenwise-toolshed](https://github.com/Eigenwise/eigenwise-toolshed)** — 2 j · ⭐ 285 · `JavaScript` · MIT
      Six Claude Code plugins for the work that keeps coming back: repo maps, conditional rules, ticketed parallel work, extra subscription models, local usage metrics,…

---

## 🧠 LLM & IA générative — 174

*Dossier DevBrain : `LLM & IA générative/`*

- [ ] **[Tencent/WeKnora](https://github.com/Tencent/WeKnora)** — 9 j · ⭐ 24k · `Go` · **licence NOASSERTION**
      Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.
- [ ] **[openai/plugins](https://github.com/openai/plugins)** — 9 j · ⭐ 6 824 · `JavaScript` · **licence aucune**
      OpenAI Plugins
- [ ] **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** — 8 j · ⭐ 67k · `JavaScript` · CC0-1.0
      Extracted system prompts from Anthropic - Claude Fable 5, Opus 5, Claude Design, Claude Code. OpenAI - ChatGPT GPT-5.6-Sol, Codex. Google - Gemini 3.5 Flash, 3.1…
- [ ] **[vxcontrol/pentagi](https://github.com/vxcontrol/pentagi)** — 8 j · ⭐ 24k · `Go` · MIT
      Fully autonomous AI Agents system capable of performing complex penetration testing tasks
- [ ] **[steipete/CodexBar](https://github.com/steipete/CodexBar)** — 7 j · ⭐ 21k · `Swift` · MIT
      Show usage stats for OpenAI Codex and Claude Code, without having to login.
- [ ] **[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)** — 6 j · ⭐ 139k · `JavaScript` · MIT
      Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.
- [ ] **[Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api)** — 6 j · ⭐ 41k · `Go` · LGPL-3.0
      Sub2API 一站式开源中转服务，让 Claude、Openai 、Gemini、Grok订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。
- [ ] **[manaflow-ai/cmux](https://github.com/manaflow-ai/cmux)** — 6 j · ⭐ 27k · `Swift` · **licence NOASSERTION**
      Open source Ghostty-based macOS terminal with vertical tabs and notifications for AI coding agents. Built for multitasking, organization, and programmability.
- [ ] **[OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr)** — 6 j · ⭐ 8 264 · `JavaScript` · MIT
      Voice-to-text dictation app with local (Nvidia Parakeet/Whisper) and cloud models (BYOK). Privacy-first and available cross-platform.
- [ ] **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — 5 j · ⭐ 246k · `Python` · MIT
      The agent that grows with you
- [ ] **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** — 5 j · ⭐ 106k · `Python` · Apache-2.0
      TradingAgents: Multi-Agents LLM Financial Trading Framework
- [ ] **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — 5 j · ⭐ 30k · `Go` · Apache-2.0
      Fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-i…
- [ ] **[TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox)** — 5 j · ⭐ 12k · `Go` · **licence NOASSERTION**
      Instant, Concurrent, Secure & Lightweight Sandbox for AI Agents.
- [ ] **[jo-inc/camofox-browser](https://github.com/jo-inc/camofox-browser)** — 5 j · ⭐ 11k · `JavaScript` · MIT
      Stealth headless browser for AI agents — bypass Cloudflare, bot detection, and anti-scraping. Drop-in Puppeteer/Playwright replacement.
- [ ] **[ollama/ollama](https://github.com/ollama/ollama)** — 4 j · ⭐ 181k · `Go` · MIT
      Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.
- [ ] **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — 4 j · ⭐ 114k · `Python` · MIT
      🌐 Make websites accessible for AI agents. Automate tasks online with ease.
- [ ] **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** — 4 j · ⭐ 83k · `Python` · Apache-2.0
      🚀🤖 Crawl4AI: Open-source LLM Friendly Web Crawler & Scraper. Don't be shy, join here: https://discord.gg/jP8KfhDhyN
- [ ] **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — 4 j · ⭐ 61k · `Python` · Apache-2.0
      🧠 Train a 64M-parameter LLM from scratch in just 2h!
- [ ] **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** — 4 j · ⭐ 54k · `Python` · MIT
      Learn it. Build it. Ship it for others.
- [ ] **[openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)** — 4 j · ⭐ 33k · `JavaScript` · Apache-2.0
      Use Codex from Claude Code to review code or delegate tasks.
- [ ] **[decolua/9router](https://github.com/decolua/9router)** — 4 j · ⭐ 29k · `JavaScript` · MIT
      Unlimited FREE AI coding. Connect Claude Code, Codex, Cursor, Cline, Copilot, Antigravity to FREE Claude/GPT/Gemini via 40+ providers. Auto-fallback, RTK -40% tok…
- [ ] **[multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE)** — 4 j · ⭐ 9 184 · `Python` · Apache-2.0
      YuE2: frontier music generation with symbolic planning, zero-shot covers, and agentic music editing.
- [ ] **[The-Swarm-Corporation/AutoHedge](https://github.com/The-Swarm-Corporation/AutoHedge)** — 4 j · ⭐ 6 128 · `Python` · MIT
      Build your autonomous hedge fund in minutes. AutoHedge harnesses the power of swarm intelligence and AI agents to automate market analysis, risk management, and t…
- [ ] **[chattymin/PokeTokenBar](https://github.com/chattymin/PokeTokenBar)** — 4 j · ⭐ 437 · `Swift` · MIT
      Use your tokens to raise, evolve, and collect Pokémon! 🥚
- [ ] **[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling)** — 3 j · ⭐ 81k · `Python` · BSD-3-Clause
      🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!
- [ ] **[QuantumNous/new-api](https://github.com/QuantumNous/new-api)** — 3 j · ⭐ 48k · `Go` · AGPL-3.0
      A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible f…
- [ ] **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)** — 3 j · ⭐ 35k · `Go` · MIT
      DeepSeek-native AI coding agent for your terminal. Engineered around prefix-cache stability — leave it running.
- [ ] **[gastownhall/beads](https://github.com/gastownhall/beads)** — 3 j · ⭐ 27k · `Go` · MIT
      Beads - A memory upgrade for your coding agent
- [ ] **[altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice)** — 3 j · ⭐ 11k · `Swift` · GPL-3.0
      Fastest and only macOS Dictation app with on-device STT and custom trained AI enhancement model. Windows pre-build available! A local Wispr Flow alternative. DM u…
- [ ] **[osaurus-ai/osaurus](https://github.com/osaurus-ai/osaurus)** — 3 j · ⭐ 7 923 · `Swift` · MIT
      Own your AI. The native macOS harness for AI agents -- any model, persistent memory, autonomous execution, cryptographic identity. Built in Swift. Fully offline.…
- [ ] **[tbphp/gpt-load](https://github.com/tbphp/gpt-load)** — 3 j · ⭐ 6 790 · `Go` · MIT
      Self-hosted AI gateway for multi-channel, multi-credential setups — API keys and subscription accounts, scheduling, failover, request logs and usage. 自托管 AI 网关：多渠…
- [ ] **[MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup)** — 3 j · ⭐ 6 661 · `Python` · Apache-2.0
      Fine-tune LLMs from one YAML. Layer streaming trains an 8B model on a 4 GB laptop GPU.
- [ ] **[Gentleman-Programming/engram](https://github.com/Gentleman-Programming/engram)** — 3 j · ⭐ 6 644 · `Go` · MIT
      Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.
- [ ] **[tradesdontlie/tradingview-mcp](https://github.com/tradesdontlie/tradingview-mcp)** — 3 j · ⭐ 6 264 · `JavaScript` · **licence NOASSERTION**
      AI-assisted TradingView chart analysis — connect Claude Code to your TradingView Desktop for personal workflow automation
- [ ] **[kserve/kserve](https://github.com/kserve/kserve)** — 3 j · ⭐ 5 941 · `Go` · Apache-2.0
      Standardized Distributed Generative and Predictive AI Inference Platform for Scalable, Multi-Framework Deployment on Kubernetes
- [ ] **[dagucloud/dagu](https://github.com/dagucloud/dagu)** — 3 j · ⭐ 4 009 · `Go` · GPL-3.0
      Self-hostable workflow orchestrator for teams whose main work isn't orchestration. Declarative YAML over your scripts, SSH commands, containers, etc; keep workflo…
- [ ] **[Sumanth077/Hands-On-AI-Engineering](https://github.com/Sumanth077/Hands-On-AI-Engineering)** — 3 j · ⭐ 3 599 · `Python` · **licence aucune**
      A curated collection of practical AI projects implementing OCR systems, RAG, AI agents, and other AI use cases.
- [ ] **[darkzOGx/youtube-automation-agent](https://github.com/darkzOGx/youtube-automation-agent)** — 3 j · ⭐ 3 563 · `JavaScript` · MIT
      🎬 Fully automated YouTube channel management with AI agents. Creates, optimizes & publishes videos 24/7. Works with FREE Gemini API or OpenAI. No coding required!
- [ ] **[jordan-gibbs/hyperresearch](https://github.com/jordan-gibbs/hyperresearch)** — 3 j · ⭐ 3 358 · `Python` · MIT
      Agent-driven research knowledge base. Agents collect, search, and synthesize web research into a persistent, searchable wiki.
- [ ] **[iFurySt/open-codex-computer-use](https://github.com/iFurySt/open-codex-computer-use)** — 3 j · ⭐ 2 101 · `Swift` · MIT
      👾 Open Computer Use – Open-Source Alternative to Codex Computer Use
- [ ] **[agent-substrate/substrate](https://github.com/agent-substrate/substrate)** — 3 j · ⭐ 1 885 · `Go` · Apache-2.0
      Agent Substrate: the core system
- [ ] **[atlassian/atlassian-mcp-server](https://github.com/atlassian/atlassian-mcp-server)** — 3 j · ⭐ 1 112 · `JavaScript` · Apache-2.0
      Official remote MCP server for Atlassian. Securely connect Jira, Confluence, Jira Service Management, Bitbucket, and Compass to Claude, ChatGPT, Cursor, VS Code,…
- [ ] **[microsoft/markitdown](https://github.com/microsoft/markitdown)** — 2 j · ⭐ 184k · `Python` · MIT
      Python tool for converting files and office documents to Markdown.
- [ ] **[huggingface/transformers](https://github.com/huggingface/transformers)** — 2 j · ⭐ 166k · `Python` · Apache-2.0
      🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models, for both inference and…
- [ ] **[Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)** — 2 j · ⭐ 133k · `Python` · GPL-3.0
      The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface.
- [ ] **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — 2 j · ⭐ 90k · `Go` · Apache-2.0
      RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context laye…
- [ ] **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** — 2 j · ⭐ 82k · `Python` · MIT
      Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.
- [ ] **[netdata/netdata](https://github.com/netdata/netdata)** — 2 j · ⭐ 80k · `Go` · GPL-3.0
      The fastest path to AI-powered full stack observability, even for lean teams.
- [ ] **[datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents)** — 2 j · ⭐ 79k · `Python` · **licence NOASSERTION**
      📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程
- [ ] **[666ghj/MiroFish](https://github.com/666ghj/MiroFish)** — 2 j · ⭐ 73k · `Python` · AGPL-3.0
      A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物
- [ ] **[minio/minio](https://github.com/minio/minio)** — 2 j · ⭐ 61k · `Go` · AGPL-3.0 · **archivé**
      MinIO is a high-performance, S3 compatible object store, open sourced under GNU AGPLv3 license.
- [ ] **[rclone/rclone](https://github.com/rclone/rclone)** — 2 j · ⭐ 59k · `Go` · MIT
      "rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files
- [ ] **[multica-ai/multica](https://github.com/multica-ai/multica)** — 2 j · ⭐ 50k · `Go` · **licence NOASSERTION**
      Make humans and AI agents work as one team — open-source and self-hostable.
- [ ] **[bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book)** — 2 j · ⭐ 47k · `Python` · Apache-2.0
      《深入理解 AI Agent：设计原理与工程实践》（李博杰 著）开源主仓库：全书正文、编译版 PDF 与按章配套代码
- [ ] **[PostHog/posthog](https://github.com/PostHog/posthog)** — 2 j · ⭐ 39k · `Python` · **licence NOASSERTION**
      🦔 PostHog is the leading platform for building self-driving products. Our developer tools – AI observability, analytics, session replay, flags, experiments, error…
- [ ] **[drawdb-io/drawdb](https://github.com/drawdb-io/drawdb)** — 2 j · ⭐ 39k · `JavaScript` · AGPL-3.0
      Free, simple, and intuitive online database diagram editor and SQL generator.
- [ ] **[sgl-project/sglang](https://github.com/sgl-project/sglang)** — 2 j · ⭐ 36k · `Python` · Apache-2.0
      SGLang is a high-performance serving framework for large language models and multimodal models.
- [ ] **[github/github-mcp-server](https://github.com/github/github-mcp-server)** — 2 j · ⭐ 32k · `Go` · MIT
      GitHub's official MCP Server
- [ ] **[browser-use/video-use](https://github.com/browser-use/video-use)** — 2 j · ⭐ 24k · `Python` · MIT
      Edit videos with coding agents
- [ ] **[huggingface/datasets](https://github.com/huggingface/datasets)** — 2 j · ⭐ 21k · `Python` · Apache-2.0
      🤗 The largest hub of ready-to-use datasets for AI models with fast, easy-to-use and efficient data manipulation tools
- [ ] **[googleapis/mcp-toolbox](https://github.com/googleapis/mcp-toolbox)** — 2 j · ⭐ 16k · `Go` · Apache-2.0
      MCP Toolbox for Databases is an open source MCP server for databases.
- [ ] **[citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)** — 2 j · ⭐ 16k · `JavaScript` · MIT
      The fastest browser for AI agents to run browser automation, built for sharing your logged-in browser state with your AI agents, like Codex or Claude Code, withou…
- [ ] **[palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro)** — 2 j · ⭐ 14k · `Swift` · GPL-3.0
      macOS video editor built for AI
- [ ] **[opencode-ai/opencode](https://github.com/opencode-ai/opencode)** — 2 j · ⭐ 13k · `Go` · MIT · **archivé**
      A powerful AI coding agent. Built for the terminal.
- [ ] **[ronitsingh10/FineTune](https://github.com/ronitsingh10/FineTune)** — 2 j · ⭐ 9 289 · `Swift` · GPL-3.0
      FineTune, a macOS menu bar app for per-app volume control, multi-device output, audio routing, and 10-band EQ. Free and open-source alternative to SoundSource.
- [ ] **[openai/tart](https://github.com/openai/tart)** — 2 j · ⭐ 6 781 · `Swift` · **licence NOASSERTION**
      macOS and Linux VMs on Apple Silicon to use in CI and other automations
- [ ] **[Osmantic/ODS](https://github.com/Osmantic/ODS)** — 2 j · ⭐ 6 540 · `Python` · Apache-2.0
      Turn your PC, Mac, or Linux box into an AI server. LLM inference, chat UI, voice, agents, workflows, RAG, and image generation.
- [ ] **[gosom/google-maps-scraper](https://github.com/gosom/google-maps-scraper)** — 2 j · ⭐ 5 891 · `Go` · MIT
      scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email an…
- [ ] **[aldinokemal/go-whatsapp-web-multidevice](https://github.com/aldinokemal/go-whatsapp-web-multidevice)** — 2 j · ⭐ 4 823 · `Go` · MIT
      GOWA - WhatsApp REST API with support for UI, Multi Account, Webhooks, and MCP, and Chatwoot. Built with Golang for efficient memory use.
- [ ] **[robinebers/openusage](https://github.com/robinebers/openusage)** — 2 j · ⭐ 4 177 · `Swift` · MIT
      Burning through your subscriptions too fast? Paying for stuff you never use? Stop guessing. OpenUsage is free and open source.
- [ ] **[hamed-elfayome/Claude-Usage-Tracker](https://github.com/hamed-elfayome/Claude-Usage-Tracker)** — 2 j · ⭐ 3 515 · `Swift` · MIT
      Native macOS menu bar app for tracking Claude AI usage limits in real-time. Built with Swift/SwiftUI.
- [ ] **[seakee/CPA-Manager-Plus](https://github.com/seakee/CPA-Manager-Plus)** — 2 j · ⭐ 3 463 · `Go` · MIT
      A self-hosted CPA / CLIProxyAPI management panel and AI gateway observability dashboard for requests, usage, cost, quota, failures, and account health.
- [ ] **[FB208/OpenBidKit_Yibiao](https://github.com/FB208/OpenBidKit_Yibiao)** — 2 j · ⭐ 2 966 · `JavaScript` · AGPL-3.0
      开箱即用的AI标书编写工具，标书AI生成工具，投标工具箱、知识库、标书查重、废标项检查，完全开源免费，欢迎使用
- [ ] **[radixark/miles](https://github.com/radixark/miles)** — 2 j · ⭐ 2 898 · `Python` · Apache-2.0
      Miles is an enterprise-facing reinforcement learning framework for LLM and VLM post-training, forked from and co-evolving with slime.
- [ ] **[theagentrouter/agent-router](https://github.com/theagentrouter/agent-router)** — 2 j · ⭐ 2 105 · `Go` · Apache-2.0
      Manages Unified Access to Generative AI Services built on Envoy Gateway
- [ ] **[mukul975/cve-mcp-server](https://github.com/mukul975/cve-mcp-server)** — 2 j · ⭐ 1 569 · `Python` · Apache-2.0
      Production-grade MCP server giving Claude 27 security intelligence tools across 21 APIs — CVE lookup, EPSS scoring, CISA KEV, MITRE ATT&CK, Shodan, VirusTotal, an…

<details><summary>Passés une seule journée — 98</summary>

- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission i
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with a
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowled
- [openai/whisper](https://github.com/openai/whisper) — Robust Speech Recognition via Large-Scale Weak Supervision
- [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) — Taste-Skill - gives your AI good taste. stops the AI from generating boring, generic slop
- [bytedance/deer-flow](https://github.com/bytedance/deer-flow) — An open-source long-horizon SuperAgent harness that researches, codes, and creates. With t
- [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) — Bash is all you need - A nano claude code–like 「agent harness」, built from 0 to 1
- [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) — AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and th
- [mudler/LocalAI](https://github.com/mudler/LocalAI) — LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - 
- [microsoft/qlib](https://github.com/microsoft/qlib) — Qlib is an AI-oriented Quant investment platform that aims to use AI tech to empower Quant
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — Milvus is a high-performance, cloud-native vector database built for scalable vector ANN s
- [danielmiessler/Fabric](https://github.com/danielmiessler/Fabric) — Fabric is an open-source framework for augmenting humans using AI. It provides a modular s
- [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) — DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.
- [volcengine/OpenViking](https://github.com/volcengine/OpenViking) — Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills
- [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) — Official, Anthropic-managed directory of high quality Claude Code Plugins.
- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) — 📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG
- [seaweedfs/seaweedfs](https://github.com/seaweedfs/seaweedfs) — SeaweedFS is a distributed storage system for object storage (S3), file systems, and Icebe
- [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) — "Vibe-Trading: Your Personal Trading Agent"
- [SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern) — LLM Frontend for Power Users.
- [p-e-w/heretic](https://github.com/p-e-w/heretic) — Fully automatic censorship removal for language models
- [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) — Vercel's official collection of agent skills
- [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) — Turn any technical book PDF into a Claude Code skill — ready to study, reference, and use 
- [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) — CLI tool for configuring and monitoring Claude Code
- [gitleaks/gitleaks](https://github.com/gitleaks/gitleaks) — Find secrets with Gitleaks 🔑
- [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) — Make Any Website into CLI & Use your logged-in browser by AI agent.
- [cloudreve/cloudreve](https://github.com/cloudreve/cloudreve) — 🌩 Self-hosted file management and sharing system, supports multiple storage providers
- [charmbracelet/crush](https://github.com/charmbracelet/crush) — Glamourous agentic coding for all 💘
- [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) — A Claude Code plugin that shows what's happening - context usage, active tools, running ag
- [jundot/omlx](https://github.com/jundot/omlx) — LLM inference server with continuous batching & SSD caching for Apple Silicon — managed fr
- [google/skills](https://github.com/google/skills) — Agent Skills for Google products and technologies
- [golang-migrate/migrate](https://github.com/golang-migrate/migrate) — Database migrations. CLI and Golang library.
- [NVIDIA/Megatron-LM](https://github.com/NVIDIA/Megatron-LM) — Ongoing research training transformer models at scale
- [larksuite/cli](https://github.com/larksuite/cli) — The official Lark/飞书 CLI tool, maintained by the larksuite team — built for humans and AI 
- [jpillora/chisel](https://github.com/jpillora/chisel) — A fast TCP/UDP tunnel over HTTP
- [chenhg5/cc-connect](https://github.com/chenhg5/cc-connect) — Bridge local AI coding agents (Claude Code, Cursor, Gemini CLI, Codex) to messaging platfo
- [tisfeng/Easydict](https://github.com/tisfeng/Easydict) — 一个简洁优雅的词典翻译 macOS App。开箱即用，支持离线 OCR 识别，支持有道词典，🍎 苹果系统词典，🍎 苹果系统翻译，OpenAI，Gemini，DeepL，Google
- [casdoor/casdoor](https://github.com/casdoor/casdoor) — An open-source Agent-first Identity and Access Management (IAM) /LLM MCP & agent gateway a
- [semaphoreui/semaphore](https://github.com/semaphoreui/semaphore) — Modern UI and powerful API for Ansible, Terraform/OpenTofu/Terragrunt, PowerShell and othe
- [kopia/kopia](https://github.com/kopia/kopia) — Cross-platform backup tool for Windows, macOS & Linux with fast, incremental backups, clie
- [Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) — Talk to any LLM with hands-free voice interaction, voice interruption, and Live2D taking f
- [rook/rook](https://github.com/rook/rook) — Storage Orchestration for Kubernetes
- [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) — Build voice agents with open-source models
- [cloudwego/eino](https://github.com/cloudwego/eino) — The ultimate LLM/AI application development framework in Go.
- [JoeanAmier/XHS-Downloader](https://github.com/JoeanAmier/XHS-Downloader) — 小红书（XiaoHongShu、RedNote）链接提取/作品采集工具
- [datahub-project/datahub](https://github.com/datahub-project/datahub) — The Context Platform for your Data and AI Stack
- [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) — HexStrike AI MCP Agents is an advanced MCP server that lets AI agents (Claude, GPT, Copilo
- [Jeffallan/claude-skills](https://github.com/Jeffallan/claude-skills) — 67 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pa
- [xinnan-tech/xiaozhi-esp32-server](https://github.com/xinnan-tech/xiaozhi-esp32-server) — 本项目为xiaozhi-esp32提供后端服务，帮助您快速搭建ESP32设备控制服务器。Backend service for xiaozhi-esp32, helps you q
- [open-gsd/gsd-core](https://github.com/open-gsd/gsd-core) — Git. Ship. Done - Core
- [NVIDIA/garak](https://github.com/NVIDIA/garak) — the LLM vulnerability scanner
- [eze-is/web-access](https://github.com/eze-is/web-access) — 给 Claude Code 装上完整联网能力的 skill：三层通道调度 + 浏览器 CDP + 并行分治
- [hatchet-dev/hatchet](https://github.com/hatchet-dev/hatchet) — 🪓 An orchestration engine for background tasks, AI agents, and durable workflows
- [apurvsinghgautam/robin](https://github.com/apurvsinghgautam/robin) — AI-Powered Dark Web OSINT Tool
- [JerryZLiu/Dayflow](https://github.com/JerryZLiu/Dayflow) — The automatic work journal/time tracker. Privately turns your screen into a timeline of wh
- [anbeime/skill](https://github.com/anbeime/skill) — 收录最全、更新最快的技能Skills商店：精选原创技能包（涵盖文档处理、内容创作、编程开发、机器学习、自动化工作流），全部打包好可直接安装使用！同时自动抓取GitHub上万个Ski
- [kenn-io/agentsview](https://github.com/kenn-io/agentsview) — Local-first session search, analytics, insights, and token use statistics for coding agent
- [huangruiteng/loopx](https://github.com/huangruiteng/loopx) — Long-horizon agent control plane for durable, governed work across Codex, Claude Code, and
- [vllm-project/semantic-router](https://github.com/vllm-project/semantic-router) — A programmable Mixture-of-Models router for heterogeneous LLM inference
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) — A coding-agent skill for multi-phase security audits with independently verified, machine-
- [gpustack/gpustack](https://github.com/gpustack/gpustack) — A GPU cluster manager for high-performance AI model serving (vLLM, SGLang) and on-demand S
- [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) — Local-first healthcare AI: clinical NER & HIPAA PII de-identification that runs 100% on-de
- [looplj/axonhub](https://github.com/looplj/axonhub) — ⚡️ Open-source AI Gateway — Use any SDK to call 100+ LLMs. Built-in failover, load balanci
- [github/gh-aw](https://github.com/github/gh-aw) — GitHub Agentic Workflows
- [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) — The ultimate RAG for your monorepo. Query, understand, and edit multi-language codebases w
- [entireio/cli](https://github.com/entireio/cli) — 📜 Entire CLI hooks into your Git workflow to capture AI agent sessions as you work. Sessio
- [google-gemini/gemini-skills](https://github.com/google-gemini/gemini-skills) — Skills for the Gemini API, SDK and model/agent interactions
- [sooryathejas/METATRON](https://github.com/sooryathejas/METATRON) — AI-powered penetration testing assistant using local LLM on linux (Parrot OS)
- [kubernetes-sigs/agent-sandbox](https://github.com/kubernetes-sigs/agent-sandbox) — agent-sandbox enables easy management of isolated, stateful, singleton workloads, ideal fo
- [ilysenko/codex-desktop-linux](https://github.com/ilysenko/codex-desktop-linux) — Unofficial ChatGPT desktop app for Linux (formerly the Codex app), built locally from Open
- [kagent-dev/kagent](https://github.com/kagent-dev/kagent) — Cloud Native Agentic AI | Discord: https://bit.ly/kagentdiscord
- [DataDog/datadog-agent](https://github.com/DataDog/datadog-agent) — Main repository for Datadog Agent
- [grafana/mcp-grafana](https://github.com/grafana/mcp-grafana) — MCP server for Grafana
- [simonlin1212/TradingAgents-astock](https://github.com/simonlin1212/TradingAgents-astock) — A股多Agent投研框架 — 适配A股数据源(龙虎榜/游资/解禁等)，7位分析师基于A股规则的辩论决策，基于TradingAgents深度改造，适配大A。A-share multi
- [Soju06/codex-lb](https://github.com/Soju06/codex-lb) — Codex/ChatGPT multiple account load balancer & proxy with usage tracking, dashboard, and O
- [FluidInference/FluidAudio](https://github.com/FluidInference/FluidAudio) — Frontier CoreML audio models in your apps — text-to-speech, speech-to-text, voice activity
- [rlaope/oh-my-hermes](https://github.com/rlaope/oh-my-hermes) — All in one plugin for Hermes Agent ⚚ the coding intelligence, a long-term memory system an
- [neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) — FreeCAD MCP(Model Context Protocol) server
- [noonghunna/club-3090](https://github.com/noonghunna/club-3090) — Community recipes for serving LLMs on RTX 3090/4090/5090 CUDA gpus. Multi-engine (vLLM, ll
- [stacklok/toolhive](https://github.com/stacklok/toolhive) — ToolHive is an enterprise-grade platform for running and managing Model Context Protocol (
- [Javis603/token-monitor](https://github.com/Javis603/token-monitor) — Local-first desktop widget for tracking token usage, costs, and limits across 35+ AI codin
- [xuanyustudio/LocalMiniDrama](https://github.com/xuanyustudio/LocalMiniDrama) — 🎬 seedance2接入 开源本地 AI 短剧 & 漫剧生成工具 —— 从故事到成片一站式完成，数据不出本机，短剧工作流管理平台，高灵活度，AI真人剧，AI漫剧本地搞定。 Ope
- [datacurve-ai/deep-swe](https://github.com/datacurve-ai/deep-swe) — Measuring frontier coding agents on original, long-horizon engineering tasks
- [sandeco/reversa](https://github.com/sandeco/reversa) — Transform legacy systems into executable specifications for AI coding agents
- [e2b-dev/runtime](https://github.com/e2b-dev/runtime) — The runtime behind every E2B stack: Cloud, Enterprise, and your own machine.
- [tddworks/ClaudeBar](https://github.com/tddworks/ClaudeBar) — A macOS menu bar application that monitors AI coding assistant usage quotas. Keep track of
- [najmuzzaman-mohammad/gawkbot](https://github.com/najmuzzaman-mohammad/gawkbot) — open source grok bot. gawk bots automate your menial work via AI models and build you micr
- [MG1937/ASC](https://github.com/MG1937/ASC) — ASC is a super FAST Android decompiler front-end designed for Agents/Mobile Researchers.
- [uzairansaruzi/hermex](https://github.com/uzairansaruzi/hermex) — Native iPhone app for your Hermes agent
- [Mininglamp-OSS/octo-server](https://github.com/Mininglamp-OSS/octo-server) — 🐙 The Go backend powering OCTO — an open workplace built for humans × AI agents. REST & We
- [obot-platform/obot](https://github.com/obot-platform/obot) — Complete AI Governance Platform from Obot AI
- [microsoft/power-platform-skills](https://github.com/microsoft/power-platform-skills) — A plugin marketplace for Claude Code/GitHub Copilot that provides Power Platform developme
- [xob0t/gotohp](https://github.com/xob0t/gotohp) — Unofficial Google Photos Desktop GUI Client
- [Layr-Labs/d-inference](https://github.com/Layr-Labs/d-inference) — Private Inference Network on Idle Macs
- [basecamp/hey-cli](https://github.com/basecamp/hey-cli) — HEY CLI and Agent Skills
- [Nanako0129/TokenBar](https://github.com/Nanako0129/TokenBar) — AI token usage & quota monitor for the macOS menu bar — native Swift, Liquid Glass, 3D con
- [ahujasid/blender-mcp](https://github.com/ahujasid/blender-mcp) — Community plugin to control Blender 3D with any LLM of your choice
- [santifer/career-ops](https://github.com/santifer/career-ops) — Open-source AI job search: scan job portals, evaluate listings into a structured A-H repor
- [workweave/router](https://github.com/workweave/router) — Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut cos

</details>

---

## 📊 Machine Learning — 11

*Dossier DevBrain : `Machine Learning/`*

- [ ] **[eriklindernoren/ML-From-Scratch](https://github.com/eriklindernoren/ML-From-Scratch)** — 3 j · ⭐ 32k · `Python` · MIT
      Machine Learning From Scratch. Bare bones NumPy implementations of machine learning models and algorithms with a focus on accessibility. Aims to cover everything…
- [ ] **[prometheus/prometheus](https://github.com/prometheus/prometheus)** — 2 j · ⭐ 66k · `Go` · Apache-2.0
      The Prometheus monitoring system and time series database.
- [ ] **[google-research/timesfm](https://github.com/google-research/timesfm)** — 2 j · ⭐ 32k · `Python` · Apache-2.0
      TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.

<details><summary>Passés une seule journée — 8</summary>

- [pytorch/pytorch](https://github.com/pytorch/pytorch) — Tensors and Dynamic neural networks in Python with strong GPU acceleration
- [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) — Ultralytics YOLO26, YOLO11, YOLOv8 — object detection, instance segmentation, semantic seg
- [roboflow/supervision](https://github.com/roboflow/supervision) — We write your reusable computer vision tools. 💜
- [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) — VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and
- [volcano-sh/volcano](https://github.com/volcano-sh/volcano) — A Cloud Native Batch System (Project under CNCF)
- [mujocolab/mjlab](https://github.com/mujocolab/mjlab) — Isaac Lab API, powered by MuJoCo-Warp, for RL and robotics research
- [microsoft/MoGe](https://github.com/microsoft/MoGe) — [CVPR'25 Oral] MoGe: Unlocking Accurate Monocular Geometry Estimation for Open-Domain Imag
- [pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl) — RL training environments for Microduck (mjlab)

</details>

---

## 🔀 Data & pipelines — 11

*Dossier DevBrain : `Data & pipelines/`*

- [ ] **[sngyai/Sequoia-X](https://github.com/sngyai/Sequoia-X)** — 3 j · ⭐ 7 310 · `Python` · **licence aucune**
      A股自动选股系统 — 多种技术形态自动扫描，收盘后自动运行并推送飞书
- [ ] **[public-apis/public-apis](https://github.com/public-apis/public-apis)** — 2 j · ⭐ 480k · `Python` · MIT
      A collective list of free APIs
- [ ] **[Asabeneh/30-Days-Of-Python](https://github.com/Asabeneh/30-Days-Of-Python)** — 2 j · ⭐ 73k · `Python` · **licence aucune**
      The 30 Days of Python programming challenge is a step-by-step guide to learn the Python programming language in 30 days. This challenge may take more than 100 day…
- [ ] **[dgtlmoon/changedetection.io](https://github.com/dgtlmoon/changedetection.io)** — 2 j · ⭐ 34k · `Python` · Apache-2.0
      Best and simplest tool for website change detection, web page monitoring, and website change alerts. Perfect for tracking content changes, price drops, restock al…
- [ ] **[TecharoHQ/anubis](https://github.com/TecharoHQ/anubis)** — 2 j · ⭐ 22k · `Go` · MIT
      Weighs the soul of incoming HTTP requests to stop AI crawlers
- [ ] **[getarcaneapp/arcane](https://github.com/getarcaneapp/arcane)** — 2 j · ⭐ 7 414 · `Go` · BSD-3-Clause
      Modern Docker Management, Designed for Everyone
- [ ] **[Mathieu2301/TradingView-API](https://github.com/Mathieu2301/TradingView-API)** — 2 j · ⭐ 5 145 · `JavaScript` · **licence aucune**
      📈 Get real-time stocks from TradingView

<details><summary>Passés une seule journée — 4</summary>

- [PrefectHQ/prefect](https://github.com/PrefectHQ/prefect) — Prefect is a workflow orchestration framework for building resilient data pipelines in Pyt
- [projectdiscovery/katana](https://github.com/projectdiscovery/katana) — A next-generation crawling and spidering framework.
- [huangxd-/danmu_api](https://github.com/huangxd-/danmu_api) — 一个人人都能部署的基于 js 的弹幕 API 服务器，支持爱优腾芒哔咪人韩巴狐乐西埋帆红弹幕直接获取，兼容弹弹play的搜索、详情查询和弹幕获取接口规范，并提供日志记录，支持ver
- [Solr159/JavBoss](https://github.com/Solr159/JavBoss) — 开箱即用的本地 JAV/视频 刮削、管理、播放软件，支持命令行一键安装和 Docker 部署。只需简单添加目录，即可打造你的私人 JAV/视频 媒体库，带给你顶级的浏览体验，懒人必

</details>

---

## 🗄️ Bases de données — 6

*Dossier DevBrain : `Bases de données/`*

- [ ] **[usememos/memos](https://github.com/usememos/memos)** — 3 j · ⭐ 63k · `Go` · MIT
      Open-source, self-hosted note-taking tool built for quick capture. Markdown-native, lightweight, and fully yours.
- [ ] **[jiji262/douyin-downloader](https://github.com/jiji262/douyin-downloader)** — 3 j · ⭐ 11k · `Python` · MIT
      A practical Douyin downloader for both single-item and profile batch downloads, with progress display, retries, SQLite deduplication, and browser fallback support…

<details><summary>Passés une seule journée — 4</summary>

- [gogs/gogs](https://github.com/gogs/gogs) — The painless way to host your own Git service
- [searxng/searxng](https://github.com/searxng/searxng) — SearXNG is a free internet metasearch engine which aggregates results from various search 
- [JoeanAmier/TikTokDownloader](https://github.com/JoeanAmier/TikTokDownloader) — 抖音 / TikTok 平台作品下载/数据采集工具
- [miniflux/v2](https://github.com/miniflux/v2) — Minimalist and opinionated feed reader

</details>

---

## 📈 Observabilité — 12

*Dossier DevBrain : `Observabilité/`*

- [ ] **[cilium/cilium](https://github.com/cilium/cilium)** — 2 j · ⭐ 25k · `Go` · Apache-2.0
      eBPF-based Networking, Security, and Observability
- [ ] **[fleetbase/fleetbase](https://github.com/fleetbase/fleetbase)** — 2 j · ⭐ 3 573 · `JavaScript` · AGPL-3.0
      Modular logistics and supply chain operating system (LSOS)

<details><summary>Passés une seule journée — 10</summary>

- [louislam/uptime-kuma](https://github.com/louislam/uptime-kuma) — A fancy self-hosted monitoring tool
- [TryGhost/Ghost](https://github.com/TryGhost/Ghost) — Independent technology for modern publishing, memberships, subscriptions and newsletters.
- [glanceapp/glance](https://github.com/glanceapp/glance) — A self-hosted dashboard that puts all your feeds in one place
- [jaegertracing/jaeger](https://github.com/jaegertracing/jaeger) — CNCF Jaeger, a Distributed Tracing Platform
- [pranshuparmar/witr](https://github.com/pranshuparmar/witr) — Why is this running? Trace any process, port, container, or file back to what started it -
- [amir20/dozzle](https://github.com/amir20/dozzle) — Realtime log viewer for containers. Supports Docker, Swarm and K8s.
- [netalertx/NetAlertX](https://github.com/netalertx/NetAlertX) — Centralized network visibility and continuous asset discovery. Monitor devices, detect cha
- [open-telemetry/opentelemetry-collector-contrib](https://github.com/open-telemetry/opentelemetry-collector-contrib) — Contrib repository for the OpenTelemetry Collector
- [sgoudelis/ground-station](https://github.com/sgoudelis/ground-station) — Browser-based ground station suite for satellite tracking, SDR reception, hardware control
- [operacle/checkcle](https://github.com/operacle/checkcle) — CheckCle is a self-hosted, open-source monitoring platform for seamless, real-time full-st

</details>

---

## ⚙️ DevOps — 34

*Dossier DevBrain : `DevOps/`*

- [ ] **[authelia/authelia](https://github.com/authelia/authelia)** — 4 j · ⭐ 28k · `Go` · Apache-2.0
      The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.
- [ ] **[Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI)** — 4 j · ⭐ 28k · `JavaScript` · MIT
      Unrestricted Open-source alternative to AI video platforms — Free AI image & video generation studio with 600+ models (Flux, Midjourney, Kling, Sora, Veo). No con…
- [ ] **[navidrome/navidrome](https://github.com/navidrome/navidrome)** — 4 j · ⭐ 23k · `Go` · GPL-3.0
      🎧 Your Personal Streaming Service
- [ ] **[superplanehq/superplane](https://github.com/superplanehq/superplane)** — 4 j · ⭐ 7 475 · `Go` · Apache-2.0
      Open source factory for one-shot engineering
- [ ] **[experientiallabs/experiential](https://github.com/experientiallabs/experiential)** — 3 j · ⭐ 4 970 · `Python` · Apache-2.0
      Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend bette…
- [ ] **[kubernetes/kubernetes](https://github.com/kubernetes/kubernetes)** — 2 j · ⭐ 127k · `Go` · Apache-2.0
      Production-Grade Container Scheduling and Management
- [ ] **[juanfont/headscale](https://github.com/juanfont/headscale)** — 2 j · ⭐ 43k · `Go` · BSD-3-Clause
      An open source, self-hosted implementation of the Tailscale control server
- [ ] **[podman-container-tools/podman](https://github.com/podman-container-tools/podman)** — 2 j · ⭐ 32k · `Go` · Apache-2.0
      Podman: A tool for managing OCI containers and pods.
- [ ] **[chaitin/SafeLine](https://github.com/chaitin/SafeLine)** — 2 j · ⭐ 22k · `Go` · GPL-3.0
      SafeLine is a self-hosted WAF(Web Application Firewall) / reverse proxy to protect your web apps from attacks and exploits.
- [ ] **[Project-HAMi/HAMi](https://github.com/Project-HAMi/HAMi)** — 2 j · ⭐ 4 608 · `Go` · Apache-2.0
      Heterogeneous GPU Sharing on Kubernetes

<details><summary>Passés une seule journée — 24</summary>

- [moby/moby](https://github.com/moby/moby) — The Moby Project - a collaborative project for the container ecosystem to assemble contain
- [nektos/act](https://github.com/nektos/act) — Run your GitHub Actions locally 🚀
- [aquasecurity/trivy](https://github.com/aquasecurity/trivy) — Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code rep
- [derailed/k9s](https://github.com/derailed/k9s) — 🐶 Kubernetes CLI To Manage Your Clusters In Style!
- [helm/helm](https://github.com/helm/helm) — The Kubernetes Package Manager
- [opentofu/opentofu](https://github.com/opentofu/opentofu) — OpenTofu lets you declaratively manage your cloud infrastructure.
- [goharbor/harbor](https://github.com/goharbor/harbor) — An open source trusted cloud native registry project that stores, signs, and scans content
- [rancher/rancher](https://github.com/rancher/rancher) — Complete container management platform
- [argoproj/argo-cd](https://github.com/argoproj/argo-cd) — Declarative Continuous Deployment for Kubernetes
- [LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) — Free and Open Source Machine Translation API. Self-hosted, offline capable and easy to set
- [Billionmail/BillionMail](https://github.com/Billionmail/BillionMail) — BillionMail gives you open-source MailServer, NewsLetter, Email Marketing — fully self-hos
- [alam00000/bentopdf](https://github.com/alam00000/bentopdf) — The Privacy First PDF Toolkit
- [zitadel/zitadel](https://github.com/zitadel/zitadel) — ZITADEL - Identity infrastructure, simplified for you.
- [rommapp/romm](https://github.com/rommapp/romm) — A beautiful, powerful, self-hosted ROM manager and player.
- [crossplane/crossplane](https://github.com/crossplane/crossplane) — The Cloud Native Control Plane
- [owncast/owncast](https://github.com/owncast/owncast) — Take control over your live stream video by running it yourself. Streaming + chat out of t
- [kedacore/keda](https://github.com/kedacore/keda) — KEDA is a Kubernetes-based Event Driven Autoscaling component. It provides event driven sc
- [moby/buildkit](https://github.com/moby/buildkit) — concurrent, cache-efficient, and Dockerfile-agnostic builder toolkit
- [fluxcd/flux2](https://github.com/fluxcd/flux2) — Open and extensible continuous delivery solution for Kubernetes. Powered by GitOps Toolkit
- [actions/actions-runner-controller](https://github.com/actions/actions-runner-controller) — Kubernetes controller for GitHub Actions self-hosted runners
- [securo-finance/securo](https://github.com/securo-finance/securo) — Open-source personal finance manager. Self-hosted, privacy-first.
- [project-zot/zot](https://github.com/project-zot/zot) — zot - A scale-out production-ready vendor-neutral OCI-native container image/artifact regi
- [QuiteAFancyEmerald/InvisiProxy](https://github.com/QuiteAFancyEmerald/InvisiProxy) — InvisiProxy LTS is a web proxy service that helps you access websites that may be blocked 
- [e2b-dev/infra](https://github.com/e2b-dev/infra) — Infrastructure that's powering E2B Cloud.

</details>

---

## 🔐 Sécurité — 21

*Dossier DevBrain : `Sécurité/`*

- [ ] **[bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view)** — 5 j · ⭐ 35k · `JavaScript` · **licence NOASSERTION**
      A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.
- [ ] **[bikini/exploitarium](https://github.com/bikini/exploitarium)** — 4 j · ⭐ 5 116 · `Python` · **licence aucune**
      A single archive of public exploit PoCs and vulnerability research writeups. At the time I post these, none have been reported. Feel free to report them yourself…
- [ ] **[trufflesecurity/trufflehog](https://github.com/trufflesecurity/trufflehog)** — 3 j · ⭐ 27k · `Go` · AGPL-3.0
      Find, verify, and analyze leaked credentials
- [ ] **[majd/ipatool](https://github.com/majd/ipatool)** — 3 j · ⭐ 11k · `Go` · MIT
      Command-line tool that allows you to search for iOS, iPadOS, tvOS, visionOS, and macOS apps on the App Store, and download .ipa or macOS .pkg app packages.
- [ ] **[gchq/CyberChef](https://github.com/gchq/CyberChef)** — 2 j · ⭐ 35k · `JavaScript` · Apache-2.0
      The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis
- [ ] **[smicallef/spiderfoot](https://github.com/smicallef/spiderfoot)** — 2 j · ⭐ 22k · `Python` · MIT
      SpiderFoot automates OSINT for threat intelligence and mapping your attack surface.
- [ ] **[sundowndev/phoneinfoga](https://github.com/sundowndev/phoneinfoga)** — 2 j · ⭐ 17k · `Go` · GPL-3.0
      Information gathering framework for phone numbers
- [ ] **[dstotijn/hetty](https://github.com/dstotijn/hetty)** — 2 j · ⭐ 12k · `Go` · MIT
      An HTTP toolkit for security research.
- [ ] **[openfga/openfga](https://github.com/openfga/openfga)** — 2 j · ⭐ 5 780 · `Go` · Apache-2.0
      A high performance and flexible authorization/permission engine built for developers and inspired by Google Zanzibar
- [ ] **[nicocha30/ligolo-ng](https://github.com/nicocha30/ligolo-ng)** — 2 j · ⭐ 4 994 · `Go` · GPL-3.0
      An advanced, yet simple, tunneling/pivoting tool that uses a TUN interface.
- [ ] **[Ed1s0nZ/CyberStrikeAI](https://github.com/Ed1s0nZ/CyberStrikeAI)** — 2 j
      The system of action for AI-native cybersecurity—where intent becomes governed execution, evidence becomes operational memory, and every operation improves the next.

<details><summary>Passés une seule journée — 10</summary>

- [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) — Hunt down social media accounts by username across social networks
- [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) — A list of useful payloads and bypass for Web Application Security and Pentest/CTF
- [pocketbase/pocketbase](https://github.com/pocketbase/pocketbase) — Open Source realtime backend in 1 file
- [tailscale/tailscale](https://github.com/tailscale/tailscale) — The easiest, most secure way to use WireGuard and 2FA.
- [qeeqbox/social-analyzer](https://github.com/qeeqbox/social-analyzer) — API, CLI, and Web App for analyzing and finding a person's profile in 1000 social media \ 
- [slackhq/nebula](https://github.com/slackhq/nebula) — A scalable overlay networking tool with a focus on performance, simplicity and security
- [crowdsecurity/crowdsec](https://github.com/crowdsecurity/crowdsec) — CrowdSec - the open-source and participative security solution offering crowdsourced prote
- [go-resty/resty](https://github.com/go-resty/resty) — Simple HTTP, REST, and SSE client library for Go
- [go-acme/lego](https://github.com/go-acme/lego) — Let's Encrypt/ACME client and library written in Go
- [kaifcodec/user-scanner](https://github.com/kaifcodec/user-scanner) — 🕵️‍♂️ (2-in-1) Email & Username OSINT suite for deep data extraction just from a single Em

</details>

---

## 🖥️ Interfaces & apps data — 3

*Dossier DevBrain : `Interfaces & apps data/`*

- [ ] **[jesseduffield/lazygit](https://github.com/jesseduffield/lazygit)** — 2 j · ⭐ 82k · `Go` · MIT
      simple terminal UI for git commands

<details><summary>Passés une seule journée — 2</summary>

- [react/react](https://github.com/react/react) — The library for web and native user interfaces.
- [nasa-gibs/worldview](https://github.com/nasa-gibs/worldview) — Interactive interface for browsing global, full-resolution satellite imagery

</details>

---

## 🌐 Web & API — 10

*Dossier DevBrain : `Web & API/`*

- [ ] **[MHSanaei/3x-ui](https://github.com/MHSanaei/3x-ui)** — 5 j · ⭐ 46k · `Go` · GPL-3.0
      Supporting multi-protocol multi-user(Vmess, Vless, Trojan, ShadowSocks, Wireguard, Hysteria, Tunnel, Mixed, HTTP, Tun, MTProto، AmneziaWG)
- [ ] **[prettier/prettier](https://github.com/prettier/prettier)** — 3 j · ⭐ 52k · `JavaScript` · MIT
      Prettier is an opinionated code formatter.
- [ ] **[XTLS/Xray-core](https://github.com/XTLS/Xray-core)** — 3 j · ⭐ 41k · `Go` · MPL-2.0
      Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.
- [ ] **[fastify/fastify](https://github.com/fastify/fastify)** — 2 j · ⭐ 37k · `JavaScript` · MIT
      Fast and low overhead web framework, for Node.js

<details><summary>Passés une seule journée — 6</summary>

- [fatedier/frp](https://github.com/fatedier/frp) — A fast reverse proxy to help you expose a local server behind a NAT or firewall to the int
- [axios/axios](https://github.com/axios/axios) — Promise based HTTP client for the browser and node.js
- [gin-gonic/gin](https://github.com/gin-gonic/gin) — Gin is a high-performance HTTP web framework written in Go. It provides a Martini-like API
- [Asabeneh/30-Days-Of-JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript) — 30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript pr
- [ipfs/kubo](https://github.com/ipfs/kubo) — IPFS implementation in Go: a daemon that stores and serves content-addressed data, with a 
- [NdoleStudio/httpsms](https://github.com/NdoleStudio/httpsms) — Send and receive SMS messages using your Android phone programmatically via a simple HTTP 

</details>

---

## 🔊 Signal & audio — 7

*Dossier DevBrain : `Signal & audio/`*

- [ ] **[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)** — 7 j · ⭐ 31k · `Python` · AGPL-3.0
      VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in…
- [ ] **[k2-fsa/OmniVoice](https://github.com/k2-fsa/OmniVoice)** — 5 j · ⭐ 13k · `Python` · Apache-2.0
      High-Quality Voice Cloning TTS for 600+ Languages
- [ ] **[yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)** — 2 j · ⭐ 191k · `Python` · Unlicense
      A feature-rich command-line audio/video downloader
- [ ] **[pdone/lx-music-source](https://github.com/pdone/lx-music-source)** — 2 j · ⭐ 8 843 · `JavaScript` · **licence aucune**
      洛雪音乐源

<details><summary>Passés une seule journée — 3</summary>

- [livekit/livekit](https://github.com/livekit/livekit) — End-to-end realtime stack for connecting humans and AI
- [bjarneo/cliamp](https://github.com/bjarneo/cliamp) — cliamp - Terminal music player inspired by winamp
- [OpenDCAI/GameFactory-3A](https://github.com/OpenDCAI/GameFactory-3A) — A comprehensive open-source 3A game-generation skill and asset framework.

</details>

---

## 🎬 Médias — 5

*Dossier DevBrain : `Médias/`*

- [ ] **[3b1b/manim](https://github.com/3b1b/manim)** — 2 j · ⭐ 93k · `Python` · MIT
      Animation engine for explanatory math videos
- [ ] **[Neet-Nestor/Telegram-Media-Downloader](https://github.com/Neet-Nestor/Telegram-Media-Downloader)** — 2 j · ⭐ 5 506 · `JavaScript` · GPL-3.0
      A script allowing you to download images and videos from Telegram web even if the group restricts downloading.

<details><summary>Passés une seule journée — 3</summary>

- [hpcaitech/Open-Sora](https://github.com/hpcaitech/Open-Sora) — Open-Sora: Democratizing Efficient Video Production for All
- [playcanvas/engine](https://github.com/playcanvas/engine) — Powerful web graphics runtime built on WebGL, WebGPU, WebXR and glTF
- [yuliskov/SmartTubeLegacy](https://github.com/yuliskov/SmartTubeLegacy) — Watch YouTube videos on your TV and set-top-box with comfort

</details>

---

## 🧰 Outils de développement — 19

*Dossier DevBrain : `Outils de développement/`*

- [ ] **[github/spec-kit](https://github.com/github/spec-kit)** — 4 j · ⭐ 137k · `Python` · MIT
      💫 Toolkit to help you get started with Spec-Driven Development
- [ ] **[is-a-dev/register](https://github.com/is-a-dev/register)** — 4 j · ⭐ 11k · `JavaScript` · MIT
      Grab your own sweet-looking '.is-a.dev' subdomain.
- [ ] **[kunchenguid/no-mistakes](https://github.com/kunchenguid/no-mistakes)** — 3 j · ⭐ 8 487 · `Go` · MIT
      git push no-mistakes
- [ ] **[junegunn/fzf](https://github.com/junegunn/fzf)** — 2 j · ⭐ 83k · `Go` · MIT
      🌸 A command-line fuzzy finder
- [ ] **[spicetify/cli](https://github.com/spicetify/cli)** — 2 j · ⭐ 24k · `JavaScript` · LGPL-2.1
      Command-line tool to customize Spotify client. Supports Windows, macOS, and Linux.
- [ ] **[yorukot/superfile](https://github.com/yorukot/superfile)** — 2 j · ⭐ 23k · `Go` · MIT
      Pretty fancy and modern terminal file manager
- [ ] **[Acode-Foundation/Acode](https://github.com/Acode-Foundation/Acode)** — 2 j · ⭐ 7 025 · `JavaScript` · MIT
      Acode - powerful text/code editor for android

<details><summary>Passés une seule journée — 12</summary>

- [byoungd/up](https://github.com/byoungd/up) — An advanced guide which might benefit you a lot 🎉 . 韩先凯的人生进阶指南 人生进阶指南 离谱的人生 人生进阶 AI学习 AI指南
- [SimplifyJobs/Summer2027-Internships](https://github.com/SimplifyJobs/Summer2027-Internships) — Summer 2027 software engineering, data science, AI, quant, product management, and hardwar
- [microsoft/monaco-editor](https://github.com/microsoft/monaco-editor) — A browser based code editor
- [cli/cli](https://github.com/cli/cli) — GitHub’s official command line tool
- [grafana/k6](https://github.com/grafana/k6) — A modern load testing tool, using Go and JavaScript
- [goreleaser/goreleaser](https://github.com/goreleaser/goreleaser) — Release engineering, simplified
- [openclaw/gogcli](https://github.com/openclaw/gogcli) — Google Workspace in your terminal.
- [tulir/whatsmeow](https://github.com/tulir/whatsmeow) — Go library for the WhatsApp web multidevice API
- [masterking32/MasterDnsVPN](https://github.com/masterking32/MasterDnsVPN) — Advanced DNS tunneling VPN for censorship bypass, optimized beyond DNSTT and SlipStream wi
- [ankitpokhrel/jira-cli](https://github.com/ankitpokhrel/jira-cli) — 🔥 Feature-rich interactive Jira command line.
- [kunchenguid/lavish-axi](https://github.com/kunchenguid/lavish-axi) — HTML is the new markdown. Lavish is the new editor for your HTML artifacts.
- [google-deepmind/alphagenome](https://github.com/google-deepmind/alphagenome) — This API provides programmatic access to the AlphaGenome model developed by Google DeepMin

</details>

---

## ❓ Non classé — 50

- [ ] **[pbakaus/impeccable](https://github.com/pbakaus/impeccable)** — 5 j · ⭐ 68k · `JavaScript` · Apache-2.0
      The design language that makes your AI harness better at design.
- [ ] **[p1neappleXpress/OpenFlux](https://github.com/p1neappleXpress/OpenFlux)** — 3 j · ⭐ 1 640 · `Go` · GPL-3.0
      Network stack research tool. TCP tunnel with pluggable transports.
- [ ] **[syncthing/syncthing](https://github.com/syncthing/syncthing)** — 2 j · ⭐ 88k · `Go` · MPL-2.0
      Open Source Continuous File Synchronization
- [ ] **[Zie619/n8n-workflows](https://github.com/Zie619/n8n-workflows)** — 2 j · ⭐ 56k · `Python` · MIT
      all of the workflows of n8n i could find (also from the site itself)
- [ ] **[hashicorp/nomad](https://github.com/hashicorp/nomad)** — 2 j · ⭐ 16k · `Go` · **licence NOASSERTION**
      Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a mix of microservice, batch, containerized, and non-containerized applica…
- [ ] **[coredns/coredns](https://github.com/coredns/coredns)** — 2 j · ⭐ 14k · `Go` · Apache-2.0
      CoreDNS is a DNS server that chains plugins
- [ ] **[Stremio/stremio-web](https://github.com/Stremio/stremio-web)** — 2 j · ⭐ 13k · `JavaScript` · GPL-2.0
      Stremio - Freedom to Stream
- [ ] **[facebook/stylex](https://github.com/facebook/stylex)** — 2 j · ⭐ 10k · `JavaScript` · MIT
      StyleX is the styling system for ambitious user interfaces.
- [ ] **[petergyang/no-ai-slop](https://github.com/petergyang/no-ai-slop)** — 2 j · ⭐ 10k · `Python` · MIT
      Removes 20+ patterns of AI slop from any piece of writing.
- [ ] **[sysadminsmedia/homebox](https://github.com/sysadminsmedia/homebox)** — 2 j · ⭐ 7 314 · `Go` · AGPL-3.0
      A continuation of HomeBox the inventory and organization system built for the Home User
- [ ] **[james-6-23/codex2api](https://github.com/james-6-23/codex2api)** — 2 j · ⭐ 2 138 · `Go` · **licence aucune**
      Codex2API 是一个基于 Go + Gin + React/Vite 的 Codex 反向代理与管理后台项目
- [ ] **[Yu9191/wloc](https://github.com/Yu9191/wloc)** — 2 j
      修改 Apple 网络定位（gs-loc）返回坐标 · 支持 Surge / Quantumult X / Loon / Stash · 快捷指令一键设置/恢复定位

<details><summary>Passés une seule journée — 38</summary>

- [microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners) — 24 Lessons, 12 Weeks, Get Started as a Web Developer
- [home-assistant/core](https://github.com/home-assistant/core) — 🏡 Open source home automation that puts local control and privacy first.
- [gohugoio/hugo](https://github.com/gohugoio/hugo) — The world’s fastest framework for building websites.
- [webpack/webpack](https://github.com/webpack/webpack) — A bundler for javascript and friends. Packs many modules into a few bundled assets. Code S
- [h5bp/html5-boilerplate](https://github.com/h5bp/html5-boilerplate) — A professional front-end template for building fast, robust, and adaptable web apps or sit
- [poteto/hiring-without-whiteboards](https://github.com/poteto/hiring-without-whiteboards) — ⭐️ Companies that don't have a broken hiring process
- [bigskysoftware/htmx](https://github.com/bigskysoftware/htmx) — </> htmx - high power tools for HTML
- [restic/restic](https://github.com/restic/restic) — Fast, secure, efficient backup program
- [numpy/numpy](https://github.com/numpy/numpy) — The fundamental package for scientific computing with Python.
- [sipeed/picoclaw](https://github.com/sipeed/picoclaw) — Tiny, Fast, and Deployable anywhere — automate the mundane, unleash your creativity
- [XIU2/CloudflareSpeedTest](https://github.com/XIU2/CloudflareSpeedTest) — 🌩「自选优选 IP」测试 Cloudflare CDN 延迟和速度，获取最快 IP ！当然也支持其他 CDN / 多个解析 IP 的网站 ~
- [go-playground/validator](https://github.com/go-playground/validator) — 💯Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array
- [maillab/cloud-mail](https://github.com/maillab/cloud-mail) — A Cloudflare-based email service | 基于 Cloudflare 的邮箱服务 | Cloudflare Email 邮箱 Mail
- [AlexxIT/go2rtc](https://github.com/AlexxIT/go2rtc) — Ultimate camera streaming application
- [Anarios/return-youtube-dislike](https://github.com/Anarios/return-youtube-dislike) — Chrome extension to return youtube dislikes
- [fishjar/kiss-translator](https://github.com/fishjar/kiss-translator) — A simple, open source bilingual translation extension & Greasemonkey script (一个简约、开源的 双语对照
- [CodeWithHarry/Sigma-Web-Dev-Course](https://github.com/CodeWithHarry/Sigma-Web-Dev-Course) — Source Code for Sigma Web Development Course
- [fmhy/edit](https://github.com/fmhy/edit) — Make changes to FMHY
- [qist/tvbox](https://github.com/qist/tvbox) — OK影视、tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。
- [NVIDIA/personaplex](https://github.com/NVIDIA/personaplex) — PersonaPlex code.
- [alireza0/s-ui](https://github.com/alireza0/s-ui) — An advanced Web Panel • Built for SagerNet/Sing-Box
- [v2fly/domain-list-community](https://github.com/v2fly/domain-list-community) — Community managed domain list. Generate geosite.dat for V2Ray.
- [gtsteffaniak/filebrowser](https://github.com/gtsteffaniak/filebrowser) — 📂 Web File Browser
- [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) — 
- [tailscale/tailcat](https://github.com/tailscale/tailcat) — like netcat, but over Tailscale's data plane, without Tailscale's control plane
- [evcc-io/evcc](https://github.com/evcc-io/evcc) — solar charging ☀️🚘
- [zarazhangrui/follow-builders](https://github.com/zarazhangrui/follow-builders) — AI builders digest — monitors top AI builders on X and YouTube podcasts, remixes their con
- [ethereum-optimism/optimism](https://github.com/ethereum-optimism/optimism) — Optimism is Ethereum, scaled.
- [stdlib-js/stdlib](https://github.com/stdlib-js/stdlib) — ✨ The fundamental numerical library for JavaScript and TypeScript. ✨                   ⭐️ 
- [opencloud-eu/opencloud](https://github.com/opencloud-eu/opencloud) — 🌤️ OpenCloud is the open source platform for file management, sharing and collaboration. S
- [withmarbleapp/os-taxonomy](https://github.com/withmarbleapp/os-taxonomy) — 
- [WhatDreamsCost/WhatDreamsCost-ComfyUI](https://github.com/WhatDreamsCost/WhatDreamsCost-ComfyUI) — LTX Director and a variety of other custom ComfyUI nodes and workflows
- [evolution-foundation/evolution-go](https://github.com/evolution-foundation/evolution-go) — Evolution API / Evolution Go is an open-source WhatsApp integration API
- [R-s0n/ars0n-framework-v2](https://github.com/R-s0n/ars0n-framework-v2) — AI Native Bug Bounty Hunting Framework Designed to Help Beginners Compete w/ the Pros
- [hoaxisr/awg-manager](https://github.com/hoaxisr/awg-manager) — AmneziaWG tunnel manager with web interface for Keenetic routers
- [DsThakurRawat/Backend-from-first-Principle](https://github.com/DsThakurRawat/Backend-from-first-Principle) — 
- [shaun8149/sdf-js](https://github.com/shaun8149/sdf-js) — Chainable JS SDF library + 基于 SDF 的离散结构生成器层 (form × generator decoupling). Port & extensio
- [warmbly/warmbly](https://github.com/warmbly/warmbly) — The largest open-source cold outreach and email warmup platform.

</details>

---

## 📦 Langages & runtimes — 3

- [ ] **[swiftlang/swift](https://github.com/swiftlang/swift)** — 3 j · ⭐ 70k · `Swift` · Apache-2.0
      The Swift Programming Language
- [ ] **[golang/go](https://github.com/golang/go)** — 2 j · ⭐ 138k · `Go` · BSD-3-Clause
      The Go programming language

<details><summary>Passés une seule journée — 1</summary>

- [microsoft/TypeScript](https://github.com/microsoft/TypeScript) — TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

</details>

---

## 🚫 Hors périmètre — 89

- [ ] **[abue-ammar/tinycast](https://github.com/abue-ammar/tinycast)** — 11 j · ⭐ 5 245 · `Swift` · **licence NOASSERTION**
      Tinycast — a tiny, fully native macOS launcher, hotkeys, and clipboard history. CA: 682r79Fjc3U2aMEZASFSbd5SW2u4bzqfVPAHofsipump
- [ ] **[LiveContainer/LiveContainer](https://github.com/LiveContainer/LiveContainer)** — 8 j · ⭐ 12k · `Swift` · AGPL-3.0
      Run iOS apps without actually installing them!
- [ ] **[peetzweg/opendisplay](https://github.com/peetzweg/opendisplay)** — 7 j · ⭐ 4 321 · `Swift` · GPL-3.0
      Free, open-source Sidecar/Duet alternative — use your iPhone, iPad or Mac as a true second monitor for your primary Mac over USB or WiFi. Low latency H.264, Retin…
- [ ] **[altstoreio/AltStore](https://github.com/altstoreio/AltStore)** — 5 j · ⭐ 14k · `Swift` · AGPL-3.0
      AltStore is an alternative app store for non-jailbroken iOS devices.
- [ ] **[Lakr233/vphone-cli](https://github.com/Lakr233/vphone-cli)** — 5 j · ⭐ 13k · `Swift` · MIT
      
- [ ] **[momenbasel/PureMac](https://github.com/momenbasel/PureMac)** — 5 j · ⭐ 6 499 · `Swift` · MIT
      Free, open-source macOS cleaner. CleanMyMac alternative with zero telemetry. Native SwiftUI, scheduled auto-cleaning, Xcode/Homebrew/system cache cleanup. MIT lic…
- [ ] **[Ebullioscopic/Atoll](https://github.com/Ebullioscopic/Atoll)** — 5 j · ⭐ 4 613 · `Swift` · GPL-3.0
      Dynamic Island for macOS
- [ ] **[BarutSRB/OmniWM](https://github.com/BarutSRB/OmniWM)** — 5 j · ⭐ 2 932 · `Swift` · GPL-2.0
      MacOS Niri and Hyprland inspired tiling window manager that's developer signed and notorized (safe for managed enterprise environments). Aiming for parity and ext…
- [ ] **[apple/container](https://github.com/apple/container)** — 4 j · ⭐ 49k · `Swift` · Apache-2.0
      A tool for creating and running Linux containers using lightweight virtual machines on a Mac. It is written in Swift, and optimized for Apple silicon.
- [ ] **[iina/iina](https://github.com/iina/iina)** — 4 j · ⭐ 46k · `Swift` · GPL-3.0
      The modern video player for macOS.
- [ ] **[Alamofire/Alamofire](https://github.com/Alamofire/Alamofire)** — 4 j · ⭐ 42k · `Swift` · MIT
      Elegant HTTP Networking in Swift
- [ ] **[SagerNet/sing-box](https://github.com/SagerNet/sing-box)** — 4 j · ⭐ 38k · `Go` · **licence NOASSERTION**
      The universal proxy platform
- [ ] **[onevcat/Kingfisher](https://github.com/onevcat/Kingfisher)** — 4 j · ⭐ 24k · `Swift` · MIT
      A lightweight, pure-Swift library for downloading and caching images from the web.
- [ ] **[nikitabobko/AeroSpace](https://github.com/nikitabobko/AeroSpace)** — 4 j · ⭐ 23k · `Swift` · MIT
      AeroSpace is an i3-like tiling window manager for macOS
- [ ] **[FrizzleM/SideInstaller](https://github.com/FrizzleM/SideInstaller)** — 4 j · ⭐ 733 · `Swift` · **licence NOASSERTION**
      An an app that installs Sidestore on iOS 27, fully on-device
- [ ] **[p0deje/Maccy](https://github.com/p0deje/Maccy)** — 3 j · ⭐ 21k · `Swift` · MIT
      Lightweight clipboard manager for macOS
- [ ] **[vorssaint/vorssaint-utils](https://github.com/vorssaint/vorssaint-utils)** — 3 j · ⭐ 19k · `Swift` · GPL-3.0
      Free and open-source macOS menu bar toolkit.
- [ ] **[alienator88/Pearcleaner](https://github.com/alienator88/Pearcleaner)** — 3 j · ⭐ 14k · `Swift` · **licence NOASSERTION**
      A free, source-available and fair-code licensed mac app cleaner
- [ ] **[viarotel-org/escrcpy](https://github.com/viarotel-org/escrcpy)** — 3 j · ⭐ 11k · `JavaScript` · Apache-2.0
      📱 Display and control your Android device graphically with scrcpy.
- [ ] **[TheBoredTeam/boring.notch](https://github.com/TheBoredTeam/boring.notch)** — 3 j · ⭐ 10k · `Swift` · GPL-3.0
      TheBoringNotch: Not so boring notch That Rocks 🎸🎶
- [ ] **[TelegramMessenger/Telegram-iOS](https://github.com/TelegramMessenger/Telegram-iOS)** — 3 j · ⭐ 8 970 · `Swift` · **licence aucune**
      Telegram-iOS
- [ ] **[apple/containerization](https://github.com/apple/containerization)** — 3 j · ⭐ 8 933 · `Swift` · Apache-2.0
      Containerization is a Swift package for running Linux containers on macOS.
- [ ] **[sw33tLie/macshot](https://github.com/sw33tLie/macshot)** — 3 j · ⭐ 3 450 · `Swift` · GPL-3.0
      Feature-packed native macOS screenshot & recording tool: annotate, auto-redact PII, record GIFs, OCR + translate, scroll capture, beautify, and more. No Electron,…
- [ ] **[alielsokary/CaskHub](https://github.com/alielsokary/CaskHub)** — 3 j · ⭐ 1 264 · `Swift` · MIT
      Native GUI for Homebrew Casks
- [ ] **[frankea/Whisky](https://github.com/frankea/Whisky)** — 3 j · ⭐ 730 · `Swift` · GPL-3.0
      Active community fork of the archived whisky-app/whisky — a modern Wine wrapper for macOS built with SwiftUI
- [ ] **[utmapp/UTM](https://github.com/utmapp/UTM)** — 2 j · ⭐ 35k · `Swift` · Apache-2.0
      Virtual machines for iOS and macOS
- [ ] **[MonitorControl/MonitorControl](https://github.com/MonitorControl/MonitorControl)** — 2 j · ⭐ 34k · `Swift` · MIT
      🖥 Control your display's brightness & volume on your Mac as if it was a native Apple Display. Use Apple Keyboard keys or custom shortcuts. Shows the native macOS…
- [ ] **[rxhanson/Rectangle](https://github.com/rxhanson/Rectangle)** — 2 j · ⭐ 29k · `Swift` · **licence NOASSERTION**
      Move and resize windows on macOS with keyboard shortcuts and snap areas
- [ ] **[jordanbaird/Ice](https://github.com/jordanbaird/Ice)** — 2 j · ⭐ 29k · `Swift` · GPL-3.0
      Powerful menu bar manager for macOS
- [ ] **[netbirdio/netbird](https://github.com/netbirdio/netbird)** — 2 j · ⭐ 29k · `Go` · **licence NOASSERTION**
      Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.
- [ ] **[airbnb/lottie-ios](https://github.com/airbnb/lottie-ios)** — 2 j · ⭐ 26k · `Swift` · Apache-2.0
      An iOS library to natively render After Effects vector animations
- [ ] **[PlayCover/PlayCover](https://github.com/PlayCover/PlayCover)** — 2 j · ⭐ 11k · `Swift` · GPL-3.0
      Community fork of PlayCover
- [ ] **[swiftlang/swift-package-manager](https://github.com/swiftlang/swift-package-manager)** — 2 j · ⭐ 10k · `Swift` · Apache-2.0
      The Package Manager for the Swift Programming Language
- [ ] **[darrylmorley/whatcable](https://github.com/darrylmorley/whatcable)** — 2 j · ⭐ 8 727 · `Swift` · **licence NOASSERTION**
      macOS menu bar app that tells you, in plain English, what each USB-C cable plugged into your Mac can actually do
- [ ] **[farzaa/clicky](https://github.com/farzaa/clicky)** — 2 j · ⭐ 7 563 · `Swift` · MIT
      
- [ ] **[Beingpax/VoiceInk](https://github.com/Beingpax/VoiceInk)** — 2 j · ⭐ 6 429 · `Swift` · **licence NOASSERTION**
      The best open-source alternative to Superwhisper & Wispr Flow. Voice-to-text app for macOS with no subscription
- [ ] **[open-meteo/open-meteo](https://github.com/open-meteo/open-meteo)** — 2 j · ⭐ 6 201 · `Swift` · AGPL-3.0
      Free Weather Forecast API for non-commercial use
- [ ] **[ejbills/DockDoor](https://github.com/ejbills/DockDoor)** — 2 j · ⭐ 6 049 · `Swift` · **licence NOASSERTION**
      Window peeking, alt-tab and other enhancements for macOS
- [ ] **[tuist/tuist](https://github.com/tuist/tuist)** — 2 j · ⭐ 5 804 · `Elixir` · **licence NOASSERTION**
      Your platform team, as a service
- [ ] **[mekos2772/ios-location-spoofer](https://github.com/mekos2772/ios-location-spoofer)** — 2 j · ⭐ 4 114 · `JavaScript` · AGPL-3.0
      Standalone iOS app to spoof GPS location without jailbreak. Includes Shadowrocket/Surge/Loon/QX/Stash module.
- [ ] **[duongductrong/Snapzy](https://github.com/duongductrong/Snapzy)** — 2 j · ⭐ 3 137 · `Swift` · BSD-3-Clause
      An open-source native macOS screenshot and screen recording app. A CleanShot X alternative.
- [ ] **[pluk-inc/markdown-preview](https://github.com/pluk-inc/markdown-preview)** — 2 j · ⭐ 2 342 · `Swift` · MIT
      A simple Markdown viewer for reading .md files
- [ ] **[apple/coreai-models](https://github.com/apple/coreai-models)** — 2 j · ⭐ 2 109 · `Swift` · BSD-3-Clause
      Model export recipes, Python primitives, and Swift runtime utilities for on-device AI
- [ ] **[Homebrew/BrewUI](https://github.com/Homebrew/BrewUI)** — 2 j · ⭐ 1 713 · `Swift` · AGPL-3.0
      📺 Homebrew's official macOS GUI
- [ ] **[Manic-EMU/ManicEMU](https://github.com/Manic-EMU/ManicEMU)** — 2 j · ⭐ 503 · `Swift` · AGPL-3.0
      Manic EMU is an all-in-one retro game emulator for iOS. It packs powerful features while keeping a clean, sleek UI and delivering buttery-smooth gameplay.
- [ ] **[ZimengXiong/winmux](https://github.com/ZimengXiong/winmux)** — 2 j · ⭐ 340 · `Swift` · MIT
      A powerful project-based, sidebar-first window manager for macOS.
- [ ] **[supertone-inc/supertonic](https://github.com/supertone-inc/supertonic)** — 2 j
      Lightning-Fast, On-Device, Multilingual TTS — running natively via ONNX.

<details><summary>Passés une seule journée — 42</summary>

- [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code) — Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)
- [exelban/stats](https://github.com/exelban/stats) — macOS system monitor in your menu bar
- [permissionlesstech/bitchat](https://github.com/permissionlesstech/bitchat) — bluetooth mesh chat, IRC vibes
- [koodo-reader/koodo-reader](https://github.com/koodo-reader/koodo-reader) — A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linu
- [vapor/vapor](https://github.com/vapor/vapor) — 💧 A server-side Swift HTTP web framework.
- [CodeEditApp/CodeEdit](https://github.com/CodeEditApp/CodeEdit) — 📝 CodeEdit App for macOS – Elevate your code editing experience. Open source, free forever
- [OpenEmu/OpenEmu](https://github.com/OpenEmu/OpenEmu) — 🕹 Retro video game emulation for macOS
- [lwouis/alt-tab-macos](https://github.com/lwouis/alt-tab-macos) — Windows alt-tab on macOS
- [Whisky-App/Whisky](https://github.com/Whisky-App/Whisky) — A modern Wine wrapper for macOS built with SwiftUI
- [pointfreeco/swift-composable-architecture](https://github.com/pointfreeco/swift-composable-architecture) — A library for building applications in a consistent and understandable way, with compositi
- [dwarvesf/hidden](https://github.com/dwarvesf/hidden) — An ultra-light MacOS utility that helps hide menu bar icons
- [bobeff/open-source-games](https://github.com/bobeff/open-source-games) — A list of open source games.
- [AppHouseKitchen/AlDente-Battery_Care_and_Monitoring](https://github.com/AppHouseKitchen/AlDente-Battery_Care_and_Monitoring) — Menubar Tool to set Charge Limits and Prolong Battery Lifespan
- [Finb/Bark](https://github.com/Finb/Bark) — Bark is an iOS App which allows you to push custom notifications to your iPhone
- [XcodesOrg/XcodesApp](https://github.com/XcodesOrg/XcodesApp) — The easiest way to install and switch between multiple versions of Xcode - with a mouse cl
- [apple/swift-nio](https://github.com/apple/swift-nio) — Event-driven network application framework for high performance protocol servers & clients
- [milanvarady/Applite](https://github.com/milanvarady/Applite) — A native macOS app store for software that isn't on the App Store, backed by Homebrew Cask
- [linearmouse/linearmouse](https://github.com/linearmouse/linearmouse) — The mouse and trackpad utility for Mac.
- [github/CopilotForXcode](https://github.com/github/CopilotForXcode) — AI coding assistant for Xcode
- [xtool-org/xtool](https://github.com/xtool-org/xtool) — Cross-platform Xcode replacement. Build and deploy iOS apps with SwiftPM on Linux, Windows
- [XcodesOrg/xcodes](https://github.com/XcodesOrg/xcodes) — The best command-line tool to install and switch between multiple versions of Xcode.
- [claration/Feather](https://github.com/claration/Feather) — Free on-device iOS/iPadOS application manager/installer, using certificates part of the Ap
- [pointfreeco/swift-snapshot-testing](https://github.com/pointfreeco/swift-snapshot-testing) — 📸 Delightful Swift snapshot testing.
- [samhenrigold/LidAngleSensor](https://github.com/samhenrigold/LidAngleSensor) — tfw when you when your lid when uhh angle your lid sensor
- [swiftlang/swift-syntax](https://github.com/swiftlang/swift-syntax) — A set of Swift libraries for parsing, inspecting, generating, and transforming Swift sourc
- [0xCUB3/wBlock](https://github.com/0xCUB3/wBlock) — The next-generation ad blocker for Safari.
- [Starmel/OpenSuperWhisper](https://github.com/Starmel/OpenSuperWhisper) — macOS dictation app
- [zachlatta/freeflow](https://github.com/zachlatta/freeflow) — Free & fast alternative to Wispr Flow
- [whoeevee/EeveeSpotifyReborn](https://github.com/whoeevee/EeveeSpotifyReborn) — A tweak to enhance Spotify experience
- [home-assistant/iOS](https://github.com/home-assistant/iOS) — 📱 Home Assistant for Apple platforms
- [KartikLabhshetwar/better-shot](https://github.com/KartikLabhshetwar/better-shot) — Screenshot, screen recording, and video editor for macOS. Native SwiftUI app with capture 
- [sozercan/kaset](https://github.com/sozercan/kaset) — 📼 The missing YouTube and YouTube Music macOS app
- [UseInterstellar/Interstellar](https://github.com/UseInterstellar/Interstellar) — One of the most popular modern web proxies with blazing fast speeds and a variety of games
- [Xpl0itU/WiiUDownloader](https://github.com/Xpl0itU/WiiUDownloader) — Cross-platform Wii U NUS downloader for Windows, macOS & Linux. No title keys needed. Alte
- [fayazara/Screendrop](https://github.com/fayazara/Screendrop) — A beautiful screenshot + screen recording + Loom alternative - all native, self hostable a
- [minh-ton/reynard-browser](https://github.com/minh-ton/reynard-browser) — An experimental Gecko-based web browser for iOS 13+.
- [iliyami/MacSai](https://github.com/iliyami/MacSai) — Mac Sai: the open-source Mac cleaner, optimizer, and malware scanner. A free, Apple-notari
- [tranvuongquocdat/SideScreen](https://github.com/tranvuongquocdat/SideScreen) — 
- [cashapp/AccessibilitySnapshot](https://github.com/cashapp/AccessibilitySnapshot) — Easy regression testing for iOS accessibility
- [ProxymanApp/TCPViewer](https://github.com/ProxymanApp/TCPViewer) — The best-in-class macOS app to See every packet clearly on your Mac. Alternative to Wiresh
- [nightscout/Trio](https://github.com/nightscout/Trio) — Trio - an automated insulin delivery system for iOS based on the OpenAPS algorithm with ad
- [cshariq/Sapphire](https://github.com/cshariq/Sapphire) — The all in one mac app that redefines the notch

</details>

---

## Ce que ce catalogue ne voit pas

- Les dépôts **Rust, C++, Java, C#…** — l'archive ne couvre que quatre langages.
- Les projets qui ont pris leurs étoiles **sans jamais passer en trending**. Pour ceux-là, c'est `collect.py --jours N` qui les remonte.
- Ce qui trendait **sur un autre créneau horaire** : l'archive fige un instantané par jour.

*Catalogue généré par le skill `veille-github` (mode rétrospectif) le 2026-09-16. Données brutes : `retro-2026-09.json`.*
