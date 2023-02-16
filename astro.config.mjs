import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.milespernicious.com',
	integrations: [
		mdx(),
		sitemap(),
	],
	publicDir: "./assets",
	vite: {
		define: {
			APP_VERSION: JSON.stringify(process.env.npm_package_version),
		},
	},
});
