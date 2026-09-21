# Rétro GitHub — Août 2026

> **764 dépôts distincts** passés en trending du 2026-08-01 au 2026-08-31 — dont **418 ont tenu 2 jours ou plus**.
> Classés par **persistance** : le nombre de jours distincts où le dépôt est réapparu en trending. C'est le signal qui sépare ce qui a pris de ce qui a été poussé.
>
> ⚠️ **Deux limites de la source.** L'archive ne couvre que **python, javascript, go et swift** — un dépôt Rust ou C++ qui a trendé n'y est pas. Et **les étoiles affichées sont celles d'aujourd'hui**, pas celles de la période : on sait qu'un dépôt trendait le 19 août, jamais avec combien d'étoiles.

**Mode d'emploi** — coche ce que tu veux récupérer. Les descriptions du corps du catalogue sont celles des dépôts, pas mon analyse ; seule la section « À parcourir en premier » est commentée.

## À parcourir en premier

*Ma sélection dans les 764, pour ton profil. Le reste du catalogue est un inventaire brut ;
cette section-là est commentée.*

Ce qui ressort d'août : **la mémoire et le contexte des agents** deviennent un sujet à part
entière (`claude-mem` treize jours, `ECC` dix-huit), et les **collections de skills**
s'installent — 62 sur le seul mois d'août, dont 39 ont tenu plus d'une journée. Côté data pur, la récolte est maigre : trois
outils, pas plus, dont un scanner de conteneurs qui n'a rien de nouveau mais que tu n'as
peut-être pas.

- [ ] **[unslothai/unsloth](https://github.com/unslothai/unsloth)** — 9 j · ⭐ 76k · Apache-2.0
      Le plus utile du mois pour toi. Ce n'est plus seulement la lib de fine-tuning : c'est
      devenu une **UI locale pour faire tourner et entraîner** des LLM et des modèles de
      diffusion, avec GGUF et MLX. Le chemin le plus court entre « j'ai un GPU » et « j'ai
      un modèle fine-tuné ».
- [ ] **[aquasecurity/trivy](https://github.com/aquasecurity/trivy)** — 12 j · ⭐ 37k · Apache-2.0
      Vulnérabilités, secrets et SBOM dans les conteneurs, Kubernetes, les dépôts et le
      cloud. Rien de neuf — le projet a des années — mais c'est le genre d'outil qu'on
      branche une fois en CI et qu'on oublie. Si tu livres des images Docker à un client,
      il manque probablement à ta chaîne.
- [ ] **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 13 j · ⭐ 94k · Apache-2.0
      Mémoire persistante entre sessions d'agent : capture ce qui se passe, compresse avec
      un LLM, réinjecte. À regarder en parallèle de `context-mode` (fiche du 16/09) — même
      problème, deux angles opposés : l'un réduit ce qui entre, l'autre garde ce qui sort.
- [ ] **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** — 9 j · ⭐ 62k · MIT
      Un skill qui fait de la veille sur un sujet à travers Reddit, X, YouTube, HN et le web,
      puis en tire une synthèse sourcée. Exactement le pendant « web » de ce qu'on vient de
      construire côté GitHub — à lire avant de réinventer sa mécanique de synthèse.
- [ ] **[pranshuparmar/witr](https://github.com/pranshuparmar/witr)** — 9 j · ⭐ 22k · Apache-2.0
      « Why is this running ? » — remonte de n'importe quel process, port, conteneur ou
      fichier vers ce qui l'a lancé. CLI + TUI. Le genre d'outil qui fait gagner vingt
      minutes le jour où un pipeline tient un port sans qu'on sache pourquoi.
      ⚠️ Dernier push le 15/08 : un mois sans commit, à surveiller.
- [ ] **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — 13 j · ⭐ 246k · MIT
      Tu as déjà un `tutoriel-hermes-agent` dans tes projets — le dépôt a tenu treize jours
      en août, il bouge encore (push du 16/09). À rouvrir si ton tuto date.
- [ ] **[QuantumNous/new-api](https://github.com/QuantumNous/new-api)** — 11 j · ⭐ 48k · **AGPL-3.0**
      Hub unifié qui convertit n'importe quel LLM en API compatible OpenAI ou Claude.
      Pratique en interne pour ne pas récrire un client par fournisseur.
      ⚠️ **AGPL-3.0** — à écarter de tout livrable client sans passer par le juridique.
- [ ] **[multica-ai/multica](https://github.com/multica-ai/multica)** — 9 j · ⭐ 50k · licence NOASSERTION
      Plateforme d'agents managés, open source et auto-hébergeable, pour faire travailler
      humains et agents dans la même équipe. Intéressant sur le papier ; la licence non
      identifiée impose de lire le fichier avant d'y toucher.

---

## 🎯 Collections de skills — 39

*À piller pour `mes-skills`. Rappel du 16/09 : d'après NVIDIA, 26 % des skills publics contiennent une vulnérabilité — passer `SkillSpector` avant d'installer.*

- [ ] **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — 18 j · ⭐ 259k · `JavaScript` · MIT
      The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor an…
- [ ] **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — 14 j · ⭐ 95k · `JavaScript` · MIT
      Production-grade engineering skills for AI coding agents.
- [ ] **[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)** — 11 j · ⭐ 87k · `JavaScript` · MIT
      Taste-Skill - gives your AI good taste. stops the AI from generating boring, generic slop
- [ ] **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** — 10 j · ⭐ 45k · `Python` · MIT
      Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 170,000+ scientists worldwide. 161 ready-to-use validated skills plus 100…
- [ ] **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** — 9 j · ⭐ 62k · `Python` · MIT
      AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary
- [ ] **[multica-ai/multica](https://github.com/multica-ai/multica)** — 9 j · ⭐ 50k · `Go` · **licence NOASSERTION**
      The open-source managed agents platform. Turn coding agents into real teammates — assign tasks, track progress, compound skills.
- [ ] **[anthropics/claude-code](https://github.com/anthropics/claude-code)** — 8 j · ⭐ 145k · `TypeScript` · **licence aucune**
      Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining com…
- [ ] **[Gentleman-Programming/gentle-ai](https://github.com/Gentleman-Programming/gentle-ai)** — 8 j · ⭐ 6 871 · `Go` · MIT
      Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Spec-Driven Development,…
- [ ] **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** — 7 j · ⭐ 105k · `Go` · **licence NOASSERTION**
      🪨 why use many token when few token do trick — Claude Code skill that cuts 65% of tokens by talking like caveman
- [ ] **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** — 7 j · ⭐ 59k · `Python` · AGPL-3.0
      World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI cod…
- [ ] **[NomaDamas/k-skill](https://github.com/NomaDamas/k-skill)** — 7 j · ⭐ 7 576 · `JavaScript` · MIT
      한국인을 위한 스킬 모음집 - 에이전트를 한국인으로
- [ ] **[coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)** — 6 j · ⭐ 50k · `JavaScript` · MIT
      Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.
- [ ] **[volcengine/OpenViking](https://github.com/volcengine/OpenViking)** — 6 j · ⭐ 37k · `Python` · AGPL-3.0
      Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills.
- [ ] **[WorldFlowAI/everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code)** — 6 j · ⭐ 2 973 · `JavaScript` · **licence aucune**
      Claude Code toolkit - agents, commands, skills, rules, and hooks for productive AI-assisted development
- [ ] **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 5 j · ⭐ 118k · `Python` · Apache-2.0
      Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini C…
- [ ] **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** — 5 j · ⭐ 82k · `Python` · MIT
      An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gate…
- [ ] **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** — 5 j · ⭐ 32k · `Python` · Apache-2.0
      817 structured cybersecurity skills for AI agents · Mapped to 6 frameworks: MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF & MITRE F3 (Fight Fraud)…
- [ ] **[virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill)** — 5 j · ⭐ 30k · `Python` · MIT
      Turn any technical book PDF into a Claude Code skill — ready to study, reference, and use while you work.
- [ ] **[google/skills](https://github.com/google/skills)** — 5 j · ⭐ 20k · `Python` · Apache-2.0
      Agent Skills for Google products and technologies
- [ ] **[anthropics/skills](https://github.com/anthropics/skills)** — 4 j · ⭐ 176k · `Python` · **licence aucune**
      Public repository for Agent Skills
- [ ] **[tt-a1i/archify](https://github.com/tt-a1i/archify)** — 4 j · ⭐ 64k · `JavaScript` · MIT
      Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self-contained HTML with motion and crisp export.
- [ ] **[OpenSenseNova/SenseNova-Skills](https://github.com/OpenSenseNova/SenseNova-Skills)** — 4 j · ⭐ 5 639 · `JavaScript` · MIT
      Modular SenseNova skills for building AI-powered office assistants and productivity workflows
- [ ] **[conorbronsdon/avoid-ai-writing](https://github.com/conorbronsdon/avoid-ai-writing)** — 4 j · ⭐ 4 414 · `JavaScript` · MIT
      Skill that audits and rewrites content to remove AI writing patterns. Use it with your favorite agents including Claude Code, OpenClaw, Codex, and Hermes.
- [ ] **[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)** — 3 j · ⭐ 31k · `JavaScript` · **licence aucune**
      Vercel's official collection of agent skills
- [ ] **[larksuite/cli](https://github.com/larksuite/cli)** — 3 j · ⭐ 17k · `Go` · MIT
      The official Lark/飞书 CLI tool, maintained by the larksuite team — built for humans and AI Agents. Covers core business domains including Messenger, Docs, Base, Sh…
- [ ] **[chuspeeism/dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill)** — 3 j · ⭐ 8 299 · `JavaScript` · AGPL-3.0
      An AI-agent skill that generates browser-editable presentations from multiple visual themes, exportable to HTML, PDF, and PPTX.
- [ ] **[Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard)** — 3 j · ⭐ 6 389 · `Python` · Apache-2.0
      A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation.
- [ ] **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** — 3 j · ⭐ 5 698 · `JavaScript` · MIT
      A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings
- [ ] **[zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides)** — 2 j · ⭐ 29k · `JavaScript` · MIT
      Create beautiful slides on the web using a coding agent's frontend skills
- [ ] **[AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)** — 2 j · ⭐ 17k · `Python` · MIT
      Universal SEO skill for Claude Code. 25 sub-skills + 18 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, backlinks, local SEO, maps intelligence, sema…
- [ ] **[Piebald-AI/claude-code-system-prompts](https://github.com/Piebald-AI/claude-code-system-prompts)** — 2 j · ⭐ 12k · `JavaScript` · MIT
      All parts of Claude Code's system prompt, 27 builtin tool descriptions, sub agent prompts (Plan/Explore/Task), utility prompts (CLAUDE.md, compact, statusline, ma…
- [ ] **[kangarooking/cangjie-skill](https://github.com/kangarooking/cangjie-skill)** — 2 j · ⭐ 10k · `Python` · MIT
      把书、长视频、播客等高价值内容蒸馏成可执行的 Agent Skills
- [ ] **[microsoft/hve-core](https://github.com/microsoft/hve-core)** — 2 j · ⭐ 1 464 · `Python` · MIT
      A refined collection of Hypervelocity Engineering components (instructions, prompts, agents, and skills) to start your project off right, or upgrade your existing…
- [ ] **[forcedotcom/sf-skills](https://github.com/forcedotcom/sf-skills)** — 2 j · ⭐ 999 · `Python` · Apache-2.0
      Salesforce's curated collection of agent skills for building applications. Optimized for Agentforce Vibes, compatible with all AI tools.
- [ ] **[alibaba/skill-up](https://github.com/alibaba/skill-up)** — 2 j · ⭐ 931 · `Go` · Apache-2.0
      An evaluation and evolution tool for Agent Skills.
- [ ] **[microsoft/power-platform-skills](https://github.com/microsoft/power-platform-skills)** — 2 j · ⭐ 878 · `JavaScript` · MIT
      A plugin marketplace for Claude Code/GitHub Copilot that provides Power Platform development plugins, including reusable skills, agents, and commands for building…
- [ ] **[warpdotdev/common-skills](https://github.com/warpdotdev/common-skills)** — 2 j · ⭐ 578 · `Python` · MIT
      
- [ ] **[titanwings/colleague-skill](https://github.com/titanwings/colleague-skill)** — 2 j
      将冰冷的离别化为温暖的 Skill，欢迎加入数字生命1.0！Transforming cold farewells into warm skills? It's giving rebirth era. Welcome to Digital Life 1.0. 🫶
- [ ] **[worldwonderer/oh-story-claudecode](https://github.com/worldwonderer/oh-story-claudecode)** — 2 j
      网文/小说写作 skill 包，覆盖长篇与短篇网络小说的扫榜、拆文、写作、去AI味、封面图全流程 | An all-in-one skill pack for long- and short-form web fiction.

---

## 🧠 LLM & IA générative — 266

*Dossier DevBrain : `LLM & IA générative/`*

- [ ] **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — 13 j · ⭐ 246k · `Python` · MIT
      The agent that grows with you
- [ ] **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 13 j · ⭐ 94k · `TypeScript` · Apache-2.0
      Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back…
- [ ] **[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)** — 12 j · ⭐ 139k · `JavaScript` · MIT
      Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.
- [ ] **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** — 11 j · ⭐ 124k · `Python` · MIT
      利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.
- [ ] **[QuantumNous/new-api](https://github.com/QuantumNous/new-api)** — 11 j · ⭐ 48k · `Go` · AGPL-3.0
      A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible f…
- [ ] **[ollama/ollama](https://github.com/ollama/ollama)** — 10 j · ⭐ 181k · `Go` · MIT
      Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.
- [ ] **[Tencent/WeKnora](https://github.com/Tencent/WeKnora)** — 10 j · ⭐ 24k · `Go` · **licence NOASSERTION**
      Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.
- [ ] **[altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice)** — 10 j · ⭐ 11k · `Swift` · GPL-3.0
      Fastest and only macOS Dictation app with on-device STT and custom trained AI enhancement model. Windows pre-build available! A local Wispr Flow alternative. DM u…
- [ ] **[unslothai/unsloth](https://github.com/unslothai/unsloth)** — 9 j · ⭐ 76k · `Python` · Apache-2.0
      Local UI to run and train LLMs and diffusion models, including Qwen3.8, Kimi K3, MiniMax-H3, Gemma 4, DeepSeek-V4, FLUX and more.
- [ ] **[santifer/career-ops](https://github.com/santifer/career-ops)** — 9 j
      Open-source AI job search: scan job portals, evaluate listings with a structured A-F rubric into a 1.0-5.0 score, tailor your CV, track applications — runs locall…
- [ ] **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — 8 j · ⭐ 90k · `Go` · Apache-2.0
      RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context laye…
- [ ] **[usestrix/strix](https://github.com/usestrix/strix)** — 8 j · ⭐ 62k · `Python` · Apache-2.0
      Open-source AI penetration testing tool to find and fix your app’s vulnerabilities.
- [ ] **[cactus-compute/needle](https://github.com/cactus-compute/needle)** — 8 j · ⭐ 11k · `Python` · Apache-2.0
      14MB foundation model for tiny devices; phones, wearables, smart home, and robots.
- [ ] **[Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api)** — 7 j · ⭐ 41k · `Go` · LGPL-3.0
      Sub2API 一站式开源中转服务，让 Claude、Openai 、Gemini、Grok订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。
- [ ] **[ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)** — 7 j · ⭐ 40k · `JavaScript` · AGPL-3.0
      ToolJet is the open-source foundation of ToolJet AI - the enterprise app generation platform for building internal tools, dashboard, business applications, workfl…
- [ ] **[PostHog/posthog](https://github.com/PostHog/posthog)** — 7 j · ⭐ 39k · `Python` · **licence NOASSERTION**
      🦔 PostHog is the leading platform for building self-driving products. Our developer tools – AI observability, analytics, session replay, flags, experiments, error…
- [ ] **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)** — 7 j · ⭐ 36k · `Python` · Apache-2.0
      Official, Anthropic-managed directory of high quality Claude Code Plugins.
- [ ] **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)** — 7 j · ⭐ 35k · `Go` · MIT
      DeepSeek-native AI coding agent for your terminal. Engineered around prefix-cache stability — leave it running.
- [ ] **[manaflow-ai/cmux](https://github.com/manaflow-ai/cmux)** — 7 j · ⭐ 27k · `Swift` · **licence NOASSERTION**
      Open source Ghostty-based macOS terminal with vertical tabs and notifications for AI coding agents. Built for multitasking, organization, and programmability.
- [ ] **[steipete/CodexBar](https://github.com/steipete/CodexBar)** — 7 j · ⭐ 21k · `Swift` · MIT
      Show usage stats for OpenAI Codex and Claude Code, without having to login.
- [ ] **[livekit/agents](https://github.com/livekit/agents)** — 7 j · ⭐ 14k · `Python` · Apache-2.0
      A framework for building realtime voice AI agents 🤖🎙️📹
- [ ] **[semantica-agi/semantica](https://github.com/semantica-agi/semantica)** — 7 j · ⭐ 12k · `Python` · MIT
      Graph-Native Infrastructure for Context and Accountable AI Systems
- [ ] **[darkzOGx/youtube-automation-agent](https://github.com/darkzOGx/youtube-automation-agent)** — 7 j · ⭐ 3 563 · `JavaScript` · MIT
      🎬 Lumen is the fully automated YouTube channel management with AI agents. Creates, optimizes & publishes videos 24/7. Works with FREE Gemini API or OpenAI. No cod…
- [ ] **[agent-substrate/substrate](https://github.com/agent-substrate/substrate)** — 7 j · ⭐ 1 885 · `Go` · Apache-2.0
      Agent Substrate: the core system
- [ ] **[atlassian/atlassian-mcp-server](https://github.com/atlassian/atlassian-mcp-server)** — 7 j · ⭐ 1 112 · `JavaScript` · Apache-2.0
      Official remote MCP server for Atlassian. Securely connect Jira, Confluence, Jira Service Management, Bitbucket, and Compass to Claude, ChatGPT, Cursor, VS Code,…
- [ ] **[chattymin/PokeTokenBar](https://github.com/chattymin/PokeTokenBar)** — 7 j · ⭐ 437 · `Swift` · MIT
      Use your tokens to raise, evolve, and collect Pokémon! 🥚
- [ ] **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** — 6 j · ⭐ 187k · `Python` · **licence NOASSERTION**
      AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters.
- [ ] **[Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)** — 6 j · ⭐ 133k · `Python` · GPL-3.0
      The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface.
- [ ] **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** — 6 j · ⭐ 82k · `Python` · MIT
      Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.
- [ ] **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** — 6 j · ⭐ 65k · `Python` · MIT
      LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 LLM-powered multi-market stock analysis system with multi-source market data, real-time news, decision dashboard…
- [ ] **[drawdb-io/drawdb](https://github.com/drawdb-io/drawdb)** — 6 j · ⭐ 39k · `JavaScript` · AGPL-3.0
      Free, simple, and intuitive online database diagram editor and SQL generator.
- [ ] **[palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro)** — 6 j · ⭐ 14k · `Swift` · GPL-3.0
      macOS video editor built for AI
- [ ] **[superplanehq/superplane](https://github.com/superplanehq/superplane)** — 6 j · ⭐ 7 475 · `Go` · Apache-2.0
      The open source control plane for agentic engineering.
- [ ] **[robinebers/openusage](https://github.com/robinebers/openusage)** — 6 j · ⭐ 4 177 · `Swift` · MIT
      Burning through your subscriptions too fast? Paying for stuff you never use? Stop guessing. OpenUsage is free and open source.
- [ ] **[zzet/gortex](https://github.com/zzet/gortex)** — 6 j · ⭐ 1 580 · `Go` · Apache-2.0
      High-performance code-intelligence engine for AI agents and IDE, supports 257 languages, multi repositories, based on graph, with access via CLI, MCP Server, and…
- [ ] **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** — 5 j · ⭐ 106k · `Python` · Apache-2.0
      TradingAgents: Multi-Agents LLM Financial Trading Framework
- [ ] **[netdata/netdata](https://github.com/netdata/netdata)** — 5 j · ⭐ 80k · `Go` · GPL-3.0
      The fastest path to AI-powered full stack observability, even for lean teams.
- [ ] **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** — 5 j · ⭐ 54k · `Python` · MIT
      Learn it. Build it. Ship it for others.
- [ ] **[github/github-mcp-server](https://github.com/github/github-mcp-server)** — 5 j · ⭐ 32k · `Go` · MIT
      GitHub's official MCP Server
- [ ] **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — 5 j · ⭐ 30k · `Go` · Apache-2.0
      Fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-i…
- [ ] **[gastownhall/beads](https://github.com/gastownhall/beads)** — 5 j · ⭐ 27k · `Go` · MIT
      Beads - A memory upgrade for your coding agent
- [ ] **[jundot/omlx](https://github.com/jundot/omlx)** — 5 j · ⭐ 21k · `Python` · Apache-2.0
      LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar
- [ ] **[MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup)** — 5 j · ⭐ 6 661 · `Python` · Apache-2.0
      Fine-tune LLMs from one YAML. Layer streaming trains an 8B model on a 4 GB laptop GPU.
- [ ] **[huangruiteng/loopx](https://github.com/huangruiteng/loopx)** — 5 j · ⭐ 5 867 · `Python` · Apache-2.0
      Lightweight loop engineering state kernel for long-running AI agent teams. Agent-loop agnostic across Codex, Claude Code, and other coding agents, with durable go…
- [ ] **[vllm-project/semantic-router](https://github.com/vllm-project/semantic-router)** — 5 j · ⭐ 5 846 · `Go` · Apache-2.0
      A programmable Mixture-of-Models router for heterogeneous LLM inference
- [ ] **[compozy/compozy](https://github.com/compozy/compozy)** — 5 j · ⭐ 2 752 · `Go` · MIT
      An operating system for AI agents. Plug in the agent CLIs you already use (Claude Code, Codex, Gemini CLI, Cursor) and they become a team: they split the work, ha…
- [ ] **[Augani/dory](https://github.com/Augani/dory)** — 5 j · ⭐ 1 584 · `Swift` · GPL-3.0
      A free, open-source native macOS app for Docker & Linux containers, an alternative to OrbStack and Docker Desktop. Universal for Intel and Apple silicon.
- [ ] **[huggingface/transformers](https://github.com/huggingface/transformers)** — 4 j · ⭐ 166k · `Python` · Apache-2.0
      🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models, for both inference and…
- [ ] **[vllm-project/vllm](https://github.com/vllm-project/vllm)** — 4 j · ⭐ 91k · `Python` · Apache-2.0
      A high-throughput and memory-efficient inference and serving engine for LLMs
- [ ] **[666ghj/MiroFish](https://github.com/666ghj/MiroFish)** — 4 j · ⭐ 73k · `Python` · AGPL-3.0
      A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物
- [ ] **[milvus-io/milvus](https://github.com/milvus-io/milvus)** — 4 j · ⭐ 46k · `Go` · Apache-2.0
      Milvus is a high-performance, cloud-native vector database built for scalable vector ANN search
- [ ] **[openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)** — 4 j · ⭐ 33k · `JavaScript` · Apache-2.0
      Use Codex from Claude Code to review code or delegate tasks.
- [ ] **[langchain-ai/deepagents](https://github.com/langchain-ai/deepagents)** — 4 j · ⭐ 29k · `Python` · MIT
      The batteries-included agent harness.
- [ ] **[gitleaks/gitleaks](https://github.com/gitleaks/gitleaks)** — 4 j · ⭐ 29k · `Go` · MIT
      Find secrets with Gitleaks 🔑
- [ ] **[decolua/9router](https://github.com/decolua/9router)** — 4 j · ⭐ 29k · `JavaScript` · MIT
      Unlimited FREE AI coding. Connect Claude Code, Codex, Cursor, Cline, Copilot, Antigravity to FREE Claude/GPT/Gemini via 40+ providers. Auto-fallback, RTK -40% tok…
- [ ] **[charmbracelet/crush](https://github.com/charmbracelet/crush)** — 4 j · ⭐ 28k · `Go` · **licence NOASSERTION**
      Glamourous agentic coding for all 💘
- [ ] **[browser-use/video-use](https://github.com/browser-use/video-use)** — 4 j · ⭐ 24k · `Python` · MIT
      Edit videos with coding agents
- [ ] **[vxcontrol/pentagi](https://github.com/vxcontrol/pentagi)** — 4 j · ⭐ 24k · `Go` · MIT
      Fully autonomous AI Agents system capable of performing complex penetration testing tasks
- [ ] **[NVIDIA-NeMo/Speech](https://github.com/NVIDIA-NeMo/Speech)** — 4 j · ⭐ 18k · `Python` · Apache-2.0
      A scalable generative AI framework built for researchers and developers working on Large Language Models, Multimodal, and Speech AI (Automatic Speech Recognition…
- [ ] **[AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian)** — 4 j · ⭐ 14k · `Python` · MIT
      Self-organizing AI second brain for Obsidian + Claude Code. Drop any source and Claude reads, links, and files it into one connected knowledge graph of plain Mark…
- [ ] **[cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)** — 4 j · ⭐ 11k · `TypeScript` · MIT
      Practical patterns, starters & CLI tools for loop engineering with AI coding agents. Design systems that prompt and orchestrate agents (inspired by Addy Osmani an…
- [ ] **[ronitsingh10/FineTune](https://github.com/ronitsingh10/FineTune)** — 4 j · ⭐ 9 289 · `Swift` · GPL-3.0
      FineTune, a macOS menu bar app for per-app volume control, multi-device output, audio routing, and 10-band EQ. Free and open-source alternative to SoundSource.
- [ ] **[osaurus-ai/osaurus](https://github.com/osaurus-ai/osaurus)** — 4 j · ⭐ 7 923 · `Swift` · MIT
      Own your AI. The native macOS harness for AI agents -- any model, persistent memory, autonomous execution, cryptographic identity. Built in Swift. Fully offline.…
- [ ] **[Osmantic/ODS](https://github.com/Osmantic/ODS)** — 4 j · ⭐ 6 540 · `Python` · Apache-2.0
      Turn your PC, Mac, or Linux box into an AI server. LLM inference, chat UI, voice, agents, workflows, RAG, and image generation.
- [ ] **[tradesdontlie/tradingview-mcp](https://github.com/tradesdontlie/tradingview-mcp)** — 4 j · ⭐ 6 264 · `JavaScript` · **licence NOASSERTION**
      AI-assisted TradingView chart analysis — connect Claude Code to your TradingView Desktop for personal workflow automation
- [ ] **[github/gh-aw](https://github.com/github/gh-aw)** — 4 j · ⭐ 5 139 · `Go` · MIT
      GitHub Agentic Workflows
- [ ] **[vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag)** — 4 j · ⭐ 5 138 · `Python` · MIT
      The ultimate RAG for your monorepo. Query, understand, and edit multi-language codebases with the power of AI and knowledge graphs
- [ ] **[anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community)** — 4 j · ⭐ 4 129 · `Python` · Apache-2.0
      Community plugin marketplace for Claude Cowork and Claude Code. Read-only mirror — submit plugins at clau.de/plugin-directory-submission.
- [ ] **[kubernetes-sigs/agent-sandbox](https://github.com/kubernetes-sigs/agent-sandbox)** — 4 j · ⭐ 3 907 · `Go` · Apache-2.0
      agent-sandbox enables easy management of isolated, stateful, singleton workloads, ideal for use cases like AI agent runtimes and reinforcement learning (RL).
- [ ] **[JetBrains/go-modern-guidelines](https://github.com/JetBrains/go-modern-guidelines)** — 4 j · ⭐ 3 584 · `Go` · Apache-2.0
      Help AI coding agents write modern Go
- [ ] **[FluidInference/FluidAudio](https://github.com/FluidInference/FluidAudio)** — 4 j · ⭐ 2 768 · `Swift` · Apache-2.0
      Frontier CoreML audio models in your apps — text-to-speech, speech-to-text, voice activity detection, and speaker diarization. In Swift, powered by SOTA open source.
- [ ] **[google/sam](https://github.com/google/sam)** — 4 j · ⭐ 847 · `Go` · Apache-2.0
      SAM Sovereign Agent Mesh
- [ ] **[krillinai/KrillinAI](https://github.com/krillinai/KrillinAI)** — 4 j
      AI video translation & dubbing tool for humans and AI Agents, powered by LLMs. Full pipeline: download, transcribe, translate, TTS dub, reformat, cover generation…
- [ ] **[workweave/router](https://github.com/workweave/router)** — 4 j
      Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.
- [ ] **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** — 3 j · ⭐ 83k · `Python` · Apache-2.0
      🚀🤖 Crawl4AI: Open-source LLM Friendly Web Crawler & Scraper. Don't be shy, join here: https://discord.gg/jP8KfhDhyN
- [ ] **[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling)** — 3 j · ⭐ 81k · `Python` · BSD-3-Clause
      🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!
- [ ] **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** — 3 j · ⭐ 54k · `Python` · MIT
      AI turns documents or topics into real, native PowerPoint decks—with native shapes, transitions and animations, data-backed charts and tables on demand, audio nar…
- [ ] **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — 3 j · ⭐ 49k · `Python` · Apache-2.0
      "CLI-Anything: Making ALL Software Agent-Native" -- CLI-Hub: https://clianything.cc/
- [ ] **[danielmiessler/Fabric](https://github.com/danielmiessler/Fabric)** — 3 j · ⭐ 43k · `Go` · MIT
      Fabric is an open-source framework for augmenting humans using AI. It provides a modular system for solving specific problems using a crowdsourced set of AI promp…
- [ ] **[HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)** — 3 j · ⭐ 39k · `Python` · Apache-2.0
      DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.
- [ ] **[stanfordnlp/dspy](https://github.com/stanfordnlp/dspy)** — 3 j · ⭐ 38k · `Python` · MIT
      DSPy: The framework for programming—not prompting—language models
- [ ] **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)** — 3 j · ⭐ 33k · `Python` · MIT
      "Vibe-Trading: Your Personal Trading Agent"
- [ ] **[tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)** — 3 j · ⭐ 31k · `Python` · MIT
      Local-first code intelligence graph for MCP and CLI. Builds a persistent map of your codebase so AI coding tools read only what matters, with benchmarked context…
- [ ] **[citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)** — 3 j · ⭐ 16k · `JavaScript` · MIT
      The fastest browser for AI agents to run browser automation, built for sharing your logged-in browser state with your AI agents, like Codex or Claude Code, withou…
- [ ] **[coder/coder](https://github.com/coder/coder)** — 3 j · ⭐ 14k · `Go` · AGPL-3.0
      Secure environments for developers and their agents
- [ ] **[semaphoreui/semaphore](https://github.com/semaphoreui/semaphore)** — 3 j · ⭐ 14k · `Go` · MIT
      Modern UI and powerful API for Ansible, Terraform/OpenTofu/Terragrunt, PowerShell and other DevOps tools.
- [ ] **[Lightricks/LTX-2](https://github.com/Lightricks/LTX-2)** — 3 j · ⭐ 9 433 · `Python` · **licence NOASSERTION**
      Official Python inference and LoRA trainer package for the LTX-2 audio–video generative model.
- [ ] **[openai/tart](https://github.com/openai/tart)** — 3 j · ⭐ 6 781 · `Swift` · **licence NOASSERTION**
      macOS and Linux VMs on Apple Silicon to use in CI and other automations
- [ ] **[kenn-io/agentsview](https://github.com/kenn-io/agentsview)** — 3 j · ⭐ 5 919 · `Go` · MIT
      Local-first session search, analytics, insights, and token use statistics for coding agents, supporting Claude Code, Codex, and more than 20 other agents.
- [ ] **[mostlygeek/llama-swap](https://github.com/mostlygeek/llama-swap)** — 3 j · ⭐ 5 672 · `Go` · MIT
      Reliable model swapping for any local OpenAI/Anthropic compatible server - llama.cpp, vllm, etc
- [ ] **[aldinokemal/go-whatsapp-web-multidevice](https://github.com/aldinokemal/go-whatsapp-web-multidevice)** — 3 j · ⭐ 4 823 · `Go` · MIT
      GOWA - WhatsApp REST API with support for UI, Multi Account, Webhooks, and MCP, and Chatwoot. Built with Golang for efficient memory use.
- [ ] **[asciimoo/hister](https://github.com/asciimoo/hister)** — 3 j · ⭐ 3 774 · `Go` · AGPL-3.0
      Your own search engine
- [ ] **[harveyai/harvey-labs](https://github.com/harveyai/harvey-labs)** — 3 j · ⭐ 1 361 · `Python` · MIT
      A benchmark built to evaluate and improve agent capabilities for supporting legal work.
- [ ] **[techjarves/Uncensored-Local-Studio](https://github.com/techjarves/Uncensored-Local-Studio)** — 3 j · ⭐ 1 331 · `JavaScript` · MIT
      Uncensored local AI studio for Windows, Linux, and macOS. Zero-setup GUI for Image Generation, GGUF LLMs, Text to Speech & Speech to Text
- [ ] **[umputun/agterm](https://github.com/umputun/agterm)** — 3 j · ⭐ 609 · `Swift` · MIT
      A genuinely good terminal
- [ ] **[Snailclimb/JavaGuide](https://github.com/Snailclimb/JavaGuide)** — 2 j · ⭐ 158k · `JavaScript` · Apache-2.0
      Java 面试 & 后端通用面试指南，覆盖计算机基础、数据库、分布式、高并发、系统设计与 AI 应用开发
- [ ] **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** — 2 j · ⭐ 66k · `JavaScript` · MIT
      Stop renting your intelligence. Own it with AnythingLLM. Everything you need for a powerful local-first agent experience
- [ ] **[mudler/LocalAI](https://github.com/mudler/LocalAI)** — 2 j · ⭐ 49k · `Go` · MIT
      LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.
- [ ] **[microsoft/qlib](https://github.com/microsoft/qlib)** — 2 j · ⭐ 48k · `Python` · MIT
      Qlib is an AI-oriented Quant investment platform that aims to use AI tech to empower Quant Research, from exploring ideas to implementing productions. Qlib suppor…
- [ ] **[RVC-Project/Retrieval-based-Voice-Conversion-WebUI](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI)** — 2 j · ⭐ 38k · `Python` · MIT
      Easily train a good VC model with voice data <= 10 mins!
- [ ] **[ashishpatel26/500-AI-Agents-Projects](https://github.com/ashishpatel26/500-AI-Agents-Projects)** — 2 j · ⭐ 37k · `Python` · MIT
      The 500 AI Agents Projects is a curated collection of AI agent use cases across various industries. It showcases practical applications and provides links to open…
- [ ] **[1Panel-dev/1Panel](https://github.com/1Panel-dev/1Panel)** — 2 j · ⭐ 36k · `Go` · GPL-3.0
      🔥 1Panel is a modern, open-source VPS control panel — and the only one with native AI agent support. Run Ollama models, deploy OpenClaw agents, and manage your en…
- [ ] **[SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern)** — 2 j · ⭐ 33k · `JavaScript` · AGPL-3.0
      LLM Frontend for Power Users.
- [ ] **[p-e-w/heretic](https://github.com/p-e-w/heretic)** — 2 j · ⭐ 31k · `Python` · AGPL-3.0
      Fully automatic censorship removal for language models
- [ ] **[cloudreve/cloudreve](https://github.com/cloudreve/cloudreve)** — 2 j · ⭐ 28k · `Go` · GPL-3.0
      🌩 Self-hosted file management and sharing system, supports multiple storage providers
- [ ] **[harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book)** — 2 j · ⭐ 28k · `Python` · **licence NOASSERTION**
      Machine Learning Systems
- [ ] **[eyaltoledano/claude-task-master](https://github.com/eyaltoledano/claude-task-master)** — 2 j · ⭐ 28k · `JavaScript` · **licence NOASSERTION**
      An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf, Roo, and others.
- [ ] **[dolthub/dolt](https://github.com/dolthub/dolt)** — 2 j · ⭐ 24k · `Go` · Apache-2.0
      Dolt – Git for Data
- [ ] **[HKUDS/AI-Trader](https://github.com/HKUDS/AI-Trader)** — 2 j · ⭐ 22k · `Python` · **licence aucune**
      "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- [ ] **[gastownhall/gastown](https://github.com/gastownhall/gastown)** — 2 j · ⭐ 18k · `Go` · MIT
      Gas Town - multi-agent workspace manager
- [ ] **[NVIDIA/Megatron-LM](https://github.com/NVIDIA/Megatron-LM)** — 2 j · ⭐ 17k · `Python` · **licence NOASSERTION**
      Ongoing research training transformer models at scale
- [ ] **[googleapis/mcp-toolbox](https://github.com/googleapis/mcp-toolbox)** — 2 j · ⭐ 16k · `Go` · Apache-2.0
      MCP Toolbox for Databases is an open source MCP server for databases.
- [ ] **[huggingface/transformers.js](https://github.com/huggingface/transformers.js)** — 2 j · ⭐ 16k · `JavaScript` · Apache-2.0
      State-of-the-art Machine Learning for the web. Run 🤗 Transformers directly in your browser, with no need for a server!
- [ ] **[pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat)** — 2 j · ⭐ 15k · `Python` · BSD-2-Clause
      Open Source framework for voice agents, multimodal apps, and realtime AI. Maintained by Daily and the community.
- [ ] **[electerm/electerm](https://github.com/electerm/electerm)** — 2 j · ⭐ 15k · `JavaScript` · MIT
      📻Terminal/ssh/sftp/ftp/telnet/serialport/RDP/VNC/Spice client(Linux, Mac, Windows, Android, HarmonyOS)
- [ ] **[tisfeng/Easydict](https://github.com/tisfeng/Easydict)** — 2 j · ⭐ 14k · `Swift` · GPL-3.0
      一个简洁优雅的词典翻译 macOS App。开箱即用，支持离线 OCR 识别，支持有道词典，🍎 苹果系统词典，🍎 苹果系统翻译，OpenAI，Gemini，DeepL，Google，Bing，腾讯，百度，阿里，小牛，彩云和火山翻译。A concise and elegant Dictionary and Translato…
- [ ] **[huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech)** — 2 j · ⭐ 13k · `Python` · Apache-2.0
      Build local voice agents with open-source models
- [ ] **[open-policy-agent/opa](https://github.com/open-policy-agent/opa)** — 2 j · ⭐ 12k · `Go` · Apache-2.0
      Open Policy Agent (OPA) is an open source, general-purpose policy engine.
- [ ] **[0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai)** — 2 j · ⭐ 11k · `Python` · MIT
      HexStrike AI MCP Agents is an advanced MCP server that lets AI agents (Claude, GPT, Copilot, etc.) autonomously run 150+ cybersecurity tools for automated pentest…
- [ ] **[calesthio/Crucix](https://github.com/calesthio/Crucix)** — 2 j · ⭐ 11k · `JavaScript` · AGPL-3.0
      Your personal intelligence agent. Watches the world from multiple data sources and pings you when something changes.
- [ ] **[0xJacky/nginx-ui](https://github.com/0xJacky/nginx-ui)** — 2 j · ⭐ 11k · `Go` · AGPL-3.0
      Yet another WebUI for Nginx
- [ ] **[jo-inc/camofox-browser](https://github.com/jo-inc/camofox-browser)** — 2 j · ⭐ 11k · `JavaScript` · MIT
      Stealth headless browser for AI agents — bypass Cloudflare, bot detection, and anti-scraping. Drop-in Puppeteer/Playwright replacement.
- [ ] **[google/adk-samples](https://github.com/google/adk-samples)** — 2 j · ⭐ 10k · `Python` · Apache-2.0
      A collection of sample agents built with Agent Development Kit (ADK)
- [ ] **[google/adk-go](https://github.com/google/adk-go)** — 2 j · ⭐ 8 794 · `Go` · Apache-2.0
      An open-source, code-first Go toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and control.
- [ ] **[maximhq/bifrost](https://github.com/maximhq/bifrost)** — 2 j · ⭐ 8 111 · `Go` · Apache-2.0
      Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.
- [ ] **[flyteorg/flyte](https://github.com/flyteorg/flyte)** — 2 j · ⭐ 7 502 · `Go` · Apache-2.0
      Dynamic, resilient AI orchestration. Coordinate data, models, and compute as you build AI workflows.
- [ ] **[rorkai/App-Store-Connect-CLI](https://github.com/rorkai/App-Store-Connect-CLI)** — 2 j · ⭐ 7 259 · `Go` · MIT
      Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more. JSON-first…
- [ ] **[dataease/SQLBot](https://github.com/dataease/SQLBot)** — 2 j · ⭐ 6 811 · `JavaScript` · **licence NOASSERTION**
      🔥 基于大模型和 RAG 的智能问数系统，对话式数据分析神器。Text-to-SQL Generation via LLMs using RAG.
- [ ] **[argmaxinc/argmax-oss-swift](https://github.com/argmaxinc/argmax-oss-swift)** — 2 j · ⭐ 6 367 · `Swift` · MIT
      On-device Speech AI for Apple Silicon
- [ ] **[beclab/Olares](https://github.com/beclab/Olares)** — 2 j · ⭐ 5 272 · `Go` · AGPL-3.0
      Open-Source Personal Cloud OS for Always-On Agents
- [ ] **[entireio/cli](https://github.com/entireio/cli)** — 2 j · ⭐ 5 101 · `Go` · MIT
      📜 Entire CLI hooks into your Git workflow to capture AI agent sessions as you work. Sessions are indexed alongside commits, creating a searchable record of how co…
- [ ] **[shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel)** — 2 j · ⭐ 4 738 · `Python` · MIT
      TSP自托管、零运维的 A 股「选股 + 监控 + 回测」量化工作台 | 基于 TickFlow 数据源 | LLM能力驱使策略定制+个股分析+复盘 | 自由接入第三方数据源与个性化扩展数据 | 个人开源 ,非第三方官方项目
- [ ] **[hamed-elfayome/Claude-Usage-Tracker](https://github.com/hamed-elfayome/Claude-Usage-Tracker)** — 2 j · ⭐ 3 515 · `Swift` · MIT
      Native macOS menu bar app for tracking Claude AI usage limits in real-time. Built with Swift/SwiftUI.
- [ ] **[wxtsky/CodeIsland](https://github.com/wxtsky/CodeIsland)** — 2 j · ⭐ 2 402 · `Swift` · MIT
      Real-time AI coding agent status panel in your MacBook notch — live status, approvals & replies for 13 AI tools, with iPhone & Apple Watch companions
- [ ] **[containers/kubernetes-mcp-server](https://github.com/containers/kubernetes-mcp-server)** — 2 j · ⭐ 2 096 · `Go` · Apache-2.0
      Model Context Protocol (MCP) server for Kubernetes and OpenShift
- [ ] **[Octane0411/open-vibe-island](https://github.com/Octane0411/open-vibe-island)** — 2 j · ⭐ 2 017 · `Swift` · GPL-3.0
      The open-source alternative to vibe-island, designed for heavy code agent users, supporting cc/codex/opencode, terminal/ghostty/cmux/kaku/iterm. 开源的vibe-island替代品…
- [ ] **[xuanyustudio/LocalMiniDrama](https://github.com/xuanyustudio/LocalMiniDrama)** — 2 j · ⭐ 1 771 · `JavaScript` · MIT
      🎬 seedance2接入 开源本地 AI 短剧 & 漫剧生成工具 —— 从故事到成片一站式完成，数据不出本机，短剧工作流管理平台，高灵活度，AI真人剧，AI漫剧本地搞定。 Open-source local AI short drama maker: story → storyboard → video, fully o…
- [ ] **[Gitlawb/zero](https://github.com/Gitlawb/zero)** — 2 j · ⭐ 1 672 · `Go` · MIT
      The coding agent that answers to you, your model, your machine, your rules.
- [ ] **[uber/ADR](https://github.com/uber/ADR)** — 2 j · ⭐ 1 568 · `Python` · Apache-2.0
      ADR secures enterprise AI agents through observability, security benchmarking, and threat detection. Deployed at Uber.
- [ ] **[tddworks/ClaudeBar](https://github.com/tddworks/ClaudeBar)** — 2 j · ⭐ 1 492 · `Swift` · **licence aucune**
      A macOS menu bar application that monitors AI coding assistant usage quotas. Keep track of your Claude, Codex, Antigravity ,and Gemini usage at a glance.
- [ ] **[ongridio/ongrid](https://github.com/ongridio/ongrid)** — 2 j · ⭐ 1 047 · `Go` · AGPL-3.0
      An ops AI Agent that understands your infrastructure, finds the root cause, and fixes it — right from Slack, Telegram, Lark or DingTalk.
- [ ] **[NVIDIA-NeMo/Automodel](https://github.com/NVIDIA-NeMo/Automodel)** — 2 j · ⭐ 956 · `Python` · Apache-2.0
      🚀 Pytorch Distributed native training library for LLMs/VLMs with OOTB Hugging Face support
- [ ] **[asheshgoplani/agent-deck](https://github.com/asheshgoplani/agent-deck)** — 2 j · ⭐ 904 · `Go` · MIT
      Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.
- [ ] **[ml-explore/mlx-swift-lm](https://github.com/ml-explore/mlx-swift-lm)** — 2 j · ⭐ 808 · `Swift` · MIT
      LLMs and VLMs with MLX Swift
- [ ] **[Agent-Field/pr-af](https://github.com/Agent-Field/pr-af)** — 2 j · ⭐ 632 · `Go` · **licence aucune**
      #1 open-source code reviewer on Code-Review-Bench
- [ ] **[adithyan-ak/AgentHound](https://github.com/adithyan-ak/AgentHound)** — 2 j · ⭐ 435 · `Go` · Apache-2.0
      Offensive security framework for AI agent infrastructure - recon, credential looting, model exfiltration, poisoning, and attack-path analysis across MCP, A2A, gat…
- [ ] **[microsoft/agent-host-protocol](https://github.com/microsoft/agent-host-protocol)** — 2 j · ⭐ 339 · `TypeScript` · MIT
      Synchronized multi-client state for AI agent sessions

<details><summary>Passés une seule journée — 119</summary>

- [browser-use/browser-use](https://github.com/browser-use/browser-use) — 🌐 Make websites accessible for AI agents. Automate tasks online with ease.
- [ansible/ansible](https://github.com/ansible/ansible) — Ansible is a radically simple IT automation platform that makes your applications and syst
- [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) — Extracted system prompts from Anthropic - Claude Fable 5, Opus 5, Claude Design, Claude Co
- [RVC-Boss/GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS) — 1 min voice data can also be used to train a good TTS model! (few shot voice cloning)
- [MemPalace/mempalace](https://github.com/MemPalace/mempalace) — The best-benchmarked open-source AI memory system. And it's free.
- [BerriAI/litellm](https://github.com/BerriAI/litellm) — The fastest, litest AI Gateway. Rust core with Python SDK. Call 100+ LLM APIs in OpenAI (o
- [AlistGo/alist](https://github.com/AlistGo/alist) — 🗂️A file list/WebDAV program that supports multiple storages, powered by Gin and Solidjs. 
- [blader/humanizer](https://github.com/blader/humanizer) — Agent skill that removes signs of AI-generated writing from text
- [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) — A skill to stop your coding agent from burying the answer. ADHD-friendly output.
- [ccxt/ccxt](https://github.com/ccxt/ccxt) — A unified trading API with more than 100 crypto exchanges and prediction markets in JavaSc
- [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) — [EMNLP2025] LightRAG: Simple and Fast Retrieval-Augmented Generation
- [fishaudio/fish-speech](https://github.com/fishaudio/fish-speech) — SOTA Open Source TTS
- [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) — CLI tool for configuring and monitoring Claude Code
- [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) — Make Any Website into CLI & Use your logged-in browser by AI agent.
- [invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) — Invoke is a leading creative engine for Stable Diffusion models, empowering professionals,
- [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — 345 Claude Code skills & agent skills & plugins (30+ Agents, 70+ custom commands, 330+ ski
- [comet-ml/opik](https://github.com/comet-ml/opik) — Debug, evaluate, and monitor your LLM applications, RAG systems, and agentic workflows wit
- [datawhalechina/easy-vibe](https://github.com/datawhalechina/easy-vibe) — 💻 vibe coding 2026 | Your First Modern Coding Course Beginners to Master Step by Step.
- [agent0ai/agent-zero](https://github.com/agent0ai/agent-zero) — Agent Zero AI framework
- [browser-use/browser-harness](https://github.com/browser-use/browser-harness) — Browser Harness | Self-healing harness that enables LLMs to complete any task.
- [bytebase/bytebase](https://github.com/bytebase/bytebase) — Database governance built for humans and agents — controlling changes and access across ev
- [casdoor/casdoor](https://github.com/casdoor/casdoor) — An open-source Agent-first Identity and Access Management (IAM) /LLM MCP & agent gateway a
- [cloudwego/eino](https://github.com/cloudwego/eino) — The ultimate LLM/AI application development framework in Go.
- [NoFxAiOS/nofx](https://github.com/NoFxAiOS/nofx) — Your AI trading terminal assistant for US stocks, commodities, forex, and crypto.
- [TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox) — Instant, Concurrent, Secure & Lightweight Sandbox for AI Agents.
- [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) — Build your own AI SRE agents. The open source toolkit for the AI era.
- [gruntwork-io/terragrunt](https://github.com/gruntwork-io/terragrunt) — Terragrunt is a flexible orchestration tool that allows Infrastructure as Code written in 
- [AgriciDaniel/claude-ads](https://github.com/AgriciDaniel/claude-ads) — Claude-first paid-media operations skill for Claude Code across 12 ad platforms (Google, M
- [MervinPraison/PraisonAI](https://github.com/MervinPraison/PraisonAI) — PraisonAI 🦞 — Hire a 24/7 AI Workforce. Stop writing boilerplate and start shipping autono
- [eze-is/web-access](https://github.com/eze-is/web-access) — 给 Claude Code 装上完整联网能力的 skill：三层通道调度 + 浏览器 CDP + 并行分治
- [THUDM/slime](https://github.com/THUDM/slime) — slime is an LLM post-training framework for RL Scaling.
- [OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr) — Voice-to-text dictation app with local (Nvidia Parakeet/Whisper) and cloud models (BYOK). 
- [hatchet-dev/hatchet](https://github.com/hatchet-dev/hatchet) — 🪓 An orchestration engine for background tasks, AI agents, and durable workflows
- [Blaizzy/mlx-audio](https://github.com/Blaizzy/mlx-audio) — A text-to-speech (TTS), speech-to-text (STT) and speech-to-speech (STS) library built on A
- [anthropics/defending-code-reference-harness](https://github.com/anthropics/defending-code-reference-harness) — Skills for threat modeling, scanning, triage, patching, plus an autonomous scanning harnes
- [Zipstack/unstract](https://github.com/Zipstack/unstract) — LLM-Driven Extraction of Unstructured Data — Built for API Deployments & ETL Pipeline Work
- [JerryZLiu/Dayflow](https://github.com/JerryZLiu/Dayflow) — The automatic work journal/time tracker. Privately turns your screen into a timeline of wh
- [htdt/godogen](https://github.com/htdt/godogen) — Autonomous game development for Godot, Bevy, and Babylon.js with Claude Code and Codex
- [Gentleman-Programming/engram](https://github.com/Gentleman-Programming/engram) — Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5
- [anthropics/claude-code-security-review](https://github.com/anthropics/claude-code-security-review) — An AI-powered security review GitHub Action using Claude to analyze code changes for secur
- [didilili/ai-agents-from-zero](https://github.com/didilili/ai-agents-from-zero) — 🚀 2026 最系统的 AI Agent 速成指南｜智能体实战教程 · 完整学习路径 + 实战项目 + 面试题库 · 对标大模型应用开发工程师岗位 · 覆盖LangChain / 
- [atilaahmettaner/tradingview-mcp](https://github.com/atilaahmettaner/tradingview-mcp) — TradingView MCP server — real-time market data, technical analysis, screeners & backtestin
- [VectifyAI/OpenKB](https://github.com/VectifyAI/OpenKB) — OpenKB: Open LLM Knowledge Base
- [hao-ai-lab/FastVideo](https://github.com/hao-ai-lab/FastVideo) — A unified inference and post-training framework for accelerated video generation.
- [DataDog/datadog-agent](https://github.com/DataDog/datadog-agent) — Main repository for Datadog Agent
- [geekjourneyx/md2wechat-skill](https://github.com/geekjourneyx/md2wechat-skill) — Markdown to WeChat CLI | 一键排版发布到微信公众号：支持 40+ 排版样式和专业主题 、AI 配图 、批量发布 、多账号管理
- [davepoon/buildwithclaude](https://github.com/davepoon/buildwithclaude) — A single hub to find Claude Skills, Agents, Commands, Hooks, Plugins, and Marketplace coll
- [docker/docker-agent](https://github.com/docker/docker-agent) — AI Agent Builder and Runtime by Docker Engineering
- [FB208/OpenBidKit_Yibiao](https://github.com/FB208/OpenBidKit_Yibiao) — 开箱即用的AI标书编写工具，标书AI生成工具，投标工具箱、知识库、标书查重、废标项检查，完全开源免费，欢迎使用
- [LLMQuant/quant-mind](https://github.com/LLMQuant/quant-mind) — QuantMind is an agent-native knowledge extraction and retrieval framework for quantitative
- [confident-ai/deepteam](https://github.com/confident-ai/deepteam) — DeepTeam is a framework to red team LLMs and AI agents.
- [aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws) — Official, AWS-supported MCP servers, skills, and plugins to help AI agents build on AWS
- [Armur-Ai/Pentest-Swarm-AI](https://github.com/Armur-Ai/Pentest-Swarm-AI) — Autonomous penetration testing using a swarm of AI agents. Orchestrates recon, classificat
- [NovaSky-AI/SkyRL](https://github.com/NovaSky-AI/SkyRL) — SkyRL: A Modular Full-stack RL Library for LLMs
- [iFurySt/open-codex-computer-use](https://github.com/iFurySt/open-codex-computer-use) — 👾 Open Computer Use – Open-Source Alternative to Codex Computer Use
- [amElnagdy/delegate-skills](https://github.com/amElnagdy/delegate-skills) — Delegate a coding task to a separate coding agent CLI, review the diff, land the commit yo
- [figma/mcp-server-guide](https://github.com/figma/mcp-server-guide) — A guide on how to use the Figma MCP server
- [Darkatse/TauriTavern](https://github.com/Darkatse/TauriTavern) — The classic Sillytavern, now has been rewritten in Tauri/Rust.
- [OWASP/threat-dragon](https://github.com/OWASP/threat-dragon) — An open source threat modeling tool from OWASP
- [caezium/Burrow](https://github.com/caezium/Burrow) — 🐹 Cleanup, app management, maintenance, disk analysis, and live status in one free, open-s
- [0xSero/ai-data-extraction](https://github.com/0xSero/ai-data-extraction) — extract all your personal data history from cursor, codex, claude-code, windsurf, and trae
- [gastownhall/gascity](https://github.com/gastownhall/gascity) — Orchestration-builder SDK for multi-agent coding workflows
- [Willxup/cpa-usage-keeper](https://github.com/Willxup/cpa-usage-keeper) — Standalone CliProxyAPI usage tracker with SQLite persistence and built-in dashboard.
- [erha19/ping-island](https://github.com/erha19/ping-island) — A Dynamic Island-style command center for managing all your AI coding agents on macOS.
- [crossoverJie/SkillDeck](https://github.com/crossoverJie/SkillDeck) — Native macOS SwiftUI app for managing multiple AI code agent skills
- [autonomous-ai/autonomous-os](https://github.com/autonomous-ai/autonomous-os) — The open-source operating system for robots — install it and your robot comes alive
- [dedene/zentty](https://github.com/dedene/zentty) — A native macOS terminal for agent-driven development, built on Ghostty.
- [jamwithai/production-agentic-rag-course](https://github.com/jamwithai/production-agentic-rag-course) — 
- [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) — A Claude Code plugin that shows what's happening - context usage, active tools, running ag
- [kagent-dev/kagent](https://github.com/kagent-dev/kagent) — Cloud Native Agentic AI | Discord: https://bit.ly/kagentdiscord
- [karpathy/autoresearch](https://github.com/karpathy/autoresearch) — AI agents running research on single-GPU nanochat training automatically
- [karpathy/nanoGPT](https://github.com/karpathy/nanoGPT) — The simplest, fastest repository for training/finetuning medium-sized GPTs.
- [kdlbs/kandev](https://github.com/kdlbs/kandev) — AI Kanban & Development Environment. Orchestrate multiple agents, review changes, open PRs
- [kserve/kserve](https://github.com/kserve/kserve) — Standardized Distributed Generative and Predictive AI Inference Platform for Scalable, Mul
- [lackeyjb/playwright-skill](https://github.com/lackeyjb/playwright-skill) — Claude Code Skill for browser automation with Playwright. Model-invoked - Claude autonomou
- [langchain-ai/open-swe](https://github.com/langchain-ai/open-swe) — An Open-Source Asynchronous Coding Agent
- [lharries/whatsapp-mcp](https://github.com/lharries/whatsapp-mcp) — WhatsApp MCP server
- [lingfengQAQ/webnovel-writer](https://github.com/lingfengQAQ/webnovel-writer) — 基于 Claude Code 的长篇网文辅助创作系统，解决 AI 写作中的「遗忘」和「幻觉」问题，支持 200 万字量级 连载创作。
- [liyupi/ai-guide](https://github.com/liyupi/ai-guide) — 程序员鱼皮的 AI 资源大全 + Vibe Coding 零基础教程，分享 OpenClaw 保姆级教程、大模型玩法（DeepSeek / GPT / Gemini / Claud
- [looplj/axonhub](https://github.com/looplj/axonhub) — ⚡️ Open-source AI Gateway — Use any SDK to call 100+ LLMs. Built-in failover, load balanci
- [mickael-kerjean/filestash](https://github.com/mickael-kerjean/filestash) — 📁 Universal File Storage Client
- [micro/go-micro](https://github.com/micro/go-micro) — A Go agent harness and service framework
- [microsoft/agent-academy](https://github.com/microsoft/agent-academy) — Curated lessons on getting started building agents with Copilot Studio
- [microsoft/agent-framework](https://github.com/microsoft/agent-framework) — A framework for building, orchestrating and deploying AI agents and multi-agent workflows 
- [microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) — AI Agent Governance Toolkit — Policy enforcement, zero-trust identity, execution sandboxin
- [minsang-alt/PasteClip](https://github.com/minsang-alt/PasteClip) — Free, open-source clipboard manager for macOS. Native Paste alternative with card UI, Pinb
- [mpfaffenberger/code_puppy](https://github.com/mpfaffenberger/code_puppy) — Agentic AI for writing code
- [mvanhorn/cli-printing-press](https://github.com/mvanhorn/cli-printing-press) — Every API has a secret identity. This finds it, absorbs every feature from every competing
- [neuml/txtai](https://github.com/neuml/txtai) — 💡 All-in-one AI framework for semantic search, LLM orchestration and language model workfl
- [nguyenphutrong/quotio](https://github.com/nguyenphutrong/quotio) — Stop juggling AI accounts. Quotio is a beautiful native macOS menu bar app that unifies yo
- [ob-f/OpenBot](https://github.com/ob-f/OpenBot) — OpenBot leverages smartphones as brains for low-cost robots. We have designed a small elec
- [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) — Omnigent is an open-source AI agent framework and meta-harness: orchestrate Claude Code, C
- [open-webui/open-webui](https://github.com/open-webui/open-webui) — User-friendly AI Interface (Supports Ollama, OpenAI API, ...)
- [openai/plugins](https://github.com/openai/plugins) — OpenAI Plugins
- [openai/whisper](https://github.com/openai/whisper) — Robust Speech Recognition via Large-Scale Weak Supervision
- [opencode-ai/opencode](https://github.com/opencode-ai/opencode) — A powerful AI coding agent. Built for the terminal.
- [paradigmxyz/centaur](https://github.com/paradigmxyz/centaur) — Centaur is frontier, agentic infrastructure that you own. Centaur is like Claude Tag, but 
- [pipeshub-ai/pipeshub-ai](https://github.com/pipeshub-ai/pipeshub-ai) — PipesHub is an open-source fully extensible AI context layer that unifies your business da
- [samber/cc-skills-golang](https://github.com/samber/cc-skills-golang) — 🧑‍🎨 A collection of Golang agentic skills that works
- [seaweedfs/seaweedfs](https://github.com/seaweedfs/seaweedfs) — SeaweedFS is a distributed storage system for object storage (S3), file systems, and Icebe
- [shootthesound/Fizgig](https://github.com/shootthesound/Fizgig) — Krea 2, MiniMax & Klein 9B LoRA - LoKR Studio — train, profile, repair, and extract Krea 2
- [shy3130/tickflow-stock-panel](https://github.com/shy3130/tickflow-stock-panel) — TSP自托管、零运维的 A 股「选股 + 监控 + 回测」量化工作台 | 基于 TickFlow 数据源 | LLM能力驱使策略定制+个股分析+复盘 | 自由接入第三方数据源与个性
- [sierra-research/tau2-bench](https://github.com/sierra-research/tau2-bench) — τ-Bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains
- [signerlabs/ShipSwift](https://github.com/signerlabs/ShipSwift) — AI-native SwiftUI component library with full-stack recipes — connect via MCP for instant 
- [skypilot-org/skypilot](https://github.com/skypilot-org/skypilot) — The AI Compute Platform for frontier teams. SkyPilot turns fragmented AI compute into one 
- [smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad) — Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp.
- [supabitapp/supacode](https://github.com/supabitapp/supacode) — worktree coding agents command center.
- [superlinked/sie](https://github.com/superlinked/sie) — Open-source inference server and production cluster for all the models your agent needs.
- [taoufik123-collab/claude-watch](https://github.com/taoufik123-collab/claude-watch) — Give Claude the ability to watch any video — scene-change frames + transcript + a structur
- [trailofbits/skills](https://github.com/trailofbits/skills) — Trail of Bits Claude Code skills for security research, vulnerability detection, and audit
- [trpc-group/trpc-agent-go](https://github.com/trpc-group/trpc-agent-go) — A Go framework for building production agent systems with graph workflows, tools, memory, 
- [Unclecheng-li/VulnClaw](https://github.com/Unclecheng-li/VulnClaw) — 基于 AI Agent + MCP 工具链 + 渗透 Skill 编排， 配合大语言模型， 自然语言输入 → 自动完成「信息收集 → 漏洞发现 → 漏洞利用 → 报告生成」全流程。
- [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) — Hindsight: Agent Memory That Learns
- [voocel/ainovel-cli](https://github.com/voocel/ainovel-cli) — ✨多agent实现全自动AI小说生成
- [webbrain-one/webbrain](https://github.com/webbrain-one/webbrain) — Open-source AI browser agent for Chrome and Firefox (monorepo) 🧠
- [whiteguo233/OpenBiliClaw](https://github.com/whiteguo233/OpenBiliClaw) — 本地私有、开源的自进化跨平台 AI 内容发现 Agent：先理解你，再主动从 B站、小红书、抖音、YouTube、X、知乎、Reddit、微博等平台与开放 Web 寻找内容。（支持
- [wshobson/agents](https://github.com/wshobson/agents) — Multi-harness agentic plugin marketplace for Claude Code, Codex CLI, Cursor, OpenCode, Git
- [yifanfeng97/Hyper-Extract](https://github.com/yifanfeng97/Hyper-Extract) — Hypergraph is more powerful. Transform unstructured text into structured knowledge with LL
- [youssofal/MTPLX](https://github.com/youssofal/MTPLX) — 3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon 

</details>

---

## 📊 Machine Learning — 8

*Dossier DevBrain : `Machine Learning/`*

- [ ] **[prometheus/prometheus](https://github.com/prometheus/prometheus)** — 4 j · ⭐ 66k · `Go` · Apache-2.0
      The Prometheus monitoring system and time series database.
- [ ] **[deepfakes/faceswap](https://github.com/deepfakes/faceswap)** — 2 j · ⭐ 57k · `Python` · GPL-3.0
      Deepfakes Software For All
- [ ] **[newton-physics/newton](https://github.com/newton-physics/newton)** — 2 j · ⭐ 5 642 · `Python` · Apache-2.0
      An open-source, GPU-accelerated physics simulation engine built upon NVIDIA Warp, specifically targeting roboticists and simulation researchers.

<details><summary>Passés une seule journée — 5</summary>

- [google-research/timesfm](https://github.com/google-research/timesfm) — TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model develo
- [jax-ml/jax](https://github.com/jax-ml/jax) — Composable transformations of Python+NumPy programs: differentiate, vectorize, JIT to GPU/
- [pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl) — RL training environments for Microduck (mjlab)
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — Tensors and Dynamic neural networks in Python with strong GPU acceleration
- [roboflow/supervision](https://github.com/roboflow/supervision) — We write your reusable computer vision tools. 💜

</details>

---

## 🔀 Data & pipelines — 19

*Dossier DevBrain : `Data & pipelines/`*

- [ ] **[public-apis/public-apis](https://github.com/public-apis/public-apis)** — 5 j · ⭐ 480k · `Python` · MIT
      A collective list of free APIs
- [ ] **[wailsapp/wails](https://github.com/wailsapp/wails)** — 4 j · ⭐ 36k · `Go` · MIT
      Create beautiful applications using Go
- [ ] **[airbnb/javascript](https://github.com/airbnb/javascript)** — 3 j · ⭐ 148k · `JavaScript` · MIT
      JavaScript Style Guide
- [ ] **[sveltejs/svelte](https://github.com/sveltejs/svelte)** — 3 j · ⭐ 88k · `JavaScript` · MIT
      web development for the rest of us
- [ ] **[NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler)** — 3 j · ⭐ 65k · `Python` · **licence NOASSERTION**
      小红书笔记 | 评论爬虫、抖音视频 | 评论爬虫、快手视频 | 评论爬虫、B 站视频 ｜ 评论爬虫、微博帖子 ｜ 评论爬虫、百度贴吧帖子 ｜ 百度贴吧评论回复爬虫 | 知乎问答文章｜评论爬虫
- [ ] **[sveltejs/kit](https://github.com/sveltejs/kit)** — 3 j · ⭐ 20k · `JavaScript` · MIT
      web development, streamlined
- [ ] **[argoproj/argo-workflows](https://github.com/argoproj/argo-workflows)** — 3 j · ⭐ 16k · `Go` · Apache-2.0
      Workflow Engine for Kubernetes
- [ ] **[scrapy/scrapy](https://github.com/scrapy/scrapy)** — 2 j · ⭐ 64k · `Python` · BSD-3-Clause
      Scrapy, a fast high-level web crawling & scraping framework for Python.
- [ ] **[TecharoHQ/anubis](https://github.com/TecharoHQ/anubis)** — 2 j · ⭐ 22k · `Go` · MIT
      Weighs the soul of incoming HTTP requests to stop AI crawlers
- [ ] **[getarcaneapp/arcane](https://github.com/getarcaneapp/arcane)** — 2 j · ⭐ 7 414 · `Go` · BSD-3-Clause
      Modern Docker Management, Designed for Everyone
- [ ] **[Solr159/JavBoss](https://github.com/Solr159/JavBoss)** — 2 j · ⭐ 643 · `Go` · GPL-3.0
      开箱即用的本地 JAV/视频 刮削、管理、播放软件，支持命令行一键安装和 docker 部署。只需简单添加目录，即可打造你的私人 JAV/视频 媒体库，带给你顶级的浏览体验，懒人必备。| Your local JAV/video manager.

<details><summary>Passés une seule journée — 8</summary>

- [Asabeneh/30-Days-Of-Python](https://github.com/Asabeneh/30-Days-Of-Python) — The 30 Days of Python programming challenge is a step-by-step guide to learn the Python pr
- [PrefectHQ/prefect](https://github.com/PrefectHQ/prefect) — Prefect is a workflow orchestration framework for building resilient data pipelines in Pyt
- [getlago/lago](https://github.com/getlago/lago) — Open Source Metering and Usage Based Billing API ⭐️ Consumption tracking, Subscription man
- [huangxd-/danmu_api](https://github.com/huangxd-/danmu_api) — 一个人人都能部署的基于 js 的弹幕 API 服务器，支持爱优腾芒哔咪人韩巴狐乐西埋帆红弹幕直接获取，兼容弹弹play的搜索、详情查询和弹幕获取接口规范，并提供日志记录，支持ver
- [AWeirdDev/flights](https://github.com/AWeirdDev/flights) — Fast, robust Google Flights scraper (API) for Python. (Probably)
- [pandas-dev/pandas](https://github.com/pandas-dev/pandas) — Flexible and powerful data analysis / manipulation library for Python, providing labeled d
- [rileytestut/Delta](https://github.com/rileytestut/Delta) — Delta is an all-in-one classic video game emulator for non-jailbroken iOS devices.
- [seriousm4x/UpSnap](https://github.com/seriousm4x/UpSnap) — A simple wake on lan web app written with SvelteKit, Go and PocketBase.

</details>

---

## 🗄️ Bases de données — 13

*Dossier DevBrain : `Bases de données/`*

- [ ] **[etcd-io/etcd](https://github.com/etcd-io/etcd)** — 3 j · ⭐ 52k · `Go` · Apache-2.0
      Distributed reliable key-value store for the most critical data of a distributed system
- [ ] **[index-tts/index-tts](https://github.com/index-tts/index-tts)** — 2 j · ⭐ 24k · `Python` · **licence NOASSERTION**
      An Industrial-Level Controllable and Efficient Zero-Shot Text-To-Speech System

<details><summary>Passés une seule journée — 11</summary>

- [NodeBB/NodeBB](https://github.com/NodeBB/NodeBB) — Node.js based forum software built for the modern web
- [jackc/pgx](https://github.com/jackc/pgx) — PostgreSQL driver and toolkit for Go
- [cloudnative-pg/cloudnative-pg](https://github.com/cloudnative-pg/cloudnative-pg) — The most popular Kubernetes Operator for PostgreSQL.
- [amacneil/dbmate](https://github.com/amacneil/dbmate) — 🚀 A lightweight, framework-agnostic database migration tool.
- [dbgate/dbgate](https://github.com/dbgate/dbgate) — Database manager for MySQL, PostgreSQL, SQL Server, MongoDB, SQLite and others. Runs under
- [authzed/spicedb](https://github.com/authzed/spicedb) — Open Source, Google Zanzibar-inspired database for scalably storing and querying fine-grai
- [flexprice/flexprice](https://github.com/flexprice/flexprice) — Usage-based pricing and billing for developers 🔓 Cloud or self-hosted ⚙️ No-code UI 💰 Real
- [google/osv.dev](https://github.com/google/osv.dev) — Open source vulnerability DB and triage service.
- [juicedata/juicefs](https://github.com/juicedata/juicefs) — JuiceFS is a distributed POSIX file system built on top of Redis and S3.
- [kenn-io/msgvault](https://github.com/kenn-io/msgvault) — Archive a lifetime of email and chat. Offline search, analytics, and AI query over your fu
- [vitessio/vitess](https://github.com/vitessio/vitess) — Vitess is a database clustering system for horizontal scaling of MySQL.

</details>

---

## 📈 Observabilité — 19

*Dossier DevBrain : `Observabilité/`*

- [ ] **[pranshuparmar/witr](https://github.com/pranshuparmar/witr)** — 9 j · ⭐ 22k · `Go` · Apache-2.0
      Why is this running? Trace any process, port, container, or file back to what started it - CLI + TUI.
- [ ] **[louislam/uptime-kuma](https://github.com/louislam/uptime-kuma)** — 6 j · ⭐ 91k · `JavaScript` · MIT
      A fancy self-hosted monitoring tool
- [ ] **[TryGhost/Ghost](https://github.com/TryGhost/Ghost)** — 5 j · ⭐ 55k · `TypeScript` · MIT
      Independent technology for modern publishing, memberships, subscriptions and newsletters.
- [ ] **[glanceapp/glance](https://github.com/glanceapp/glance)** — 4 j · ⭐ 37k · `Go` · AGPL-3.0
      A self-hosted dashboard that puts all your feeds in one place
- [ ] **[grafana/loki](https://github.com/grafana/loki)** — 3 j · ⭐ 28k · `Go` · AGPL-3.0
      Like Prometheus, but for logs.
- [ ] **[henrygd/beszel](https://github.com/henrygd/beszel)** — 3 j · ⭐ 25k · `Go` · MIT
      Lightweight server monitoring with historical data, docker stats, and alerts.
- [ ] **[grafana/alloy](https://github.com/grafana/alloy)** — 3 j · ⭐ 3 540 · `Go` · Apache-2.0
      OpenTelemetry Collector distribution with programmable pipelines
- [ ] **[bettercap/bettercap](https://github.com/bettercap/bettercap)** — 2 j · ⭐ 19k · `Go` · **licence NOASSERTION**
      The Swiss Army knife for 802.11, BLE, HID, CAN-bus, IPv4 and IPv6 networks reconnaissance and MITM attacks.
- [ ] **[open-telemetry/opentelemetry-collector](https://github.com/open-telemetry/opentelemetry-collector)** — 2 j · ⭐ 7 558 · `Go` · Apache-2.0
      OpenTelemetry Collector
- [ ] **[komari-monitor/komari](https://github.com/komari-monitor/komari)** — 2 j · ⭐ 6 185 · `Go` · MIT · **archivé**
      A simple server monitor tool.

<details><summary>Passés une seule journée — 9</summary>

- [cilium/cilium](https://github.com/cilium/cilium) — eBPF-based Networking, Security, and Observability
- [ccfos/nightingale](https://github.com/ccfos/nightingale) — Nightingale is to monitoring and alerting what Grafana is to visualization.
- [TwiN/gatus](https://github.com/TwiN/gatus) — Automated developer-oriented status page with alerting and incident support
- [aceberg/WatchYourLAN](https://github.com/aceberg/WatchYourLAN) — Lightweight network IP scanner written in Go. With notifications, history, export to Grafa
- [grafana/tempo](https://github.com/grafana/tempo) — Grafana Tempo is a high volume, minimal dependency distributed tracing backend.
- [fleetbase/fleetbase](https://github.com/fleetbase/fleetbase) — Modular logistics and supply chain operating system (LSOS)
- [open-telemetry/opentelemetry.io](https://github.com/open-telemetry/opentelemetry.io) — The OpenTelemetry website and documentation
- [opencost/opencost](https://github.com/opencost/opencost) — Cost monitoring for Kubernetes workloads and cloud costs
- [seakee/CPA-Manager-Plus](https://github.com/seakee/CPA-Manager-Plus) — A self-hosted CPA / CLIProxyAPI management panel and AI gateway observability dashboard fo

</details>

---

## ⚙️ DevOps — 65

*Dossier DevBrain : `DevOps/`*

- [ ] **[aquasecurity/trivy](https://github.com/aquasecurity/trivy)** — 12 j · ⭐ 37k · `Go` · Apache-2.0
      Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more
- [ ] **[traefik/traefik](https://github.com/traefik/traefik)** — 5 j · ⭐ 64k · `Go` · MIT
      The Cloud Native Application Proxy
- [ ] **[hashicorp/terraform](https://github.com/hashicorp/terraform)** — 5 j · ⭐ 49k · `Go` · **licence NOASSERTION**
      Terraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative conf…
- [ ] **[Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI)** — 5 j · ⭐ 28k · `JavaScript` · MIT
      Unrestricted Open-source alternative to AI video platforms — Free AI image & video generation studio with 500+ models (Flux, Midjourney, Kling, Sora, Veo). No con…
- [ ] **[goauthentik/authentik](https://github.com/goauthentik/authentik)** — 5 j · ⭐ 25k · `Python` · **licence NOASSERTION**
      The authentication glue you need.
- [ ] **[kubernetes/kubernetes](https://github.com/kubernetes/kubernetes)** — 4 j · ⭐ 127k · `Go` · Apache-2.0
      Production-Grade Container Scheduling and Management
- [ ] **[harness/harness](https://github.com/harness/harness)** — 4 j · ⭐ 38k · `Go` · Apache-2.0
      Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.
- [ ] **[argoproj/argo-cd](https://github.com/argoproj/argo-cd)** — 4 j · ⭐ 24k · `Go` · Apache-2.0
      Declarative Continuous Deployment for Kubernetes
- [ ] **[knadh/listmonk](https://github.com/knadh/listmonk)** — 4 j · ⭐ 23k · `Go` · AGPL-3.0
      High performance, self-hosted, newsletter and mailing list manager with a modern dashboard. Single binary app.
- [ ] **[mikefarah/yq](https://github.com/mikefarah/yq)** — 4 j · ⭐ 15k · `Go` · MIT
      yq is a portable command-line YAML, JSON, XML, CSV, TOML, HCL and properties processor
- [ ] **[opentofu/opentofu](https://github.com/opentofu/opentofu)** — 3 j · ⭐ 30k · `Go` · MPL-2.0
      OpenTofu lets you declaratively manage your cloud infrastructure.
- [ ] **[authelia/authelia](https://github.com/authelia/authelia)** — 3 j · ⭐ 28k · `Go` · Apache-2.0
      The Single Sign-On Multi-Factor portal for web apps, now OpenID Certified™
- [ ] **[pulumi/pulumi](https://github.com/pulumi/pulumi)** — 3 j · ⭐ 25k · `Go` · Apache-2.0
      Pulumi - Infrastructure as Code in any programming language 🚀
- [ ] **[navidrome/navidrome](https://github.com/navidrome/navidrome)** — 3 j · ⭐ 23k · `Go` · GPL-3.0
      🎧 Your Personal Streaming Service
- [ ] **[m1k1o/neko](https://github.com/m1k1o/neko)** — 3 j · ⭐ 22k · `Go` · Apache-2.0
      A self hosted virtual browser that runs in docker and uses WebRTC.
- [ ] **[containerd/containerd](https://github.com/containerd/containerd)** — 3 j · ⭐ 21k · `Go` · Apache-2.0
      An open and reliable container runtime
- [ ] **[google/gvisor](https://github.com/google/gvisor)** — 3 j · ⭐ 19k · `Go` · Apache-2.0
      Application Kernel for Containers
- [ ] **[alam00000/bentopdf](https://github.com/alam00000/bentopdf)** — 3 j · ⭐ 15k · `JavaScript` · AGPL-3.0
      The Privacy First PDF Toolkit
- [ ] **[plankanban/planka](https://github.com/plankanban/planka)** — 3 j · ⭐ 12k · `JavaScript` · **licence NOASSERTION**
      PLANKA is the Kanban-style project mastering tool for everyone
- [ ] **[anchore/syft](https://github.com/anchore/syft)** — 3 j · ⭐ 9 567 · `Go` · Apache-2.0
      CLI tool and library for generating a Software Bill of Materials from container images and filesystems
- [ ] **[moby/moby](https://github.com/moby/moby)** — 2 j · ⭐ 72k · `Go` · Apache-2.0
      The Moby Project - a collaborative project for the container ecosystem to assemble container-based systems
- [ ] **[docker/compose](https://github.com/docker/compose)** — 2 j · ⭐ 38k · `Go` · Apache-2.0
      Define and run multi-container applications with Docker
- [ ] **[derailed/k9s](https://github.com/derailed/k9s)** — 2 j · ⭐ 34k · `Go` · Apache-2.0
      🐶 Kubernetes CLI To Manage Your Clusters In Style!
- [ ] **[k3s-io/k3s](https://github.com/k3s-io/k3s)** — 2 j · ⭐ 33k · `Go` · Apache-2.0
      Lightweight Kubernetes
- [ ] **[chaitin/SafeLine](https://github.com/chaitin/SafeLine)** — 2 j · ⭐ 22k · `Go` · GPL-3.0
      SafeLine is a self-hosted WAF(Web Application Firewall) / reverse proxy to protect your web apps from attacks and exploits.
- [ ] **[LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate)** — 2 j · ⭐ 16k · `Python` · AGPL-3.0
      Free and Open Source Machine Translation API. Self-hosted, offline capable and easy to setup.
- [ ] **[siderolabs/talos](https://github.com/siderolabs/talos)** — 2 j · ⭐ 11k · `Go` · MPL-2.0
      Talos Linux is a modern Linux distribution built for Kubernetes.
- [ ] **[velero-io/velero](https://github.com/velero-io/velero)** — 2 j · ⭐ 10k · `Go` · Apache-2.0
      Backup and migrate Kubernetes applications and their persistent volumes
- [ ] **[runatlantis/atlantis](https://github.com/runatlantis/atlantis)** — 2 j · ⭐ 9 290 · `Go` · Apache-2.0
      Terraform Pull Request Automation
- [ ] **[actions/actions-runner-controller](https://github.com/actions/actions-runner-controller)** — 2 j · ⭐ 6 499 · `Go` · Apache-2.0
      Kubernetes controller for GitHub Actions self-hosted runners
- [ ] **[Project-HAMi/HAMi](https://github.com/Project-HAMi/HAMi)** — 2 j · ⭐ 4 608 · `Go` · Apache-2.0
      Heterogeneous GPU Sharing on Kubernetes
- [ ] **[akuity/kargo](https://github.com/akuity/kargo)** — 2 j · ⭐ 3 660 · `Go` · Apache-2.0
      Application lifecycle orchestration
- [ ] **[envoyproxy/gateway](https://github.com/envoyproxy/gateway)** — 2 j · ⭐ 3 033 · `Go` · Apache-2.0
      Manages Envoy Proxy as a Standalone or Kubernetes-based Application Gateway
- [ ] **[kubernetes-sigs/kueue](https://github.com/kubernetes-sigs/kueue)** — 2 j · ⭐ 2 974 · `Go` · Apache-2.0
      Kubernetes-native Job Queueing

<details><summary>Passés une seule journée — 31</summary>

- [go-gitea/gitea](https://github.com/go-gitea/gitea) — Git with a cup of tea! Painless self-hosted all-in-one software development service, inclu
- [IceWhaleTech/CasaOS](https://github.com/IceWhaleTech/CasaOS) — CasaOS - A simple, easy-to-use, elegant open-source Personal Cloud system.
- [dapr/dapr](https://github.com/dapr/dapr) — Dapr is a portable runtime for building distributed applications across cloud and edge, co
- [getsops/sops](https://github.com/getsops/sops) — Simple and flexible tool for managing secrets
- [DrewThomasson/ebook2audiobook](https://github.com/DrewThomasson/ebook2audiobook) — Generate audiobooks from e-books, voice cloning & 1158+ languages!
- [go-task/task](https://github.com/go-task/task) — A fast, cross-platform build tool inspired by Make, designed for modern workflows.
- [cert-manager/cert-manager](https://github.com/cert-manager/cert-manager) — Automatically provision and manage TLS certificates in Kubernetes
- [gotenberg/gotenberg](https://github.com/gotenberg/gotenberg) — A developer-friendly API for converting many document formats into PDF files, and more!
- [anchore/grype](https://github.com/anchore/grype) — A vulnerability scanner for container images and filesystems
- [hashicorp/terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) — The AWS Provider enables Terraform to manage AWS resources.
- [fluxcd/flux2](https://github.com/fluxcd/flux2) — Open and extensible continuous delivery solution for Kubernetes. Powered by GitOps Toolkit
- [aws/karpenter-provider-aws](https://github.com/aws/karpenter-provider-aws) — Karpenter is a Kubernetes Node Autoscaler built for flexibility, performance, and simplici
- [OpenSignLabs/OpenSign](https://github.com/OpenSignLabs/OpenSign) — 🔥 The free & Open Source DocuSign alternative
- [docker/cli](https://github.com/docker/cli) — The Docker CLI
- [go-vikunja/vikunja](https://github.com/go-vikunja/vikunja) — The task manager you actually own.
- [bbernhard/signal-cli-rest-api](https://github.com/bbernhard/signal-cli-rest-api) — Dockerized Signal Messenger REST API
- [chr0nzz/traefik-manager](https://github.com/chr0nzz/traefik-manager) — A clean, self-hosted web UI for managing your Traefik reverse proxy.
- [juanfont/headscale](https://github.com/juanfont/headscale) — An open source, self-hosted implementation of the Tailscale control server
- [kedacore/keda](https://github.com/kedacore/keda) — KEDA is a Kubernetes-based Event Driven Autoscaling component. It provides event driven sc
- [kubernetes-sigs/karpenter](https://github.com/kubernetes-sigs/karpenter) — Karpenter is a Kubernetes Node Autoscaler built for flexibility, performance, and simplici
- [kubernetes-sigs/kind](https://github.com/kubernetes-sigs/kind) — Kubernetes IN Docker - local clusters for testing Kubernetes
- [kubernetes/minikube](https://github.com/kubernetes/minikube) — Run Kubernetes locally
- [kubescape/kubescape](https://github.com/kubescape/kubescape) — Kubescape is an open-source Kubernetes security platform for your IDE, CI/CD pipelines, an
- [layer5io/layer5](https://github.com/layer5io/layer5) — Layer5, expect more from your infrastructure
- [nicholas-fedor/watchtower](https://github.com/nicholas-fedor/watchtower) — Automate Docker container image updates
- [oseghalep/cloud-cost-optimization-hub](https://github.com/oseghalep/cloud-cost-optimization-hub) — Cloud Cost Optimization Hub is an open-source, self-hosted platform that provides unified 
- [rommapp/romm](https://github.com/rommapp/romm) — A beautiful, powerful, self-hosted ROM manager and player.
- [usememos/memos](https://github.com/usememos/memos) — Open-source, self-hosted note-taking tool built for quick capture. Markdown-native, lightw
- [veops/oneterm](https://github.com/veops/oneterm) — Provide secure access and control over all infrastructure
- [yusing/godoxy](https://github.com/yusing/godoxy) — High-performance reverse proxy and container orchestrator for self-hosters
- [zitadel/zitadel](https://github.com/zitadel/zitadel) — ZITADEL - Identity infrastructure, simplified for you.

</details>

---

## 🔐 Sécurité — 24

*Dossier DevBrain : `Sécurité/`*

- [ ] **[tailscale/tailscale](https://github.com/tailscale/tailscale)** — 7 j · ⭐ 36k · `Go` · BSD-3-Clause
      The easiest, most secure way to use WireGuard and 2FA.
- [ ] **[smicallef/spiderfoot](https://github.com/smicallef/spiderfoot)** — 5 j · ⭐ 22k · `Python` · MIT
      SpiderFoot automates OSINT for threat intelligence and mapping your attack surface.
- [ ] **[sundowndev/phoneinfoga](https://github.com/sundowndev/phoneinfoga)** — 5 j · ⭐ 17k · `Go` · GPL-3.0
      Information gathering framework for phone numbers
- [ ] **[projectdiscovery/nuclei-templates](https://github.com/projectdiscovery/nuclei-templates)** — 5 j · ⭐ 12k · `JavaScript` · MIT
      Community curated list of templates for the nuclei engine to find security vulnerabilities.
- [ ] **[google/osv-scanner](https://github.com/google/osv-scanner)** — 5 j · ⭐ 11k · `Go` · Apache-2.0
      Vulnerability scanner written in Go which uses the data provided by https://osv.dev
- [ ] **[caddyserver/caddy](https://github.com/caddyserver/caddy)** — 4 j · ⭐ 75k · `Go` · Apache-2.0
      Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS
- [ ] **[bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view)** — 4 j · ⭐ 35k · `JavaScript` · **licence NOASSERTION**
      A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.
- [ ] **[projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei)** — 4 j · ⭐ 31k · `Go` · MIT
      Nuclei is a fast, customizable vulnerability scanner powered by the global security community and built on a simple YAML-based DSL, enabling collaboration to tack…
- [ ] **[megadose/holehe](https://github.com/megadose/holehe)** — 4 j · ⭐ 14k · `Python` · GPL-3.0
      holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password funct…
- [ ] **[Ed1s0nZ/CyberStrikeAI](https://github.com/Ed1s0nZ/CyberStrikeAI)** — 4 j
      The system of action for AI-native cybersecurity—where intent becomes governed execution, evidence becomes operational memory, and every operation improves the next.
- [ ] **[sherlock-project/sherlock](https://github.com/sherlock-project/sherlock)** — 3 j · ⭐ 91k · `Python` · MIT
      Hunt down social media accounts by username across social networks
- [ ] **[trufflesecurity/trufflehog](https://github.com/trufflesecurity/trufflehog)** — 3 j · ⭐ 27k · `Go` · AGPL-3.0
      Find, verify, and analyze leaked credentials
- [ ] **[shadow1ng/fscan](https://github.com/shadow1ng/fscan)** — 3 j · ⭐ 14k · `Go` · MIT
      一款内网综合扫描工具，方便一键自动化、全方位漏扫扫描。(An intranet comprehensive scanning tool, enabling one-click automated, all-round vulnerability scanning)
- [ ] **[kgretzky/evilginx2](https://github.com/kgretzky/evilginx2)** — 2 j · ⭐ 15k · `Go` · BSD-3-Clause
      Standalone man-in-the-middle attack framework used for phishing login credentials along with session cookies, allowing for the bypass of 2-factor authentication
- [ ] **[majd/ipatool](https://github.com/majd/ipatool)** — 2 j · ⭐ 11k · `Go` · MIT
      Command-line tool that allows searching and downloading app packages (known as ipa files) for iOS, iPadOS, tvOS, and visionOS from the App Store.
- [ ] **[kaifcodec/user-scanner](https://github.com/kaifcodec/user-scanner)** — 2 j · ⭐ 4 804 · `Python` · MIT
      🕵️‍♂️ (2-in-1) Email & Username OSINT suite for deep data extraction just from a single Email/Username. Analyzes 465+ actively maintained scan vectors (175+ email…

<details><summary>Passés une seule journée — 8</summary>

- [gophish/gophish](https://github.com/gophish/gophish) — Open-Source Phishing Toolkit
- [BishopFox/sliver](https://github.com/BishopFox/sliver) — Adversary Emulation Framework
- [ViRb3/wgcf](https://github.com/ViRb3/wgcf) — 🚤 Cross-platform, unofficial CLI for Cloudflare Warp
- [MatinSenPai/SenPaiScanner](https://github.com/MatinSenPai/SenPaiScanner) — A light-weight scanner for Cloudflare IPs, written in Golang
- [Coldcard/firmware](https://github.com/Coldcard/firmware) — ❄️ Firmware and simulator for Coldcard Hardware Wallet
- [p1ngul1n0/blackbird](https://github.com/p1ngul1n0/blackbird) — An OSINT tool to search for accounts by username and email in social networks.
- [pocket-id/pocket-id](https://github.com/pocket-id/pocket-id) — The most user-friendly OpenID Connect Certified™ and OAuth 2.0 provider that lets users si
- [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) — A list of useful payloads and bypass for Web Application Security and Pentest/CTF

</details>

---

## 🖥️ Interfaces & apps data — 6

*Dossier DevBrain : `Interfaces & apps data/`*

- [ ] **[react/react](https://github.com/react/react)** — 3 j · ⭐ 250k · `JavaScript` · MIT
      The library for web and native user interfaces.
- [ ] **[jesseduffield/lazygit](https://github.com/jesseduffield/lazygit)** — 3 j · ⭐ 82k · `Go` · MIT
      simple terminal UI for git commands
- [ ] **[abus-aikorea/voice-pro](https://github.com/abus-aikorea/voice-pro)** — 3 j · ⭐ 12k · `Python` · GPL-3.0
      Gradio WebUI for creators and developers, featuring key TTS (Edge-TTS, kokoro) and zero-shot Voice Cloning (E2 & F5-TTS, CosyVoice), with Whisper audio processing…
- [ ] **[marceloprates/prettymaps](https://github.com/marceloprates/prettymaps)** — 2 j · ⭐ 14k · `Python` · AGPL-3.0
      Draw pretty maps from OpenStreetMap data! Built with osmnx +matplotlib + shapely

<details><summary>Passés une seule journée — 2</summary>

- [pcottle/learnGitBranching](https://github.com/pcottle/learnGitBranching) — An interactive git visualization and tutorial. Aspiring students of git can use this app t
- [vladmandic/sdnext](https://github.com/vladmandic/sdnext) — SD.Next: All-in-one WebUI for AI generative image and video creation, captioning and proce

</details>

---

## 🌐 Web & API — 13

*Dossier DevBrain : `Web & API/`*

- [ ] **[MHSanaei/3x-ui](https://github.com/MHSanaei/3x-ui)** — 10 j · ⭐ 46k · `Go` · GPL-3.0
      Xray panel supporting multi-protocol multi-user expire day & traffic & IP limit (Vmess, Vless, Trojan, ShadowSocks, Wireguard, Hysteria, Tunnel, Mixed, HTTP, Tun,…
- [ ] **[XTLS/Xray-core](https://github.com/XTLS/Xray-core)** — 4 j · ⭐ 41k · `Go` · MPL-2.0
      Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.
- [ ] **[leookun/cursor-byok](https://github.com/leookun/cursor-byok)** — 3 j · ⭐ 2 962 · `Rust` · MIT
      cursor-byok is a local implementation of Cursor's backend. https://github.com/leookun/cursor-byok/releases
- [ ] **[fatedier/frp](https://github.com/fatedier/frp)** — 2 j · ⭐ 109k · `Go` · Apache-2.0
      A fast reverse proxy to help you expose a local server behind a NAT or firewall to the internet.
- [ ] **[django/django](https://github.com/django/django)** — 2 j · ⭐ 91k · `Python` · BSD-3-Clause
      The Web framework for perfectionists with deadlines.
- [ ] **[wwebjs/whatsapp-web.js](https://github.com/wwebjs/whatsapp-web.js)** — 2 j · ⭐ 22k · `JavaScript` · Apache-2.0
      A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app
- [ ] **[mubeng/mubeng](https://github.com/mubeng/mubeng)** — 2 j · ⭐ 2 708 · `Go` · Apache-2.0
      An incredibly fast proxy checker & IP rotator with ease.

<details><summary>Passés une seule journée — 6</summary>

- [gin-gonic/gin](https://github.com/gin-gonic/gin) — Gin is a high-performance HTTP web framework written in Go. It provides a Martini-like API
- [expressjs/express](https://github.com/expressjs/express) — Fast, unopinionated, minimalist web framework for node.
- [fastify/fastify](https://github.com/fastify/fastify) — Fast and low overhead web framework, for Node.js
- [NdoleStudio/httpsms](https://github.com/NdoleStudio/httpsms) — Send and receive SMS messages using your Android phone programmatically via a simple HTTP 
- [apirrone/Open_Duck_Mini](https://github.com/apirrone/Open_Duck_Mini) — Making a mini version of the BDX droid. https://discord.gg/UtJZsgfQGe
- [labstack/echo](https://github.com/labstack/echo) — High performance, minimalist Go web framework

</details>

---

## 🔊 Signal & audio — 12

*Dossier DevBrain : `Signal & audio/`*

- [ ] **[bjarneo/cliamp](https://github.com/bjarneo/cliamp)** — 6 j · ⭐ 4 202 · `Go` · MIT
      cliamp - Terminal music player inspired by winamp
- [ ] **[yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)** — 5 j · ⭐ 191k · `Python` · Unlicense
      A feature-rich command-line audio/video downloader
- [ ] **[pdone/lx-music-source](https://github.com/pdone/lx-music-source)** — 3 j · ⭐ 8 843 · `JavaScript` · **licence aucune**
      洛雪音乐源
- [ ] **[music-assistant/server](https://github.com/music-assistant/server)** — 3 j · ⭐ 3 074 · `Python` · Apache-2.0
      Music Assistant is a free, opensource Media library manager that connects to your streaming services and a wide range of connected speakers. The server is the bea…
- [ ] **[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** — 2 j · ⭐ 54k · `Python` · MIT
      Open-Source Frontier Voice AI
- [ ] **[debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)** — 2 j · ⭐ 31k · `Python` · AGPL-3.0
      VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in…

<details><summary>Passés une seule journée — 6</summary>

- [ATH-MaaS/Pixelle-Video](https://github.com/ATH-MaaS/Pixelle-Video) — 🚀 AI 全自动短视频引擎 | AI Fully Automated Short Video Engine
- [Huanshere/VideoLingo](https://github.com/Huanshere/VideoLingo) — Netflix-level subtitle cutting, translation, alignment, and even dubbing - one-click fully
- [anandprtp/Antra](https://github.com/anandprtp/Antra) — A desktop music library builder that turns Spotify, Youtube Music Apple Music, Amazon Musi
- [alexballas/go2tv](https://github.com/alexballas/go2tv) — Cast media files to Smart TVs and Chromecast devices.
- [kyutai-labs/pocket-tts](https://github.com/kyutai-labs/pocket-tts) — A TTS that fits in your CPU (and pocket)
- [sgl-project/sglang-omni](https://github.com/sgl-project/sglang-omni) — SGLang-Omni empowers high-performance serving for TTS, ASR, speech and omni models.

</details>

---

## 🎬 Médias — 12

*Dossier DevBrain : `Médias/`*

- [ ] **[vercel/next.js](https://github.com/vercel/next.js)** — 4 j · ⭐ 142k · `JavaScript` · MIT
      The React Framework
- [ ] **[3b1b/manim](https://github.com/3b1b/manim)** — 4 j · ⭐ 93k · `Python` · MIT
      Animation engine for explanatory math videos
- [ ] **[4ian/GDevelop](https://github.com/4ian/GDevelop)** — 4 j · ⭐ 26k · `JavaScript` · **licence NOASSERTION**
      🎮 Open-source, cross-platform 2D/3D/multiplayer game engine designed for everyone.
- [ ] **[chenyme/grok2api](https://github.com/chenyme/grok2api)** — 4 j · ⭐ 7 669 · `Go` · MIT
      Multi-account API gateway for Grok Build, Grok Web, and Grok Console
- [ ] **[putyy/res-downloader](https://github.com/putyy/res-downloader)** — 3 j · ⭐ 19k · `Go` · Apache-2.0
      视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!
- [ ] **[microsoft/TRELLIS.2](https://github.com/microsoft/TRELLIS.2)** — 3 j · ⭐ 11k · `Python` · MIT
      Native and Compact Structured Latents for 3D Generation
- [ ] **[jellyfin/jellyfin-web](https://github.com/jellyfin/jellyfin-web)** — 2 j · ⭐ 3 848 · `JavaScript` · GPL-2.0
      The Free Software Media System - Official Web Client

<details><summary>Passés une seule journée — 5</summary>

- [greensock/GSAP](https://github.com/greensock/GSAP) — GSAP (GreenSock Animation Platform), a JavaScript animation library for the modern web
- [heroiclabs/nakama](https://github.com/heroiclabs/nakama) — Scalable open-source game backend server: multiplayer, matchmaking, leaderboards, chat, an
- [JannisX11/blockbench](https://github.com/JannisX11/blockbench) — Blockbench - A low poly 3D model editor
- [mrdoob/three.js](https://github.com/mrdoob/three.js) — JavaScript 3D Library.
- [vrgamegirl19/comfyui-vrgamedevgirl](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl) — Custom ComfyUI nodes for film grain, color matching, and video enhancement.

</details>

---

## 🧰 Outils de développement — 37

*Dossier DevBrain : `Outils de développement/`*

- [ ] **[byoungd/up](https://github.com/byoungd/up)** — 12 j · ⭐ 62k · `JavaScript` · **licence NOASSERTION**
      An advanced guide which might benefit you a lot 🎉 . 韩先凯的人生进阶指南 离谱的人生/人生进阶 离谱的英语学习指南/英语学习教程/英语学习/学英语
- [ ] **[SimplifyJobs/Summer2027-Internships](https://github.com/SimplifyJobs/Summer2027-Internships)** — 6 j · ⭐ 47k · `Python` · **licence aucune**
      Summer 2026 software engineering, data science, AI, quant, product management, and hardware internship postings. Updated daily by Simplify and Pitt CSC.
- [ ] **[is-a-dev/register](https://github.com/is-a-dev/register)** — 5 j · ⭐ 11k · `JavaScript` · MIT
      Grab your own sweet-looking '.is-a.dev' subdomain.
- [ ] **[github/gh-stack](https://github.com/github/gh-stack)** — 5 j · ⭐ 1 504 · `Go` · MIT
      GitHub Stacked PRs
- [ ] **[junegunn/fzf](https://github.com/junegunn/fzf)** — 4 j · ⭐ 83k · `Go` · MIT
      🌸 A command-line fuzzy finder
- [ ] **[microsoft/monaco-editor](https://github.com/microsoft/monaco-editor)** — 3 j · ⭐ 46k · `JavaScript` · MIT
      A browser based code editor
- [ ] **[spf13/cobra](https://github.com/spf13/cobra)** — 3 j · ⭐ 44k · `Go` · Apache-2.0
      A Commander for modern Go CLI interactions
- [ ] **[stretchr/testify](https://github.com/stretchr/testify)** — 3 j · ⭐ 26k · `Go` · MIT
      A toolkit with common assertions and mocks that plays nicely with the standard library
- [ ] **[golangci/golangci-lint](https://github.com/golangci/golangci-lint)** — 3 j · ⭐ 19k · `Go` · GPL-3.0
      Fast linters runner for Go
- [ ] **[github/spec-kit](https://github.com/github/spec-kit)** — 2 j · ⭐ 137k · `Python` · MIT
      💫 Toolkit to help you get started with Spec-Driven Development
- [ ] **[docling-project/docling](https://github.com/docling-project/docling)** — 2 j · ⭐ 66k · `Python` · MIT
      Get your documents ready for gen AI
- [ ] **[cli/cli](https://github.com/cli/cli)** — 2 j · ⭐ 46k · `Go` · MIT
      GitHub’s official command line tool
- [ ] **[tulir/whatsmeow](https://github.com/tulir/whatsmeow)** — 2 j · ⭐ 7 323 · `Go` · MPL-2.0
      Go library for the WhatsApp web multidevice API
- [ ] **[masterking32/MasterDnsVPN](https://github.com/masterking32/MasterDnsVPN)** — 2 j · ⭐ 7 023 · `Go` · MIT
      Advanced DNS tunneling VPN for censorship bypass, optimized beyond DNSTT and SlipStream with low-overhead ARQ, resolver load balancing, high packet-loss stability…
- [ ] **[cinar/indicator](https://github.com/cinar/indicator)** — 2 j · ⭐ 1 768 · `Go` · AGPL-3.0
      Indicator Go delivers a rich set of technical analysis indicators, customizable strategies, and a powerful backtesting framework. No dependencies, just pure simpl…

<details><summary>Passés une seule journée — 22</summary>

- [google/zx](https://github.com/google/zx) — A tool for writing better scripts
- [charmbracelet/bubbletea](https://github.com/charmbracelet/bubbletea) — A powerful little TUI framework 🏗
- [eslint/eslint](https://github.com/eslint/eslint) — Find and fix problems in your JavaScript code.
- [andrewyng/aisuite](https://github.com/andrewyng/aisuite) — Simple, unified interface to multiple Generative AI providers
- [cloudflare/cloudflared](https://github.com/cloudflare/cloudflared) — Cloudflare Tunnel client
- [Acode-Foundation/Acode](https://github.com/Acode-Foundation/Acode) — Acode - powerful text/code editor for android
- [ankitpokhrel/jira-cli](https://github.com/ankitpokhrel/jira-cli) — 🔥 Feature-rich interactive Jira command line.
- [Gaurav-Gosain/tuios](https://github.com/Gaurav-Gosain/tuios) — Terminal UI OS (Terminal Multiplexer)
- [kunchenguid/lavish-axi](https://github.com/kunchenguid/lavish-axi) — HTML is the new markdown. Lavish is the new editor for your HTML artifacts.
- [kunchenguid/no-mistakes](https://github.com/kunchenguid/no-mistakes) — git push no-mistakes
- [mvanhorn/printing-press-library](https://github.com/mvanhorn/printing-press-library) — Official library of CLIs generated by the CLI Printing Press. Endorsed, tested, and commun
- [nektos/act](https://github.com/nektos/act) — Run your GitHub Actions locally 🚀
- [oapi-codegen/oapi-codegen](https://github.com/oapi-codegen/oapi-codegen) — Generate Go client and server boilerplate from OpenAPI 3 specifications
- [open-gsd/gsd-core](https://github.com/open-gsd/gsd-core) — Git. Ship. Done - Core
- [qeeqbox/social-analyzer](https://github.com/qeeqbox/social-analyzer) — API, CLI, and Web App for analyzing and finding a person's profile in 1000 social media \ 
- [rhysd/actionlint](https://github.com/rhysd/actionlint) — Static checker for GitHub Actions workflow files
- [spicetify/cli](https://github.com/spicetify/cli) — Command-line tool to customize Spotify client. Supports Windows, macOS, and Linux.
- [team-codebug/babua-dsa-patterns-course](https://github.com/team-codebug/babua-dsa-patterns-course) — 
- [usebruno/bruno](https://github.com/usebruno/bruno) — Opensource IDE For Exploring and Testing API's (lightweight alternative to Postman/Insomni
- [versenilvis/IRIS](https://github.com/versenilvis/IRIS) — A shell auto-completion tool for your terminal
- [wavetermdev/waveterm](https://github.com/wavetermdev/waveterm) — An open-source, AI-integrated, cross-platform terminal for seamless workflows
- [zeromicro/go-zero](https://github.com/zeromicro/go-zero) — A cloud-native Go microservices framework with cli tool for productivity.

</details>

---

## ❓ Non classé — 112

- [ ] **[pbakaus/impeccable](https://github.com/pbakaus/impeccable)** — 7 j · ⭐ 68k · `JavaScript` · Apache-2.0
      The design language that makes your AI harness better at design.
- [ ] **[bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)** — 5 j · ⭐ 53k · `Python` · **licence NOASSERTION**
      Breakthrough Method for Agile Ai Driven Development
- [ ] **[nats-io/nats-server](https://github.com/nats-io/nats-server)** — 5 j · ⭐ 20k · `Go` · Apache-2.0
      High-Performance server for NATS.io, the cloud and edge native messaging system.
- [ ] **[marin-community/marin](https://github.com/marin-community/marin)** — 5 j · ⭐ 3 678 · `Python` · Apache-2.0
      Open-source framework for the research and development of foundation models.
- [ ] **[practical-tutorials/project-based-learning](https://github.com/practical-tutorials/project-based-learning)** — 4 j · ⭐ 283k · `Python` · MIT
      Curated list of project-based tutorials
- [ ] **[syncthing/syncthing](https://github.com/syncthing/syncthing)** — 4 j · ⭐ 88k · `Go` · MPL-2.0
      Open Source Continuous File Synchronization
- [ ] **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** — 4 j · ⭐ 38k · `Python` · MIT
      Kronos: A Foundation Model for the Language of Financial Markets
- [ ] **[google-deepmind/weathernext](https://github.com/google-deepmind/weathernext)** — 4 j · ⭐ 7 670 · `Python` · Apache-2.0
      
- [ ] **[tailscale/tailcat](https://github.com/tailscale/tailcat)** — 4 j · ⭐ 7 315 · `Go` · BSD-3-Clause
      like netcat, but over Tailscale's data plane, without Tailscale's control plane
- [ ] **[gohugoio/hugo](https://github.com/gohugoio/hugo)** — 3 j · ⭐ 89k · `Go` · Apache-2.0
      The world’s fastest framework for building websites.
- [ ] **[lodash/lodash](https://github.com/lodash/lodash)** — 3 j · ⭐ 61k · `JavaScript` · **licence NOASSERTION**
      A modern JavaScript utility library delivering modularity, performance, & extras.
- [ ] **[poteto/hiring-without-whiteboards](https://github.com/poteto/hiring-without-whiteboards)** — 3 j · ⭐ 52k · `JavaScript` · MIT
      ⭐️ Companies that don't have a broken hiring process
- [ ] **[ethereum/go-ethereum](https://github.com/ethereum/go-ethereum)** — 3 j · ⭐ 51k · `Go` · LGPL-3.0
      Go implementation of the Ethereum protocol
- [ ] **[binwiederhier/ntfy](https://github.com/binwiederhier/ntfy)** — 3 j · ⭐ 34k · `Go` · Apache-2.0
      Send push notifications to your phone or desktop using PUT/POST
- [ ] **[OpenListTeam/OpenList](https://github.com/OpenListTeam/OpenList)** — 3 j · ⭐ 24k · `Go` · AGPL-3.0
      A new AList Fork to Anti Trust Crisis
- [ ] **[hmjz100/LinkSwift](https://github.com/hmjz100/LinkSwift)** — 3 j · ⭐ 20k · `JavaScript` · AGPL-3.0
      一个基于 JavaScript 的网盘文件下载地址获取工具。基于【网盘直链下载助手】修改 ，支持 百度网盘 / 阿里云盘 / 中国移动云盘 / 天翼云盘 / 迅雷云盘 / 夸克网盘 / UC网盘 / 123云盘 八大网盘
- [ ] **[CodeWithHarry/Sigma-Web-Dev-Course](https://github.com/CodeWithHarry/Sigma-Web-Dev-Course)** — 3 j · ⭐ 11k · `JavaScript` · **licence aucune**
      Source Code for Sigma Web Development Course
- [ ] **[WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys)** — 3 j · ⭐ 11k · `JavaScript` · MIT
      Socket-based TS/JavaScript API for WhatsApp Web
- [ ] **[sysadminsmedia/homebox](https://github.com/sysadminsmedia/homebox)** — 3 j · ⭐ 7 314 · `Go` · AGPL-3.0
      A continuation of HomeBox the inventory and organization system built for the Home User
- [ ] **[astaxie/TokenHub](https://github.com/astaxie/TokenHub)** — 3 j · ⭐ 1 302 · `Go` · Apache-2.0
      TokenHub gives enterprises a private gateway to unify AI model access and governance, making every request controllable, traceable, and attributable.
- [ ] **[microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)** — 2 j · ⭐ 96k · `JavaScript` · MIT
      24 Lessons, 12 Weeks, Get Started as a Web Developer
- [ ] **[Z4nzu/hackingtool](https://github.com/Z4nzu/hackingtool)** — 2 j · ⭐ 79k · `Python` · MIT
      ALL IN ONE Hacking Tool For Hackers
- [ ] **[FortAwesome/Font-Awesome](https://github.com/FortAwesome/Font-Awesome)** — 2 j · ⭐ 76k · `JavaScript` · **licence NOASSERTION**
      The iconic SVG, font, and CSS toolkit
- [ ] **[webpack/webpack](https://github.com/webpack/webpack)** — 2 j · ⭐ 65k · `JavaScript` · MIT
      A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through…
- [ ] **[bigskysoftware/htmx](https://github.com/bigskysoftware/htmx)** — 2 j · ⭐ 49k · `JavaScript` · **licence NOASSERTION**
      </> htmx - high power tools for HTML
- [ ] **[remoteintech/remote-jobs](https://github.com/remoteintech/remote-jobs)** — 2 j · ⭐ 40k · `JavaScript` · **licence NOASSERTION**
      Source for remoteintech.company — a community-maintained directory of remote-friendly tech companies
- [ ] **[restic/restic](https://github.com/restic/restic)** — 2 j · ⭐ 36k · `Go` · BSD-2-Clause
      Fast, secure, efficient backup program
- [ ] **[sipeed/picoclaw](https://github.com/sipeed/picoclaw)** — 2 j · ⭐ 29k · `Go` · MIT
      Tiny, Fast, and Deployable anywhere — automate the mundane, unleash your creativity
- [ ] **[simple-icons/simple-icons](https://github.com/simple-icons/simple-icons)** — 2 j · ⭐ 25k · `JavaScript` · CC0-1.0
      SVG icons for popular brands
- [ ] **[leaningtech/webvm](https://github.com/leaningtech/webvm)** — 2 j · ⭐ 17k · `JavaScript` · Apache-2.0
      Virtual Machine for the Web
- [ ] **[AlexxIT/go2rtc](https://github.com/AlexxIT/go2rtc)** — 2 j · ⭐ 14k · `Go` · MIT
      Ultimate camera streaming application
- [ ] **[Stremio/stremio-web](https://github.com/Stremio/stremio-web)** — 2 j · ⭐ 13k · `JavaScript` · GPL-2.0
      Stremio - Freedom to Stream
- [ ] **[goldmansachs/gs-quant](https://github.com/goldmansachs/gs-quant)** — 2 j · ⭐ 12k · `Python` · Apache-2.0
      Python toolkit for quantitative finance
- [ ] **[langchain-ai/open_deep_research](https://github.com/langchain-ai/open_deep_research)** — 2 j · ⭐ 12k · `Python` · MIT · **archivé**
      
- [ ] **[higress-group/higress](https://github.com/higress-group/higress)** — 2 j · ⭐ 9 394 · `Go` · Apache-2.0
      🤖 AI Gateway | AI Native API Gateway
- [ ] **[elder-plinius/OBLITERATUS](https://github.com/elder-plinius/OBLITERATUS)** — 2 j · ⭐ 8 310 · `Python` · AGPL-3.0
      OBLITERATE THE CHAINS THAT BIND YOU
- [ ] **[lxc/incus](https://github.com/lxc/incus)** — 2 j · ⭐ 6 189 · `Go` · Apache-2.0
      Powerful system container and virtual machine manager
- [ ] **[fla-org/flash-linear-attention](https://github.com/fla-org/flash-linear-attention)** — 2 j · ⭐ 5 751 · `Python` · MIT
      🚀 Efficient implementations for emerging model architectures
- [ ] **[Comfy-Org/workflow_templates](https://github.com/Comfy-Org/workflow_templates)** — 2 j · ⭐ 910 · `TypeScript` · MIT
      ComfyUI template workflows
- [ ] **[apernet/hysteria](https://github.com/apernet/hysteria)** — 2 j
      Hysteria is a powerful, lightning fast and censorship resistant proxy.
- [ ] **[coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)** — 2 j
      A node.js version management utility for Windows. Ironically written in Go.

<details><summary>Passés une seule journée — 71</summary>

- [home-assistant/core](https://github.com/home-assistant/core) — 🏡 Open source home automation that puts local control and privacy first.
- [iamkun/dayjs](https://github.com/iamkun/dayjs) — ⏰ Day.js 2kB immutable date-time library alternative to Moment.js with the same modern API
- [exo-explore/exo](https://github.com/exo-explore/exo) — Run frontier AI locally.
- [evanw/esbuild](https://github.com/evanw/esbuild) — An extremely fast bundler for the web
- [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill) — 你想蒸馏的下一个员工，何必是同事。蒸馏任何人的思维方式——心智模型、决策启发式、表达DNA。Distill how anyone thinks.
- [XIU2/CloudflareSpeedTest](https://github.com/XIU2/CloudflareSpeedTest) — 🌩「自选优选 IP」测试 Cloudflare CDN 延迟和速度，获取最快 IP ！当然也支持其他 CDN / 多个解析 IP 的网站 ~
- [hashicorp/nomad](https://github.com/hashicorp/nomad) — Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a 
- [coredns/coredns](https://github.com/coredns/coredns) — CoreDNS is a DNS server that chains plugins
- [fishjar/kiss-translator](https://github.com/fishjar/kiss-translator) — A simple, open source bilingual translation extension & Greasemonkey script (一个简约、开源的 双语对照
- [fmhy/edit](https://github.com/fmhy/edit) — Make changes to FMHY
- [AnInsomniacy/motrix-next](https://github.com/AnInsomniacy/motrix-next) — A full-featured download manager — rebuilt from the ground up
- [handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill) — 中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审查答复。
- [funstory-ai/BabelDOC](https://github.com/funstory-ai/BabelDOC) — Yet Another Document Translator
- [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon) — A design system built by IBM
- [frappe/hrms](https://github.com/frappe/hrms) — Open Source HR and Payroll Software
- [gtsteffaniak/filebrowser](https://github.com/gtsteffaniak/filebrowser) — 📂 Web File Browser
- [android/skills](https://github.com/android/skills) — 
- [Emily2040/seedance-2.0](https://github.com/Emily2040/seedance-2.0) — Comprehensive production pipeline for quad-modal AI filmmaking with Seedance 2.0
- [evcc-io/evcc](https://github.com/evcc-io/evcc) — solar charging ☀️🚘
- [happycola233/tchMaterial-parser](https://github.com/happycola233/tchMaterial-parser) — 国家中小学智慧教育平台 电子课本下载工具，帮助您从智慧教育平台中获取电子课本的 PDF 文件网址并进行下载，让您更方便地获取课本内容。
- [ethereum-optimism/optimism](https://github.com/ethereum-optimism/optimism) — Optimism is Ethereum, scaled.
- [NVlabs/GR00T-WholeBodyControl](https://github.com/NVlabs/GR00T-WholeBodyControl) — Welcome to GR00T Whole-Body Control (WBC)! This is a unified platform for developing and d
- [Universal-Commerce-Protocol/ucp](https://github.com/Universal-Commerce-Protocol/ucp) — Specification and documentation for the Universal Commerce Protocol (UCP)
- [IRNova/Nova-Proxy](https://github.com/IRNova/Nova-Proxy) — یک پنل گرافیکی کاربردی برای ارائه اشتراک‌های Worker با پروکسی‌های ، Trojan و Warp به همراه
- [YouROK/TorrServer](https://github.com/YouROK/TorrServer) — Torrent stream server
- [WhatDreamsCost/WhatDreamsCost-ComfyUI](https://github.com/WhatDreamsCost/WhatDreamsCost-ComfyUI) — LTX Director and a variety of other custom ComfyUI nodes and workflows
- [LiberatedPixelCup/Universal-LPC-Spritesheet-Character-Generator](https://github.com/LiberatedPixelCup/Universal-LPC-Spritesheet-Character-Generator) — Character Generator based on Universal-LPC-Spritesheet
- [evolution-foundation/evolution-go](https://github.com/evolution-foundation/evolution-go) — Evolution API / Evolution Go is an open-source WhatsApp integration API
- [BeiDouMS/BeiDou-Server](https://github.com/BeiDouMS/BeiDou-Server) — Global MapleStory Server BeiDou(冒险岛GMS服务端北斗)
- [futrx-com/remote.futrx](https://github.com/futrx-com/remote.futrx) — 
- [babalae/bettergi-scripts-list](https://github.com/babalae/bettergi-scripts-list) — BetterGI 的脚本仓库，内含BetterGI 的JS脚本、路径追踪、战斗策略、七圣召唤策略。
- [envoyproxy/ai-gateway](https://github.com/envoyproxy/ai-gateway) — Manages Unified Access to Generative AI Services built on Envoy Gateway
- [jewbetcha/openflight](https://github.com/jewbetcha/openflight) — 
- [kijai/ComfyUI-KJNodes](https://github.com/kijai/ComfyUI-KJNodes) — Various custom nodes for ComfyUI
- [kovidgoyal/calibre](https://github.com/kovidgoyal/calibre) — The official source code repository for the calibre ebook manager
- [kunchenguid/treehouse](https://github.com/kunchenguid/treehouse) — Manage worktrees without managing worktrees.
- [livekit/livekit](https://github.com/livekit/livekit) — End-to-end realtime stack for connecting humans and AI
- [maillab/cloud-mail](https://github.com/maillab/cloud-mail) — A Cloudflare-based email service | 基于 Cloudflare 的邮箱服务 | Cloudflare Email 邮箱 Mail
- [microsoft/typescript-go](https://github.com/microsoft/typescript-go) — Staging repo for development of native port of TypeScript
- [minio/minio](https://github.com/minio/minio) — MinIO is a high-performance, S3 compatible object store, open sourced under GNU AGPLv3 lic
- [mui/material-ui](https://github.com/mui/material-ui) — Material UI: Comprehensive React component library that implements Google's Material Desig
- [netbirdio/netbird](https://github.com/netbirdio/netbird) — Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and gran
- [nianzhibai/91](https://github.com/nianzhibai/91) — nine one
- [node-red/node-red](https://github.com/node-red/node-red) — Low-code programming for event-driven applications
- [nyxxbit/discord-quest-completer](https://github.com/nyxxbit/discord-quest-completer) — Auto-complete every Discord Quest in seconds. Paste one script, get all rewards. Resilient
- [openbao/openbao](https://github.com/openbao/openbao) — OpenBao is a software solution to manage, store, and distribute sensitive data including s
- [openwrt/luci](https://github.com/openwrt/luci) — LuCI - OpenWrt Configuration Interface
- [palemoky/chinese-poetry-api](https://github.com/palemoky/chinese-poetry-api) — 📜 诗泉：高性能中国古诗词 API 服务
- [pocketbase/pocketbase](https://github.com/pocketbase/pocketbase) — Open Source realtime backend in 1 file
- [podman-container-tools/podman](https://github.com/podman-container-tools/podman) — Podman: A tool for managing OCI containers and pods.
- [polius/FileSync](https://github.com/polius/FileSync) — Send files from one device to many in real-time.
- [python/mypy](https://github.com/python/mypy) — Optional static typing for Python
- [rabbitmq/rabbitmq-server](https://github.com/rabbitmq/rabbitmq-server) — Open source RabbitMQ: core server and tier 1 (built-in) plugins
- [rancher/rancher](https://github.com/rancher/rancher) — Complete container management platform
- [react/create-react-app](https://github.com/react/create-react-app) — Set up a modern web app by running one command.
- [reisxd/TizenTube](https://github.com/reisxd/TizenTube) — A TizenBrew module to remove ads and add support for SponsorBlock for your Tizen TV.
- [rgthree/rgthree-comfy](https://github.com/rgthree/rgthree-comfy) — Making ComfyUI more comfortable!
- [ryanmcdermott/clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript) — Clean Code concepts adapted for JavaScript
- [safing/portmaster](https://github.com/safing/portmaster) — 🏔 Love Freedom - ❌ Block Mass Surveillance
- [soxoj/maigret](https://github.com/soxoj/maigret) — 🕵️‍♂️ Collect a dossier on a person by username from 3000+ sites
- [spesmilo/electrum](https://github.com/spesmilo/electrum) — Electrum Bitcoin Wallet
- [spf13/viper](https://github.com/spf13/viper) — Go configuration with fangs
- [stdlib-js/stdlib](https://github.com/stdlib-js/stdlib) — ✨ The fundamental numerical library for JavaScript and TypeScript. ✨
- [strelov1/freehire](https://github.com/strelov1/freehire) — freehire — the open-source search engine for job seekers
- [v2fly/v2ray-core](https://github.com/v2fly/v2ray-core) — A platform for building proxies to bypass network restrictions.
- [validatorjs/validator.js](https://github.com/validatorjs/validator.js) — String validation
- [woosal1337/blog](https://github.com/woosal1337/blog) — My blog website.
- [xai-org/grok-1](https://github.com/xai-org/grok-1) — Grok open release
- [yashmulgaonkar/FlightScnr_Pi](https://github.com/yashmulgaonkar/FlightScnr_Pi) — Desktop flight and marine radar: a real-time aircraft and marine vessel tracker powered by
- [zarazhangrui/follow-builders](https://github.com/zarazhangrui/follow-builders) — AI builders digest — monitors top AI builders on X and YouTube podcasts, remixes their con
- [zotero/zotero](https://github.com/zotero/zotero) — Zotero is a free, easy-to-use tool to help you collect, organize, annotate, cite, and shar

</details>

---

## 📦 Langages & runtimes — 5

- [ ] **[swiftlang/swift](https://github.com/swiftlang/swift)** — 10 j · ⭐ 70k · `Swift` · Apache-2.0
      The Swift Programming Language
- [ ] **[nodejs/node](https://github.com/nodejs/node)** — 7 j · ⭐ 121k · `JavaScript` · **licence NOASSERTION**
      Node.js JavaScript runtime ✨🐢🚀✨
- [ ] **[golang/go](https://github.com/golang/go)** — 5 j · ⭐ 138k · `Go` · BSD-3-Clause
      The Go programming language
- [ ] **[microsoft/TypeScript](https://github.com/microsoft/TypeScript)** — 4 j · ⭐ 111k · `Go` · Apache-2.0
      TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

<details><summary>Passés une seule journée — 1</summary>

- [python/cpython](https://github.com/python/cpython) — The Python programming language

</details>

---

## 🚫 Hors périmètre — 114

- [ ] **[Alamofire/Alamofire](https://github.com/Alamofire/Alamofire)** — 14 j · ⭐ 42k · `Swift` · MIT
      Elegant HTTP Networking in Swift
- [ ] **[nikitabobko/AeroSpace](https://github.com/nikitabobko/AeroSpace)** — 14 j · ⭐ 23k · `Swift` · MIT
      AeroSpace is an i3-like tiling window manager for macOS
- [ ] **[pointfreeco/swift-composable-architecture](https://github.com/pointfreeco/swift-composable-architecture)** — 13 j · ⭐ 14k · `Swift` · MIT
      A library for building applications in a consistent and understandable way, with composition, testing, and ergonomics in mind.
- [ ] **[Lakr233/vphone-cli](https://github.com/Lakr233/vphone-cli)** — 11 j · ⭐ 13k · `Swift` · MIT
      
- [ ] **[LiveContainer/LiveContainer](https://github.com/LiveContainer/LiveContainer)** — 11 j · ⭐ 12k · `Swift` · AGPL-3.0
      Run iOS apps without actually installing them!
- [ ] **[apple/container](https://github.com/apple/container)** — 10 j · ⭐ 49k · `Swift` · Apache-2.0
      A tool for creating and running Linux containers using lightweight virtual machines on a Mac. It is written in Swift, and optimized for Apple silicon.
- [ ] **[vapor/vapor](https://github.com/vapor/vapor)** — 9 j · ⭐ 26k · `Swift` · MIT
      💧 A server-side Swift HTTP web framework.
- [ ] **[onevcat/Kingfisher](https://github.com/onevcat/Kingfisher)** — 8 j · ⭐ 24k · `Swift` · MIT
      A lightweight, pure-Swift library for downloading and caching images from the web.
- [ ] **[TelegramMessenger/Telegram-iOS](https://github.com/TelegramMessenger/Telegram-iOS)** — 8 j · ⭐ 8 970 · `Swift` · **licence aucune**
      Telegram-iOS
- [ ] **[apple/swift-nio](https://github.com/apple/swift-nio)** — 8 j · ⭐ 8 519 · `Swift` · Apache-2.0
      Event-driven network application framework for high performance protocol servers & clients, non-blocking.
- [ ] **[Beingpax/VoiceInk](https://github.com/Beingpax/VoiceInk)** — 8 j · ⭐ 6 429 · `Swift` · **licence NOASSERTION**
      The best open-source alternative to Superwhisper & Wispr Flow. Voice-to-text app for macOS with no subscription
- [ ] **[sozercan/kaset](https://github.com/sozercan/kaset)** — 8 j · ⭐ 2 262 · `Swift` · MIT
      📼 The missing YouTube and YouTube Music macOS app
- [ ] **[iina/iina](https://github.com/iina/iina)** — 7 j · ⭐ 46k · `Swift` · GPL-3.0
      The modern video player for macOS.
- [ ] **[SagerNet/sing-box](https://github.com/SagerNet/sing-box)** — 7 j · ⭐ 38k · `Go` · **licence NOASSERTION**
      The universal proxy platform
- [ ] **[groue/GRDB.swift](https://github.com/groue/GRDB.swift)** — 7 j · ⭐ 8 650 · `Swift` · MIT
      A toolkit for SQLite databases, with a focus on application development
- [ ] **[apple/coreai-models](https://github.com/apple/coreai-models)** — 7 j · ⭐ 2 109 · `Swift` · BSD-3-Clause
      Model export recipes, Python primitives, and Swift runtime utilities for on-device AI
- [ ] **[exelban/stats](https://github.com/exelban/stats)** — 6 j · ⭐ 41k · `Swift` · MIT
      macOS system monitor in your menu bar
- [ ] **[utmapp/UTM](https://github.com/utmapp/UTM)** — 6 j · ⭐ 35k · `Swift` · Apache-2.0
      Virtual machines for iOS and macOS
- [ ] **[jordanbaird/Ice](https://github.com/jordanbaird/Ice)** — 6 j · ⭐ 29k · `Swift` · GPL-3.0
      Powerful menu bar manager for macOS
- [ ] **[alienator88/Pearcleaner](https://github.com/alienator88/Pearcleaner)** — 6 j · ⭐ 14k · `Swift` · **licence NOASSERTION**
      A free, source-available and fair-code licensed mac app cleaner
- [ ] **[TheBoredTeam/boring.notch](https://github.com/TheBoredTeam/boring.notch)** — 6 j · ⭐ 10k · `Swift` · GPL-3.0
      TheBoringNotch: Not so boring notch That Rocks 🎸🎶
- [ ] **[Ranchero-Software/NetNewsWire](https://github.com/Ranchero-Software/NetNewsWire)** — 6 j · ⭐ 10k · `Swift` · MIT
      RSS reader for macOS and iOS.
- [ ] **[BarutSRB/OmniWM](https://github.com/BarutSRB/OmniWM)** — 6 j · ⭐ 2 932 · `Swift` · GPL-2.0
      MacOS Niri and Hyprland inspired tiling window manager that's developer signed and notorized (safe for managed enterprise environments). Aiming for parity and ext…
- [ ] **[minh-ton/reynard-browser](https://github.com/minh-ton/reynard-browser)** — 6 j · ⭐ 1 665 · `Swift` · GPL-3.0
      An experimental Gecko-based web browser for iOS 13+.
- [ ] **[alielsokary/CaskHub](https://github.com/alielsokary/CaskHub)** — 6 j · ⭐ 1 264 · `Swift` · MIT
      Native GUI for Homebrew Casks
- [ ] **[tranvuongquocdat/SideScreen](https://github.com/tranvuongquocdat/SideScreen)** — 6 j · ⭐ 1 008 · `Swift` · MIT
      
- [ ] **[permissionlesstech/bitchat](https://github.com/permissionlesstech/bitchat)** — 5 j · ⭐ 36k · `Swift` · Unlicense
      bluetooth mesh chat, IRC vibes
- [ ] **[airbnb/lottie-ios](https://github.com/airbnb/lottie-ios)** — 5 j · ⭐ 26k · `Swift` · Apache-2.0
      An iOS library to natively render After Effects vector animations
- [ ] **[vorssaint/vorssaint-utils](https://github.com/vorssaint/vorssaint-utils)** — 5 j · ⭐ 19k · `Swift` · GPL-3.0
      Free and open-source macOS menu bar toolkit.
- [ ] **[signalapp/Signal-iOS](https://github.com/signalapp/Signal-iOS)** — 5 j · ⭐ 12k · `Swift` · AGPL-3.0
      A private messenger for iOS.
- [ ] **[darrylmorley/whatcable](https://github.com/darrylmorley/whatcable)** — 5 j · ⭐ 8 727 · `Swift` · **licence NOASSERTION**
      macOS menu bar app that tells you, in plain English, what each USB-C cable plugged into your Mac can actually do
- [ ] **[momenbasel/PureMac](https://github.com/momenbasel/PureMac)** — 5 j · ⭐ 6 499 · `Swift` · MIT
      Free, open-source macOS cleaner. CleanMyMac alternative with zero telemetry. Native SwiftUI, scheduled auto-cleaning, Xcode/Homebrew/system cache cleanup. MIT lic…
- [ ] **[github/CopilotForXcode](https://github.com/github/CopilotForXcode)** — 5 j · ⭐ 6 297 · `Swift` · MIT
      AI coding assistant for Xcode
- [ ] **[peetzweg/opendisplay](https://github.com/peetzweg/opendisplay)** — 5 j · ⭐ 4 319 · `Swift` · GPL-3.0
      Free, open-source Sidecar/Duet alternative — use your iPhone or iPad as a true second monitor for your Mac over USB or WiFi. Low latency H.264, Retina HiDPI, touc…
- [ ] **[jellyfin/Swiftfin](https://github.com/jellyfin/Swiftfin)** — 5 j · ⭐ 4 169 · `Swift` · MPL-2.0
      Native Jellyfin Client for iOS and tvOS
- [ ] **[sw33tLie/macshot](https://github.com/sw33tLie/macshot)** — 5 j · ⭐ 3 450 · `Swift` · GPL-3.0
      Feature-packed native macOS screenshot & recording tool: annotate, auto-redact PII, record GIFs, OCR + translate, scroll capture, beautify, and more. No Electron,…
- [ ] **[zachlatta/freeflow](https://github.com/zachlatta/freeflow)** — 5 j · ⭐ 2 687 · `Swift` · MIT
      Free & fast alternative to Wispr Flow
- [ ] **[whoeevee/EeveeSpotifyReborn](https://github.com/whoeevee/EeveeSpotifyReborn)** — 5 j · ⭐ 2 399 · `Swift` · GPL-3.0 · **archivé**
      A tweak to enhance Spotify experience
- [ ] **[rooootdev/lara](https://github.com/rooootdev/lara)** — 5 j · ⭐ 1 523 · `Swift` · AGPL-3.0
      iOS Toolbox using the DarkSword kexploit. iOS 17.0 - iOS 18.7.1 & iOS 26.0.x, excluding M5 and A19.
- [ ] **[getsentry/sentry-cocoa](https://github.com/getsentry/sentry-cocoa)** — 5 j · ⭐ 1 113 · `Swift` · MIT
      The official Sentry SDK for iOS, tvOS, macOS, watchOS, iPadOS and visionOS.
- [ ] **[abi/screenshot-to-code](https://github.com/abi/screenshot-to-code)** — 4 j · ⭐ 79k · `Python` · MIT
      Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)
- [ ] **[ChartsOrg/Charts](https://github.com/ChartsOrg/Charts)** — 4 j · ⭐ 28k · `Swift` · Apache-2.0
      Beautiful charts for iOS/tvOS/OSX! The Apple side of the crossplatform MPAndroidChart.
- [ ] **[p0deje/Maccy](https://github.com/p0deje/Maccy)** — 4 j · ⭐ 21k · `Swift` · MIT
      Lightweight clipboard manager for macOS
- [ ] **[realm/SwiftLint](https://github.com/realm/SwiftLint)** — 4 j · ⭐ 19k · `Swift` · MIT
      A tool to enforce Swift style and conventions.
- [ ] **[BasedHardware/omi](https://github.com/BasedHardware/omi)** — 4 j · ⭐ 13k · `Python` · MIT
      AI that sees your screen, listens to your conversations and tells you what to do
- [ ] **[Aidoku/Aidoku](https://github.com/Aidoku/Aidoku)** — 4 j · ⭐ 4 560 · `Swift` · GPL-3.0
      Free and open source manga reader for iOS and iPadOS
- [ ] **[pluk-inc/markdown-preview](https://github.com/pluk-inc/markdown-preview)** — 4 j · ⭐ 2 342 · `Swift` · MIT
      A simple Markdown viewer for reading .md files
- [ ] **[lwouis/alt-tab-macos](https://github.com/lwouis/alt-tab-macos)** — 3 j · ⭐ 16k · `Swift` · GPL-3.0
      Windows alt-tab on macOS
- [ ] **[mrkai77/Loop](https://github.com/mrkai77/Loop)** — 3 j · ⭐ 11k · `Swift` · GPL-3.0
      Window management made elegant.
- [ ] **[apple/containerization](https://github.com/apple/containerization)** — 3 j · ⭐ 8 933 · `Swift` · Apache-2.0
      Containerization is a Swift package for running Linux containers on macOS.
- [ ] **[nicklockwood/SwiftFormat](https://github.com/nicklockwood/SwiftFormat)** — 3 j · ⭐ 8 930 · `Swift` · MIT
      A command-line tool and Xcode Extension for formatting Swift code
- [ ] **[yonaskolb/XcodeGen](https://github.com/yonaskolb/XcodeGen)** — 3 j · ⭐ 8 784 · `Swift` · MIT
      A Swift command line tool for generating your Xcode project
- [ ] **[rime/squirrel](https://github.com/rime/squirrel)** — 3 j · ⭐ 6 360 · `Swift` · GPL-3.0
      【鼠鬚管】Rime for macOS
- [ ] **[quoid/userscripts](https://github.com/quoid/userscripts)** — 3 j · ⭐ 4 770 · `Swift` · GPL-3.0
      An open-source userscript manager for Safari
- [ ] **[pointfreeco/swift-snapshot-testing](https://github.com/pointfreeco/swift-snapshot-testing)** — 3 j · ⭐ 4 335 · `Swift` · MIT
      📸 Delightful Swift snapshot testing.
- [ ] **[Starmel/OpenSuperWhisper](https://github.com/Starmel/OpenSuperWhisper)** — 3 j · ⭐ 2 889 · `Swift` · MIT
      macOS dictation app
- [ ] **[ggbond268/MacTools](https://github.com/ggbond268/MacTools)** — 3 j · ⭐ 1 200 · `Swift` · GPL-3.0
      A free and open-source collection of native macOS menu bar tools.
- [ ] **[awaseem/foqos](https://github.com/awaseem/foqos)** — 3 j · ⭐ 817 · `Swift` · MIT
      Foqos allows you to lock apps behind the tap of a NFC tag or scan of a QR code. Free and open source alternative to Brick, Opal, ScreenZen, Unpluq, Scrolly, Blok…
- [ ] **[frankea/Whisky](https://github.com/frankea/Whisky)** — 3 j · ⭐ 730 · `Swift` · GPL-3.0
      Active community fork of the archived whisky-app/whisky — a modern Wine wrapper for macOS built with SwiftUI
- [ ] **[kitknox/rootshell](https://github.com/kitknox/rootshell)** — 3 j · ⭐ 645 · `Swift` · MIT
      rootshell - The terminal, reimagined for Apple platforms
- [ ] **[h3nock/remux](https://github.com/h3nock/remux)** — 3 j · ⭐ 491 · `Swift` · MIT
      A native iOS client for remote tmux workspaces, designed to feel natural on iPhone.
- [ ] **[altstoreio/AltStore](https://github.com/altstoreio/AltStore)** — 2 j · ⭐ 14k · `Swift` · AGPL-3.0
      AltStore is an alternative app store for non-jailbroken iOS devices.
- [ ] **[seemoo-lab/openhaystack](https://github.com/seemoo-lab/openhaystack)** — 2 j · ⭐ 13k · `Swift` · AGPL-3.0
      Build your own 'AirTags' 🏷 today! Framework for tracking personal Bluetooth devices via Apple's massive Find My network.
- [ ] **[mozilla-mobile/firefox-ios](https://github.com/mozilla-mobile/firefox-ios)** — 2 j · ⭐ 13k · `Swift` · MPL-2.0
      Firefox for iOS
- [ ] **[open-meteo/open-meteo](https://github.com/open-meteo/open-meteo)** — 2 j · ⭐ 6 201 · `Swift` · AGPL-3.0
      Free Weather Forecast API for non-commercial use
- [ ] **[claration/Feather](https://github.com/claration/Feather)** — 2 j · ⭐ 4 714 · `Swift` · GPL-3.0
      Free on-device iOS/iPadOS application manager/installer, using certificates part of the Apple Developer Program.
- [ ] **[Ebullioscopic/Atoll](https://github.com/Ebullioscopic/Atoll)** — 2 j · ⭐ 4 613 · `Swift` · GPL-3.0
      Dynamic Island for macOS
- [ ] **[duongductrong/Snapzy](https://github.com/duongductrong/Snapzy)** — 2 j · ⭐ 3 137 · `Swift` · BSD-3-Clause
      An open-source native macOS screenshot and screen recording app. A CleanShot X alternative.
- [ ] **[RevenueCat/purchases-ios](https://github.com/RevenueCat/purchases-ios)** — 2 j · ⭐ 3 071 · `Swift` · MIT
      In-app purchases and subscriptions made easy. Support for iOS, watchOS, tvOS, macOS, and visionOS.
- [ ] **[kitlangton/Hex](https://github.com/kitlangton/Hex)** — 2 j · ⭐ 2 896 · `Swift` · MIT
      VOICE → WORDS
- [ ] **[stripe/stripe-ios](https://github.com/stripe/stripe-ios)** — 2 j · ⭐ 2 569 · `Swift` · MIT
      Stripe iOS SDK
- [ ] **[supertone-inc/supertonic](https://github.com/supertone-inc/supertonic)** — 2 j
      Lightning-Fast, On-Device, Multilingual TTS — running natively via ONNX.

<details><summary>Passés une seule journée — 42</summary>

- [MonitorControl/MonitorControl](https://github.com/MonitorControl/MonitorControl) — 🖥 Control your display's brightness & volume on your Mac as if it was a native Apple Displ
- [ReactiveX/RxSwift](https://github.com/ReactiveX/RxSwift) — Reactive Programming in Swift
- [Caldis/Mos](https://github.com/Caldis/Mos) — 一个用于在 macOS 上平滑你的鼠标滚动效果或单独设置滚动方向的小工具, 让你的滚轮爽如触控板 | A lightweight tool used to smooth scrol
- [SnapKit/SnapKit](https://github.com/SnapKit/SnapKit) — A Swift Autolayout DSL for iOS & OS X
- [dwarvesf/hidden](https://github.com/dwarvesf/hidden) — An ultra-light MacOS utility that helps hide menu bar icons
- [PlayCover/PlayCover](https://github.com/PlayCover/PlayCover) — Community fork of PlayCover
- [WebKit/WebKit](https://github.com/WebKit/WebKit) — Home of the WebKit project, the browser engine used by Safari, Mail, App Store and many ot
- [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) — Local MTProto proxy server for partial bypassing of Telegram loading
- [Finb/Bark](https://github.com/Finb/Bark) — Bark is an iOS App which allows you to push custom notifications to your iPhone
- [facebook/facebook-ios-sdk](https://github.com/facebook/facebook-ios-sdk) — Used to integrate the Facebook Platform with your iOS & tvOS apps.
- [ejbills/DockDoor](https://github.com/ejbills/DockDoor) — Window peeking, alt-tab and other enhancements for macOS
- [NodePassProject/Anywhere](https://github.com/NodePassProject/Anywhere) — The best native proxy client for iOS, iPadOS, macOS, and tvOS.
- [home-assistant/iOS](https://github.com/home-assistant/iOS) — 📱 Home Assistant for Apple platforms
- [fayazara/Screendrop](https://github.com/fayazara/Screendrop) — A beautiful screenshot + screen recording + Loom alternative - all native, self hostable a
- [LoopKit/Loop](https://github.com/LoopKit/Loop) — An automated insulin delivery app for iOS, built on LoopKit
- [gonzalezreal/textual](https://github.com/gonzalezreal/textual) — Render and customize rich attributed text in SwiftUI
- [Meeep1/EeveeSpotifyRevivedPublic](https://github.com/Meeep1/EeveeSpotifyRevivedPublic) — 
- [Tahul/space-rabbit](https://github.com/Tahul/space-rabbit) — Space Rabbit removes animations when switching macOS Spaces. Reclaim hours of your time ev
- [cshariq/Sapphire](https://github.com/cshariq/Sapphire) — The all in one mac app that redefines the notch
- [adidshaft/atria](https://github.com/adidshaft/atria) — Free local WHOOP strap companion: iOS app and BLE toolkit for local-only strap usage.
- [jameslockman/Griffin-PowerMate-Driver](https://github.com/jameslockman/Griffin-PowerMate-Driver) — A modern driver for the Griffin PowerMate
- [jipika/WaifuX](https://github.com/jipika/WaifuX) — macos (mac) Wallhaven · MotionBG · Anime | 壁纸 · 动态壁纸 · 番剧
- [kamillobinski/thock](https://github.com/kamillobinski/thock) — THOCK your mac keyboard
- [kean/Pulse](https://github.com/kean/Pulse) — Network logger for Apple platforms
- [leminlimez/Pocket-Poster](https://github.com/leminlimez/Pocket-Poster) — Custom PosterBoard Wallpapers for iOS 17-26.1
- [lihaoyun6/QuickRecorder](https://github.com/lihaoyun6/QuickRecorder) — A lightweight screen recorder based on ScreenCapture Kit for macOS / 基于 ScreenCapture Kit 
- [linearmouse/linearmouse](https://github.com/linearmouse/linearmouse) — The mouse and trackpad utility for Mac.
- [livekit/client-sdk-swift](https://github.com/livekit/client-sdk-swift) — LiveKit Swift Client SDK. Easily build live audio or video experiences on iOS, macOS, tvOS
- [matthartman/ghost-pepper](https://github.com/matthartman/ghost-pepper) — 100% private on-device voice models for speech-to-text and meeting transcription on macOS
- [milanvarady/Applite](https://github.com/milanvarady/Applite) — User-friendly GUI macOS application for Homebrew Casks
- [modelcontextprotocol/swift-sdk](https://github.com/modelcontextprotocol/swift-sdk) — The official Swift SDK for Model Context Protocol servers and clients.
- [moona3k/macparakeet](https://github.com/moona3k/macparakeet) — Fast, private, local-first voice app for Apple Silicon Macs — dictation, file/media transc
- [productdevbook/port-killer](https://github.com/productdevbook/port-killer) — A powerful cross-platform port management tool for developers. Monitor ports, manage Kuber
- [runjuu/InputSourcePro](https://github.com/runjuu/InputSourcePro) — Switch and track your input sources with ease ✨
- [rxhanson/Rectangle](https://github.com/rxhanson/Rectangle) — Move and resize windows on macOS with keyboard shortcuts and snap areas
- [swellweb/targetBridge](https://github.com/swellweb/targetBridge) — Use your Intel iMac as an external display for Apple Silicon Macs — free, open source, via
- [swiftlang/swift-package-manager](https://github.com/swiftlang/swift-package-manager) — The Package Manager for the Swift Programming Language
- [swiftlang/swift-subprocess](https://github.com/swiftlang/swift-subprocess) — Subprocess is a cross-platform package for spawning processes in Swift.
- [swiftlang/swift-syntax](https://github.com/swiftlang/swift-syntax) — A set of Swift libraries for parsing, inspecting, generating, and transforming Swift sourc
- [tangyoha/telegram_media_downloader](https://github.com/tangyoha/telegram_media_downloader) — 基于Dineshkarthik的项目， 电报视频下载，电报资源下载，跨平台，支持web查看下载进度 ，支持bot下发指令下载，支持下载已经加入的私有群但是限制下载的资源， tele
- [verback2308/Opaline](https://github.com/verback2308/Opaline) — A lightweight, privacy-focused YouTube client for iOS built entirely with UIKit. No ads, n
- [yattee/yattee](https://github.com/yattee/yattee) — Privacy oriented video player for iOS, tvOS and macOS

</details>

---

## Ce que ce catalogue ne voit pas

- Les dépôts **Rust, C++, Java, C#…** — l'archive ne couvre que quatre langages.
- Les projets qui ont pris leurs étoiles **sans jamais passer en trending**. Pour ceux-là, c'est `collect.py --jours N` qui les remonte.
- Ce qui trendait **sur un autre créneau horaire** : l'archive fige un instantané par jour.

*Catalogue généré par le skill `veille-github` (mode rétrospectif) le 2026-09-16. Données brutes : `retro-2026-08.json`.*
