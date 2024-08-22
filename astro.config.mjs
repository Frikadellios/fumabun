import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";
import mdx from '@astrojs/mdx'
import AutoImport from 'unplugin-auto-import/astro'
import { baseLocale, locales } from './src/i18n/config'
import { remarkReadingTime } from './src/utils/readTime'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true
  },
  site: 'https://fumabun.vercel.app',
  integrations: [
    AutoImport({
        defaultExportByFilename: false,
        include: [
            /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
        ],
        packagePresets: ['detect-browser-es'],
        imports: ['react', 'react-router'],
        dirs: ['./src/utils/*.ts', './src/hooks'],
        dts: './src/auto-imports.d.ts'
    }),
    mdx({
        syntaxHighlight: 'shiki',
        shikiConfig: {
            theme: 'github-dark-dimmed',
            wrap: true
        },
        gfm: true
    }),
    sitemap({
        entryLimit: 10000,
        i18n: {
            filter: (page) => page !== `${SITE}/admin`,
            defaultLocale: baseLocale,
            locales: locales
        }
    }),
    robotsTxt({
        sitemap: 'https://www.fumabun.vercel.app/sitemap-0.xml',
        host: 'fumabun.vercel.app'
        }),
    partytown({
        config: {
            forward: ['dataLayer.push'],
            debug: false
        }
    }),
    react()],
    i18n: {
		defaultLocale: baseLocale,
		locales: locales,
		routing: {
			prefixDefaultLocale: true
		}
	},
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					content: { type: 'text', value: ' 🔗' },
					target: '_blank',
					rel: ['nofollow', 'noreferrer']
				}
			]
		],
		remarkPlugins: [remarkReadingTime],
		shikiConfig: {
			theme: 'github-dark-dimmed',
			wrap: true
		},
		gfm: true
	}
});
