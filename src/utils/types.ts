import type { MarkdownLayoutProps } from 'astro';

export type FrontmatterProps = MarkdownLayoutProps<{
    // Define frontmatter props here
    title: string;
    subtitle: string;
    pubDate: string;
    editDate?: string;
    tags: string[];
}>;
