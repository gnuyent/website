import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://gnuyent.dev/',
    markdown: {
        drafts: true,
    },
    integrations: [
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
        mdx({
            drafts: true,
        }),
        sitemap(),
    ],
});
