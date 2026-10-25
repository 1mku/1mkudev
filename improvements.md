# Improvements Plan

## 🔴 High Priority (bugs & security)

1. **`pnpm-workspace.yaml` placeholder values**
   - `allowBuilds` entries contain strings `"set this to true or false"` instead of booleans.
   - **Fix:** Set actual `true`/`false` values or remove the entries.

## 🟡 Medium Priority (code quality & content)

2. **Placeholder content** — `projects/etl-group.md` & `projects/smart-chem.md`
   - Both contain boilerplate "Hi there!" text. Needs real portfolio content.

3. **`PostCard.astro` unused CSS**
   - Defines `.card` class styles but template uses `.link-card`. Dead code.
   - **Fix:** Remove unused styles or align class names.

4. **`Card.astro` / `PostCard.astro` style duplication**
   - Both define identical `.card` styles (~15 lines each).
   - **Fix:** Extract shared styles or refactor `PostCard` to use `Card` component.

5. **Unused PostCSS dependencies**
   - `@tailwindcss/postcss`, `autoprefixer`, `postcss` in `devDependencies` — unused with Tailwind v4 Vite plugin.
   - **Fix:** Remove from `package.json`.

6. **`PostCard` uses `any` type** — `src/pages/projects/index.astro:14`
   - `projects.map((p: any) => ...)` bypasses content collection schema.
   - **Fix:** Use proper type from `astro:content`.

7. **`.prettierignore` too restrictive**
    - Ignores everything except `src/` and a few dotfiles. `astro.config.mjs`, `.env.example`, `pnpm-workspace.yaml` excluded.
    - **Fix:** Broaden scope or remove file to use defaults.

## 🟢 Lower Priority (enhancements & new features)

8. **OG / social share meta tags**
    - No Open Graph or Twitter Card tags in `BaseLayout.astro`.
    - **Fix:** Add `og:title`, `og:description`, `og:image`, `twitter:card` meta tags.

9. **Sitemap generation**
    - **Fix:** Add `@astrojs/sitemap` integration.

10. **No 404 page**
    - **Fix:** Add `src/pages/404.astro` with custom error content.

11. **Vite major upgrade** — `vite 7.3.3 → 8.0.16`
    - Breaking changes. Needs careful testing.

12. **Duplicate favicon link** — `BaseLayout.astro:15` & `:18`
    - Both link `/favicon/favicon.ico`. Line 15 should use `.svg` favicon instead.

13. **Analytics consolidation**
    - 3 services: GTM, GA (via GTM), PostHog. Evaluate if all are needed.

14. **Marquee triple-render DOM bloat**
    - Skills.astro (15 icons) × 3 renders = 45 DOM nodes. Acceptable now but worth noting for future.

15. **Responsive typography on `html` font-size**
    - Root `font-size` changes 12→20px across breakpoints, cascading into all `rem` values.
    - **Fix:** Use a typographic scale on text elements instead.

16. **CSS variables duplication**
    - Design tokens defined in `BaseLayout.astro` `<style is:global>`, duplicated across components.
    - **Fix:** Move all tokens to a single `tokens.css`.

17. **CI/CD pipeline**
    - No CI at all. GitHub Actions for lint/typecheck on PRs would prevent regressions.

18. **Image optimization**
    - No `@astrojs/image` integration. Project images won't be optimized.
