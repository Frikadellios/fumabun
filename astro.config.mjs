import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite'
// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    site: 'https://fumabun.vercel.app',
    integrations: [react(), sitemap()]
});
