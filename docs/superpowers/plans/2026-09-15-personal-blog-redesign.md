# Personal Blog Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Hugo blog's theme-driven presentation with a dark modular index that gives existing writing and six external projects equal prominence without changing published content URLs.

**Architecture:** Keep Hugo and the existing Ficurinia theme as the content/runtime foundation. Add structured project data, a custom homepage composition, reusable project-tile and SVG-diagram partials, and local stylesheet overrides; preserve the theme's article/discovery behavior unless a focused local override is required for the dark visual system.

**Tech Stack:** Hugo templates, YAML data, HTML, inline SVG, CSS, existing Ficurinia theme, Hugo CLI.

**Spec:** `docs/superpowers/specs/2026-09-15-personal-blog-redesign-design.md`

## Global Constraints

- Existing Markdown posts, dates, tags, archives, search, RSS, and article URLs must be retained.
- The theme must not be edited directly; local Hugo layout/style overrides own the redesign.
- The homepage contains six equal project tiles: Cutting Room Floor, LearnLLM, Loom, DSonic, Lintuition, and WikiGraph.
- Every project tile uses: index/category header, diagram region, title, concise goal/theme, and `OPEN PROJECT ↗` action.
- The desktop project grid is 2×3; narrow layouts stack tiles without hiding content or actions.
- Primary canvas is near-black charcoal; primary accent is electric green; project accents are restrained and consistent within each tile.
- Color is never the sole carrier of category or action meaning.
- External links must be keyboard accessible and clearly identified as external.

---

### Task 1: Establish structured project records

**Files:**
- Create: `data/projects.yml`

**Interfaces:**
- Produces `.Site.Data.projects`, an ordered collection consumed by the homepage project loop.
- Each record exposes `id`, `title`, `category`, `url`, `description`, `accent`, and `diagram`.

- [ ] **Step 1: Create the ordered project data file**

Add six records in this exact order:

```yaml
- id: cutting-room-floor
  title: Cutting Room Floor
  category: Field catalog
  url: https://cutting-room-floor.pages.dev/
  description: Generative instruments, games, and quiet machines.
  accent: '#7dffb2'
  diagram: waveform-grid
- id: learnllm
  title: LearnLLM
  category: Curriculum
  url: https://learnllm.pages.dev/
  description: Build a language model from tensors to text.
  accent: '#ff9a72'
  diagram: learning-path
- id: loom
  title: Loom
  category: Language
  url: https://loom-lang.pages.dev/tutorial/
  description: An array language for data, music, and graphics.
  accent: '#93bfff'
  diagram: pipeline
- id: dsonic
  title: DSonic
  category: Audio tool
  url: https://dsonic.pages.dev/
  description: A live-coding drum synthesizer with twelve engines.
  accent: '#d9a4ff'
  diagram: waveform-stages
- id: lintuition
  title: Lintuition
  category: Visual guide
  url: https://lintuition.pages.dev/
  description: A visual guide to linear algebra through intuition.
  accent: '#7dffb2'
  diagram: vectors
- id: wikigraph
  title: WikiGraph
  category: Explorer
  url: https://wikigraph.pages.dev/
  description: Explore leader succession as an interactive historical graph.
  accent: '#d5b1ff'
  diagram: succession-graph
```

- [ ] **Step 2: Confirm data ordering and URL values**

Run:

```bash
hugo config mounts
```

Expected: Hugo exits successfully and the repository data directory remains available to templates. Do not change the six URLs or their order.

- [ ] **Step 3: Commit the data contract**

```bash
git add data/projects.yml
git commit -m "feat: define blog project records"
```

---

### Task 2: Build reusable project diagrams and tiles

**Files:**
- Create: `layouts/partials/project-diagram.html`
- Create: `layouts/partials/project-tile.html`

**Interfaces:**
- `project-tile.html` consumes one project record and renders the complete external-link tile.
- `project-diagram.html` consumes a project record and renders one decorative inline SVG selected by `.diagram`.
- The tile owns one link target and uses the same `OPEN PROJECT ↗` label for every project.

- [ ] **Step 1: Implement the diagram partial contract**

Use a `{{- with . -}}` record context and branch on `.diagram`. Each branch must emit an inline `<svg aria-hidden="true" focusable="false" viewBox="0 0 260 100">` with a shared visual treatment: no external asset request, `fill="none"`, thin strokes, and `stroke="currentColor"` or the supplied project accent. Provide branches named `waveform-grid`, `learning-path`, `pipeline`, `waveform-stages`, `vectors`, and `succession-graph`. If an unknown diagram value is encountered, render a minimal neutral node-and-line fallback and keep the page valid.

- [ ] **Step 2: Implement one consistent tile template**

Render this structure for every record:

```html
<article class="project-tile" data-project="{{ .id }}">
  <div class="project-tile__meta"><span>INDEX / CATEGORY</span><span>OPEN ↗</span></div>
  <div class="project-tile__diagram">{{ partial "project-diagram.html" . }}</div>
  <div class="project-tile__body">
    <h3>{{ .title }}</h3>
    <p>{{ .description }}</p>
    <a href="{{ .url }}" target="_blank" rel="noopener noreferrer">OPEN PROJECT ↗</a>
  </div>
</article>
```

Use the project accent through a CSS custom property on the tile. Keep the entire title/description/action treatment identical across all six records; no full-width exception or project-specific CTA.

- [ ] **Step 3: Add accessibility and external-link semantics**

Mark diagrams decorative because each adjacent description communicates the goal. Give each external anchor an accessible name that includes the project title, for example `Open Cutting Room Floor project in a new tab`. Add visible focus styles through the stylesheet task rather than relying on browser defaults.

- [ ] **Step 4: Commit reusable project components**

```bash
git add layouts/partials/project-diagram.html layouts/partials/project-tile.html
git commit -m "feat: add reusable project tiles and diagrams"
```

---

### Task 3: Compose the modular homepage

**Files:**
- Create or modify: `layouts/index.html`
- Create: `layouts/partials/home-identity.html`
- Create: `layouts/partials/home-writing.html`
- Create: `layouts/partials/home-projects.html`
- Create: `layouts/partials/home-about.html`

**Interfaces:**
- `layouts/index.html` owns homepage module order and page-level landmarks.
- Each homepage partial owns one module and remains independently replaceable.
- `home-projects.html` ranges over `.Site.Data.projects` and delegates each record to `project-tile.html`.

- [ ] **Step 1: Add the identity module**

Render the site name/logo, a concise positioning statement based on the approved direction (ideas, tools, and things made), and the existing social links from the configured menu. Keep navigation links keyboard reachable and expose the homepage as the first landmark.

- [ ] **Step 2: Add the writing module**

Use Hugo's existing post collection and configured pagination/content section to show a bounded recent list with title, date, and tags/topic metadata. Preserve each post's existing `.RelPermalink`. Add one archive action that points to the existing posts route rather than creating a duplicate content type.

- [ ] **Step 3: Add the six-project module**

Create a labeled projects section and range over `.Site.Data.projects` in data-file order. Do not duplicate project content in the template. Add an explicit `aria-labelledby` relationship between the section and its heading.

- [ ] **Step 4: Add the About / Index module**

Render the existing About page summary and links to About, tags, search, and RSS using Hugo-generated URLs. Keep the About page itself unchanged.

- [ ] **Step 5: Commit homepage composition**

```bash
git add layouts/index.html layouts/partials/home-identity.html layouts/partials/home-writing.html layouts/partials/home-projects.html layouts/partials/home-about.html
git commit -m "feat: compose modular blog homepage"
```

---

### Task 4: Implement the dark editorial visual system

**Files:**
- Create: `assets/css/blog-redesign.css`
- Modify: `config.yaml`

**Interfaces:**
- `blog-redesign.css` owns design tokens, homepage modules, project grid/tile styling, responsive rules, focus states, and article visual overrides.
- `config.yaml` loads the local stylesheet through the theme's supported custom CSS parameter or local head injection convention; follow the active theme's existing parameter convention instead of editing the submodule.

- [ ] **Step 1: Define design tokens and base surfaces**

Define CSS custom properties for near-black canvas, panel surfaces, structural borders, readable text, muted text, green global accent, and spacing/type scales. Apply the dark surface and readable text to the site shell without reducing code-block or link contrast.

- [ ] **Step 2: Style the modular homepage**

Use a disciplined max-width grid, visible structural rules, generous section spacing, a two-column identity area, and equal writing/projects modules. Use technical typography for labels/metadata and a readable face for descriptions/article content. Avoid ornamental shadows and uncontrolled gradients.

- [ ] **Step 3: Style the six-tile project grid**

Use `display: grid` with two equal columns on desktop, equal gaps, equal tile anatomy, tinted panel backgrounds, accent borders/labels, a fixed diagram region, and aligned body/action spacing. Add `@media` rules that collapse to one column while preserving all content.

- [ ] **Step 4: Style article pages and interaction states**

Apply the same canvas, text, rule, link, heading, code, metadata, and focus-visible language to article pages while preserving comfortable reading width. Ensure external actions visibly indicate external navigation and keyboard focus is obvious on dark surfaces.

- [ ] **Step 5: Load the local stylesheet through Hugo**

Wire the stylesheet using the theme's supported local asset/custom CSS hook. Do not edit `themes/hugo-ficurinia` directly. If the theme's hook is unavailable in the checked-out submodule, add the smallest local partial override needed to load the file.

- [ ] **Step 6: Commit the visual system**

```bash
git add assets/css/blog-redesign.css config.yaml layouts/partials
git commit -m "feat: apply dark editorial blog system"
```

---

### Task 5: Verify the redesigned site end to end

**Files:**
- Modify only if verification exposes a defect in the implementation files above.

**Interfaces:**
- Verification covers the homepage, six external project links, representative post rendering, discovery routes, responsive layout, and keyboard accessibility.

- [ ] **Step 1: Build the site**

Run:

```bash
hugo --gc --minify
```

Expected: a successful build with no template errors and all existing generated content routes present.

- [ ] **Step 2: Run the Hugo server for visual verification**

Run:

```bash
hugo server --buildDrafts --disableFastRender
```

Open the homepage at desktop width, tablet width, and narrow mobile width. Confirm the identity, writing, project, and About/index modules appear in the planned order; confirm the project grid is 2×3 on desktop and one column on narrow screens.

- [ ] **Step 3: Verify six project links and tile contracts**

Inspect each tile and open each external action. Confirm the six destinations exactly match the spec, each tile has a diagram, each action reads `OPEN PROJECT ↗`, and no tile has unique or missing CTA treatment.

- [ ] **Step 4: Verify article and discovery routes**

Open a representative post, About, a tag page, search, and RSS. Confirm titles, dates, tags, code, images, links, article width, and navigation remain usable and existing permalinks remain unchanged.

- [ ] **Step 5: Verify keyboard and responsive behavior**

Tab through identity links, post links, all project actions, and footer/discovery links. Confirm focus-visible styling, external-link names, no clipped tile content, no horizontal overflow, and readable text at narrow width and increased zoom.

- [ ] **Step 6: Capture final visual evidence**

Capture the desktop homepage, narrow homepage, and representative article page. Review for equal tile dimensions, aligned diagram regions, consistent actions, contrast, and the intended dark editorial instrument character.

- [ ] **Step 7: Commit verification fixes if needed**

If verification required changes, run the focused Hugo build and browser checks again, then commit only the corrected implementation files:

```bash
git add assets data layouts config.yaml
 git commit -m "fix: polish blog redesign verification findings"
```
