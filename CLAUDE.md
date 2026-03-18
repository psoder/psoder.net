# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `bun` as the package manager.

```bash
bun dev          # Start dev server at localhost:4321
bun build        # Build production site to ./dist/
bun preview      # Preview production build
bun lint         # Run oxlint
bun lint:fix     # Run oxlint with auto-fix
bun fmt          # Format with oxfmt
bun fmt:check    # Check formatting without modifying
```

## Architecture

Astro 5 personal website for psoder.net. Uses Tailwind CSS v4 (via Vite plugin, not PostCSS), Google Fonts (Inter + IBM Plex Serif), and `astro-icon` for icons.

**Routing:**
- `/` — home page (`src/pages/index.astro`)
- `/blog` — post listing (`src/pages/blog.astro`)
- `/blog/[id]` — individual posts from `src/content/blog/` collection
- `/cv` — Swedish CV (`src/pages/cv/index.astro`)
- `/cv/[lang]` — CV with lang param (`sv` | `en`), data from `src/data/cv.ts`
- `/rss.xml` — RSS feed

**Layouts:** `Layout.astro` is the main layout (header/footer/theme). `CVLayout.astro` is a print-optimized CV layout (A4, no-index).

**Content:** Blog posts live in `src/content/blog/` using the `rssSchema`. Draft posts are prefixed with `.` and filtered from listings in `PostList.astro`.

**Theming:** Dark mode by default (Catppuccin Macchiato), light mode (Catppuccin Latte) toggled via `html[data-theme="light"]` attribute using `localStorage`. Theme logic is in `ThemeToggle.astro`.

**CV data:** `src/data/cv.ts` exports a `cv` object keyed by `Lang` (`"sv" | "en"`) with all CV content.

## Code Style

- TypeScript strict mode
- Formatter: oxfmt (print width 100, 2-space indent for most files, 4-space for TS/JS)
- Linter: oxlint with unicorn, typescript, react, and other plugins enabled at error severity
- Astro files formatted by the Astro VSCode extension formatter
