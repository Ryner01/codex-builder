# Codex Widget Sandbox

A React + TypeScript sandbox for coding agents that generate small iframe-ready widgets: roadmaps, charts, interactive panels, and focused embedded tools.

Agents work in normal React source files, while the watched production build emits one self-contained file at `dist/index.html`. JavaScript, CSS, and imported assets are inlined so the result is easy to embed in a canvas app iframe.

## Requirements

- Node `20.19+` or `22.12+`
- npm `11+`

```bash
npm install
npm start
```

## One Startup Command

`npm start` runs both parts of the widget workflow:

- Vite dev server for browser and Playwright preview.
- `vite build --watch` for continuous single-file `dist/index.html` generation.

There are no required test, lint, preview, or separate build scripts. For one-off maintenance, use direct commands such as `npx vite build` or `npx shadcn@latest add <component>`.

## Widget Constraints

- This is a widget sandbox, not a full app framework.
- Start from `src/App.tsx`.
- Do not add routes, app shells, auth flows, backend assumptions, navigation systems, or runtime i18n.
- Do not add files under `public/`; Vite public files are disabled for production.
- Import small images from source only when needed so Vite can inline them as base64/data URLs.
- Avoid runtime fetches for local files, locale JSON, or other assets that would break the single-file output.
- Keep iframe behavior in mind: no browser route assumptions, parent-page layout assumptions, or full-page navigation.
- Automated tests are not required for normal widget generation; preview in the browser and keep the implementation simple.

## shadcn/ui And Charts

This template includes shadcn/ui configuration plus `button`, `card`, and `chart` components. The chart primitive is generated from shadcn/ui and uses Recharts.

The shadcn CLI is intentionally not pinned in `package.json`; use `npx shadcn@latest` so agents fetch the current registry CLI when adding source components.

Add more components with:

```bash
npx shadcn@latest add <component>
```

Typical chart imports:

```tsx
import { Bar, BarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
```

Use `ChartContainer` with a fixed height, `min-h-*`, or `aspect-*` class so Recharts can measure correctly.

## Project Skills

Repo-scoped Codex skills live in `.agents/skills`. This is intentional: Codex scans `.agents/skills` for project-specific skills, while user-wide skills live under `~/.codex/skills`.

Included skills:

- `find-skills` from skills.sh tooling
- `shadcn` from shadcn/ui
- `playwright-cli` from Microsoft Playwright

Refresh commands:

```bash
npx -y skills add vercel-labs/skills --skill find-skills --agent codex --copy
npx -y skills add shadcn/ui --skill shadcn --agent codex --copy
npx -y skills add https://github.com/microsoft/playwright/tree/main/packages/playwright-core/src/tools/cli-client/skill --agent codex --copy
```

## Handoff Check

Before handing off a generated widget:

```bash
npm start
```

Wait for the first successful build, preview the dev URL, then stop the process when finished. Confirm the production output:

```bash
find dist -maxdepth 2 -type f
```

The final command should show only `dist/index.html`.

References: [OpenAI Codex skills docs](https://developers.openai.com/codex/skills), [OpenAI AGENTS.md docs](https://developers.openai.com/codex/guides/agents-md), and [skills.sh CLI docs](https://skills.sh/docs/cli).
