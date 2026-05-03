# Agent Instructions

This repository is a sandbox for generating one small iframe-ready widget. It is not a full app starter.

- Run `npm start` as the only normal workflow command. It starts the Vite dev server for Playwright/browser preview and watches a production single-file build.
- Build the widget from `src/App.tsx`; add small reusable pieces under `src/components` only when they keep the widget simpler.
- Keep the output route-free and iframe-safe. Do not add React Router, app shells, page routing, auth flows, backend assumptions, navigation systems, or full-page redirects.
- Keep implementation simple. No tests are required unless the user explicitly asks for them.
- Production output must stay self-contained in `dist/index.html`. Do not add `public/` assets or runtime fetches for local files, locale JSON, images, or config.
- Default to shadcn/ui for the widget UI. Use existing shadcn source components first, compose them before writing custom markup, and use semantic shadcn/Tailwind tokens for styling.
- Use the repo-scoped `shadcn` skill for component choices, styling guidance, chart helpers, and component CLI usage. Add more components with `npx shadcn@latest add <component>`.
- Use `src/components/ui/chart.tsx` for Recharts helpers instead of building chart wrappers from scratch.
- Use the repo-scoped `playwright-cli` skill for browser preview and visual inspection after meaningful UI changes.
- Before handoff, preview in the browser and verify `dist/` contains only `index.html`.

read @README.md file
