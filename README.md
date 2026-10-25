# 1mku.dev

## Analytics

Copy `.env.example` to `.env`. `PUBLIC_` values are inlined at build time, so set the same variables in Cloudflare Pages.

**Google Tag Manager.** Set `PUBLIC_GTM_ID` to the container ID (for example `GTM-XXXX`). The snippet is omitted when the variable is empty.

**PostHog.** Set all three or it does not initialize. It runs in production builds only.

| Variable | Example |
| --- | --- |
| `PUBLIC_POSTHOG_KEY` | Project API key (`phc_...`) |
| `PUBLIC_POSTHOG_HOST` | `https://us.i.posthog.com` |
| `PUBLIC_POSTHOG_DEFAULTS` | `2026-05-30` |