# Personal Blog Redesign

## Status

Approved design direction; implementation follows a separate plan after written spec review.

## Goal

Replace the current theme-driven presentation of the Hugo personal blog with a minimal, modern, distinctive dark design that gives writing and projects equal prominence while preserving the existing content and publishing workflow.

## Audience and Positioning

The site serves an equal blend of technical peers, collaborators, potential employers, and curious readers. It should communicate both sustained thinking through essays and practical imagination through working projects, without becoming either a conventional portfolio or an undifferentiated blog archive.

The visual position is **Dark Editorial Instrument**: a precise, quiet interface that treats the site as a personal index of ideas, tools, and experiments.

## Existing Constraints

- The site is Hugo-based and currently uses the vendored `hugo-ficurinia` theme.
- Existing Markdown posts, dates, tags, archives, search, RSS, and article URLs are content that must be retained.
- The theme should not be edited directly; local Hugo layout/style overrides should own the redesign.
- The existing deployment remains Hugo-based.

## Information Architecture

### Homepage: Modular Index

The homepage becomes a custom modular index rather than the theme's default post list. Its top-level modules are:

1. **Identity** — site mark/name, concise positioning statement, and essential social links.
2. **Writing** — a curated list of recent essays with title, tags or topic metadata, date, and a route to the complete archive.
3. **Projects** — six equal editorial tiles arranged as a responsive 2×3 desktop grid:
   - Cutting Room Floor
   - LearnLLM
   - Loom
   - DSonic
   - Lintuition
   - WikiGraph
4. **About / Index** — compact personal introduction plus navigation to About, tags, search, RSS, and other existing discovery routes.

On smaller screens, the grid becomes a single-column stack while preserving ordering and component anatomy.

### Article Pages

Article pages use the same dark visual language but remain optimized for reading. They should prioritize readable line length, heading hierarchy, code blocks, tables, images, dates, tags, table of contents where present, related content, sharing, and navigation. The article template should not force the homepage's tile/grid treatment onto long-form content.

## Project Data and Links

Projects should be represented as structured site data rather than hard-coded independently throughout templates. Each entry needs:

- stable identifier
- display title
- category label
- external URL
- one-sentence goal/theme description
- accent color token
- diagram variant or diagram data needed by the tile

The canonical links are:

- Cutting Room Floor — `https://cutting-room-floor.pages.dev/`
- LearnLLM — `https://learnllm.pages.dev/`
- Loom — `https://loom-lang.pages.dev/tutorial/`
- DSonic — `https://dsonic.pages.dev/`
- Lintuition — `https://lintuition.pages.dev/`
- WikiGraph — `https://wikigraph.pages.dev/`

## Project Tile Contract

Every project tile must use the same anatomy and interaction language:

1. index and category header
2. dedicated diagram region
3. project title
4. concise theme/goal description
5. consistent `OPEN PROJECT ↗` external-link action

No project receives a unique CTA, split title treatment, full-width exception, or missing diagram. The six tiles are equal peers in the grid.

Each diagram is a simple, inline SVG-style schematic inspired by the Cutting Room Floor visual language: thin geometric strokes, restrained shapes, small number of nodes/paths, dark tinted field, and a project-specific accent. Diagrams communicate the project's theme without competing with its title or description:

- Cutting Room Floor: generative instrument waveform/grid
- LearnLLM: progression from tensors through attention/training to text
- Loom: array/pipeline flow connecting data, music, and graphics
- DSonic: drum waveform and synthesis stages
- Lintuition: vectors and projected axes
- WikiGraph: connected node path representing succession history

## Visual System

### Surface and Color

- primary canvas: near-black charcoal
- panels: subtly lighter tinted surfaces
- borders: thin, low-contrast structural rules
- primary accent: electric green for identity and global actions
- secondary accents: restrained project-specific hues, used consistently for each tile's diagram, border, category, and action
- no uncontrolled gradients, ornamental shadows, or unrelated decorative colors

### Typography

Use a compact technical display face or monospace treatment for labels, indices, metadata, and navigation. Pair it with a highly readable text face for descriptions and articles when needed. Large homepage statements use tight tracking and strong contrast; body copy remains comfortable and restrained.

### Layout

- desktop homepage uses a disciplined content grid with visible alignment and generous negative space
- project cards share equal dimensions and internal spacing
- structural rules separate major modules
- responsive behavior stacks modules and tiles without hiding content or actions
- interaction states are clear through border/accent changes, underline or color shifts, and focus-visible treatment

## Data Flow and Components

- Hugo configuration continues to own global site identity, navigation, social links, search, RSS, and theme-independent settings.
- A project data file owns the six project records.
- A homepage layout composes identity, writing, projects, and about/index partials.
- A reusable project-tile partial renders every project record through one contract.
- A reusable diagram partial or diagram data convention selects the appropriate SVG schematic.
- Local stylesheet assets define tokens, layout, typography, responsive rules, and states.
- Theme-provided article and utility behavior is overridden only where needed to apply the new visual system.

## Error Handling and Accessibility

- Missing project data should fail visibly during development rather than silently rendering an incomplete tile.
- External project links must be keyboard accessible, clearly identified as external, and use descriptive accessible names.
- Inline SVG diagrams should be decorative when the adjacent text fully communicates the project goal; otherwise provide an accessible label.
- Focus-visible states must remain visible against dark surfaces.
- Color is never the sole carrier of category or action meaning.
- Responsive layout must remain usable at narrow widths and increased text size.

## Verification

Before implementation is considered complete:

1. Build the Hugo site from a clean working tree.
2. Confirm all existing posts and important routes still build.
3. Exercise the homepage at desktop, tablet, and narrow mobile widths.
4. Confirm six project tiles render with identical anatomy and all six canonical links are correct.
5. Confirm each diagram is visible, bounded, and visually aligned within its tile.
6. Open representative article pages and verify reading layout, code, images, metadata, search, tags, RSS, and About remain usable.
7. Check keyboard focus, external-link semantics, SVG accessibility treatment, and contrast on dark surfaces.
8. Capture visual evidence of the homepage and a representative article page for final review.

## Out of Scope

- rewriting existing post content
- changing the domain or deployment provider
- building project pages inside this Hugo site
- adding a CMS, database, comments system, or analytics platform
- redesigning the linked external projects themselves
