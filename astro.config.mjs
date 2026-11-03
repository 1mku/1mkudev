import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://1mku.dev',
    integrations: [
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
        sitemap(),
    ],
    vite: { plugins: [tailwindcss()] },
});
