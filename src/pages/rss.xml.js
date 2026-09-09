import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
    return rss({
        // `<title>` field in output xml
        title: 'Brandon’s Blog',
        // `<description>` field in output xml
        description: 'My personal blog.',
        // base URL for RSS <item> links
        // SITE will use "site" from your project's astro.config.
        site: import.meta.env.SITE,
        // list of `<item>`s in output xml
        // simple example: generate items for every md file in /src/pages
        // see "Generating items" section for required frontmatter and advanced use cases
        // `_`-prefixed files are drafts: they do not build a page, so keep them out of the feed
        items: await pagesGlobToRssItems(
            import.meta.glob(['./blog/**/*.mdx', '!**/_*']),
        ),
        // (optional) inject custom xml
        customData: `<language>en-us</language>`,
    });
}
