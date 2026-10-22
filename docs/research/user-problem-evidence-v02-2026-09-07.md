# 用户问题与替代行为证据 v02：25 条经历、用户原声与讨论

> 工作包 B｜研究与检索日期：2026-09-07，Asia/Singapore｜状态：扩展完成，待审阅。
> 用户本轮授权：“继续扩至 20–30 条，要求保留用户原声和相关讨论”。本版共 **25 条**，保留 v01 的 E01–E05，新增 E06–E25；[v01](user-problem-evidence-v01-2026-09-07.md) 原文件保留。
> 依据：[handoff](../handoffs/HANDOFF-user-problem-evidence-2026-09-07.md)、[竞争研究 v04](competitive-analysis-v04-2026-09-06.md)。这是公开自述的目的性样本，不是访谈、用户试验或市场代表性调查。

## 1. 本版最值得审阅的变化

**用户确实会反复尝试，但“给出下一步”尚不能直接等同于价值。** 新样本补上了建议后实际回报结果的经历：E06 改了多个变量后苦味减轻，E11 清理重装磨豆机并改变注水后改善，E14 自述照 ChatGPT 建议改水后变甜。它们支持“有人会执行外部建议”，却没有隔离因果，也没有验证本项目的研磨单轴循环。

**已有替代办法比“看配方或不做事”更丰富。** 用户会复用自己的旧记录（E16）、用 App 复制上一杯（E15）、回到固定做法（E03）、换纸或处理器材（E10/E11）、把不喜欢的豆转作冷萃（E22）。另一些用户享受换方法本身（E05/E19/E23）。这些都应与持续优化的需求一起保留。

**反馈负担不能只看输入步骤。** E02 不确定味觉判断；E21 承认记录有帮助，仍暂停；E24 因一个字段不能帮助下一杯而停止测量。正面对照 E04/E15/E16/E18 则说明：记录能服务回看、重复输入和数据汇总时，有人愿意继续。尚无本产品的自然续用或真实付费证据。

阅读建议：先看 §3 总表，再对照 **E02/E15、E06/E11、E14、E21/E24** 的原声与讨论，最后看 §5 的五个候选主题。不要将表内数量换算成需求发生率。

## 2. 文件核对、研究范围和编码

### 2.1 当前项目依据

本轮复核 handoff 与已有 v01，沿用已读取的 AGENTS、README、SPEC §3、evals 和竞争研究 v01–v04。以下文件在当前 Local 目录存在，SHA-256 前 12 位与首轮记录一致；未发现研究范围冲突。当前仍是 V60、冻结手法与其他参数、只调研磨的跨杯收敛原型，处于 feature freeze；本报告不改变产品定义。

| 文件 | 本轮核对 SHA-256 前缀 | 用途 |
| --- | --- | --- |
| [AGENTS](../../AGENTS.md) | `7e123ce67d51` | 项目约束 |
| [README](../../README.md) | `2207cda40420` | 当前能力 |
| [SPEC](../SPEC.md) | `5066d3320f6f` | §3 收敛机制 |
| [evals](../evals.md) | `029a59131585` | 验证边界 |
| [竞争研究 v01](competitive-analysis-v01-2026-09-06.md) | `6a324d70ff68` | 市场与来源入口 |
| [竞争研究 v02](competitive-analysis-v02-2026-09-06.md) | `cad2a1c73451` | 功能与替代方案 |
| [竞争研究 v03](competitive-analysis-v03-2026-09-06.md) | `a53ba7c5f681` | 场景编号 |
| [竞争研究 v04](competitive-analysis-v04-2026-09-06.md) | `861d7da10855` | 工作包 B、H1–H4 |
| [handoff](../handoffs/HANDOFF-user-problem-evidence-2026-09-07.md) | `dc1d9a88c96b` | 证据和交付规范 |
| [用户证据 v01](user-problem-evidence-v01-2026-09-07.md) | `6f8d575b667f` | E01–E05 原始校准版 |

### 2.2 单位、访问程度与引文

- **计数单位：一位公开作者的一段连续使用经历。** 同作者后续、编辑、转载、商店折叠与展开重复内容合并。不同作者同帖经历可各成一条，但另报同帖聚类；不能当成跨来源独立重复验证。
- 所有 25 条都读到本卡采用的主帖或评论完整文字，且包含实际使用/停止行为；结果没有解决也可入选。讨论仅保留本轮实际读到的相关回复，**未穷尽全部楼层、图片、视频或被折叠回复**。只读摘要的线索不计数。
- 每卡的“原声”为逐字短摘录，保留原文措辞；英文后的中文是本报告翻译。讨论中的逐字引用也用引用块，其他讨论明确是中文释义。非 Reddit 页面只作很短引用，并补充释义；这是一份证据摘录稿，不是全帖转存。
- 评论定位使用页面 URL、作者、原声开头；Mobile01 另给楼层。商店未取得稳定的单条评论 URL，使用评论页与作者/日期定位。可读性和未来链接稳定性不等于永久存档。
- 检索日期统一为 **2026-09-07**。Reddit 绝对日期主要取搜索返回的带日期正文；打开页的缓存相对时间不换算为今天。只确认线程日期的评论会明确标记。发布日期与回顾行为的发生日期分开。
- 优先窗口为 **2025-09-07 至 2026-09-07**；E18（2024）、E20（2025-05）、E21（2023）是有理由的旧例外；E17 年份未知，不纳入近一年证据。其他部分评论仅确认所在近期线程日期，不能伪造精确评论日。
- “事实”均为 `FACT-SELF-REPORT`：确认公开页面如此叙述，不代表本人身份、味觉效果或因果关系已独立验证。所有产品含义是 `AI_INFERENCE`。

质量共同底线 **Q0**：均为公开自述，未独立核实账号背后的身份、商业关联和真实效果。所选内容未见明确开发者自荐或返利披露；这不构成无利益关联证明。各卡再写特有偏差；开发者回复仅作讨论背景，不另计消费者。

### 2.3 代码与假设

沿用 v01：任务 `START` 起点、`EXECUTE` 执行、`EXPRESS` 表达味道、`DECIDE` 下一步、`RECALL` 回看复用、`EXPLORE` 有意探索。行为 `DONE` 已做、`CONTINUE` 持续、`STOPPED` 停某项行为、`INTEND` 打算、`UNKNOWN` 未知。结果 `UNRESOLVED` 未满意、`PARTIAL` 有改善/得失、`SUFFICIENT` 自述现有办法够用、`UNCLEAR` 未知；停止某项记录不等于停止冲咖啡。

H1＝换豆调校反复发生；H2＝愿意低负担反馈；H3＝下一步建议有增量；H4＝愿意承担成本。每卡给出主要方向，**未单独写明的 H 均为不明确，而非默认支持**。全部样本都没有验证本产品，也没有验证对本产品的付费。

v03：S1 新豆起点；S2 不满意杯与下一步；S3 改善后继续；S4 满意并保存；S5 退出后找回；B1 变差；B2 说不清变化；B3 实际执行不同于建议。下文是任务对应或邻近启发，**不是这些场景已经被执行通过**。无保存行为不算完成 S4，无重开观察不算完成 S5。

## 3. 25 条样本导航

| ID | 经历焦点 | 已有替代行为 / 结果 | 关键对照 |
| --- | --- | --- | --- |
| E01 | 多袋仍不满意 | 换豆、磨豆机、水与社区求助；未解决 | 反复困扰存在 |
| E02 | 详记与感官判断负担 | 停在某阶段，考虑纸本 | 反馈意愿受限 |
| E03 | 多年固定方法 | 固定做法已经够用 | 持续优化反例 |
| E04 | Filtru 长期记录 | 回看笔记帮助再买豆/调比例 | 记录正例 |
| E05 | 十次注水的尝鲜 | 有得失，偶尔玩 | 探索本身有价值 |
| E06 | V60 起步后的真实回报 | 温度、动作、研磨一起改；部分改善 | 有执行，无单因果 |
| E07 | 调参方向令人困惑 | 降低粉水比后自述改善 | 研磨以外因素 |
| E08 | 酸苦涩不确定 | 杯测、换豆/滤杯、校零；部分改善 | 感官与归因 |
| E09 | 新手不知豆不对还是没喝懂 | 求助；后续未知 | 偏好与质量不能混同 |
| E10 | 换滤杯后干苦 | 换纸稍好，拟调粗 | 器材迁移 |
| E11 | V60 出杯变差 | 清理重装磨豆机、改注水后改善 | 人工排查正例 |
| E12 | 家里追不上店里 | 多参数尝试；研究水，尚未问店员 | 求助的社交负担 |
| E13 | 升级器材却少用高级功能 | 实际使用秤，但高级功能少用 | 有功能不等于用 |
| E14 | 已用 ChatGPT 调水 | 照建议改水后自述更甜 | 通用 AI 替代 |
| E15 | Beanconqueror 持续记 | 归档与复制上一杯减录入 | 与 E02 同帖相反经历 |
| E16 | 根据往年记录定起点 | 查类似豆的成功杯；觉得值得 | 自己的历史就是建议源 |
| E17 | 不接受 Filtru 所见价格 | 已会用计时器，计划回退/再找 | 价值门槛，年份未知 |
| E18 | Excel 转 Beanconqueror | 汇总秤流速、裁剪参数 | 旧的记录正例 |
| E19 | 固定参数也会觉得乏味 | 轮换配方/滤杯重新喜欢 | 优化与新鲜感交织 |
| E20 | 500 ml 不如小杯 | 放粗、减扰动；仍求配方 | 较旧的份量迁移例外 |
| E21 | 有帮助的日志也会停 | 用过自制表格，暂不想再记 | 较旧的停止行为 |
| E22 | 不喜欢的豆另作他用 | 冷冻后转冷萃 | 改变任务而非调到满意 |
| E23 | 半年器材与方法探索 | 优先调注水，继续探索 | 单轴范围之外的习惯 |
| E24 | 测成品量没有帮助 | 停止该字段测量 | 字段必须服务决定 |
| E25 | 升级器材未达预期 | 网购不同豆后更满意 | 问题归因与购买替代 |

## 4. 证据卡：原声、讨论和解释

### E01｜多袋未满意，社区排查尚无新豆结果

**溯源与背景。** [原帖及作者回复](https://www.reddit.com/r/pourover/comments/1vonxn7/i_would_love_some_advice/)，Reddit，英语，2026-08-15；作者 `naughtified`。检索 2026-09-07；已读主帖与采用回复全文，未读豆袋图。喝手冲多年、在家冲约三个月；玻璃 V60、K7、普通壶嘴 Fellow 壶；地区未知。

**用户原声：**

> “I’ve gone through 5 bags so far with nothing really satisfying me.”

译：到现在用了五袋，仍没有什么让我真正满意。

**事实与行为。** `START/DECIDE`。换磨豆机、试水、试豆并求助为 DONE；旧豆有部分改善，新买 Hydrangea 尚未冲。整体 UNRESOLVED。

**相关讨论。** `SticksAndSticks` 建议简化动作、少摇晃和调整研磨；别的回复强调水或温度，方向不完全相同。作者解释粗研磨与较强摇晃对先前豆子有效，并说：

> “I’ve been really trying to dial in these other beans over the past three months and I’ve gotten them better but I have a feeling I maxed out what they had to offer.”

译：三个月一直试着调好这些豆，已有改善，但感觉可能到头了。这里是作者对旧豆的判断，不是新建议已奏效。

**代价、质量、解释。** 明示三个月、五袋；重量、浪费量、费用未知。Q0；求助帖偏差、变量混杂；去重键 `1vonxn7+naughtified`，回复合并。H1 支持反复受阻存在；H2 仅一次详细求助；H3/H4 不明确。对应 S1/S2，不能认作新豆 S3。

### E02｜想进步却越来越难记，也不确定自己的味觉

**溯源与背景。** [Brewing Tracker](https://www.reddit.com/r/pourover/comments/1qe39yy/brewing_tracker/)，Reddit，英语，2026-01-16；`thouadequatelypoured`。检索 2026-09-07；主帖与采用回复全文可读，附图未检视。经验年限、滤杯、磨豆机、地区未知。

**用户原声：**

> “I tried to list all of beans I have and write every pouring details but somehow stopped at a point because it got harder to track all of the parameter. Furthermore, I am not confident with my sensory so I worry if my judgement is wrong or right.”

译：试着记豆子和每次注水，后来越来越难跟踪；也担心自己的感官判断不对。

**事实与行为。** `EXPRESS/RECALL`。详记及试 Beanconqueror 为 DONE，详记出现 STOPPED；觉得手机分心，回纸本为 INTEND。UNRESOLVED；未证明永久弃用 App。

**相关讨论。** `2B-Pencil` 的原声：

> “But no, I don't record my brews. I use same ratio and pouring technique for everything.”

作者回复：

> “Yeah that makes more sense to keep the variables simpler.”

译：对方不记每杯、固定比例和手法；作者认可简化，但未报告已实践。相反经历见同帖 E15，不能只摘负面。

**代价、质量、解释。** 参数负担、感官不确定、手机分心均明示；分钟数、费用未知。Q0；愿发帖者偏差；`1qe39yy+thouadequatelypoured` 去重，与 E15 同帖聚类。H2 削弱“有动机就能持续反馈”；H3 未知。S2/B2 相邻；长期递减暂无对应。

### E03｜八年固定方法已经足够，比较豆子才是乐趣

**溯源与背景。** [配方讨论中的使用者评论](https://www.reddit.com/r/pourover/comments/1vm1o98/is_it_just_me_or_do_pourover_recipes_feel_hand/)，Reddit，英语，2026-08-12 线程；`Boring_Material_1891`，评论精确时刻未核。检索 2026-09-07；所选评论、编辑与相关回复全文可读。自述约八年、几乎每天 Chemex 或 V60；磨豆机和地区未知。

**用户原声：**

> “I’ve made every single one with a coarse grind, 3-pour, at 208 degrees. No need to faff about with all of the different BS. Hell, half the fun is comparing different beans using the same brew method!”

译：一直粗研磨、三段注水、208 度；同样方法比较不同豆本身就是乐趣。温度单位在该段未注明，不替作者补写。

**事实与行为。** `EXECUTE/EXPLORE`；固定方法 CONTINUE、SUFFICIENT；编辑补充约 18:1。这是长期使用自述，不代表完全没有其他微调。

**相关讨论。** 原发帖者 `Advanced_Honey_2679` 困惑于名家配方不同；本评论作为反向经历。`jacktriesreddits` 也讲长期稳定做法，`Mysterious-Call-245` 区分日常配方和为了好玩才做的实验；这些旁人经验不再增计。

**代价、质量、解释。** 明示约八年、几乎每天、数百种豆；不是数百次失败，费用未知。Q0；高手回顾、无法代表新手；`1vm1o98+Boring_Material_1891`。H1/H3 反例：换豆不必持续寻求外部建议；H2/H4 未知。S4 的满意停止相邻，未证实保存或 S5。

### E04｜Filtru 的历史笔记确实被用来做决定

**溯源与背景。** [Filtru 美区文字评论页](https://apps.apple.com/us/app/best-brew-guide-filtru-coffee/id1150921819?see-all=reviews)，App Store，英语，2025-09-21；`I.M. Fit`。检索 2026-09-07；所选评论全文及重复展开内容可读。Chemex/AeroPress，称超过 200 次冲煮；磨豆机、经验年限、地区未知，不能由美区商店推断居住地。

**用户原声：**

> “look back on my brew notes”

译：回看我的冲煮笔记。

**事实与行为。** `RECALL/DECIDE`。自述使用引导和记录，回看帮助判断是否再买同一豆及是否改比例；CONTINUE、SUFFICIENT。不是已证明 App 自动提出了调整建议。

**相关讨论。** 本次页面未见针对这条评论的开发者回复或讨论串；不拿别条开发者回应补齐。相反的付费价值反馈单列 E17。评论卡与展开重复只算一次。

**代价、质量、解释。** 超过 200 次是使用者自述冲煮数，不是付费次数或节省杯数；金额未知。Q0；商店评论选择偏差、方法非纯 V60；去重键 `Filtru+I.M. Fit+2025-09-21`。H2 有持续记录线索；H3 削弱“必须新增教练才有用”；H4 未知。S4/S5 任务相邻，未观察重开流程。

### E05｜十次注水值得偶尔玩，但有风味和操作取舍

**溯源与背景。** [Mobile01 讨论](https://www.mobile01.com/topicdetail.php?f=640&t=7268138)，繁体中文，`Mr ciprino`，2026-06-22 14:36、#10（文章 93279429），并入 06-17 同作者前文。检索 2026-09-07；采用楼层全文可读。自述只用 V60 尝试几次；磨豆机、经验年限和地区未知。

**用户原声：**

> 「偶爾玩一下還不錯」

**事实与行为。** `EXECUTE/EXPLORE`。试十次注水为 DONE；觉得甜，但复杂度有取舍，间隔短、后段积水。PARTIAL，保留为偶尔玩的方法；考虑更快滤杯只是 INTEND。

**相关讨论。** #9 使用另一器材组合的参与者偏好其甜感与口感；#8 发帖者表示愿尝试不太复杂的新方法。不同器材和目标下反馈不同，不能用这些回复消除本人的操作负担；同作者较早“尝试比较”的表态合并为一个事件。

**代价、质量、解释。** 明示几次尝试、约 15 秒间隔/每段 30 ml；未报告总耗时、浪费和金额。Q0；爱好者配方帖、新鲜感偏差；按线程+作者去重。H1/H3 是把所有换方法都当“未解决痛点”的反例；H2/H4 未知。与 S3/S4 的目标变化相邻；主动探索暂无完整对应。

### E06｜照社区建议试了下一杯，但同时改了不止一项

**溯源与背景。** [V60 起步及后续](https://www.reddit.com/r/pourover/comments/1viewda/okay_where_do_i_start_recipe_recs/)，Reddit，英语；2026-08-07 起帖，08-08/09 的冲煮与回复；`DaKineNayNay`。检索 2026-09-07；主帖、采用的回报与相关建议全文可读。原先做意式，新买金属 V60 02；磨豆机及地区未知。

**用户原声：**

> “I upped to 90.5c, which I know would unlikely have a noticeable difference, BUT, I tried my same recipe above and went way more gently, and ground two clicks finer. Final time was about the same (3:15 mins), but the bitterness wasn’t as prevalent.”

译：改到 90.5°C、注水更轻、磨细两格；时间差不多，但苦味减少。

**事实与行为。** `START/EXECUTE/DECIDE`。首次觉得风味弱且偏苦涩，后续实际调整并回报，DONE、PARTIAL；之后拟再改粗和升温，不算完成。

**相关讨论。** `Zer0toniN` 建议温和注水及尝试更高温度。作者后续还区分令人愉快的橙皮式苦味：

> “This time the bitterness tasted more like the fragrant bitterness you get from an orange rind, which was pleasant for the most part.”

译：这次更像橙皮的芳香苦味，大体愉快。不能把所有“苦”编码成同一缺陷。

**代价、质量、解释。** 首杯 15 g/250 g、约 3:17，后杯约 3:15；称滤杯 $25，币种未注明；弃杯量未知。Q0；学习热情与选择性回报偏差；`1viewda+DaKineNayNay`，多次回复合并。H2 有短期反馈行为，H3 有人工建议后改善线索但多变量混杂，H1 复发频率/H4 软件支付未知。S1/S2/S3；B3 仅启发实际值核对，没有已承诺单轴却违约的证据。

### E07｜涩感不随直觉变化，最后尝试更浓的比例

**溯源与背景。** [Astringency and opposite world](https://www.reddit.com/r/pourover/comments/1u8orw3/astringency_and_opposite_world/)，Reddit，英语，2026-06-17；`Other_Wait_4739`。检索 2026-09-07；主帖和采用回复全文可读。意式较熟、手冲较新；Kalita Wave 2.0 Mino、Kinu M47 Rebel 手冲刀盘；地区未知。

**用户原声：**

> “Finally, I went down to 1:13.5 for ratio, and that seemed to address the astringency issue and getting things to behave more intuitively.”

译：最后降至 1:13.5，似乎解决了涩感，使变化更符合直觉。

**事实与行为。** `EXPRESS/DECIDE`。试温度、研磨、配方与扰动后仍困惑；1:16 改至 1:13.5 后自述改善，DONE、PARTIAL；没有长期复现结果。

**相关讨论。** `Allaakmar` 提醒自己的涩感经历不总伴随苦，讲温和注水经验；`Rikki_Bigg` 提供 Coffee Compass；`fender_blues` 提醒烘焙标法差异。均为参与者解释/建议，本研究不将其当萃取诊断事实，也没看到作者逐一采纳。

**代价、质量、解释。** 温度尝试约 100–86°C、研磨范围自报；没有尝试杯数或浪费金额。Q0；邻近滤杯、多个因素并行；`1u8orw3+Other_Wait_4739`。H1 有困难但反复换袋未知；H3 对仅研磨可解决的适用性构成边界，H2/H4 未明确。S2/B2 相邻；不应据此自动解冻比例。

### E08｜“酸还是苦”都拿不准，杯测后仍在排查

**溯源与背景。** [Bitter sour tasting coffee](https://www.reddit.com/r/pourover/comments/1v8bn7c/bitter_sour_tasting_coffee/)，Reddit，英语，2026-07-27 起帖；后续评论精确日未逐条确认；`FabulousAccident_`。检索 2026-09-07；主帖和采用后续全文可读。Chemex 8 杯、K6、控温细口壶，自称硬水地区；国家未知，经验年限未知。

**用户原声：**

> “All beans, though, produced the same off-taste. I would say bitter, but I am also questioning my accuracy of that as well. So I am just calling it an ‘off’ taste.”

译：不同豆都有相同的不对劲；想叫它苦，又不确定判断是否准确。引文中的引号样式按排版统一。

**事实与行为。** `EXPRESS/DECIDE`。试广泛研磨、温度、比例；后来杯测喜欢本地豆，又订豆、买 V60、检查 K6 零位。后续报告涩感减轻，仍不确定；DONE、PARTIAL。

**相关讨论。** `MisSigsFan` 指向豆；另有人指向水。`IntelligentCitron772` 追问余味、建议杯测。杯测反馈后，`Far_Isopod6450` 建议少同时改变量、降低摇晃影响。作者描述从烧焦转向干涩，并未建立稳定感官标签。讨论展示了诊断分歧，不是所有建议都正确或都已执行。

**代价、质量、解释。** 60–140 clicks、190–205°F、约 1:15–1:17 是尝试范围，不是受控实验；新增购买金额和浪费量未知。Q0；求助选择偏差、换方法/豆/水混杂；`1v8bn7c+FabulousAccident_`，连续更新只算一次。H1 支持跨豆困扰自述；H2 表达负担；H3 不明确。S2/B2，S3 仅部分改善。

### E09｜刚学手冲，分不清是偏好还是没有“喝懂”

**溯源与背景。** [PTT 原帖](https://www.ptt.cc/bbs/Coffee/M.1776938314.A.BDD.html)，繁体中文，2026-04-23 17:58；`jaysd847`。检索 2026-09-07；主帖与采用推文全文可读。V60、Hario 入门手磨，最近学习手冲、偏好平衡；地区未知，不用页面 IP 推断或保存地区。

**用户原声：**

> 「是我還沒喝懂還是豆子選錯？」

**事实与行为。** `START/EXPRESS`。试几款豆后觉得偏酸或苦，已求助；并没有确认自己冲错。DONE、UNRESOLVED，后续选择未知。

**相关讨论。** 有回复劝不要强迫自己喜欢某风味，有人建议中焙，也有人建议换磨豆机；`arlenyao` 建议先在店里喝到喜欢的豆，再买回并问店员。未见作者采纳和结果。另一回文引用本帖，不是新经历。

**代价、质量、解释。** 预算 500–800/磅为计划，原文未明示币种，非实际支出；耗豆未知。Q0；新手求助与中文论坛选择偏差；`M.1776938314.A.BDD+jaysd847`，转载引用排除。H1 复发频率不明；H2 有表达不确定；H3 应先辨别偏好而非推断技术缺陷；H4 未知。S1/S2/B2 相邻。

### E10｜换成 Origami 形滤杯后变干苦，换纸稍有帮助

**溯源与背景。** [Origami vs Switch](https://www.reddit.com/r/pourover/comments/1naxzfb/origami_vs_switch/)，Reddit，英语，2025-09-07 线程；`jketecurious`，后续评论精确日未核。检索 2026-09-07；主帖及采用回复全文可读，未穷尽后续。Switch、K6，添购 Origami 形滤杯和 Kalita 155 纸；作者后称 Amazon $7 购入，**品牌真伪未核，不能直接归因正品性能**。地区、年限未知。

**用户原声：**

> “I tried with a V60 paper last night and I did like it a little better”

译：昨晚换 V60 纸试了，确实更喜欢一点。

**事实与行为。** `EXECUTE/DECIDE`。原来 Switch 常全开使用；新组合流得更慢、干苦。换纸 DONE、PARTIAL；调粗仍为打算。

**相关讨论。** `HarryxClam` 讲自己用 V60 纸；`BathroomEyes` 提出注水扰动方向；`tall_bloke_17` 讲堵塞与辅助注水经验。作者报告的是换纸稍好，未证明后续研磨调整成功。

**代价、质量、解释。** 自报 20 g/300 ml、K6 90 clicks，时间较原先长 45–60 秒；$7 币种未说明，浪费未知。Q0；器材真伪/纸变化混杂；`1naxzfb+jketecurious`。H1 非明确换豆复发；H3 存在简单非软件替代，H2/H4 未知。S2/B1 相邻，但变差由换器材触发，不是按建议后变差。

### E11｜社区排查后重装磨豆机，咖啡恢复果味

**溯源与背景。** [V60 recipe review](https://www.reddit.com/r/pourover/comments/1rn7zaj/my_v60_recipe_review_and_help_to_improve/)，Reddit，英语，2026-03-07 线程；`Empty_Ad5360`。检索 2026-09-07；主帖、作者后续与相关回复全文可读；附冲煮视频未观看。V60、Sette 270；地区、经验年限未知。

**用户原声：**

> “In addition to pouring in the center and then going out, I recleaned and reassembled my grinder again, and recipe improved a lot! Looks like the last time I didn’t clean it 100% and caused misalignment with the settings!”

译：除了改变注水，还重新清理和组装磨豆机，改善很多；作者怀疑此前装配影响刻度。

**事实与行为。** `EXECUTE/DECIDE`。此前新豆苦、另一豆薄；已尝试放粗，接近机器较粗端。讨论后清理重装、改注水，DONE、PARTIAL；作者称现在很有果味。并无独立检验证实失准原因。

**相关讨论。** `facefabrique` 建议中心注水与较粗研磨，并讨论可调范围；有人建议另买手磨。作者强调这台机过去可以冲好，并补充：

> “Same coffee. There was something off with the grinder. Just reassembled it today and it is much better!”

译：还是同一豆，今天重装后好得多。没有证据显示后来买了建议中的手磨。

**代价、质量、解释。** 明示清理/重装投入，但分钟数、花费和耗豆未知。Q0；成功回报选择偏差，同时改动作；`1rn7zaj+Empty_Ad5360`。H3 是人工排查已有价值的线索，也提醒研磨刻度不等于实际稳定；H1 长期复发/H2 留存/H4 未知。S2/S3；器材维护暂无原场景直接覆盖。

### E12｜能冲好喝，但追不上店里那一杯；问人也有门槛

**溯源与背景。** [Why can't I reach a great cup](https://www.reddit.com/r/pourover/comments/1scl92x/why_cant_i_reach_a_great_cup_of_coffee/)，Reddit，英语，2026-04-04 线程；`tuufejs`。检索 2026-09-07；主帖与采用回复全文可读；未从图片推断器材。家中 V60/Sage，店里 Moccamaster，Brita 过滤硬水；磨豆机、地区、经验年限未知。

**用户原声：**

> “I can make good tasting coffee, but not that great.”

译：我能做出好喝的咖啡，但没有那么好。

**事实与行为。** `DECIDE`。买店里的豆，试研磨、温度、闷蒸仍未复制体验；PARTIAL，不是所有杯都难喝。

**相关讨论。** 多人指向水；`Rpeasj` 建议询问店员，也提醒器材/经验差异。作者先说会问，随后又说：

> “Tbh I already feel bit insecure about asking about the ratio. But I’m researching water now”

译：其实连问比例都已有点不自在，现在正在研究水。问店员属于 INTEND，研究水是自述当前行为；不能写成已获烘焙商指导。

**代价、质量、解释。** 参数尝试与求助投入明确，具体时间/豆量/金额未知。Q0；理想参考杯、器材和环境混杂；`1scl92x+tuufejs`。H1 存在差距但换袋复发未知；H3 人工支持可用却有社交负担线索，H4 未知。S2/B2 相邻；取得外部参考暂无对应。

### E13｜器材越买越多，秤的高级功能却少用

**溯源与背景。** [PTT 器材心得及推文](https://www.ptt.cc/bbs/Coffee/M.1778156781.A.93F.html)，繁体中文，2026-05-07；`ColdUser`。检索 2026-09-07；主帖与采用推文全文可读。约一年，手冲壶换到 EKG，自述用 PT-V60 秤；具体滤杯、磨豆机和地区未知，不把文中全部推荐器材都当成持有。

**用户原声：**

> 「但我其實沒什麼在用」

**事实与行为。** `EXECUTE/RECALL`。有购置和升级经历，谈到秤的高级比例/流速/App 记录等功能后承认自己少用；不能解释为秤本体没用。CONTINUE 使用器材，高级功能结果 UNCLEAR。

**相关讨论。** `zxcj04` 讨论 V60 容错，`SURREALTMR` 提到 Switch 的简化；作者回到价格考量，另有回复比较不同整套器材的支出。属于购买建议讨论，没有新增软件使用结果。

**代价、质量、解释。** 确有升级经历，实际总花费未知。Q0，且主帖有品牌推荐与链接，关联风险较一般求助帖更高，未见明确返利披露；`M.1778156781.A.93F+ColdUser`。H2 反对以功能拥有推断反馈行为；H4 仅硬件价格敏感线索。S2 的执行负担相邻；硬件购买/少用暂无直接对应。

### E14｜已经拿 ChatGPT 当冲煮顾问，并报告改水后更甜

**溯源与背景。** [每周提问帖内 AI 使用讨论](https://www.reddit.com/r/pourover/comments/1rptv8l/ask_a_stupid_question_about_coffee_week_of_march/)，Reddit，英语，线程 2026-03-10；`Nether_void01`，所选评论确切日期未知。检索 2026-09-07；该评论和 `geggsy` 回复全文可读，未通读全周主题。设备、经验年限、地区未知。

**用户原声：**

> “I have been using a water concentration of 100ppm and chatgpt adviced that I use 75 ppm, I followed it and I was able to extract the sweetness of the coffee.”

译：原先用 100 ppm 的水，ChatGPT 建议 75 ppm，照做后感觉萃出了甜感。拼写沿用原文。

**事实与行为。** `DECIDE`。主动用 AI 问豆/水、执行调整，DONE、PARTIAL。没有提示词全文、模型版本、实际回答或重复对照，不能核实其化学解释。

**相关讨论。** `geggsy` 肯定作者喝到喜欢的结果，但提醒矿物构成问题，称自己不用 AI、见过矛盾回答。把支持结果与质疑可靠性的两种声音同时保留；后者不是已证明本次建议错误。

**代价、质量、解释。** 水浓度是作者自述参数，时间、订阅和金额未知。Q0；单次成功自报、通用 AI 选择偏差；`1rptv8l+Nether_void01`。H3：通用 AI 已是实际替代品，而非验证专门 Agent 有增量；H2 只有短期行为，H1/H4 未知。S2/S3 相邻，调水不在 v1 单轴范围。

### E15｜同一日志讨论里，有人用“重复上一杯”持续记

**溯源与背景。** [Brewing Tracker 评论](https://www.reddit.com/r/pourover/comments/1qe39yy/brewing_tracker/)，Reddit，英语，2026-01-16 线程；`azarraga`，评论精确日期未单核。检索 2026-09-07；所选评论与紧邻回复全文可读。设备、经验年限、地区未知。

**用户原声：**

> “I've been using BeanConqueror for all brew tracking and overall it's been really good. I find it helpful to archive beans/brew methods often to declutter and make sure input is easy. I also use the "repeat brew" feature so I don't have to input all the fields every time, I just have to tweak the parameters I'm changing since last brew.”

译：一直用它记冲煮，归档旧项目、复制上一杯，只修改变化项。

**事实与行为。** `RECALL`；CONTINUE、SUFFICIENT。持续时长和具体版本未知。

**相关讨论。** 本人还不确定如何记录多段注水；`introvertedidiot123` 也想逐段记录。这是使用者感知，未核实当前功能缺失。与 E02 的停记经历并列，而不是用任一人代表全部用户。

**代价、质量、解释。** 未报录入秒数、费用。Q0；留存者偏差；`1qe39yy+azarraga`，与 E02 同帖而非独立来源。H2 正面线索；H3 现有记录交互已解决部分负担；H4 未知。S2/S5 任务相邻，无重开观察。

### E16｜新豆不知怎么冲，回查自己喜欢的相似豆

**溯源与背景。** [My coffee year in review](https://www.reddit.com/r/pourover/comments/1ptx47q/my_coffee_year_in_review/)，Reddit，英语，2025-12-23 线程；`PaullyWalla`，评论精确日未核。检索 2026-09-07；主帖文字和采用回复全文可读，未独立审计截图统计。具体滤杯、磨豆机、地区、经验年限未知。

**用户原声：**

> “Whenever I get a bean, if I'm not sure how to brew it, I just go back through my favorite past brews of the same or similar bean. It's invaluable. A little bit of a pain to log everything, but worth it.”

译：遇到不知如何冲的豆，就回看同种或相似豆里喜欢的杯；记录有点烦，但值得。

**事实与行为。** `START/RECALL/DECIDE`；用自己的历史定起点，CONTINUE、SUFFICIENT。并非每杯都完整记录。

**相关讨论。** `prosocialbehavior` 质疑年度统计的解释，作者承认有些豆没有记入；另有人讨论每天换豆的记录负担，作者也有跳过记录的情形。因此可用历史与数据完整是两回事。

**代价、质量、解释。** 明示记录麻烦但值得；未报分钟数/收费；年度图不是经审计消费账。Q0；年度分享与存活者偏差；`1ptx47q+PaullyWalla`。H1 支持偶遇起点困难，不代表持续失败；H2 正面但非全量；H3 自己的旧记录是强替代。S1/S5 任务相邻，未知跨会话操作效果。

### E17｜愿意为便利付费的表态，没有跨过所见价格门槛

**溯源与背景。** [Filtru 评论页](https://apps.apple.com/us/app/best-brew-guide-filtru-coffee/id1150921819?see-all=reviews)，App Store，英语；`“TheProfessor”`，页面只显示 **Jul 5，年份未知**。检索 2026-09-07；评论全文和重复展示可读。自述已能用 iPhone 计时器手冲；滤杯、磨豆机、年限、地区未知。

**用户原声：**

> “the prices are far too high”

译：价格实在太高。

**事实与行为。** `EXECUTE`。想要逐步提醒，浏览/尝试 App 后不认可所见价格；已有计时器做法 DONE，继续找或回计时器为 INTEND，最终选择 UNCLEAR。不是已证实卸载。

**相关讨论。** 未见这条的开发者回复；E04 是同页另一人的独立使用自述，并非对本人的反驳或后续。评论的终身付费意向不能视为实际付款，也不能把今天标价塞回未知年份的经历。

**代价、质量、解释。** 没有报当时价格、付费或试用天数。Q0；年份缺失、商店极端反馈偏差；`Filtru+TheProfessor+Jul5`，重复展示合并，与 E04 同商店页聚类。H3 计时器已覆盖基础任务；H4 有价值门槛反例、无支付验证。S1/S2 前的付费入口暂无原场景直接对应。

### E18｜从 Excel 换到能集中秤数据的记录 App（旧例）

**溯源与背景。** [Beanconqueror Google Play 评论](https://play.google.com/store/apps/details?hl=en_US&id=com.beanconqueror.app)，英语，2024-05-14；`Micah Murphy`。检索 2026-09-07；评论与开发者 2024-05-21 回复全文可读。原用 Excel，提到秤流速；秤型号、滤杯、磨豆机、经验和地区未知，不能预设 V60。超出一年窗口，保留为自动汇总数据的历史对照，版本未知。

**用户原声：**

> “I previously used Excel when tracking brews”

译：以前我用 Excel 记录冲煮。

**事实与行为。** `RECALL`。通过视频了解到 App，认为它把所需数据集中、可自选显示参数；由 Excel 转用为 DONE、SUFFICIENT。未提供长期留存结果。

**相关讨论。** 开发者 `Lars Saalbach` 于 05-21 致谢并邀请反馈，没有额外实测证据。其身份为开发者，回复不算第二位消费者或独立效果验证。

**代价、质量、解释。** 未报节省时间、硬件价格或软件付费。Q0；旧版本、视频导流、正面评论偏差；`Beanconqueror+Micah Murphy+2024-05-14`。H2 有工具减少整理负担的历史线索；H3 免费记录已可提供价值；H4 未知。S2/S5 任务相邻；自动采集暂无直接对应，不能把历史评论写成当前实机结论。

### E19｜同豆同参数也会乏味，换方法反而再次喜欢

**溯源与背景。** [No such thing as a perfect recipe](https://www.reddit.com/r/pourover/comments/1naoizb/no_such_thing_as_a_perfect_recipe/)，Reddit，英语，2025-09-07；`ScotchCattle`。检索 2026-09-07；主帖及采用讨论全文可读。尝试过数十配方、现轮换五六个；具体滤杯、磨豆机、年限、地区未知。

**用户原声：**

> “I’ll then switch to a different brewer/recipe with the same bean and be blown away.”

译：同一豆换滤杯或配方后，又觉得很惊艳。

**事实与行为。** `EXPLORE/DECIDE`。自述固定参数一阵后风味变得乏味，轮换恢复兴趣；CONTINUE、PARTIAL。无法区分豆龄、执行变化、感官适应或新鲜感。

**相关讨论。** `Woozie69420` 建议按处理法配器材/注水；`Dajnor` 不认可部分关于注水次数的概括；`least-eager-0` 提出味觉厌倦等解释。作者表示感谢，不等于采纳；不以任何评论替作者作病因诊断。

**代价、质量、解释。** 明示数十配方与五六个轮换；费用、耗豆和时间未知。Q0；探索型爱好者偏差；`1naoizb+ScotchCattle`。H1 只支持体验反复变化，不等于反复换豆失败；H3 固定目标优化未必符合动机。S3/S4 相邻，目标变化暂无直接对应。

### E20｜小杯已经好喝，500 ml 却难复制（旧例）

**溯源与背景。** [500 ml 配方求助](https://www.reddit.com/r/pourover/comments/1kqfcbw/whats_your_best_recipe_for_500_ml_or_more/)，Reddit，英语，2025-05-19；`mnefstead`。检索 2026-09-07；主帖与采用回复全文可读。V60、Switch 03、Chemex、K-Ultra；经验年限、地区未知。窗口外保留：补充份量变化而非换豆触发，不能作近一年频率证据。

**用户原声：**

> “When I brew 500 ml, it's never quite as good - sometimes overextracted, sometimes just lacking a bit of the flavour nuance.”

译：500 ml 总不如小杯，有时觉得过萃，有时少了风味细节。“过萃”是作者解释。

**事实与行为。** `START/DECIDE`。255/340 ml 满意；500 ml 试粗磨、少扰动较接近目标，仍求新配方；DONE、PARTIAL。

**相关讨论。** `anaerobic_natural` 提供五段注水与 K-Ultra 刻度；作者进一步问是五次独立注水还是时间点，并表示没试过那么粗。其他人提 Switch 混合方法；未见作者执行后结果。

**代价、质量、解释。** 自报 30 g/500 ml，不能当成浪费；总杯数与费用未知。Q0；旧例、份量/器材混杂；`1kqfcbw+mnefstead`。H1 是任务迁移线索，不是换豆频率；H3 尚无解决证据，H4 未知。S1 相邻；改变份量暂无原场景直接对应。

### E21｜日志曾有帮助，仍暂时不想记了（旧例）

**溯源与背景。** [Pourover log 讨论](https://www.reddit.com/r/pourover/comments/18eapiv/starting_a_pourover_log_what_variables_should_i/)，Reddit，英语；所选 `Ggusta` 评论 2023-12-10。检索 2026-09-07；所选评论、主帖语境与采用回复全文可读；未打开其外链表格，不宣称审计过字段。设备、年限、地区未知。旧例保留原因：同时明示“有帮助”和“暂时停”，不等于今天仍流失。

**用户原声：**

> “It really did help me a lot but I just don't feel like logging all this stuff anymore. At least not right now.”

译：确实帮过很多，但我现在不想再记这些了，至少暂时不想。

**事实与行为。** `RECALL`。自制并用过表格；停止当前记录 STOPPED，历史有帮助，持续结果 UNRESOLVED。不能推断停止原因必然是界面差。

**相关讨论。** 原作者 `felolorocher` 寻求日志字段，感谢表格并打算收敛变量；`bubblebuffs` 偏好 Excel，`MetalAndFaces` 提及记消费/豆子的不同用途。都不是 `Ggusta` 恢复记录的证据。

**代价、质量、解释。** 自报几年前做表格，无具体录入耗时、费用。Q0；年代较久、回顾性与自制工具偏差；`18eapiv+Ggusta`。H2 反例：受益不保证继续输入；H3 建议能否抵消负担未知。自然停记暂无 v03 直接场景，S5 只邻近回查任务。

### E22｜不喜欢的手冲豆，冷冻留给冷萃

**溯源与背景。** [重新开始会怎么选器材的讨论](https://www.reddit.com/r/pourover/comments/1vz5rs3/if_you_could_start_over_what_would_you_do/)，Reddit，英语，`ENTPhotographer`，相关评论 2026-08-27（线程 08-26）。检索 2026-09-07；所选完整评论和上游建议可读，未穷尽全帖。自述拥有 K-Ultra；滤杯、年限和地区未知。

**用户原声：**

> “this is what I use beans that I’m not super fond of for pourover.. I keep them in my freezer until I want cold brew and grind a large amount at a time, which sucks with a hand grinder.”

译：手冲不太喜欢的豆，冻起来等做冷萃，再一次磨很多；手磨这时很费劲。

**事实与行为。** `DECIDE`。改变用途而非继续手冲调校，DONE/CONTINUE；冷萃最终味道未详述，结果 UNCLEAR，不能写成“冷萃解决所有难喝的豆”。

**相关讨论。** 上游推荐 Switch 的简化配方、普通壶与手磨；本回复认可大方向，却补充大量研磨的负担并建议考虑电磨。建议购买电磨不是本人已购买的证据。

**代价、质量、解释。** 明示大量手磨负担，无克数、分钟数或购买金额。Q0；器材建议帖偏差；`1vz5rs3+ENTPhotographer`，与 E25 同帖聚类。H3 现有替代也包括改变任务；H1 是否每次换豆发生/H2/H4 未知。停止追求当前手冲杯与 S4 邻近，但非满意保存；转用途暂无对应。

### E23｜半年探索中，优先调注水而不是研磨

**溯源与背景。** [6 Months Pourover Setup Journey](https://www.reddit.com/r/pourover/comments/1tejx7q/6_months_pourover_setup_journey/)，Reddit，英语，2026-05-16 线程；`YourSteakBuddy`。检索 2026-09-07；主帖和采用回复全文可读。自述 2025-12-30 开始；Timemore C5 ESP Pro、Switch/Origami 形滤杯及秤。作者在回复中明确除 Timemore 秤和磨豆机外滤杯是仿制品；地区未知。

**用户原声：**

> “But I typically adjust my pours first before adjusting grind. So it stays at 1:8:0 for most brews unless it’s draining too fast.”

译：通常先调注水再调研磨，除非流得太快，多数杯维持这个刻度。

**事实与行为。** `EXECUTE/EXPLORE`。尝试混合浸泡与五段注水，自述清晰度进步；CONTINUE、PARTIAL。ZP6 是升级打算，未证实购买。

**相关讨论。** 有人询问器材是否正品，作者澄清：

> “Aside from the Timemore scale and grinder, the brewers are replicas. The 10x price difference is too big to justify for now.”

译：滤杯是仿制品，现阶段觉得差价难合理化。“十倍”是作者估计，不是市场核价。`neilBar` 建议看 B75 评测，作者仅表示会看。

**代价、质量、解释。** 明示入门日期与价格取舍，实际总花费未知。Q0；展示进步/器材偏差、仿制品限制外推；`1tejx7q+YourSteakBuddy`。H1 并非持续痛苦；H3 固定手法/只调研磨与其习惯有范围差异，但不构成改范围决定；H4 仅硬件线索。S3 相邻；B3 只启发记录实做，未有违反已接受建议的证据。

### E24｜不帮助下一杯的成品量，后来不再测

**溯源与背景。** [Brew ratio / yield 讨论](https://www.reddit.com/r/pourover/comments/1vna8x4/brew_ratio_what_about_the_yield/)，Reddit，英语，2026-08-13 线程；`WhatTheZakk`，评论精确日未核。检索 2026-09-07；所选评论、提问和采用讨论全文可读。设备、年限、地区未知。

**用户原声：**

> “I used to but then realized it's not adding any value or learning for my future brews...so stopped doing it.”

译：以前测，后来发现对之后的冲煮没有价值或学习帮助，就不做了。

**事实与行为。** `RECALL/DECIDE`。所问是最终成品量/yield；停止的是这一测量，STOPPED，不是全部日志。是否改善体验未详述，结果 UNCLEAR。

**相关讨论。** `Historical-Dark-5519` 发问是否测最终量；`Mortimer-Moose` 区分计算萃取率等目的，其他人讲按需要记录。保留用途差异，不采用讨论中的数值估算作科学事实；品牌账号回复不增计消费者。

**代价、质量、解释。** 未报测量耗时或节省金额。Q0；极短回顾、缺少长期轨迹；`1vna8x4+WhatTheZakk`。H2 反例：字段要能帮助后续决定；H3 不明确。S2 的记录负担相邻，字段自然弃用暂无直接对应。

### E25｜以为问题在器材，最后换豆比继续升级更接近预期

**溯源与背景。** [器材回顾讨论中的经历](https://www.reddit.com/r/pourover/comments/1vz5rs3/if_you_could_start_over_what_would_you_do/)，Reddit，英语；线程 2026-08-26，`Dose8` 所选评论精确日未确认。检索 2026-09-07；评论全文与同帖相关观点可读。初始 Timemore 手磨，后续设备型号、经验年限未知；自述居住美国 West Virginia，仅保留相关地区背景。

**用户原声：**

> “I thought it was a gear and skill issue. I spent way too much money on gear and only bought the grocery beans.”
>
> “I then ordered coffee online from a good roaster and the coffee is the best I've had.”

译：曾以为是器材和技术问题，花很多钱升级；后来网购另一烘焙商的豆，更符合期待。

**事实与行为。** `DECIDE`。升级、买本地豆、网购豆均为 DONE；最新结果自述 SUFFICIENT，不代表网购普遍优于本地。

**相关讨论。** 同帖 `elianna7` 认为先用较普通豆练习；`I3eardGod` 强调固定变量、自己改变参数收益有限。它们是平行观点，不是 `Dose8` 后续，也不能裁定争议。

**代价、质量、解释。** 初始设备自报略高于 **US$130**，约一半为手磨；后续总支出未知。“原器材能达九成预期”只是回顾性估计，不能当节省或效果指标。Q0；后见归因、器材讨论偏差；`1vz5rs3+Dose8`，与 E22 同帖聚类。H1 有长期差距但起因不明；H3 选豆是重要替代；H4 有硬件实际支出而无软件支付。S2/S3 相邻；换供应来源暂无直接对应。

## 5. 五个候选主题与反例

以下均为待审阅的 `AI_INFERENCE`，不是已确认需求或开发路线。

| 候选主题 | 支持材料 | 必须一起保留的反例 / 限制 | 对 H 的影响 |
| --- | --- | --- | --- |
| T1 下一步之前，先辨别“问题是哪一种” | E07/E08/E09/E10/E11/E12/E25：感官、偏好、纸、器材、水、豆和参考杯交织 | E03 已有稳定办法；E11 能靠维护改善；问题存在不证明单轴教练可处理 | H1 获存在性支持；H3 适用范围仍不明 |
| T2 反馈有价值，但只想保留对下一杯有用的部分 | E02/E21/E24 的不确定、停止和字段弃用 | E04/E15/E16/E18 的持续使用和历史价值；不是所有人都嫌记录麻烦 | H2 同时有支持和反例，不能用单次愿意输入代替留存 |
| T3 外部建议会被执行，效果归因仍很弱 | E06/E11/E14 有“尝试→自述改善”的回报 | 同时改变量、器材维护、没有模型/提示词原件；E16 自己历史已能给起点 | H3 只支持替代机制存在，尚未比较本产品增量 |
| T4 用户的终点可能是够好、继续玩或改变用途 | E03 稳定；E05/E19/E23 探索；E22 转冷萃 | E01/E08 确实希望改善，不能以爱好者反例否定困扰者 | H1 必须分动机；S4 不能只理解为优化器替用户宣布毕业 |
| T5 竞争是整套解决办法的价值比较 | E15 免费 App、E16 自己的记录、E17 计时器、E14 通用 AI、E25 选豆 | 购买器材与口头愿付费不等于订阅；地区未覆盖，频次与价格匹配未知 | H4 仍未验证，不能据表价定本产品价格 |

**相较 v01 的证据增量：** 不只增加困扰数量，而是补上建议后的实际行为、感官不确定、记录正反面、替代用途、通用 AI 和硬件归因。E01/E02 等的原结论未被悄悄提升；旧版本保留其当时的范围和停止点。

## 6. 市场背景与用户反馈

市场信息只用于理解用户已经能选什么。**供给标价、商店规模、用户经历是三种证据，不能相互替代。** 本版保留 v01 同日基线，补核 Beanconqueror 页面内口径差异；Cupsight/Pourist 仍缺本轮实机和足够独立反馈。

| 对象 | 日期、区域和收费信息 | 可见采用口径 / 限制 | 与本样本关系 |
| --- | --- | --- | --- |
| Filtru | 2026-09-07 首轮已打开美区商店：免费下载+内购；Pro US$3.49/月、32.99/年、79.99 终身；另有 Brew Guides 4.99 内购。本版引用同日基线，不代表每项功能都免费 | 美区约 3.8K ratings、4.8/5；评分数非活跃、付费或留存。官网自报 11,914 ratings，聚合区域/时点未知，不与美区相加 | E04 记录价值；E17 价值/价格不匹配，评论年份和当时价格未知。[商店](https://apps.apple.com/us/app/best-brew-guide-filtru-coffee/id1150921819)、[官网](https://filtru.coffee/) |
| Beanconqueror | 2026-09-07 官网免费开源基线；本版重开 Play 英语页面；无本轮购买。硬件和可选外部服务成本不等于 App 收费 | 页面顶部 4.8、753 reviews、10K+ Downloads；同次读取的 Phone 评论区为 4.8、742 reviews。不同区域/筛选/缓存成因未核，保留两处原口径，不能解释为用户流失或增长 | E02/E15 当代正反自述；E18 是 2024 历史体验。下载档位非月活；`hl=en_US` 是界面语言设置，不能当用户地域。[Play](https://play.google.com/store/apps/details?hl=en_US&id=com.beanconqueror.app)、[官网](https://beanconqueror.com/) |
| Cupsight | 沿用竞争研究 2026-09-06 法区基线：公开标免费，免费功能边界未实机核验 | 旧基线 5.0/5、2 个评分；2026-09-07 首轮页面读取失败，不能写成今天新增核验 | 本 25 条无该产品消费者经历，不能由别的 App 外推。[旧记录与链接](competitive-analysis-v01-2026-09-06.md) |
| Pourist | 沿用 2026-09-06 官网 Plus $6.99/月、44.99/年旧基线；美元地区/结算未进一步验证 | 旧韩区 3.9/5、15 评分；本日首轮 FAQ/商店部分读取失败，本扩展未实机刷新 | 本 25 条未补足其独立连续使用证据。[旧记录与链接](competitive-analysis-v03-2026-09-06.md) |
| 非专门教练的替代 | 已有计时器、纸笔/表格、固定配方、免费 App、社区/店员、通用 ChatGPT、改变豆用途 | 纸笔/手机的增量支出、人工求助时间、AI 账户计划均未知；“已有”不等于成本绝对为零 | E02/E03/E11/E14/E16/E17/E21/E22；未估市场规模，也未比较真实报价接受率 |

公开反馈缺口仍明显：没有对 Cupsight/Pourist 的完整用户轨迹，没有本项目与免费 App/通用 AI/人工帮助的同任务对照，没有报价后的真实支付，无法给首发地区排名。商店评论只反映愿意评价且被页面展示的人。

## 7. 去重、检索日志与未纳入线索

### 7.1 去重结果和覆盖边界

25 个不同公开作者账号的经历，来自 **22 个不同原始页面**：Reddit 19 条/17 线程；PTT 2 条/2 线程；Mobile01 1 条/1 线程；App Store 2 条/1 页；Google Play 1 条/1 页。英语 22 条、繁体中文 3 条。只确认公开账号不同，没有验证其背后是 25 位独立自然人。

三个页面聚类分别是 **E02/E15、E04/E17、E22/E25**。前两组特意保留相反体验，后一组是不同人的不同替代行为。报告主题不能把同帖相似意见当成多次独立复现。E01/E06/E08/E11 等所有原作者后续均合并，讨论者除明确编号的 E15/E22/E25 外不再计数。

地域主要未知；E25 明示美国州名。英语社区、美区商店、繁中论坛都不是居住地证明。本样本不能代表“全球用户”，也没有充分覆盖沉默流失者、非英语/繁中市场、无器材的新手、日常不参与论坛的人。

旧样本 E18/E20/E21 用于对照机制和任务边界；E17 年份缺失。E14/E15/E16/E19 等线程/评论日期字段不可用于精准时间序列。一般帖子更容易显示求助或展示成果，商店更容易显示强烈意见；纳入反例不会消除这些选择偏差。

### 7.2 本轮实际检索和读取路径

执行日均为 2026-09-07。先复用并重核 v01 已读来源与候选，再按任务扩展。没有严格依赖查询中的年份过滤，按正文日期筛选；没有记录/宣称搜索全量命中数或总体拒绝率。v01 的 9 条检索日志保留在旧版，本版新增实际查询如下。

| 编号 | 查询 | 用途 / 处理 |
| --- | --- | --- |
| L10 | `site:reddit.com/r/pourover "2026" "dialing" "roaster" "helped"` | 找外部帮助和后续；不将建议等于执行 |
| L11 | `site:reddit.com/r/pourover "2026" "sour" "bitter" "tell"` | 感官不确定与调参 |
| L12 | `site:reddit.com/r/pourover "2025" "switch" "stopped" "V60"` | 简化/切换与反例 |
| L13 | `site:ptt.cc/bbs/Coffee "2026" "手沖" "新手"` | 增补繁中原始自述 |
| L14 | `site:reddit.com/r/pourover "2026" "stopped" "app"` | 停用和记录负担 |
| L15 | `site:reddit.com/r/pourover "2026" "roaster" "emailed"` | 尝试找已联系而非仅被建议联系 |
| L16 | `site:reddit.com/r/pourover "2026" "same" "good enough"` | 现有办法足够 |
| L17 | `site:reddit.com/r/pourover "2026" "notebook" "record"` | 纸本、回看和继续使用 |
| L18 | `site:reddit.com/r/pourover "2026" "stopped" "Switch" "recipe"` | 简化与结束优化 |
| L19 | `site:reddit.com/r/pourover "2026" "contacted" "roaster"` | 求助是否执行；结果不足以建立渠道结论 |
| L20 | `site:reddit.com/r/pourover "2025" "tasting notes" "can’t"` | 感官与标签差距 |
| L21 | `site:reddit.com/r/pourover/comments/1vz5rs3 "2026"` | 校对 E22/E25 所在线程日期；不从缓存相对小时推日期 |

定向打开/页内查找：E01–E25 卡内 URL；优先读取 OP 的后续变化、讨论分歧和反例。新来源取得路径包含上述任务检索、旧候选以及讨论中的相关主题入口，不能据这一批查询推导哪类问题更普遍。

### 7.3 有意未计入的线索

| 线索 | 读取 / 排除理由 |
| --- | --- |
| Reddit `1unaecx` 的首次 Switch 冲煮 | 搜索返回线索，但直接打开失败，未取得完整可归属的经历；不以摘要补足编号 |
| [PTT 回文](https://www.ptt.cc/bbs/Coffee/M.1777259861.A.C71.html) 对 E09 原帖的引用 | 引用段不是另一个人的相同经历；不重复计数 |
| E22/E25 同帖中“03 Switch 很简单”的搜索结果片段 | 没有完成该评论作者与正文定位，不借摘句多计一条 |
| Beanconqueror 2022 数据丢失旧评论与开发者答复 | 页面可见，但本批已保留较旧对照，不再以历史故障充当当前缺陷；没有用户最终恢复结果 |
| 论坛机器人、品牌账号的推广/技术推断与一般器材清单 | 不作为独立消费者使用事件；未经核实的技术结论不进入事实层 |
| 图片、视频、外链表格 | 未检视的媒体不能独立支持作者能力、统计或实际动作；仅采用本轮读到的文字 |

## 8. 接回走查与后续验证

本轮不改 v03；建议主对话与工作包 A 的实际走查汇合时使用以下问题。它们是候选观察，不是新增 eval gate。

| 已有场景 | 可以带入的证据 | 应观察 / 不能预先声称 |
| --- | --- | --- |
| S1 起点 | E01/E09/E16；邻近份量 E20 | 历史是否帮定起点，是否先确认偏好与任务；不能将所有用户都当同剂量 V60 |
| S2 不满意→下一步 | E07/E08/E11/E12 | 模糊感官、外部原因是否保留；不能把每次不好喝都归研磨 |
| S3 改善后继续 | E06/E11/E14 | 用户实际改了什么、改善是什么；没有对照不能归功于某一项建议 |
| S4 满意保存 | E03/E05/E19/E22 | 用户要停止、探索还是转用途；反例并未验证 App 保存体验 |
| S5 找回 | E04/E15/E16/E18 | 记录是否真的支持下一次决定；历史笔记价值不等于任何 App 重开都成功 |
| B1 变差 | E10 | 区分换设备和执行建议的变差；不是同一种触发 |
| B2 不确定 | E02/E08/E09 | 不确定能否如实输入；不能强迫稳定标签 |
| B3 实做不同 | E06/E23（仅相邻） | 核对实做参数；这些用户没有承诺遵守单轴，不能编码成“不听建议” |

暂无直接对应、值得后续讨论的候选：多日自然停记（E02/E21/E24）、器材维护（E11）、外部求助门槛（E12）、目标从优化转向探索/换用途（E19/E22）、购买前价值判断（E17）。是否纳入后续研究或产品范围由用户决定。

后续访谈可优先要求讲最近一次具体经历，而不是问是否想要 AI：

1. 最近一包豆哪几杯改变了决定？保留当时记录、实际动作和最后一杯的结果。
2. 哪项记录曾帮下一杯做决定，哪项后来不记了？漏记后发生了什么？
3. 一次外部建议实际改了哪些东西？没有改善时去哪里继续找办法？
4. 怎么判断“够好”、值得继续玩、或该换豆/换用途？
5. 当前免费办法在哪一步不够？面对真实替代和报价会怎样选择？不要把口头价格态度当付款。

**建议到此暂停新增样本，先审阅编码与证据强度。** 25 条足以比较这批不同经历，但不能据此宣称主题饱和。优先审查：E02/E15 的同帖正反是否编码合理；E06/E11/E14 的“执行后改善”有没有被读成因果；E18/E20/E21 的旧例和 E17 的未知日期是否继续保留为对照。再由主对话结合 A 的实机证据讨论最多两个候选机会，本报告不替用户锁定。

## 9. 交付自检与版本边界

- [x] 25 个已读正文的经历，原 E01–E05 编号稳定，新增 E06–E25。
- [x] 每卡包含原声、必要中文翻译、相关讨论或“无可见回复”，区分建议、意向和已执行。
- [x] 每卡记录日期/读取范围、背景未知项、实际行为、结果、代价、质量和 H/场景对应。
- [x] 事件去重，公开 22 个页面与三个聚类；正文外线索不计入。
- [x] 含现有方案足够、记录正反、探索与改变用途；不估市场发生率。
- [x] 市场信息带日期与区域口径；历史版本、标价、评论数量不冒充现时留存/支付证据。
- [x] 只新增本 v02，保留 v01、竞争研究、handoff 和产品文件；未自动 Git 提交。
- [ ] 用户审阅本轮样本、编码与候选主题。
- [ ] 与 A 的实机证据汇合，决定是否及如何继续验证。

研究与整理：Codex。公开材料不表示原作者认可本报告；本版不是市场验证、产品需求批准或首发地区决定。
