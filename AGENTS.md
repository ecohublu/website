# AGENTS.md

## Project overview
This project is a brand website for 數嶼科技, focused on ecological monitoring data workflows, product communication, and contact conversion.

The site should feel:
- professional
- calm
- clear
- credible
- domain-expert
- not overly commercial

This is not a flashy marketing site.
This is not a generic startup landing page.
This is not a portfolio site.

The website should communicate that 數嶼科技 helps research units, conservation teams, and public-sector projects turn ecological monitoring data into usable digital workflows and systems.

---

## Core brand positioning
### Current implementation notes
- This is a Docusaurus site.
- Shared content is primarily stored in `src/data/siteContent.js`.
- Homepage structure is implemented in `src/pages/index.js`.
- Shared product page structure is implemented in `src/components/product-detail-page.js`.
- Product routes live in `src/pages/products/`.
- Global visual tuning is mostly handled in `src/css/custom.css`.
- Navbar and footer configuration live in `docusaurus.config.js`.
- Default validation command for this repo is `npm run build`.

When editing copy or UI, preserve this positioning:

數嶼科技是懂生態監測流程的資料平台與系統團隊。

The company helps users manage ecological monitoring data across:
- sound data
- image data
- passive acoustic monitoring data

The company’s value is not only "building websites" or "making tools".
Its value is helping teams build stable, usable, maintainable data workflows.

---

## Brand tone
Use this tone in all user-facing copy:

- professional
- steady
- calm
- trustworthy
- domain-aware
- structured
- clear over clever

Avoid writing that feels:
- hype-driven
- startup-buzzy
- overly salesy
- too abstract
- too poetic
- too technical for general visitors

Preferred tone:
- explain clearly
- sound experienced
- sound grounded in real monitoring workflows
- emphasize practical value

---

## Copywriting rules

### General principles
- Prioritize clarity over style.
- Prioritize specificity over abstraction.
- Avoid repeating the same value proposition in multiple sections.
- Each section should introduce new information, not rephrase the previous section.
- Write for first-time visitors who do not already understand the product structure.
- Make product differences easy to scan.

### Avoid
Avoid overusing phrases like:
- 可持續運作
- 更有效率
- 貼近現場
- 數位轉型
- 解決方案
- 一站式
- 革命性
- 最強
- 全面升級

These may be used sparingly only if paired with concrete meaning.

### Prefer
Prefer language like:
- 降低人工整理成本
- 建立一致的資料流程
- 讓資料更容易查找與管理
- 支援後續研究、分析與成果整理
- 適合多批次資料管理
- 適合長時間錄音資料整理
- 協助完成前期辨識與後續銜接

### Repetition control
Before finalizing any copy update:
- check whether the same idea appears in Hero, Intro, Positioning, and Benefits
- reduce repeated meaning by at least one pass
- preserve only the strongest version of each idea

---

## Product boundaries
These distinctions are critical and must remain clear everywhere.

### Silic
Silic = 聲音資料前期自動辨識與整理工具

Silic is for:
- large volumes of audio files
- front-stage identification
- preprocessing
- reducing repetitive manual review
- helping teams move into later validation and analysis

Silic is NOT:
- the main system for long-term passive acoustic monitoring data management

### HUPA
HUPA = 自動相機影像辨識與管理系統

HUPA is for:
- camera trap image data
- multi-batch image organization
- tagging
- search
- long-term management and accumulation

HUPA is NOT:
- just an image recognition demo tool
- a generic AI vision product

### PAM
PAM = 被動式聲學監測資料管理系統

PAM is for:
- long-duration recordings
- passive acoustic monitoring workflows
- ongoing accumulation of recording data
- stable management processes for long-term monitoring

PAM is NOT:
- the same as Silic
- just an audio identification tool

### Boundary rule
When updating any product page:
- make sure the product’s role is explicit
- make sure it is distinct from the other two products
- if useful, add one sentence that clarifies when another product may be more appropriate

---

## Homepage rules
The homepage should answer these questions within a few seconds:

1. What does the company do?
2. Who is it for?
3. Why is it useful?
4. What are the main products?
5. How does a visitor contact the team?

### Homepage priorities
- clear value proposition in Hero
- immediate understanding of target audience
- visible trust signals
- clear product differentiation
- low-friction contact CTA

### Homepage content style
- short to medium section lengths
- minimal repetition
- easy scanning
- structured headings
- no oversized manifesto-like text blocks

### Current homepage section order
Unless explicitly requested, preserve this order:
1. Hero
2. Partner / trust section
3. About / brand positioning
4. Products intro
5. Product cards
6. Contact CTA

### Current homepage anchors
These anchors are already used by nav and CTA links:
- `#company-intro`
- `#products-services`
- `#contact-us`

---

## Product page rules
Product pages should not feel like enlarged homepage copy.

Each product page should clearly move through this structure:

1. Hero
2. Intro / who it is for
3. Key value points
4. Product positioning
5. Suitable scenarios
6. Core capabilities
7. What users gain
8. Related products
9. Contact

### Product page requirements
- each section must add new information
- reduce redundant phrases
- keep benefit statements concrete
- keep the CTA relevant to that product
- use related products to reinforce product architecture

### Product page implementation notes
- Current product routes:
  - `/products/silic`
  - `/products/hupa`
  - `/products/pam`
- These three pages share one template.
- Prefer updating per-product content in `src/data/siteContent.js` first.
- Only edit the shared template when the change truly needs to affect all three products.

### Contact section on product pages
The product page contact section should:
- mention the specific product by name
- invite the user to share project background, data scale, and timeline
- suggest evaluation, not hard selling

---

## Navigation and IA rules
Preserve the site’s information architecture unless explicitly asked to change it.

Do not rename or remove:
- existing routes
- existing anchors
- section ids
- tracked links
- product relationships
- mailto CTA behavior

Preferred labels should remain clear and simple.

If revising nav labels, prefer:
- 關於數嶼
- 核心產品
- 合作方式
- 聯絡我們

Avoid vague labels like:
- 解決方案
- 平台能力
- 生態系

unless explicitly requested.

---

## UI and layout rules

### General UI behavior
- Preserve the current visual system unless explicitly asked to redesign.
- Prefer minimal changes over broad refactors.
- Do not redesign sections when a text update is sufficient.
- Do not introduce decorative animation unless explicitly requested.
- Do not add autoplay carousels, marquees, counters, or flashy motion.

### Visual tone
The UI should remain:
- clean
- spacious
- structured
- editorial
- professional

Avoid making the site feel:
- noisy
- corporate-template-heavy
- startup-demo-like
- ad-like

### Responsive handling
When updating content:
- check for button wrapping
- check for heading overflow
- check for uneven card heights
- check for awkward mobile line breaks
- make only minimal necessary spacing or sizing adjustments

### Trust sections
If adding partner/client logos:
- treat them as trust signals, not ads
- use restrained visual styling
- prefer static grids over sliders
- keep them low-saturation or low-emphasis unless otherwise requested

### Responsive notes for this repo
- Prefer local fixes over broad layout rewrites.
- Preserve existing scroll anchor behavior.
- Keep hero and CTA buttons from wrapping awkwardly on mobile.
- If Chinese copy gets longer, first adjust spacing, width, or nowrap behavior before redesigning structure.

---

## Component editing rules
If the site uses reusable templates or shared content structures:

- prefer editing content data over shared component logic
- avoid breaking shared layouts used by multiple products
- do not introduce page-specific hacks into global components
- if a shared component must be adjusted, keep changes generic and minimal

When possible:
- update content in data/config files
- avoid duplicating markup
- preserve existing props and content structure

### Preferred edit targets
- Homepage copy and section order: `src/pages/index.js`
- Shared site copy and product data: `src/data/siteContent.js`
- Shared product page layout: `src/components/product-detail-page.js`
- Global styles: `src/css/custom.css`
- Navbar / footer links and labels: `docusaurus.config.js`

### Avoid unnecessary edits in
- old starter components not used by the current homepage
- unrelated routes when the request is homepage-only
- generated output such as `build/`

---

## SEO and metadata rules
When editing titles, descriptions, or headings:

- keep product naming consistent
- keep Chinese and English naming aligned
- do not stuff keywords unnaturally
- keep metadata readable and credible
- avoid exaggerated claims

If adding meta descriptions, prefer concise and informative language.

---

## Accessibility rules
Preserve or improve accessibility when making changes.

Do not:
- remove semantic headings without reason
- remove alt text support
- break focus states
- replace readable text with image-only content

When adding logo sections:
- provide accessible alt text
- avoid meaningless repeated alt text
- keep structure screen-reader friendly

---

## Code style rules
- Follow the existing code style in the repository.
- Prefer small, reviewable changes.
- Do not reformat unrelated files.
- Do not rename files unless necessary.
- Do not change routing structure unless explicitly requested.
- Avoid adding new dependencies unless clearly justified.
- Avoid broad refactors during content-only tasks.

If a small style fix is required because content length changed:
- keep it local
- keep it minimal
- avoid cascading redesign changes

### Encoding safety
- Preserve UTF-8 text integrity when editing Chinese copy.
- Do not introduce mojibake or encoding regressions.

---

## Content consistency checks
After any content-related change, check:

1. Is the Hero clearer than before?
2. Does each section add new information?
3. Are product differences explicit?
4. Is the tone still calm and professional?
5. Are CTA labels consistent across the site?
6. Did any copy become too abstract?
7. Did any section become too long?
8. Did mobile layout break because of longer Chinese text?

---

## Preferred CTA style
Use CTA wording that feels helpful and specific.

Prefer:
- 預約需求討論
- 查看核心產品
- 查看其他產品
- 來信洽詢需求評估
- 查看產品說明

Avoid overly aggressive CTA language such as:
- 立即開始
- 立即體驗
- 馬上購買
- 免費試用
unless explicitly requested and actually supported by the product/business model.

---

## Contact and trust rules
The site should reduce uncertainty for research, conservation, and public-sector audiences.

When writing contact or trust-oriented content:
- emphasize evaluation and fit
- suggest practical next steps
- reinforce credibility without overclaiming
- do not imply official endorsement unless confirmed

If adding partner logos or collaboration references:
- do not imply certification or endorsement unless true
- phrase them as collaboration, partner, or project relationships
- keep presentation modest

---

## Validation checklist
After making changes, always check for:

- no obvious overflow in Hero
- no broken CTA layout
- no strange height mismatch in cards or columns
- no broken product links
- no broken section anchors
- no visibly inconsistent section spacing
- no obvious regression on mobile

If the project supports validation commands, run at least one of:
- lint
- build
- test

In this repo, default to:
- `npm run build`

Report:
- files changed
- what changed in each file
- whether any shared component was touched
- any issues noticed but intentionally left unchanged

---

## Safe-change policy
For content and presentation tasks:
- prefer the smallest change that solves the problem
- preserve structure unless a structural issue is part of the request
- do not silently redesign the site
- do not silently rewrite unrelated pages

If a requested change would affect global consistency:
- implement the requested change carefully
- note the consistency issue in the final report
- avoid large surprise edits outside scope

---

## When unsure
If multiple interpretations are possible, prefer:
1. clarity
2. consistency
3. minimal scope
4. preservation of current design system
5. explicit product boundaries

When in doubt, choose the option that makes the site easier for a first-time visitor to understand.
