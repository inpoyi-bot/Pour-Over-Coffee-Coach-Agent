# Claude migration context: Drip Coffee Maker / Coffee Coach

> Curated on 2026-07-31 from the user's Claude export.
>
> This is a historical rationale layer. It explains why the product took its
> current shape. It is not a runtime specification or a current status file.
> When this document conflicts with `AGENTS.md`, `README.md`, `docs/SPEC.md`,
> `docs/evals.md`, or the current code, the repo wins.

## How to use this file

Read this file when a task asks:

- why a product or architecture decision was made;
- what alternatives were rejected;
- how to describe the project accurately in a portfolio, CV, or interview;
- which v1 limitations and v2 questions were intentionally left open.

Do not load the original Claude conversations for routine implementation.
Consult the source list at the end only when a claim or historical decision
needs to be checked.

## Stable product thesis

Coffee Coach is a stateful convergence coach, not a recipe recommender. A
master recipe is only the seed. The product earns its value by remembering a
bag's prior cups, comparing relative change, choosing one next action, and
knowing when to stop.

The design intentionally optimizes for an explainable vertical slice:

- V60 only;
- grind is the only active adjustment axis;
- technique, water temperature, dose, and ratio stay fixed after seeding;
- cup history is structured bean-level state, not conversational recollection;
- extraction is qualified before taste preference is handled.

## Decision memory

### 1. Relative evidence beats absolute prescription

The user may not have a calibrated grinder, controlled temperature, or a
perfectly repeatable technique. The product therefore trusts relative change
between cups more than universal numbers. Time and visual signals can be read
as supporting sensors, but are not additional adjustment axes.

Rejected alternative: present a universal "perfect recipe" as the result.
That would ignore the execution gap and collapse the product into a static
recipe database.

### 2. Freeze one axis so the gradient remains interpretable

Grind was frozen as the single control axis to protect causal attribution and
make the loop teachable. This was partly a delivery constraint, but also a
product choice: changing several variables at once would make it difficult to
know why a cup improved.

Future multi-axis support is not a matter of simply exposing more controls.
It needs an orchestration rule for when to unlock or hand off to another axis.

### 3. Extraction and preference are ordered layers

The same words can require opposite actions depending on whether extraction
has graduated and what the user actually prefers. E11 and E12 exist to prevent
premature taste-layer routing and keyword-based reactions.

This diagnostic separation is one of the project's strongest transferable
AI-PM stories: ambiguous language is translated into conditional product
behavior, with qualification gates before downstream trust.

### 4. Structured state is the product contract

The append-only cup trajectory is a source of truth. User-facing language and
structured writes must agree. Contradictory records are rejected at the write
boundary rather than being left to prompt wording alone.

This is why invariants, seed linting, deterministic metrics, and evidence
files matter: the project treats memory corruption and false-green evaluation
as product failures, not merely engineering defects.

### 5. Evals were used to refine the product definition

The eval suite was not created only after implementation. Failure modes,
twin cases, live-run observations, and rollback decisions helped define the
correct behavior. Load-bearing gates are the behaviors whose failure breaks
the product thesis, such as:

- treating unreliable hardware as a normal grind signal;
- saying "stop" while persisting another adjustment;
- admitting a cup to the taste layer before extraction graduation;
- mistaking relative improvement for absolute completion.

Not every historical rubric is a current pass claim. Current evidence status
must always be checked in `docs/evals.md`.

### 6. The ending is a set of honest exits

The ending should not be one celebration template with a fallback to the last
cup. It routes on `terminate_reason`.

For `satisfied`, the primary outcome is capability made visible through the
real trajectory: recognizing the signal, choosing direction, and knowing when
to stop. A relative grind coordinate is a secondary, practical takeaway.

Other terminate reasons need their own truthful conclusions. A hardware limit,
preference mismatch, ambiguous plateau, or currently unsupported taste goal
must not be rendered as successful convergence.

### 7. Product-like presentation was chosen without inflating deployment claims

The user explored a frontend and limited live-demo path because a tangible
product is easier for portfolio readers to understand than an agent transcript
alone. This historical exploration does not change the current deployment
claim: the committed project is locally deployable and has no hosted URL.

Do not convert this into claims of 24/7 hosting, production operations, real
user adoption, or a fully automated eval suite.

### 8. Scope discipline and claim integrity are part of the work

The project repeatedly chose to freeze, roll back, or document a limitation
instead of making an unsupported green claim. Failed histories and rejected
alternatives may be useful build traces, but portfolio language must point to
the latest verified evidence.

## Current v2 questions preserved from the history

These are directions to re-evaluate against the current repo, not committed
roadmap items:

- reduce the vocabulary gap for beginners who cannot describe sensory results
  like an eval case;
- improve the timing and structure of evidence collection;
- decide how probes should be answered without forcing free-text expertise;
- revisit multi-axis orchestration only after defining qualification and
  attribution rules;
- test the feedback-compliance assumption with real users;
- design a fuller response to contradictory multi-symptom reports;
- reconsider taste-layer boundaries if brew variables are later unlocked.

## Portfolio and interview framing

The defensible positioning is:

- a stateful, eval-driven AI product with a clear convergence contract;
- service-design skill translated into diagnosis, journey continuity, and
  ambiguous-user-language handling;
- product judgment demonstrated through scope, rollback, guardrail placement,
  evidence discipline, and explicit limits.

Avoid:

- describing implementation assistance as fully independent coding;
- saying the product was broadly launched or validated with external users;
- implying every E1-E13 case is automated or passing;
- calling the MCP server part of the ADK runtime path;
- replacing specific evidence with generic "v1 to v2 iteration" language.

## Curated Claude sources

Source identifiers refer to an external restored quick-read archive that is not
stored in this repository. They are retained as provenance labels; a reader
without access to that archive must treat them as unavailable and verify all
current claims against the canonical repository evidence named above.

- `1d0e937b` — Drip Coffee Maker 项目进度规划
- `09ce75ad` — 滴漏咖啡机项目交接指南
- `87cddcd1` — 项目失败跑测的重新评估与方案
- `c816f1c3` — Agent 产品设计回顾与优化
- `fe58b53c` — 咖啡产品 v1 优化方案分析
- `b5d91eee` — AI 产品评估框架构建与复用
- `18f52ce9` — 体验设计师与 AI 协作开发前端界面
- `79e0c224` — 契约文件防止跨 session 漂移
- `93bac88f` — 项目案例研究的架构设计与叙事策略
- `ebfb7aa5` — 服务设计背景下的 AI PM 项目经历描述
- `e2fd4c5e` — 冲煮方案的缺失结尾
- `95c93b77` — 改进项目 repo description 的建议
- `7bb4f979` — 项目逆向接管与重启（完整会话）
- `01f719d9` — 素材采集 checklist 与规格要求
